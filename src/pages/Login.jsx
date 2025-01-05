import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const dispatch = useDispatch();
  const { errorMessage, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(login(form));
    if (login.fulfilled.match(resultAction)) {
      toast.success('Login Successful!');
      navigate('/')
    } else {
      toast.error('Authentication failed.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-lg shadow-lg w-96 space-y-4 bg-[#111827]"
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full p-2 rounded-xl border border-gray-700 bg-transparent focus:border-gray-300 focus:outline-none"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-2 rounded-xl border border-gray-700 bg-transparent focus:border-gray-300 focus:outline-none"
        />
        {errorMessage && <p className="text-red-600 text-xs text-start">{errorMessage}</p>}
        <button
          type="submit"
          className="w-1/2 bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;