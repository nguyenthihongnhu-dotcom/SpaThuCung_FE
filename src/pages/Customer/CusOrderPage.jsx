import React, { useState } from 'react';

const CusOrderPage = () => {
    // Dữ liệu mẫu danh sách đơn hàng của khách hàng
    const [orders, setOrders] = useState([
        { id: "ORD-001", serviceName: "Tắm rửa & Massage", date: "2024-05-15", total: "200000", status: "Chờ xác nhận" },
        { id: "ORD-002", serviceName: "Cắt tỉa lông", date: "2024-05-10", total: "150000", status: "Hoàn thành" },
        { id: "ORD-003", serviceName: "Lưu chuồng", date: "2024-05-01", total: "500000", status: "Đã hủy" },
    ]);

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Chờ xác nhận': return 'bg-yellow-100 text-yellow-800';
            case 'Đang xử lý': return 'bg-blue-100 text-blue-800';
            case 'Hoàn thành': return 'bg-green-100 text-green-800';
            case 'Đã hủy': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md -mt-10 relative">
            <h1 className="text-2xl font-bold text-green-600 mb-6">Đơn Hàng Của Tôi</h1>
            
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mã đơn</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dịch vụ</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày đặt</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tổng tiền</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50">
                                <td className="py-3 px-4 text-sm font-medium text-gray-900">{order.id}</td>
                                <td className="py-3 px-4 text-sm text-gray-700">{order.serviceName}</td>
                                <td className="py-3 px-4 text-sm text-gray-700">{order.date}</td>
                                <td className="py-3 px-4 text-sm font-medium text-gray-900">{Number(order.total).toLocaleString()} VNĐ</td>
                                <td className="py-3 px-4 text-sm">
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusStyle(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        {orders.length === 0 && (
                            <tr>
                                <td colSpan="5" className="py-4 text-center text-gray-500 text-sm">Không có đơn hàng nào</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CusOrderPage;