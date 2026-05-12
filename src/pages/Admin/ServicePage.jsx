import React from 'react';

const ServicePage = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Trang Quản Lý Dịch Vụ (ADMIN)</h1>
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-700">
                <p className="font-medium">Xác nhận:</p>
                <p>Bạn đã đăng nhập thành công với quyền **Admin**. Đây là nơi quản lý tất cả dịch vụ của hệ thống.</p>
            </div>
        </div>
    );
};

export default ServicePage;