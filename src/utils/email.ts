interface ISendEmail {
  email: string;
  html: string;
  subject: string;
  name: string;
  mobile: string;
  role: string;
  website: string;
}

async function sendEmail(props: ISendEmail) {
  // Debug: Verificar variables de entorno
  console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? '*** SET ***' : 'NOT SET');
  
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not set');
  }

  // Usando Resend API para envío de correos
  const emailData = {
    from: 'onboarding@resend.dev', // Email de verificación de Resend
    to: 'cmiros.22@gmail.com',
    subject: props.subject || `Nuevo contacto de ${props.name}`,
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${props.name}</p>
      <p><strong>Email:</strong> ${props.email}</p>
      <p><strong>Teléfono:</strong> ${props.mobile}</p>
      <p><strong>Asunto:</strong> ${props.subject}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${props.html}</p>
      <hr>
      <p><em>Enviado desde Vigia Telecom Website</em></p>
    `
  };

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify(emailData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Failed to send email: ${response.statusText} - ${JSON.stringify(errorData)}`);
  }

  const result = await response.json();
  console.log('Email sent successfully:', result);
  return { success: true, message: 'Email sent successfully', data: result };
}

export { sendEmail };
