import React from "react";
import { useSidebar } from "../context/SidebarContext";
import {
    LayoutGrid,
    Settings,
    Users,
    ClipboardList,
    ChevronDown,
    ChevronRight,
    ArrowLeft,
    ArrowRight
} from "lucide-react";

const Sidebar = () => {
    const { isExpanded, toggleSidebar } = useSidebar();

    // Khai báo mảng menu để code gọn hơn và dễ quản lý
    const menuItems = [
        { id: 2, label: "Quản lý dịch vụ", icon: <Settings size={20} />, hasSub: true },

        { id: 4, label: "Quản lý đơn hàng", icon: <ClipboardList size={20} />, hasSub: true },
    ];

    return (
        <aside
            className={`fixed left-0 z-40 transition-all duration-300 border-r bg-white
        ${isExpanded ? "w-64" : "w-16"} 
        top-16 h-[calc(100vh-4rem)]`}
        >
            <div className="flex flex-col h-full">
                {/* Nút đóng/mở sidebar tinh tế hơn */}
                <div className="p-4 flex justify-end">
                    <button
                        onClick={toggleSidebar}
                        className="p-1.5 mt-4 rounded-md border border-gray-200 bg-white hover:bg-gray-100 text-gray-500 shadow-sm"
                    >
                        {isExpanded ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                    </button>
                </div>

                <nav className="flex-1 px-3 space-y-1">
                    {menuItems.map((item) => (
                        <div key={item.id}>
                            <div
                                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all group ${item.active
                                    ? "bg-gray-200 text-blue-700"
                                    : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                <div className="flex items-center">
                                    <span className={`flex items-center justify-center ${isExpanded ? "min-w-[30px]" : "w-full"}`}>
                                        {item.icon}
                                    </span>
                                    {isExpanded && (
                                        <span className="ml-3 text-[14px] font-medium whitespace-nowrap">
                                            {item.label}
                                        </span>
                                    )}
                                </div>

                                {isExpanded && item.hasSub && (
                                    <ChevronDown size={14} className="text-gray-400 group-hover:text-gray-600" />
                                )}

                                {isExpanded && item.id === 1 && (
                                    <span className="bg-gray-300 text-gray-600 px-2 py-0.5 rounded-full text-[10px] font-bold">
                                        0
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </nav>


            </div>
        </aside>
    );
};

export default Sidebar;