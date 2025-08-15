'use client';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { toast } from 'react-hot-toast';
import { useLoginAdminMutation } from '../../../../redux/features/adminAuth/adminAuthApi';
import { setAdmin } from '../../../../redux/features/adminAuth/adminAuthSlice';

export default function AdminLoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loginAdmin, { isLoading }] = useLoginAdminMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitted) return;
    setIsSubmitted(true);

    try {
      const res = await loginAdmin(form).unwrap();
      dispatch(setAdmin(res.user));
      toast.success('Login successful!');
      setTimeout(() => router.push('/admin/dashboard'), 1000);
    } catch (err) {
      toast.error(err?.data?.message || 'Login failed');
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
        <source src="/login.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Login Form */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2}>
          <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/30">
            <h2 className="text-3xl font-bold text-white text-center mb-6">🛠 Admin Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                name="email"
                placeholder="Email"
                type="email"
                onChange={handleChange}
                className="border p-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                className="border p-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white w-full py-3 rounded-lg"
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </motion.button>
            </form>
            <div className="mt-4 flex justify-between text-sm text-white">
              <button onClick={() => router.push('/')} className="hover:underline">
                Go to User Login
              </button>
              <button onClick={() => router.push('/admin/register')} className="hover:underline">
                Register as Admin
              </button>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
}
