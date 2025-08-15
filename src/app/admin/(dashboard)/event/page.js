'use client'

import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {
  useEventDeleteMutation,
  useEventDisplayQuery,
  useEventInsertMutation,
  useEventUpdateMutation
} from '../../../../../redux/features/event/eventApi'
import EditEventModal from '@/component/EditEventModel'

export default function Event() {
  const [formData, setFormData] = useState({ title: '', description: '', image: null })
  const [preview, setPreview] = useState(null)
  const [editId, setEditId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data, isLoading } = useEventDisplayQuery()
  const events = data || []

  const [eventInsert] = useEventInsertMutation()
  const [eventUpdate] = useEventUpdateMutation()
  const [eventDelete] = useEventDeleteMutation()

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'image') {
      const file = files[0]
      setFormData((prev) => ({ ...prev, image: file }))
      setPreview(file ? URL.createObjectURL(file) : null)
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const resetForm = () => {
    setFormData({ title: '', description: '', image: null })
    setPreview(null)
    setEditId(null)
    setIsModalOpen(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = new FormData()
    payload.append('title', formData.title)
    payload.append('description', formData.description)
    if (formData.image) payload.append('image', formData.image)

    try {
      if (editId) {
        await eventUpdate({ id: editId, formData: payload }).unwrap()
        toast.success('Event updated successfully')
      } else {
        await eventInsert(payload).unwrap()
        toast.success('Event added successfully')
      }
      resetForm()
    } catch (err) {
      toast.error(err?.data?.message || 'Something went wrong')
    }
  }

  const handleEdit = (event) => {
    setFormData({
      title: event.title,
      description: event.description,
      image: null
    })
    setPreview(event.image?.url || '')
    setEditId(event._id)
    setIsModalOpen(true)
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this event?')) return
    try {
      await eventDelete(id).unwrap()
      toast.success('Event deleted successfully')
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to delete event')
    }
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 text-black min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">📌 Event Details</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
        >
          + Add Event
        </button>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200 rounded shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Image</th>
                <th className="p-3">Title</th>
                <th className="p-3">Description</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={event._id} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-medium">{index + 1}</td>
                  <td className="p-3">
                    <img
                      src={event.image?.url || '/no-image.png'}
                      alt={event.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="p-3">{event.title}</td>
                  <td className="p-3">{event.description}</td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => handleEdit(event)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <EditEventModal
        isOpen={isModalOpen}
        closeModal={resetForm}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        preview={preview}
      />
    </div>
  )
}
