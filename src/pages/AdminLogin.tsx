import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin/dashboard');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Connection error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-3xl"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 relative z-10"
      >
        <div className="bg-primary p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="bg-white/10 w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto mb-6 backdrop-blur-xl border border-white/20 shadow-2xl">
            <ShieldCheck size={40} className="text-accent" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter mb-2">ADMIN PORTAL</h1>
          <p className="text-blue-200 text-sm font-bold uppercase tracking-[0.2em] opacity-80">Secure Management Access</p>
        </div>
        
        <form onSubmit={handleLogin} className="p-10 md:p-12 space-y-8">
          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-50 text-red-600 p-5 rounded-2xl text-sm font-black border border-red-100 flex items-center gap-3"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              {error}
            </motion.div>
          )}
          
          <div className="space-y-3">
            <label className="text-[10px] uppercase font-black text-slate-400 tracking-[0.25em] ml-2 flex items-center gap-2">
              <Lock size={14} className="text-accent" />
              Admin Password
            </label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-8 py-5 bg-surface border border-slate-100 rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-accent/20 focus:border-accent transition-all text-primary font-bold placeholder:text-slate-300"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-6 rounded-[1.5rem] text-base shadow-2xl flex items-center justify-center gap-4 group disabled:opacity-50"
          >
            <span className="font-black tracking-widest uppercase">
              {loading ? 'Authenticating...' : 'Login to Dashboard'}
            </span>
            {!loading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>
        
        <div className="p-8 bg-surface text-center border-t border-slate-50">
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-relaxed">
            Authorized personnel only.<br />All access attempts are logged and monitored.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
