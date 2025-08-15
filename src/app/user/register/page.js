'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { toast } from 'react-hot-toast';
import { useRegisterUserMutation } from '../../../../redux/features/userAuth/userAuthApi';

export default function UserRegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const router = useRouter();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitted) return;
    setIsSubmitted(true);

    try {
      const res = await registerUser(form).unwrap();
      if (res.success) {
        toast.success(res.message || 'Registration successful!');
        setTimeout(() => router.push('/user/login'), 1000);
      } else {
        toast.error(res.message || 'Registration failed');
      }
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
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/register.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay (optional for readability) */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20"
      >
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2}>
          <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/30">
            <h2 className="text-3xl font-bold text-white text-center mb-6">📝 User Register</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                name="name"
                placeholder="Name"
                onChange={handleChange}
                className="border p-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="border p-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                className="border p-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitted || isLoading}
                className="bg-gradient-to-r from-green-600 to-teal-600 text-white w-full py-3 rounded-lg"
              >
                {isLoading ? 'Registering...' : 'Register'}
              </motion.button>
            </form>
            <div className="mt-4 text-center text-white">
              <button onClick={() => router.push('/user/login')} className="hover:underline">
                Back to Login
              </button>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
}
