"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { Loader2 } from 'lucide-react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      router.push('/admin');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-3 rounded-lg">
          {error}
        </div>
      )}
      
      <div>
        <label className="block text-[10px] font-mono text-[#555] uppercase tracking-widest mb-1.5">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full bg-[#111] border border-[#222] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#DC143C]/50 transition-colors"
          placeholder="admin@jenwin.in"
        />
      </div>

      <div>
        <label className="block text-[10px] font-mono text-[#555] uppercase tracking-widest mb-1.5">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full bg-[#111] border border-[#222] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#DC143C]/50 transition-colors"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-[#DC143C] text-white text-sm font-bold rounded-lg hover:bg-[#FF0040] transition-colors disabled:opacity-50"
      >
        {loading ? <Loader2 size={16} className="animate-spin" /> : 'Sign In'}
      </button>
    </form>
  );
}
