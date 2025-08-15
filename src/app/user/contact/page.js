'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useContactInsertMutation } from '../../../../redux/features/contact/contactApi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [submitContact] = useContactInsertMutation()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await submitContact(formData).unwrap()
      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      toast.error('Submission failed!')
    }
  }
  return (
    <main className='mt-35'>
      {/* Header Section */}
      <section>
        <div className="relative">
          <div
            className="bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-white text-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dow1049t2/image/upload/v1728743695/PN_INFOSYS/unnamed_qzboly.png')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <img
              src="https://res.cloudinary.com/dow1049t2/image/upload/v1728743507/PN_INFOSYS/page-heading-bg_i9miyf.png"
              alt="Foreground"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 space-y-4 px-4">
              <h1 className="text-4xl md:text-5xl font-bold">Say Hello To Us!</h1>
              <p className="text-sm md:text-base text-gray-300">
                <a className="text-white font-medium" href="/">Home</a> / Contact Us
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="p-10 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
            {/* Card 1 */}
            <div className="rounded-xl overflow-hidden shadow-lg bg-white transition duration-500 text-center p-6">
              <div className="flex justify-center items-center overflow-hidden">
                <div className="transition-transform duration-500 hover:scale-110 w-1/2">
                  <Image
                    src="/about image/Service1.jpg"
                    alt="Service 1"
                    width={200}
                    height={150}
                    className="w-full h-42 object-contain"
                  />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-4">Email Address</h3>
                <a href="#" className="hover:text-pink-500">www.pninfosys.com</a><br />
                <a href="#" className="hover:text-pink-500">support@pninfosys.com</a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl overflow-hidden shadow-lg bg-white transition duration-500 text-center p-6">
              <div className="flex justify-center items-center overflow-hidden">
                <div className="transition-transform duration-500 hover:scale-110 w-1/2">
                  <Image
                    src="/about image/Service2.jpg"
                    alt="Service 2"
                    width={200}
                    height={150}
                    className="w-full h-42 object-contain"
                  />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-4">Phone Number</h3>
                <a href="#" className="hover:text-pink-500">+91 7000846823</a><br />
                <a href="#" className="hover:text-pink-500">+91 7415289378</a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl overflow-hidden shadow-lg bg-white transition duration-500 text-center p-6">
              <div className="flex justify-center items-center overflow-hidden">
                <div className="transition-transform duration-500 hover:scale-110 w-1/2">
                  <Image
                    src="/about image/Service3.jpg"
                    alt="Service 3"
                    width={200}
                    height={150}
                    className="w-full h-42 object-contain"
                  />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-4">Street Address</h3>
                <a href="#" className="hover:text-pink-500">
                  Darpan Colony, Thatipur,<br />Gwalior, Madhya Pradesh
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-40 pb-20  bg-white text-black">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Form Card */}
          <div className="w-full md:w-1/2 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Say Hello To Us!</h2>
            <hr className="mb-4 border-amber-300" />
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-Mail Address"
                  required
                  className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full md:w-auto bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 py-2 rounded-full transition duration-300"
              >
                Send Message Now
              </button>
            </form>
          </div>

          {/* Info Card */}
          <div className="w-full md:w-1/2 bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">More Info</h2>
              <hr className="mb-4 border-amber-300" />
              <p className="text-gray-600 mb-4">
                <span className="text-blue-600 font-extrabold text-2xl">PN </span>
                <span className="text-gray-900 font-extrabold text-2xl">INFOSYS</span> provides the best service possible to its customers. For us, client satisfaction is top priority. Whatever we do, we ensure it’s done with expertise.
              </p>
              <p className="text-gray-600">
                PN INFOSYS delivers a full range of maintenance and compliance services for both government and commercial establishments—big and small.
              </p>
            </div>
            <div className="mt-6">
              <button className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 py-2 rounded-full transition duration-300">
                Read More..
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
