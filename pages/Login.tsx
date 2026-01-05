import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

type LoginView = 'login' | 'forgot' | 'reset-sent';

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [view, setView] = useState<LoginView>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
      navigate('/');
    }, 1200);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setView('reset-sent');
    }, 1500);
  };

  const renderLoginForm = () => (
    <div className="animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif font-bold text-whisky-dark mb-2">Welcome Back</h2>
        <p className="text-gray-500">Sign in to access your portfolio</p>
      </div>

      <form onSubmit={handleLoginSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-whisky-dark focus:border-whisky-button focus:ring-1 focus:ring-whisky-button outline-none transition-all"
              placeholder="name@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-whisky-dark focus:border-whisky-button focus:ring-1 focus:ring-whisky-button outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300 text-whisky-button focus:ring-whisky-button" />
            <span className="text-gray-600">Remember me</span>
          </label>
          <button 
            type="button" 
            onClick={() => setView('forgot')}
            className="text-whisky-button font-medium hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-whisky-button text-whisky-button-text py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? 'Signing In...' : 'Sign In'}
          {!loading && <ArrowRight className="w-5 h-5" />}
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-gray-500">
        Don't have an account? {' '}
        <Link to="/register" className="text-whisky-button font-bold hover:underline">
          Create Account
        </Link>
      </div>
    </div>
  );

  const renderForgotForm = () => (
    <div className="animate-fade-in">
      <button 
        onClick={() => setView('login')}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-whisky-dark mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Sign In
      </button>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-whisky-dark mb-2">Reset Password</h2>
        <p className="text-gray-500">Enter your email and we'll send you a link to reset your password.</p>
      </div>

      <form onSubmit={handleForgotSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-whisky-dark focus:border-whisky-button focus:ring-1 focus:ring-whisky-button outline-none transition-all"
              placeholder="name@example.com"
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-whisky-button text-whisky-button-text py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending Link...' : 'Send Reset Link'}
          {!loading && <ArrowRight className="w-5 h-5" />}
        </button>
      </form>
    </div>
  );

  const renderResetSent = () => (
    <div className="animate-fade-in text-center py-4">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
        <CheckCircle className="w-10 h-10" />
      </div>
      <h2 className="text-2xl font-serif font-bold text-whisky-dark mb-2">Check Your Email</h2>
      <p className="text-gray-500 mb-8 leading-relaxed">
        We've sent a password reset link to <br/>
        <span className="font-bold text-whisky-dark">{email}</span>
      </p>
      <button 
        onClick={() => setView('login')}
        className="w-full bg-whisky-main border border-gray-300 text-whisky-dark py-3 rounded-xl font-bold hover:bg-gray-50 transition-all"
      >
        Back to Login
      </button>
    </div>
  );

  return (
    <div className="min-h-screen flex font-sans">
      <div className="hidden lg:flex w-1/2 bg-whisky-dark relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1200/1200?grayscale&blur=2')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-whisky-dark/80 to-whisky-dark/40"></div>
        <div className="relative z-10 text-center px-12">
          <div className="w-20 h-20 rounded-full bg-whisky-button flex items-center justify-center shadow-lg text-whisky-button-text mx-auto mb-8">
            <span className="font-serif text-4xl font-bold">R</span>
          </div>
          <h1 className="text-5xl font-serif font-bold text-whisky-main mb-6">The Whisky Reserve</h1>
          <p className="text-xl text-gray-300 max-w-md mx-auto leading-relaxed">
            The premier marketplace for fine spirit NFTs and OTC deals. Liquid assets on the blockchain.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-whisky-main flex items-center justify-center px-4 sm:px-12">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-whisky-border">
          {view === 'login' && renderLoginForm()}
          {view === 'forgot' && renderForgotForm()}
          {view === 'reset-sent' && renderResetSent()}
        </div>
      </div>
    </div>
  );
};

export default Login;