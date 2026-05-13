import React, { useState } from 'react';

const CusService = () => {
    // 1. State lưu danh sách dịch vụ hiển thị trên giao diện
    const [services, setServices] = useState([
        { id: 1, name: "Tắm rửa & Massage", price: "200000", start: "2024-01-01", end: "2024-12-31", img: "https://via.placeholder.com/150" },
    ]);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md -mt-10 relative">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-blue-600">Danh Sách Dịch Vụ</h1>
            </div>

            {/* Danh sách dịch vụ hiển thị thực tế */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((item) => (
                    <div key={item.id} className="border rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow bg-gray-50 relative group">
                        <img src={item.img} alt={item.name} className="w-16 h-16 rounded-lg object-cover bg-white border" />
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-800 uppercase text-sm">{item.name}</h3>
                            <p className="text-blue-600 font-bold">{Number(item.price).toLocaleString()} VNĐ</p>
                            <p className="text-[10px] text-gray-500">{item.start} đến {item.end}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CusService;
