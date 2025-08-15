'use client'

import React, { useState } from 'react';

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    college: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form submission logic (e.g., to backend)
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // Example POST request
    fetch('/api/internship-apply', {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        alert('Application submitted successfully!');
      })
      .catch((err) => {
        alert('Error submitting application');
        console.error(err);
      });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white text-black shadow-md rounded-lg mt-45 mb-35">
      <h2 className="text-2xl font-bold mb-4">Internship Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="course"
          type="text"
          placeholder="Course (e.g., BCA, MCA)"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="college"
          type="text"
          placeholder="College Name"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="resume"
          type="file"
          className="w-full p-2 border rounded"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default InternshipForm;
