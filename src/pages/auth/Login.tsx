import { useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import { loginSuccess } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

//password is Prabhas1$

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });

      
      const { accessToken, role } = res.data;

      dispatch(loginSuccess({ token: accessToken, role }));

      
      if (role === 'admin') navigate('/admin/dashboard');
      else navigate('/student/dashboard');
    } catch (err: any) {
      alert(err?.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
