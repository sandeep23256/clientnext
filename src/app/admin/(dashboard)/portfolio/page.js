'use client'

import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {
  usePortfolioDeleteMutation,
  usePortfolioDisplayQuery,
  usePortfolioInsertMutation,
  usePortfolioUpdateMutation
} from '../../../../../redux/features/portfolio/portfolioApi'
import EditPortModal from '@/component/EditPortModel'

export default function Portfolio() {
  const initialState = { title: '', url: '', image: null }
  const [formData, setFormData] = useState(initialState)
  const [preview, setPreview] = useState(null)
  const [editId, setEditId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data: ports = [], isLoading } = usePortfolioDisplayQuery()
  const [insertPortfolio] = usePortfolioInsertMutation()
  const [updatePortfolio] = usePortfolioUpdateMutation()
  const [deletePortfolio] = usePortfolioDeleteMutation()

  const handleChange = (e) => {
    const { name, files, value } = e.target
    if (name === 'image') {
      const file = files[0]
      setFormData({ ...formData, image: file })
      setPreview(URL.createObjectURL(file))
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const resetForm = () => {
    setFormData(initialState)
    setPreview(null)
    setEditId(null)
    setIsModalOpen(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = new FormData()
    payload.append('title', formData.title)
    payload.append('url', formData.url)
    if (formData.image) payload.append('image', formData.image)

    try {
      if (editId) {
        await updatePortfolio({ id: editId, formData: payload }).unwrap()
        toast.success('Portfolio updated')
      } else {
        await insertPortfolio(payload).unwrap()
        toast.success('Portfolio added')
      }
      resetForm()
    } catch {
      toast.error('Something went wrong')
    }
  }

  const handleEdit = (item) => {
    setFormData({ title: item.title, url: item.url, image: null })
    setPreview(item.image?.url || '')
    setEditId(item._id)
    setIsModalOpen(true)
  }

  const handleDelete = async (id) => {
    if (confirm('Are you sure?')) {
      try {
        await deletePortfolio(id).unwrap()
        toast.success('Deleted successfully')
      } catch {
        toast.error('Failed to delete')
      }
    }
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 text-black min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">🎨 Manage Portfolio</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Portfolio
        </button>
      </div>

      {/* Table */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                {['#', 'Image', 'Title', 'URL', 'Actions'].map((h) => (
                  <th key={h} className="p-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ports.map((item, index) => (
                <tr key={item._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">
                    <img
                      src={item.image?.url || '#'}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">{item.url}</td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
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

      {/* Modal */}
      <EditPortModal
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
