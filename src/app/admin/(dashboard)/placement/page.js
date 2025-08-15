'use client'

import React, { useState } from 'react'
import toast from 'react-hot-toast'
import EditPlacementModal from '@/component/EditPlacementModel'
import {
  usePlacementDeleteMutation,
  usePlacementDisplayQuery,
  usePlacementInsertMutation,
  usePlacementUpdateMutation
} from '../../../../../redux/features/placement/placementApi'

export default function Placement() {
  const [formData, setFormData] = useState({ name: '', position: '', image: null })
  const [preview, setPreview] = useState(null)
  const [editId, setEditId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data: placements = [], isLoading } = usePlacementDisplayQuery()
  const [insert] = usePlacementInsertMutation()
  const [update] = usePlacementUpdateMutation()
  const [remove] = usePlacementDeleteMutation()

  const handleChange = e => {
    const { name, files, value } = e.target
    if (name === 'image') {
      const file = files[0]
      setFormData(f => ({ ...f, image: file }))
      setPreview(URL.createObjectURL(file))
    } else {
      setFormData(f => ({ ...f, [name]: value }))
    }
  }

  const resetForm = () => {
    setFormData({ name: '', position: '', image: null })
    setPreview(null)
    setEditId(null)
    setIsModalOpen(false)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const payload = new FormData()
    payload.append('name', formData.name)
    payload.append('position', formData.position)
    if (formData.image) payload.append('image', formData.image)

    try {
      if (editId) {
        await update({ id: editId, formData: payload }).unwrap()
        toast.success('Placement member updated')
      } else {
        await insert(payload).unwrap()
        toast.success('Placement member added')
      }
      resetForm()
    } catch {
      toast.error('Something went wrong')
    }
  }

  const handleEdit = m => {
    setFormData({ name: m.name, position: m.position, image: null })
    setPreview(m.image?.url || '')
    setEditId(m._id)
    setIsModalOpen(true)
  }

  const handleDelete = async id => {
    if (confirm('Are you sure?')) {
      try {
        await remove(id).unwrap()
        toast.success('Deleted successfully')
      } catch {
        toast.error('Failed to delete')
      }
    }
  }

  return (
    <div className="p-4 bg-gray-100 text-black min-h-screen">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">🎓 Placement Management</h2>
        <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          + Add Member
        </button>
      </div>

      {isLoading ? <p>Loading...</p> : (
        <table className="w-full text-left border border-gray-200 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Position</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {placements.map((m, i) => (
              <tr key={m._id} className="border-t hover:bg-gray-50">
                <td className="p-3">{i + 1}</td>
                <td className="p-3">
                  <img src={m.image?.url || '#'} alt={m.name} className="w-12 h-12 object-cover rounded-full" />
                </td>
                <td className="p-3">{m.name}</td>
                <td className="p-3">{m.position}</td>
                <td className="p-3 space-x-2">
                  <button onClick={() => handleEdit(m)} className="bg-yellow-400 px-3 py-1 rounded text-white">Edit</button>
                  <button onClick={() => handleDelete(m._id)} className="bg-red-500 px-3 py-1 rounded text-white">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <EditPlacementModal
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
