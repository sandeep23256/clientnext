'use client';

import React from 'react'

export default function EditPortModal({
    isOpen,
    closeModal,
    formData,
    handleChange,
    handleSubmit,
    preview,
}) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 bg-gray-900/30 backdrop-blur-sm flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-md rounded shadow-lg p-6 relative">
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {formData._id ? 'Edit Technology' : 'Add Technology'}
                    </h2>
                    <button
                        onClick={closeModal}
                        className="text-gray-500 hover:text-gray-800 text-xl font-bold"
                    >
                        &times;
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Url</label>
                        <textarea
                            name="url"
                            value={formData.url}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 resize-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Image</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-3 py-2 rounded bg-gray-50"
                        />
                    </div>

                    {preview && (
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Preview:</p>
                            <img
                                src={preview}
                                alt="Preview"
                                className="h-32 rounded border object-contain"
                            />
                        </div>
                    )}

                    <div className="flex justify-end gap-2 pt-4">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                        >
                            {formData._id ? 'Update' : 'Add'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
