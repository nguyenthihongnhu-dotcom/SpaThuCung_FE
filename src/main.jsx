import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './pages/Login/HomePage';
import { SidebarProvider } from './context/SidebarContext';
import DashboardLayout from './components/DashboardLayout';
import OrderPage from './pages/Admin/OrderPage';
import CusOrderPage from './pages/Customer/CusOrderPage';

const App = () => {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <Routes>
          {/* HomePage (Login) không có Sidebar và Header của Dashboard */}
          <Route path="/" element={<HomePage />} />

          {/* Các trang yêu cầu Sidebar sẽ được bọc trong DashboardLayout */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<div>Trang Dashboard</div>} />
            <Route path="/services" element={<div>Trang Quản lý dịch vụ</div>} />
            <Route path="/OrderPage" element={<OrderPage />} />
            <Route path="/CusOrderPage" element={<CusOrderPage />} />
            <Route path="/orders" element={<div>Trang Quản lý đơn hàng</div>} />
          </Route>
        </Routes>
      </SidebarProvider>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)