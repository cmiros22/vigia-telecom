addEventListener('fetch', event => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  const url = new URL(event.request.url);
  const pathname = url.pathname;

  // Handle root path - serve index.html
  if (pathname === '/') {
    try {
      // Try to get index.html from the bucket
      const indexResponse = await fetch(new Request('https://vigia-telecom.carlos-miros.workers.dev/index.html'));
      if (indexResponse.ok) {
        return indexResponse;
      }
    } catch (e) {
      // Fallback HTML page
      return new Response(`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vigia Telecom</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #1a1a1a; color: white; }
        .title { color: #6EDE74; font-size: 2.5em; margin-bottom: 20px; }
        .subtitle { color: #ccc; margin-bottom: 30px; }
        .link { color: #6EDE74; text-decoration: none; padding: 10px 20px; border: 2px solid #6EDE74; border-radius: 5px; display: inline-block; }
        .link:hover { background: #6EDE74; color: #1a1a1a; }
    </style>
</head>
<body>
    <div class="title">Vigia Telecom</div>
    <div class="subtitle">Conectando Futuro</div>
    <p><a href="/index.html" class="link">Explorar nuestro sitio</a></p>
</body>
</html>
      `, {
        headers: { 'Content-Type': 'text/html' }
      });
    }
  }

  // For other paths, serve static files directly
  try {
    // Try to get the asset from the bucket
    const assetResponse = await fetch(new Request(`https://vigia-telecom.carlos-miros.workers.dev${pathname}`));
    if (assetResponse.ok) {
      return assetResponse;
    }
  } catch (e) {
    console.error('Error serving asset:', pathname, e);
  }

  // Return 404 if nothing found
  return new Response(`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página no encontrada - Vigia Telecom</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #1a1a1a; color: white; }
        .error { color: #e74c3c; font-size: 3em; margin-bottom: 20px; }
        .message { color: #ccc; margin-bottom: 30px; }
        .link { color: #6EDE74; text-decoration: none; }
    </style>
</head>
<body>
    <div class="error">404</div>
    <div class="message">Página no encontrada</div>
    <p><a href="/" class="link">Volver al inicio</a></p>
</body>
</html>
  `, {
    status: 404,
    headers: { 'Content-Type': 'text/html' }
  });
}
