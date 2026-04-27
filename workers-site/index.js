addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Serve static files from the dist directory
  if (pathname === '/') {
    return new Response(HTML_CONTENT, {
      headers: { 'Content-Type': 'text/html' }
    });
  }

  // For other paths, try to fetch from the static assets
  try {
    const assetUrl = `https://vigia-telcom.carlos-miros.workers.dev${pathname}`;
    const response = await fetch(assetUrl);
    return response;
  } catch (e) {
    return new Response('Not found', { status: 404 });
  }
}

const HTML_CONTENT = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vigia Telecom</title>
    <script>
      // Redirect to the actual site
      window.location.href = 'https://vigia-telcom.carlos-miros.workers.dev/index.html';
    </script>
</head>
<body>
    <div style="text-align: center; padding: 50px;">
        <h1>Redirigiendo a Vigia Telecom...</h1>
        <p>Si no eres redirigido automáticamente, <a href="https://vigia-telcom.carlos-miros.workers.dev/index.html">haz clic aquí</a>.</p>
    </div>
</body>
</html>
`;
