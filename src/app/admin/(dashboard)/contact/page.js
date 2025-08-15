'use client'

import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'
import { useContactDeleteMutation, useContactDisplayQuery } from '../../../../../redux/features/contact/contactApi'

export default function Contact() {
  const { data, isLoading } = useContactDisplayQuery()
  const contacts = data || []

  const [contactDelete] = useContactDeleteMutation()
  const [selectedContact, setSelectedContact] = useState(null)

  const handleDelete = async (id) => {
    if (confirm('Delete this contact?')) {
      try {
        await contactDelete(id).unwrap()
        toast.success('Deleted successfully')
      } catch {
        toast.error('Delete failed')
      }
    }
  }

  const closeModal = () => setSelectedContact(null)

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen text-gray-800">
      <h2 className="text-3xl font-extrabold mb-6 flex items-center gap-2">
        📨 Contact Messages
      </h2>

      {isLoading ? (
        <p className="animate-pulse">Loading...</p>
      ) : contacts.length === 0 ? (
        <p>No contact entries found.</p>
      ) : (
        <div className="overflow-x-auto">
          <motion.table
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full border bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <thead className="bg-gradient-to-r from-gray-200 to-gray-300 text-left">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <motion.tr
                  key={contact._id}
                  className="border-t hover:bg-gray-50 transition"
                  whileHover={{ scale: 1.01 }}
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 font-medium">{contact.name}</td>
                  <td className="p-3">{contact.email}</td>
                  <td className="p-3 space-x-2">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedContact(contact)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded shadow"
                    >
                      View
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDelete(contact._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded shadow"
                    >
                      Delete
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      )}

      {/* Animated Modal */}
      <AnimatePresence>
        {selectedContact && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-2xl w-full max-w-md p-6 relative"
            >
              <h3 className="text-2xl font-bold mb-4">👁️ View Contact</h3>
              <p className="mb-2"><strong>Name:</strong> {selectedContact.name}</p>
              <p className="mb-2"><strong>Email:</strong> {selectedContact.email}</p>
              <p className="mb-4"><strong>Message:</strong> {selectedContact.message}</p>
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
