import { c as createComponent } from './astro-component_CatxeLuW.mjs';
import { l as createRenderInstruction, r as renderTemplate, h as addAttribute, n as renderComponent, o as renderHead, p as renderSlot, m as maybeRenderHead } from './entrypoint_BUnSPvm7.mjs';
import 'github-slugger';
import 'marked';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const site = {"title":"Vigia Telecom","base_url":"https://vigiatelcomm.com","favicon":"/images/favicon.png"};
const metadata = {"meta_author":"Twiggly.com","meta_image":"/images/og-image.png","meta_description":"Violeta"};
const config = {
  site,
  metadata,
};

const plainify = (content) => {
  if (!content) return null;
  const filterBrackets = content.replace(/<\/?[^>]+(>|$)/gm, "");
  const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
  const stripHTML = htmlEntityDecoder(filterSpaces);
  return stripHTML;
};
const htmlEntityDecoder = (htmlWithEntities) => {
  let entityList = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'"
  };
  let htmlWithoutEntities = htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity) => {
      return entityList[entity];
    }
  );
  return htmlWithoutEntities;
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/carlosmirosaguilera/Web Vigia Telcom/vigia-telcom/src/layouts/partials/Footer.astro", void 0);

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/carlosmirosaguilera/Web Vigia Telcom/vigia-telcom/node_modules/.pnpm/astro@6.1.4_sass@1.99.0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/carlosmirosaguilera/Web Vigia Telcom/vigia-telcom/node_modules/.pnpm/astro@6.1.4_sass@1.99.0/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Base;
  const { title, meta_title, description, image, noindex, canonical } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><!-- favicon --><link rel="shortcut icon"${addAttribute(config.site.favicon, "href")}><!-- theme meta --><meta name="theme-name" content="violeta"><meta name="msapplication-TileColor" content="#000000"><meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff"><meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><!-- responsive meta --><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"><!-- title --><title>
      ${plainify(meta_title ? meta_title : title ? title : config.site.title)}
    </title><!-- canonical url -->${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")} item-prop="url">`}<!-- noindex robots -->${noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`}<!-- meta-description --><meta name="description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<!-- author from config.json --><meta name="author"${addAttribute(config.metadata.meta_author, "content")}><!-- og-title --><meta property="og:title"${addAttribute(plainify(
    meta_title ? meta_title : title ? title : config.site.title
  ), "content")}><!-- og-description --><meta property="og:description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(`${config.site.base_url}/${Astro2.url.pathname.replace("/", "")}`, "content")}><!-- twitter-title --><meta name="twitter:title"${addAttribute(plainify(
    meta_title ? meta_title : title ? title : config.site.title
  ), "content")}><!-- twitter-description --><meta name="twitter:description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}><!-- og-image --><meta property="og:image"${addAttribute(`${config.site.base_url}${image ? image : config.metadata.meta_image}`, "content")}><!-- twitter-image --><meta name="twitter:image"${addAttribute(`${config.site.base_url}${image ? image : config.metadata.meta_image}`, "content")}><meta name="twitter:card" content="summary_large_image">${renderScript($$result, "/Users/carlosmirosaguilera/Web Vigia Telcom/vigia-telcom/src/layouts/Base.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body class="bg-amber-200"> <!-- <TwSizeIndicator /> --> <!-- <Header /> --> <main id="main-content" class="bg-amber-200"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/carlosmirosaguilera/Web Vigia Telcom/vigia-telcom/src/layouts/Base.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold text-center text-blue-500">Bienvenido a Vigia Telecom</h1> ` })}`;
}, "/Users/carlosmirosaguilera/Web Vigia Telcom/vigia-telcom/src/pages/index.astro", void 0);

const $$file = "/Users/carlosmirosaguilera/Web Vigia Telcom/vigia-telcom/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
