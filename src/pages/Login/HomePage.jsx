import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import api from '../../api/axios';

const HomePage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        // // Mock Login: Cho phép đăng nhập tạm thời mà không cần Backend
        // if (username === 'admin' && password === 'admin') {
        //     localStorage.setItem('token', 'mock-token-12345');
        //     navigate('/orderpage');
        //     return;
        // }
        // if (username === 'cus' && password === 'cus') {
        //     localStorage.setItem('token', 'mock-token-12345');
        //     navigate('/cusorderpage');
        //     return;
        // }

        try {
            // Cập nhật endpoint thực tế của bạn nếu cần
            const response = await api.post('/login', { username, password });

            // Giả sử API trả về token tại response.data.token
            const token = response.data?.token;
            if (token) {
                localStorage.setItem('token', token); // Lưu token vào localStorage
                navigate('/dashboard'); // Điều hướng tới trang Dashboard sau khi đăng nhập thành công
            } else {
                setError('Không nhận được token từ server.');
            }
        } catch (err) {
            console.error('Lỗi đăng nhập:', err);
            setError('Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản và mật khẩu.');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Đăng Nhập</h2>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    />
                </div>

                <button
                    type="submit"
                    style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
                >
                    Đăng Nhập
                </button>
            </form>
        </div>
    );
};

export default HomePage;