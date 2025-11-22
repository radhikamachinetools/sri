import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'privacy-concerns.json');

// Ensure data directory exists
const ensureDataDir = () => {
  const dataDir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Read existing data
const readData = () => {
  ensureDataDir();
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Write data
const writeData = (data: any[]) => {
  ensureDataDir();
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, concern, dataType, timestamp, type } = body;

    if (!name || !email || !concern) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newConcern = {
      id: Date.now().toString(),
      name,
      email,
      concern,
      dataType: dataType || 'General',
      timestamp,
      type,
      status: 'pending'
    };

    const concerns = readData();
    concerns.push(newConcern);
    writeData(concerns);

    return NextResponse.json({ success: true, id: newConcern.id });
  } catch (error) {
    console.error('Error saving privacy concern:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const concerns = readData();
    return NextResponse.json({ success: true, concerns });
  } catch (error) {
    console.error('Error fetching privacy concerns:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}