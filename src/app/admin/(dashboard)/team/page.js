'use client'

import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useTeamDeleteMutation, useTeamDisplayQuery, useTeamInsertMutation, useTeamUpdateMutation } from '../../../../../redux/features/team/teamApi'
import EditTeamModal from '@/component/EditTeamModel'


export default function Team() {
  const [formData, setFormData] = useState({ name: '', position: '', image: null })
  const [preview, setPreview] = useState(null)
  const [editId, setEditId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data, isLoading } = useTeamDisplayQuery()
  const teams = data || []

  const [teamInsert] = useTeamInsertMutation()
  const [teamUpdate] = useTeamUpdateMutation()
  const [teamDelete] = useTeamDeleteMutation()

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      const file = e.target.files[0]
      setFormData({ ...formData, image: file })
      setPreview(URL.createObjectURL(file))
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }

  const resetForm = () => {
    setFormData({ name: '', position: '', image: null })
    setPreview(null)
    setEditId(null)
    setIsModalOpen(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('name', formData.name)
    data.append('position', formData.position)
    if (formData.image) data.append('image', formData.image)

    try {
      if (editId) {
        await teamUpdate({ id: editId, formData: data }).unwrap()
        toast.success('Team member updated')
      } else {
        await teamInsert(data).unwrap()
        toast.success('Team member added')
      }
      resetForm()
    } catch (err) {
      toast.error('Something went wrong')
    }
  }

  const handleEdit = (member) => {
    setFormData({ name: member.name, position: member.position, image: null })
    setPreview(member.image?.url || '')
    setEditId(member._id)
    setIsModalOpen(true)
  }

  const handleDelete = async (id) => {
    if (confirm('Are you sure?')) {
      try {
        await teamDelete(id).unwrap()
        toast.success('Deleted successfully')
      } catch (err) {
        toast.error('Failed to delete')
      }
    }
  }

  return (
    <div className="p-4 bg-gray-100 text-black min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">👨‍💼 Team Management</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Member
        </button>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full text-left border border-gray-200 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">position</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teams?.map((member, index) => (
              <tr key={member._id} className="border-t hover:bg-gray-50">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">
                  <img
                    src={member.image?.url || '#'}
                    alt={member.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </td>
                <td className="p-3">{member.name}</td>
                <td className="p-3">{member.position}</td>
                <td className="p-3 space-x-2">
                  <button onClick={() => handleEdit(member)} className="bg-yellow-400 px-3 py-1 rounded text-white">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(member._id)} className="bg-red-500 px-3 py-1 rounded text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <EditTeamModal
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
