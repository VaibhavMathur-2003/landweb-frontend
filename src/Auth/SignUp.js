import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useSignup } from '../Context/useSignUp';

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {Signup, error, isLoading} = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault()

    await Signup(email, password)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Sign up for an account</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            
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
                onChange={(e)=>setEmail(e.target.value)} 
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
                onChange={(e)=>setPassword(e.target.value)} 
              />
            </div>
          </div>
          <button 
            disabled = {isLoading}
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
