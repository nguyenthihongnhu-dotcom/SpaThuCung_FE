import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router-dom";

export default function DashboardLayout({ children }) {
    const { isExpanded } = useSidebar();

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="flex">
                <Sidebar />
                <main
                    className={`flex-1 transition-all duration-300 min-h-screen p-8 
                        /* Xóa 'md:' để luôn có lề trái, tránh bị Sidebar che trên mobile */
                        ${isExpanded ? "ml-64" : "ml-20"}`}
                    style={{ paddingTop: '80px' }} // Khớp với h-20 (80px) của Header
                >
                    <div className="max-w-7xl mx-auto">
                        {/* Nếu có children thì hiện children, nếu không thì hiện Outlet của Router */}
                        {children || <Outlet />}
                    </div>
                </main>
            </div>
        </div>
    );
}