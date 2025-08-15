"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminNavbar from "@/component/AdminNavbar";
import AdminSidebar from "@/component/AdminSidebar";
import { useGetAdminProfileQuery } from "../../../../redux/features/adminAuth/adminAuthApi";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { data, error, isLoading } = useGetAdminProfileQuery();

  useEffect(() => {
    if (error) {
      router.push("/admin/login");
    }
    if (data && data.data?.role !== "admin") {
      router.push("/");
    }
  }, [error, data, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-h-screen sm:ml-64">
        <AdminNavbar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-grow p-4">{children}</main>
      </div>
    </div>
  );
}
