import React from 'react';
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

    // Định nghĩa các cột cho bảng đơn hàng
    const orderColumns = [
        { header: 'Mã Đơn Hàng', accessor: 'id' },
        { header: 'Tên Khách Hàng', accessor: 'customerName' },
        { header: 'Dịch Vụ', accessor: 'serviceName' },
        { header: 'Ngày Đặt', accessor: 'bookingDate' },
        { header: 'Giờ Đặt', accessor: 'bookingTime' },
        { header: 'Trạng Thái', accessor: 'status' },
        { header: 'Tổng Tiền', accessor: 'totalPrice' },
        // Có thể thêm cột Hành động (xem chi tiết, chỉnh sửa, xóa) tại đây
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow-md -mt-10 relative">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Trang Quản Lý Đơn Hàng (ADMIN)</h1>
            {/* <div className="p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-700">
                <p className="font-medium">Xác nhận:</p>
                <p>Bạn đã đăng nhập thành công với quyền **Admin**. Đây là nơi quản lý tất cả đơn hàng của hệ thống.</p>
            </div> */}
            <div className="mt-8">
                <OrderTable data={mockOrderData} columns={orderColumns} />
            </div>
        </div>
    );
};

export default OrderPage;