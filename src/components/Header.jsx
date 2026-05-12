import { NavLink, useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const navLinkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isActive
      ? 'bg-blue-600 text-white shadow-md'
      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
    }`;

  const handleLogout = () => {
    // Xóa token và các thông tin liên quan (nếu có)
    localStorage.removeItem('token');
    // Điều hướng về trang login
    navigate('/');
  };

  return (
    <header className="bg-white border-b border-blue-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
        <nav className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
          <span className="font-bold text-blue-600 px-2">Spa Pet Booking</span>
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium border border-transparent hover:border-red-100"
        >
          <LogOut size={18} />
          <span>Đăng xuất</span>
        </button>
      </div>
    </header>
  );
};

export default Header;