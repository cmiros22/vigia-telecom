export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Handle root path
    if (pathname === '/') {
      return env.ASSETS.fetch(new Request('https://vigia-telecom.carlos-miros.workers.dev/index.html'));
    }

    // Handle other paths
    return env.ASSETS.fetch(request);
  }
};
