'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { toast } from 'react-hot-toast';
import { useLoginUserMutation } from '../../../../redux/features/userAuth/userAuthApi';
import { setUser } from '../../../../redux/features/userAuth/userAuthSlice';

export default function UserLoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitted) return;
    setIsSubmitted(true);

    try {
      const res = await loginUser(form).unwrap();
      const userData = res.data || res.user || res;

      if (!userData) throw new Error('Invalid response from server');
      dispatch(setUser(userData));

      toast.success('Login successful!');

      if (userData.role === 'admin') {
        router.push('/admin/dashboard');
      } else {
        router.push('/user/home');
      }
    } catch (err) {
      toast.error(err?.data?.message || err.message || 'Login failed');
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* 🔴 Background Video */}
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

      {/* 🔵 Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* 🟢 Form Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="z-20"
      >
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable={true}
          glareMaxOpacity={0.2}
        >
          <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/30">
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              🔑 User Login
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                name="email"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="border p-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="border p-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-full py-3 rounded-lg"
                disabled={isLoading || isSubmitted}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </motion.button>
            </form>
            <div className="mt-6 flex justify-between text-sm text-white">
              <button
                onClick={() => router.push('/admin/login')}
                className="hover:underline"
              >
                Go to Admin Login
              </button>
              <button
                onClick={() => router.push('/user/register')}
                className="hover:underline"
              >
                Register as User
              </button>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
}
