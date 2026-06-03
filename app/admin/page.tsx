"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [session, setSession] = useState<any>(null);
  const [stats, setStats] = useState({ rsvpCount: 0, wishesCount: 0 });
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/admin/login');
      } else {
        setSession(session);
        fetchStats();
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) router.push('/admin/login');
    });

    return () => subscription.unsubscribe();
  }, [router]);

  async function fetchStats() {
    const { count: rsvpCount } = await supabase.from('rsvp').select('*', { count: 'exact', head: true });
    const { count: wishesCount } = await supabase.from('wishes').select('*', { count: 'exact', head: true });
    setStats({ rsvpCount: rsvpCount || 0, wishesCount: wishesCount || 0 });
  }

  if (!session) return null;

  return (
    <div className=\"p-8 bg-zinc-50 min-h-screen\">
      <h1 className=\"text-2xl font-bold mb-8\">Admin Dashboard</h1>
      <div className=\"grid grid-cols-2 gap-4\">
        <div className=\"p-6 bg-white shadow rounded-lg\">
          <h2 className=\"text-lg text-zinc-600\">Total RSVP</h2>
          <p className=\"text-4xl font-bold\">{stats.rsvpCount}</p>
        </div>
        <div className=\"p-6 bg-white shadow rounded-lg\">
          <h2 className=\"text-lg text-zinc-600\">Total Ucapan</h2>
          <p className=\"text-4xl font-bold\">{stats.wishesCount}</p>
        </div>
      </div>
      <button
        onClick={() => supabase.auth.signOut()}
        className=\"mt-8 px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500\"
      >
        Logout
      </button>
    </div>
  );
}
