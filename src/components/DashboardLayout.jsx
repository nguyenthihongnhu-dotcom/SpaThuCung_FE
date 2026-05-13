

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router-dom";

export default function DashboardLayout({ children }) {
    const { isExpanded } = useSidebar();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header: Fixed top, full width, z-index cao để đè lên Sidebar nếu cần */}
            <Header />

            <div className="flex">
                {/* Sidebar: Fixed hoặc Sticky bên trái */}
                <Sidebar />

                {/* Nội dung chính: Đẩy lề trái dựa trên trạng thái Sidebar và lề trên theo Header */}
                <main
                    className={`flex-1 min-w-0 transition-all duration-300 min-h-screen p-8
                        ${isExpanded ? "md:ml-64" : "md:ml-20"}`}
                    style={{ paddingTop: '80px' }} // Đồng bộ với Header h-20 (80px)
                >
                    <div className="max-w-7xl mx-auto">
                        {children || <Outlet />}
                    </div>
                </main>
            </div>
        </div>
    )
}