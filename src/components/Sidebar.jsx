import React from "react";
import { useSidebar } from "../context/SidebarContext";
import { useNavigate } from "react-router-dom";
import {
    Settings,
    ClipboardList,
    ChevronDown,
    ArrowLeft,
    ArrowRight
} from "lucide-react";

const Sidebar = () => {
    const { isExpanded, toggleSidebar } = useSidebar();
    const navigate = useNavigate();

    const menuItems = [
        {
            id: 2,
            label: "Quản lý dịch vụ",
            icon: <Settings size={20} />,
            hasSub: true,
            path: "/servicepage"
        },
        {
            id: 4,
            label: "Quản lý đơn hàng",
            icon: <ClipboardList size={20} />,
            hasSub: true,
            path: "/orderpage"
        },
    ];


    return (
        <aside
            className={`fixed left-0 z-40 transition-all duration-300 border-r bg-white
        ${isExpanded ? "w-64" : "w-16"} 
        top-20 h-[calc(100vh-5rem)]`}
        >
            <div className="flex flex-col h-full">

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
                                onClick={() => navigate(item.path)}
                                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all group 
                  text-gray-700 hover:bg-gray-100`}
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

                                {/* {isExpanded && item.hasSub && (
                                    <ChevronDown size={14} className="text-gray-400 group-hover:text-gray-600" />
                                )} */}
                            </div>
                        </div>
                    ))}
                </nav>

            </div>
        </aside>
    );
};

export default Sidebar;
// import React from "react";
// import { useSidebar } from "../context/SidebarContext";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//     Settings,
//     ClipboardList,
//     ChevronDown,
//     ArrowLeft,
//     ArrowRight,
//     LayoutGrid,
//     User
// } from "lucide-react";

// const Sidebar = () => {
//     const { isExpanded, toggleSidebar } = useSidebar();
//     const navigate = useNavigate();
//     const location = useLocation();

//     // Lấy role từ localStorage
//     const role = localStorage.getItem('role');

//     // Cấu hình menu cho Admin
//     const adminMenu = [

//         {
//             id: 2,
//             label: "Quản lý dịch vụ",
//             icon: <Settings size={20} />,
//             hasSub: true,
//             path: "/servicepage"
//         },
//         {
//             id: 3,
//             label: "Quản lý đơn hàng",
//             icon: <ClipboardList size={20} />,
//             hasSub: true,
//             path: "/orderpage"
//         },
//     ];

//     // Cấu hình menu cho Customer
//     const customerMenu = [
//         {
//             id: 1,
//             label: "Đơn hàng",
//             icon: <LayoutGrid size={20} />,
//             path: "/cusorderpage"
//         },
//         // {
//         //     id: 2,
//         //     label: "Đơn hàng của tôi",
//         //     icon: <ClipboardList size={20} />,
//         //     path: "/Customer/CusOrderPage"
//         // },
//         // {
//         //     id: 3,
//         //     label: "Hồ sơ cá nhân",
//         //     icon: <User size={20} />,
//         //     path: "/customer/profile"
//         // },
//     ];

//     // Quyết định hiển thị menu nào dựa trên role
//     const menuItems = role === 'admin' ? adminMenu : customerMenu;

//     return (
//         <aside
//             className={`fixed left-0 z-40 transition-all duration-300 border-r bg-white
//         ${isExpanded ? "w-64" : "w-16"}
//         top-20 h-[calc(100vh-5rem)]`}
//         >
//             <div className="flex flex-col h-full">
//                 {/* Toggle Button */}
//                 <div className="p-4 flex justify-end">
//                     <button
//                         onClick={toggleSidebar}
//                         className="p-1.5 mt-4 rounded-md border border-gray-200 bg-white hover:bg-gray-100 text-gray-500 shadow-sm"
//                     >
//                         {isExpanded ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
//                     </button>
//                 </div>

//                 {/* Navigation Menu */}
//                 <nav className="flex-1 px-3 space-y-1">
//                     {menuItems.map((item) => {
//                         const isActive = location.pathname === item.path;

//                         return (
//                             <div key={item.id}>
//                                 <div
//                                     onClick={() => navigate(item.path)}
//                                     className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all group
//                                     ${isActive
//                                             ? "bg-blue-50 text-blue-700 font-semibold"
//                                             : "text-gray-700 hover:bg-gray-100"}`}
//                                 >
//                                     <div className="flex items-center">
//                                         <span className={`flex items-center justify-center ${isExpanded ? "min-w-[30px]" : "w-full"}`}>
//                                             {item.icon}
//                                         </span>

//                                         {isExpanded && (
//                                             <span className="ml-3 text-[14px] font-medium whitespace-nowrap">
//                                                 {item.label}
//                                             </span>
//                                         )}
//                                     </div>

//                                     {isExpanded && item.hasSub && (
//                                         <ChevronDown size={14} className={isActive ? "text-blue-600" : "text-gray-400"} />
//                                     )}
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </nav>
//             </div>
//         </aside>
//     );
// };

// export default Sidebar;