import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';

interface RegisterProps {
  onLogin: () => void;
}

type RegisterStep = 'details' | 'verify';

const Register: React.FC<RegisterProps> = ({ onLogin }) => {
  const [step, setStep] = useState<RegisterStep>('details');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    let interval: any;
    if (step === 'verify' && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending code
    setTimeout(() => {
      setLoading(false);
      setStep('verify');
      setTimer(60);
      setCanResend(false);
    }, 1200);
  };

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate verification
    setTimeout(() => {
      setLoading(false);
      onLogin(); 
      navigate('/');
    }, 1500);
  };

  const handleResend = () => {
    if (!canResend) return;
    setTimer(60);
    setCanResend(false);
    // Trigger resend logic here
  };

  const renderDetailsForm = () => (
    <div className="animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif font-bold text-whisky-dark mb-2">Create Account</h2>
        <p className="text-gray-500">Begin your liquid asset journey</p>
      </div>

      <form onSubmit={handleDetailsSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-whisky-dark focus:border-whisky-button focus:ring-1 focus:ring-whisky-button outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
        </div>

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
              placeholder="Create a password"
            />
          </div>
        </div>

        <div className="text-xs text-gray-500 leading-relaxed">
          By creating an account, you agree to our <a href="#" className="text-whisky-button hover:underline">Terms of Service</a> and <a href="#" className="text-whisky-button hover:underline">Privacy Policy</a>.
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-whisky-button text-whisky-button-text py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : 'Next'}
          {!loading && <ArrowRight className="w-5 h-5" />}
        </button>
      </form>
    </div>
  );

  const renderVerifyForm = () => (
    <div className="animate-fade-in">
      <button 
        onClick={() => setStep('details')}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-whisky-dark mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Edit Details
      </button>

      <div className="text-center mb-8">
        <div className="w-12 h-12 bg-whisky-main border border-whisky-gold/30 rounded-xl flex items-center justify-center mx-auto mb-4">
          <ShieldCheck className="w-6 h-6 text-whisky-gold" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-whisky-dark mb-2">Verify Your Email</h2>
        <p className="text-sm text-gray-500">
          We've sent a 6-digit verification code to <br/>
          <span className="font-bold text-whisky-dark">{email}</span>
        </p>
      </div>

      <form onSubmit={handleVerifySubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3 text-center uppercase tracking-widest">Enter Code</label>
          <input 
            type="text" 
            maxLength={6}
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
            className="w-full bg-gray-50 border-2 border-whisky-border rounded-xl py-4 text-center text-3xl font-mono tracking-[0.5em] text-whisky-dark focus:border-whisky-button outline-none transition-all placeholder:text-gray-200"
            placeholder="000000"
          />
        </div>

        <button 
          type="submit" 
          disabled={loading || otp.length < 6}
          className="w-full bg-whisky-button text-whisky-button-text py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Verifying...' : 'Complete Registration'}
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">Didn't receive the code?</p>
          <button 
            type="button"
            disabled={!canResend}
            onClick={handleResend}
            className={`text-sm font-bold transition-all ${canResend ? 'text-whisky-button hover:underline' : 'text-gray-300'}`}
          >
            {canResend ? 'Resend Code' : `Resend in ${timer}s`}
          </button>
        </div>
      </form>
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
          <h1 className="text-5xl font-serif font-bold text-whisky-main mb-6">Join The Reserve</h1>
          <p className="text-xl text-gray-300 max-w-md mx-auto leading-relaxed">
            Create your account to start collecting rare whisky casks and accessing exclusive OTC deals.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-whisky-main flex items-center justify-center px-4 sm:px-12">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-whisky-border">
          {step === 'details' ? renderDetailsForm() : renderVerifyForm()}
          <div className="mt-8 text-center text-sm text-gray-500">
            Already have an account? {' '}
            <Link to="/login" className="text-whisky-button font-bold hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;