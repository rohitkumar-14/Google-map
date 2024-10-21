// app/api/extract-address/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { query } = await request.json();

  // Simulate LLM-based address extraction logic
  let address = '';
  if (query.toLowerCase().includes('taj mahal')) {
    address = 'Taj Mahal, Agra, India';
  } else {
    address = query; // Default behavior if no known landmark
  }

  return NextResponse.json({ address });
}
