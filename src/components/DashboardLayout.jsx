// import React from "react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { useSidebar } from "../context/SidebarContext";

// export default function DashboardLayout({ children }) {
//     const { isExpanded } = useSidebar();

//     return (
//         <div className="min-h-screen bg-gray-50 dark:bg-black">
//             <Header /> {/* Header được đặt ở cấp cao nhất, sẽ chiếm toàn bộ chiều rộng và đè lên sidebar */}
//             <Sidebar /> {/* Sidebar được đặt cố định bên trái, bắt đầu từ dưới Header */}

//             <div
//                 className={`transition-all duration-300 min-h-[calc(100vh-5rem)] ${isExpanded ? "md:ml-64" : "md:ml-20"}`}
//                 style={{ marginTop: '5rem' }} // Đẩy nội dung xuống dưới Header (80px = 5rem)
//             >
//                 <main className="p-6 flex-1">
//                     {children}
//                 </main>
//             </div>
//         </div>
//     );
// }

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useSidebar } from "../context/SidebarContext";

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
                    className={`flex-1 transition-all duration-300 min-h-screen p-8
                        ${isExpanded ? "md:ml-64" : "md:ml-20"}`}
                    style={{ paddingTop: '64px' }} // 64px là độ cao trung bình của Header trong hình
                >
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}