import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="bg-cover bg-center flex flex-col h-screen w-screen items-center justify-center bg-[url('https://plus.unsplash.com/premium_photo-1673306773569-4d864b99c96c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat">

      {/* Scrolling Description */}
      <div className="w-full overflow-hidden bg-gray-800/80 py-2 mb-10">
        <div className="inline-block animate-marquee whitespace-nowrap text-center text-emerald-200 font-semibold text-sm sm:text-base md:text-lg">
          Please Sign in to access your dashboard!
        </div>
      </div>

      {/* Transparent Login Box */}
      <div className="backdrop-blur-md text-black mb-10 transition-transform duration-300 hover:scale-105 cursor-pointer hover:shadow-[0_0_15px_black] bg-white/10 border border-emerald-500 p-6 sm:p-10 md:p-16 rounded-2xl shadow-xl w-[90%] sm:w-[85%] md:w-auto">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center text-dark space-y-4 sm:space-y-5"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter your email"
            className="outline-none bg-transparent border-2 border-emerald-500 font-medium text-base sm:text-lg py-2 px-5 sm:px-6 rounded-full placeholder:text-gray-400 w-full sm:w-80 md:w-96 hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter password"
            className="outline-none bg-transparent border-2 border-emerald-500 font-medium text-base sm:text-lg py-2 px-5 sm:px-6 rounded-full placeholder:text-gray-400 w-full sm:w-80 md:w-96 hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]"
          />

          <button
            type="submit"
            className="mt-4 sm:mt-6 text-white font-semibold bg-emerald-600 hover:bg-emerald-700 text-base sm:text-lg py-2 px-6 w-full sm:w-80 md:w-96 rounded-full transition-colors duration-300"
          >
            Log in
          </button>
        </form>
      </div>

      {/* Tailwind Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }

          .animate-marquee {
            animation: marquee 8s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
