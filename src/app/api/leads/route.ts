import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const getFilePath = () => path.join(process.cwd(), 'leads.json');

interface Lead {
  id: string;
  businessName: string;
  phoneNumber: string;
  timestamp: string;
}

async function readLeads(): Promise<Lead[]> {
  const filePath = getFilePath();
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error: unknown) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      console.error('Error reading leads file:', error);
    }
    return [];
  }
}

async function writeLeads(leads: Lead[]) {
  const filePath = getFilePath();
  await fs.writeFile(filePath, JSON.stringify(leads, null, 2), 'utf-8');
}

export async function GET() {
  try {
    const leads = await readLeads();
    return NextResponse.json({ success: true, leads });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { businessName, phoneNumber } = data;

    if (!businessName || !phoneNumber) {
      return NextResponse.json({ error: 'Business Name and Phone Number are required' }, { status: 400 });
    }

    const leads = await readLeads();

    const newLead = {
      id: Date.now().toString(),
      businessName,
      phoneNumber,
      timestamp: new Date().toISOString(),
    };

    leads.push(newLead);
    await writeLeads(leads);

    return NextResponse.json({ success: true, lead: newLead });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, businessName, phoneNumber } = data;

    if (!id || !businessName || !phoneNumber) {
      return NextResponse.json({ error: 'ID, Business Name, and Phone Number are required' }, { status: 400 });
    }

    const leads = await readLeads();
    const leadIndex = leads.findIndex((l: Lead) => l.id === id);

    if (leadIndex === -1) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    leads[leadIndex] = { ...leads[leadIndex], businessName, phoneNumber };
    await writeLeads(leads);

    return NextResponse.json({ success: true, lead: leads[leadIndex] });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    let leads = await readLeads();
    const initialLength = leads.length;
    leads = leads.filter((l: Lead) => l.id !== id);

    if (leads.length === initialLength) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    await writeLeads(leads);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
