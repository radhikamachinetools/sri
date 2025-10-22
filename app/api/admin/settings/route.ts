import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const SETTINGS_FILE = path.join(process.cwd(), 'data', 'settings.json');

export async function GET() {
  try {
    const data = await fs.readFile(SETTINGS_FILE, 'utf8');
    const settings = JSON.parse(data);
    return NextResponse.json({ success: true, settings });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Settings not found' }, { status: 404 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const settings = await request.json();
    await fs.writeFile(SETTINGS_FILE, JSON.stringify(settings, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to save settings' }, { status: 500 });
  }
}