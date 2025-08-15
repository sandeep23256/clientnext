'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { toast } from 'react-hot-toast';
import { useRegisterAdminMutation } from '../../../../redux/features/adminAuth/adminAuthApi';

export default function AdminRegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registerAdmin, { isLoading }] = useRegisterAdminMutation();
  const router = useRouter();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitted) return;
    setIsSubmitted(true);

    try {
      await registerAdmin(form).unwrap();
      toast.success('Registration successful!');
      setTimeout(() => router.push('/admin/login'), 1000);
    } catch (err) {
      toast.error(err?.data?.message || 'Registration failed');
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/register.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Registration Form */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2}>
          <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/30">
            <h2 className="text-3xl font-bold text-white text-center mb-6">🛠 Admin Register</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="border p-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-red-500"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="border p-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-red-500"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                className="border p-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-red-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white w-full py-3 rounded-lg"
              >
                {isLoading ? 'Registering...' : 'Register'}
              </motion.button>
            </form>
            <div className="mt-4 text-center text-white">
              <button onClick={() => router.push('/admin/login')} className="hover:underline">
                Back to Admin Login
              </button>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
}
