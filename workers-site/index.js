addEventListener('fetch', event => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  const url = new URL(event.request.url);
  const pathname = url.pathname;

  // Handle root path
  if (pathname === '/') {
    try {
      // Try to get index.html from the assets
      const indexResponse = await fetch(new Request('https://vigia-telecom.carlos-miros.workers.dev/index.html'));
      if (indexResponse.ok) {
        return indexResponse;
      }
    } catch (e) {
      // Fallback to a simple HTML page
      return new Response(`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vigia Telecom</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        .error { color: #e74c3c; }
        .success { color: #27ae60; }
    </style>
</head>
<body>
    <h1 class="success">Vigia Telecom</h1>
    <p>Sitio en construcción...</p>
    <p><a href="/index.html">Ir al sitio principal</a></p>
</body>
</html>
      `, {
        headers: { 'Content-Type': 'text/html' }
      });
    }
  }

  // For other paths, try to fetch from the static assets
  try {
    const assetUrl = `https://vigia-telecom.carlos-miros.workers.dev${pathname}`;
    const response = await fetch(assetUrl);
    if (response.ok) {
      return response;
    }
  } catch (e) {
    // If fetch fails, try to serve from the bucket directly
    try {
      const assetResponse = await fetch(new Request(pathname));
      if (assetResponse.ok) {
        return assetResponse;
      }
    } catch (e2) {
      // Final fallback
    }
  }

  return new Response('Not found', { status: 404 });
}
