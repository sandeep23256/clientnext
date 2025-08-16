"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useLogoutAdminMutation } from "../../redux/features/adminAuth/adminAuthApi";
import { clearAdmin } from "../../redux/features/adminAuth/adminAuthSlice";


export default function AdminNavbar({ onMenuClick }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [logoutAdmin] = useLogoutAdminMutation();

  const handleLogout = async () => {
    try {
      await logoutAdmin().unwrap();
      dispatch(clearAdmin());
      toast.success("Logged out successfully!");
      router.push("/admin/login");
    } catch (err) {
      toast.error(err?.data?.message || "Logout failed");
    }
  };

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg p-4 flex justify-between items-center"
    >
      <div className="flex items-center gap-3">
        {/* Mobile Menu Button */}
        <button className="sm:hidden" onClick={onMenuClick}>
          <Menu size={28} className="text-white" />
        </button>
        <h1 className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg">
          Admin Dashboard
        </h1>
      </div>

      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 text-white px-4 py-2 rounded-xl font-semibold shadow-md hover:bg-red-700 transition-all"
          onClick={handleLogout}
        >
          Logout
        </motion.button>
      </div>
    </motion.div>
  );
}
