import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />

        </Routes>
      </main>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)