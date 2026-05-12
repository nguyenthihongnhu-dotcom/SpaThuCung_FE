
import React, { useState, useRef } from 'react';
import { Plus, X, Image as ImageIcon, Edit, Trash2 } from 'lucide-react';

const ServicePage = () => {
    const [showModal, setShowModal] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const fileInputRef = useRef(null);

    // 1. State lưu danh sách dịch vụ hiển thị trên giao diện
    const [services, setServices] = useState([
        { id: 1, name: "Tắm rửa & Massage", price: "200000", start: "2024-01-01", end: "2024-12-31", img: "https://via.placeholder.com/150" },
    ]);

    // 2. State lưu dữ liệu tạm thời của Form trong Popup
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        start: '',
        end: '',
        img: 'https://via.placeholder.com/150' // Mặc định ảnh tạm
    });

    // Hàm xử lý khi nhập liệu
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setFormData({ ...formData, img: imageUrl });
        }
    };

    // 3. Hàm xử lý khi nhấn "Lưu dịch vụ"
    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingService) {
            // Cập nhật dịch vụ hiện tại
            setServices(services.map(s => s.id === editingService.id ? { ...formData, id: s.id } : s));
        } else {
            // Tạo object dịch vụ mới với ID duy nhất
            const newService = {
                ...formData,
                id: Date.now(), // Tạo ID ngẫu nhiên bằng timestamp
            };
            setServices([...services, newService]);
        }

        // Đóng modal và reset form
        setShowModal(false);
        setEditingService(null);
        setFormData({ name: '', price: '', start: '', end: '', img: 'https://via.placeholder.com/150' });
    };

    const handleEdit = (service) => {
        setEditingService(service);
        setFormData({
            name: service.name,
            price: service.price,
            start: service.start,
            end: service.end,
            img: service.img
        });
        setShowModal(true);
    };

    const handleDelete = (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa dịch vụ này không?")) {
            setServices(services.filter(s => s.id !== id));
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md -mt-10 relative">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-blue-600">Trang Quản Lý Dịch Vụ (ADMIN)</h1>
                <button
                    onClick={() => {
                        setEditingService(null);
                        setFormData({ name: '', price: '', start: '', end: '', img: 'https://via.placeholder.com/150' });
                        setShowModal(true);
                    }}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all shadow-lg"
                >
                    <Plus size={20} />
                    Thêm dịch vụ
                </button>
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

                        {/* Nút hành động hiện lên khi hover */}
                        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={() => handleEdit(item)}
                                className="p-1.5 bg-white border rounded-md text-blue-600 hover:bg-blue-50 shadow-sm"
                            >
                                <Edit size={14} />
                            </button>
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="p-1.5 bg-white border rounded-md text-red-600 hover:bg-red-50 shadow-sm"
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800">{editingService ? "Cập nhật dịch vụ" : "Thêm dịch vụ mới"}</h2>
                            <button onClick={() => { setShowModal(false); setEditingService(null); }} className="text-gray-400 hover:text-gray-600">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tên dịch vụ</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    type="text"
                                    className="w-full border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
                                    placeholder="Ví dụ: Tắm thú cưng"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Giá tiền</label>
                                <input
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    required
                                    type="number"
                                    className="w-full border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
                                    placeholder="VNĐ"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Bắt đầu</label>
                                    <input
                                        name="start"
                                        value={formData.start}
                                        onChange={handleInputChange}
                                        required
                                        type="date"
                                        className="w-full border rounded-lg px-3 py-2 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Kết thúc</label>
                                    <input
                                        name="end"
                                        value={formData.end}
                                        onChange={handleInputChange}
                                        required
                                        type="date"
                                        className="w-full border rounded-lg px-3 py-2 outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Hình ảnh</label>
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="border-2 border-dashed border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-gray-400 hover:bg-gray-50 cursor-pointer h-32 relative overflow-hidden"
                                >
                                    {formData.img && formData.img !== 'https://via.placeholder.com/150' ? (
                                        <img src={formData.img} alt="Preview" className="w-full h-full object-cover absolute inset-0" />
                                    ) : (
                                        <>
                                            <ImageIcon size={32} />
                                            <span className="text-xs mt-2">Chọn hoặc kéo ảnh vào đây</span>
                                        </>
                                    )}
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleImageChange}
                                        className="hidden"
                                        accept="image/*"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => { setShowModal(false); setEditingService(null); }}
                                    className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
                                >
                                    Hủy
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold"
                                >
                                    {editingService ? "Cập nhật" : "Lưu dịch vụ"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicePage;