import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import { SidebarProvider } from './context/SidebarContext';
import DashboardLayout from './components/DashboardLayout';

const App = () => {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Thêm các route khác ở đây */}
          </Routes>
        </DashboardLayout>
      </SidebarProvider>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)