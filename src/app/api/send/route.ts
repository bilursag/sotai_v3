import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';

async function verifyRecaptcha(token: string) {
  const formData = new URLSearchParams();
  formData.append('secret', RECAPTCHA_SECRET_KEY || '');
  formData.append('response', token);
  
  const response = await fetch(RECAPTCHA_VERIFY_URL, {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  
  const data = await response.json();
  return data;
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, type, recaptchaToken } = await request.json();
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son requeridos' },
        { status: 400 }
      );
    }
    
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'Verificación de reCAPTCHA es requerida' },
        { status: 400 }
      );
    }
    
    const recaptchaVerification = await verifyRecaptcha(recaptchaToken);
    
    if (!recaptchaVerification.success || recaptchaVerification.score < 0.5) {
      console.log('reCAPTCHA falló:', recaptchaVerification);
      return NextResponse.json(
        { error: 'La verificación de seguridad falló. Por favor, inténtalo de nuevo.' },
        { status: 403 }
      );
    }
    
    const data = await resend.emails.send({
      from: 'Contacto <contacto@sotai-dev.com>',
      to: ['franciscomuniozs@gmail.com'],
      subject: subject || `Nuevo mensaje de contacto: ${type}`,
      replyTo: email,
      react: EmailTemplate({ name, email, type, subject, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error al enviar el email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}