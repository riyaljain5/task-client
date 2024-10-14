import { useState } from 'react';
import logo from '../assets/logo.png';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signing up with:', { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
      <img src={logo} alt="logo" className="mx-auto mb-4" height={120} width={120} />
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-[#286181] text-white px-4 py-2 rounded w-full hover:bg-[#286181]"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center">
          Already have an account? <a href="/login" className="text-[#286181]">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
