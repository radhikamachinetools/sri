import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const INFRASTRUCTURE_FILE = path.join(process.cwd(), 'data', 'infrastructure.json');

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await fs.readFile(INFRASTRUCTURE_FILE, 'utf8');
    const { items } = JSON.parse(data);
    
    const filteredItems = items.filter((item: any) => item._id !== id);
    await fs.writeFile(INFRASTRUCTURE_FILE, JSON.stringify({ items: filteredItems }, null, 2));
    
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const updates = await request.json();
    const data = await fs.readFile(INFRASTRUCTURE_FILE, 'utf8');
    const { items } = JSON.parse(data);
    
    const updatedItems = items.map((item: any) =>
      item._id === id ? { ...item, ...updates } : item
    );
    
    await fs.writeFile(INFRASTRUCTURE_FILE, JSON.stringify({ items: updatedItems }, null, 2));
    
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
