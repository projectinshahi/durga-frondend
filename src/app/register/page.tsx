"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import api from '@/lib/axios';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function Register() {
  const router = useRouter();
  const { login } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post('/auth/register', { name, email, password });
      login(res.data.token, res.data.user);
      toast.success('Registration successful');
      router.push('/dashboard');
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900 tracking-wider">
            Create Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">Join DINORAH to view your dashboard</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="text" required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-slate-900 focus:border-slate-900 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={name} onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email" required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-slate-900 focus:border-slate-900 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password" required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-slate-900 focus:border-slate-900 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password} onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit" disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 disabled:opacity-50 transition-colors"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                   <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                   Creating account...
                 </span>
              ) : 'Register'}
            </button>
          </div>
          <div className="text-center text-sm pt-4 border-t border-gray-100">
            <span className="text-gray-600">Already have an account? </span>
            <Link href="/login" className="font-medium text-slate-900 hover:text-slate-800">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
