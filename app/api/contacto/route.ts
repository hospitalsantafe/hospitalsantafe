import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, telefono, email, servicio, mensaje } = body;

    // Validate required fields
    if (!nombre || !telefono || !mensaje) {
      return NextResponse.json(
        { error: 'Los campos nombre, teléfono y mensaje son obligatorios.' },
        { status: 400 }
      );
    }

    // For now, log the contact form submission
    // TODO: Integrate with email service (e.g., Resend, SendGrid, Nodemailer)
    console.log('📧 Nuevo contacto recibido:', {
      nombre,
      telefono,
      email: email || 'No proporcionado',
      servicio: servicio || 'No especificado',
      mensaje,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.',
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Error al procesar tu solicitud. Por favor intenta de nuevo.' },
      { status: 500 }
    );
  }
}
