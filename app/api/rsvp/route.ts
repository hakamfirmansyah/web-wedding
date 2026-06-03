import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const { wedding_id, name, phone, attendance, guest_count } = await req.json();

    const { data, error } = await supabase
      .from('rsvp')
      .insert([{ wedding_id, name, phone, attendance, guest_count }]);

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}
