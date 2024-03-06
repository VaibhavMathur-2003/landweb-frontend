import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', { name, email, password });
      console.log(response.data); // Handle successful registration response
    } catch (error) {
      console.error('Error while signing up:', error.response.data); // Handle error response
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Sign up for an account</h2>
        <form className="space-y-6" onSubmit={handleSignUp}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                autoComplete="name" 
                required 
                className="input-field" 
                placeholder="Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input 
                id="email-address" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className="input-field" 
                placeholder="Email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                autoComplete="new-password" 
                required 
                className="input-field" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="btn-primary w-full py-3 rounded-md text-white font-semibold bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
