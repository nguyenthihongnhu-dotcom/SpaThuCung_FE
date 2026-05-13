import React, { useState } from 'react';
import OrderTable from '../../components/OrderTable'; // Import component bảng

const OrderPage = () => {
    // Dữ liệu giả lập cho đơn hàng
    const mockOrderData = [
        {
            id: 'ORD001',
            customerName: 'Nguyễn Văn A',
            serviceName: 'Tắm & Sấy - Chó nhỏ',
            bookingDate: '2023-10-26',
            bookingTime: '10:00 AM',
            status: 'Đã hoàn thành',
            totalPrice: '250.000 VNĐ'
        },
        {
            id: 'ORD002',
            customerName: 'Trần Thị B',
            serviceName: 'Cắt tỉa lông - Mèo',
            bookingDate: '2023-10-27',
            bookingTime: '02:00 PM',
            status: 'Đang xử lý',
            totalPrice: '300.000 VNĐ'
        },
        {
            id: 'ORD003',
            customerName: 'Lê Văn C',
            serviceName: 'Khám sức khỏe tổng quát',
            bookingDate: '2023-10-28',
            bookingTime: '09:30 AM',
            status: 'Chờ xác nhận',
            totalPrice: '150.000 VNĐ'
        },
        // Thêm các đơn hàng khác nếu cần
    ];

    const [orders, setOrders] = useState(mockOrderData);

    // Hàm cập nhật trạng thái trong state khi thay đổi dropdown
    const handleStatusChange = (id, newStatus) => {
        setOrders(orders.map(order => 
            order.id === id ? { ...order, status: newStatus } : order
        ));
    };

    // Hàm xử lý khi nhấn nút Xác nhận
    const handleConfirm = (id) => {
        setOrders(orders.map(order => 
            order.id === id ? { ...order, isLocked: order.status === 'Đã hoàn thành' } : order
        ));

        const currentOrder = orders.find(o => o.id === id);
        console.log("Đã lưu trạng thái mới:", currentOrder);
        alert(`Đã cập nhật đơn hàng ${id} sang trạng thái: ${currentOrder.status}`);
    };

    // Định nghĩa các cột cho bảng đơn hàng
    const orderColumns = [
        { header: 'Mã Đơn Hàng', accessor: 'id' },
        { header: 'Tên Khách Hàng', accessor: 'customerName' },
        { header: 'Dịch Vụ', accessor: 'serviceName' },
        { header: 'Ngày Đặt', accessor: 'bookingDate' },
        { header: 'Giờ Đặt', accessor: 'bookingTime' },
        { 
            header: 'Trạng Thái', 
            accessor: (row) => (
                <select 
                    value={row.status}
                    onChange={(e) => handleStatusChange(row.id, e.target.value)}
                    disabled={row.isLocked}
                    className={`border border-gray-300 rounded px-2 py-1 text-sm outline-none focus:border-blue-500 bg-white cursor-pointer ${row.isLocked ? 'opacity-60 cursor-not-allowed bg-gray-100' : ''}`}
                >
                    <option value="Chờ xác nhận">Chờ xác nhận</option>
                    <option value="Đang xử lý">Đang xử lý</option>
                    <option value="Đã hoàn thành">Đã hoàn thành</option>
                </select>
            )
        },
        { header: 'Tổng Tiền', accessor: 'totalPrice' },
        {
            header: 'Thao tác',
            accessor: (row) => (
                <button
                    onClick={() => handleConfirm(row.id)}
                    disabled={row.isLocked}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all shadow-sm ${row.isLocked ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                >
                    Xác nhận
                </button>
            )
        }
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow-md -mt-10 relative">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Trang Quản Lý Đơn Hàng (ADMIN)</h1>
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-700 mb-6">
                <p className="text-sm font-medium">Lưu ý: Bạn cần nhấn "Xác nhận" sau khi thay đổi trạng thái để cập nhật vào hệ thống.</p>
            </div>
            <div className="mt-4">
                <OrderTable data={orders} columns={orderColumns} />
            </div>
        </div>
    );
};

export default OrderPage;