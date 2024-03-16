import React, { useState } from 'react';
import { useLogin } from '../redux/actions/authActions';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();
  const {authStore} = useSelector((state) => state);
  const {user} = authStore;

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    // Redirect to another page after successful login
    // if(user){
    //   navigate("/");
    // }
  };

  const handleEnterAsGuest = async () => {
    // Sign in with default guest credentials
    await login("test@gmail.com", "12345678");
    // Redirect to another page after successful login
    // if(user){
    //   navigate("/");
    // }

  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      }}
    >
      <h1 className="text-4xl font-extrabold text-white mb-6">
        Welcome to landweb
      </h1>
      <div className="max-w-md w-full bg-white bg-opacity-80 rounded-lg shadow-lg p-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
          Sign in to your account
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input-field"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="input-field"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="btn-primary w-full py-3 rounded-md text-white font-semibold bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </form>
        <div className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-indigo-600 hover:underline">
              Sign up here
            </Link>
          </div>
        <div className="text-center mt-4">
          
          <button
            onClick={handleEnterAsGuest}
            className="text-indigo-600 hover:underline"
          >
            Enter as Guest
          </button>
        </div>
        {error ? <div>{error}</div>:<></> }
      </div>
    </div>
  );
};

export default SignIn;
