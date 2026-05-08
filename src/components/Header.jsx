import { NavLink } from 'react-router-dom';

const Header = () => {
  const navLinkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isActive
      ? 'bg-blue-600 text-white shadow-md'
      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
    }`;

  return (
    <header className="bg-white border-b border-blue-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
        <nav className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
          Spa Booking
        </nav>
      </div>
    </header>
  );
};

export default Header;