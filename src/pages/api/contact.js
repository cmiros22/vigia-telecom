import { sendEmail } from '../../utils/email.ts';
import 'dotenv/config';

export async function POST({ request }) {
  let errors = { firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" };

  try {
    const data = await request.formData();
    console.log("Valor de data:", data);
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const phone = data.get("phone");
    const subject = data.get("subject");
    const message = data.get("message");

    // Validación básica
    if (!firstName) errors.firstName = "First name is required";
    if (!email) errors.email = "Email is required";
    if (!message) errors.message = "Message is required";

    const hasErrors = Object.values(errors).some(msg => msg);
    
    if (hasErrors) {
      // Para formulario HTML, redirigir con errores en lugar de JSON
      return new Response(null, {
        status: 302,
        headers: {
          'Location': '/contacto?error=true'
        }
      });
    }

    const payload = {
      email: email,
      html: message,
      subject: subject || `New Contact Form Submission from ${firstName}`,
      name: `${firstName} ${lastName}`,
      mobile: phone || 'Not provided',
      role: subject || 'Not provided',
      website: 'Vigia Telecom Website'
    };
    
    await sendEmail(payload);
    console.log("Email sent successfully");
    
    // Redirigir a página de éxito para formulario HTML
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/contacto?success=true'
      }
    });
    
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    // Redirigir con error para formulario HTML
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/contacto?error=true'
      }
    });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
