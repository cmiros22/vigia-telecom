export default {
  async fetch(request, env, ctx) {
    // This is a simple worker that just serves static assets
    return env.ASSETS.fetch(request);
  }
};
