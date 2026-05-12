import React from 'react';

const CusOrderPage = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-green-600 mb-4">Đơn Hàng Của Tôi (CUSTOMER)</h1>
            <div className="p-4 bg-green-50 border-l-4 border-green-500 text-green-700">
                <p className="font-medium">Xác nhận:</p>
                <p>Bạn đã đăng nhập thành công với quyền **Khách hàng**. Đây là nơi bạn xem lịch sử đặt chỗ của mình.</p>
            </div>
        </div>
    );
};

export default CusOrderPage;