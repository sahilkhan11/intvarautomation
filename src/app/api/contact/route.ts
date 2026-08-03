import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Placeholder logic for now — later this will wire up to Email or WhatsApp API
    console.log("New Contact Form Submission:");
    console.log(data);
    
    // Simulate slight network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({ success: true, message: 'Message received successfully.' }, { status: 200 });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json({ success: false, message: 'Failed to process request.' }, { status: 500 });
  }
}
