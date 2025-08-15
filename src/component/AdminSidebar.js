"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/admin/dashboard" },
  { name: "Slider", path: "/admin/slider" },
  { name: "Technology", path: "/admin/technology" },
  { name: "Portfolio", path: "/admin/portfolio" },
  { name: "Event", path: "/admin/event" },
  { name: "Team", path: "/admin/team" },
  { name: "Placement", path: "/admin/placement" },
  { name: "Contact", path: "/admin/contact" },
  { name: "Users", path: "/admin/settings" },
];

export default function AdminSidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden sm:block fixed top-0 left-0 w-64 h-screen bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 text-white p-4 shadow-lg">
        <h2 className="text-xl font-bold mb-6">Admin Menu</h2>
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="p-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ type: "spring", stiffness: 70 }}
            className="sm:hidden fixed top-0 left-0 w-64 h-screen bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 text-white p-4 z-50 shadow-lg"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Menu</h2>
              <button onClick={onClose}>
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col space-y-2 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="p-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
