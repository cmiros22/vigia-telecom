export default {
  async fetch(request, env, ctx) {
    // Simple worker that serves static assets
    return env.ASSETS.fetch(request);
  }
};
