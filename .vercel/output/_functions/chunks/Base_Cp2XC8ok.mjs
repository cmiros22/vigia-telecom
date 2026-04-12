import { c as createComponent, $ as $$Image } from './_astro_assets_Dptnpedp.mjs';
import { j as createRenderInstruction, m as maybeRenderHead, r as renderComponent, b as renderTemplate, F as Fragment, k as addAttribute, l as renderHead, n as renderSlot } from './entrypoint_BpOoe5qH.mjs';
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

const site = {"title":"Vigia Telecom","base_url":"https://vigiatelcomm.com","favicon":"/images/favicon.png","logo":"/images/logo.jpg","logo_width":"147","logo_height":"31"};
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

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Logo;
  const { src } = Astro2.props;
  const {
    logo,
    logo_width,
    logo_height,
    title
  } = config.site;
  return renderTemplate`${maybeRenderHead()}<a href="/" class="navbar-brand block"> ${renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": logo_width.replace("px", "") * 2, "height": logo_height.replace("px", "") * 2, "src": src ? src : logo, "alt": title, "style": {
    height: logo_height.replace("px", "") + "px",
    width: logo_width.replace("px", "") + "px"
  } })}` } </a>`;
}, "/Users/carlosmirosaguilera/Web Vigia Telcom/vigia-telcom/src/layouts/components/Logo.astro", void 0);

const main = [{"name":"Inicio","url":"/"},{"name":"Nosotros","url":"/nosotros"},{"name":"Planes","url":"/planes"},{"name":"Contacto","url":"/contacto"}];
const menu = {
  main};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const { main } = menu;
  const { pathname } = Astro2.url;
  return renderTemplate(_a || (_a = __template(["", '<header class="header !bg-[#1B263B]"> <nav class="navbar container bg-[#1B263B]"> <!-- logo --> <div class="order-0"> ', ' </div> <!-- navbar toggler --> <input id="nav-toggle" type="checkbox" class="hidden"> <label id="show-button" for="nav-toggle" class="order-2 flex cursor-pointer items-center lg:order-1 lg:hidden"> <svg class="h-6 fill-current" viewBox="0 0 20 20"> <title>Menu Open</title> <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path> </svg> </label> <label id="hide-button" for="nav-toggle" class="order-2 hidden cursor-pointer items-center lg:order-1"> <svg class="h-6 fill-black" viewBox="0 0 20 20"> <title>Menu Close</title> <polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2" transform="rotate(45 10 10)"></polygon> </svg> </label> <!-- /navbar toggler --> <ul id="nav-menu" class="navbar-nav order-3 hidden w-full lg:order-1 lg:flex lg:w-auto lg:space-x-2"> ', ` <li class="nav-item mt-2 lg:hidden"> <!-- <a class="text-white flex items-center justify-center pb-2 hover:text-[#50b9e0]" href="/contact-sales">
          <span>Contáctanos</span>
          <svg class="h-4 w-4 fill-current ml-2" viewBox="0 0 20 20">
            <path d="M8 5l7 7-7 7" />
          </svg>
        </a> --> <a class="btn btn-purple btn-sm border-border" href="/signin">
Contratar
</a> </li> </ul> <div class="order-1 ml-auto hidden items-center md:order-2 md:ml-0 lg:flex"> <!-- <a class="text-white flex items-center mr-4 hover:text-[#50b9e0]" href="/contact-sales">
        <span>Contáctanos</span>
        <svg class="h-4 w-4 fill-current ml-2" viewBox="0 0 20 20">
          <path d="M8 5l7 7-7 7" />
        </svg>
      </a> --> <a class="btn btn-purple btn-sm border-0" href="/signup">Contáctanos</a> </div> </nav> </header> <script>
  document.querySelectorAll(".dropdown-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const dropdown = e.target.nextElementSibling;
      dropdown.classList.toggle(
        dropdown.style === "hidden" ? "block" : "hidden"
      );
    });
  });

  // //sticky header
    document.addEventListener("astro:page-load", () => {
    const header = document.querySelector(".header");
    const pathname = window.location.pathname;

    // Array of paths where sticky header should be hidden
    const pathsToHideSticky = ['/about', '/contact-sales'];

    if (pathsToHideSticky.includes(pathname)) {
      return; // Skip sticky logic for these paths
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        header.classList.add("header-sticky");
      } else {
        header.classList.remove("header-sticky");
      }
    });
  });
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Logo", $$Logo, {}), main.map((menu2) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${menu2.hasChildren ? renderTemplate`<li class="nav-item nav-dropdown group relative cursor-pointer dropdown-button"> <span${addAttribute(`nav-link inline-flex items-center ${menu2.children?.some(
    (column) => column.items.some(
      ({ url }) => [url, `${url}/`].includes(pathname)
    )
  ) ? "active" : ""}`, "class")}> ${menu2.name} <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20"> <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path> </svg> </span> <ul id="dropdown" class="nav-dropdown-list hidden duration-300 lg:invisible lg:absolute lg:flex lg:justify-center lg:gap-4 lg:h-auto lg:w-auto lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100"> ${menu2.children?.map((column) => renderTemplate`<div class="col"> <h3 class="nav-dropdown-column-title">${column.columnTitle}</h3> <ul> ${column.items.map((child) => renderTemplate`<li class="nav-dropdown-item"> <a${addAttribute(child.url, "href")}${addAttribute(`nav-dropdown-link block ${(pathname === `${child.url}/` || pathname === child.url) && "text-[#50b9e0]"}`, "class")}> ${child.name} </a> </li>`)} </ul> </div>`)} </ul> </li>` : renderTemplate`<li class="nav-item"> <a${addAttribute(menu2.url, "href")}${addAttribute(`nav-link inline-block lg:block !text-[#00F5FF] ${(pathname === `${menu2.url}/` || pathname === menu2.url) && "active"}`, "class")}> ${menu2.name} </a> </li>`}` })}`));
}, "/Users/carlosmirosaguilera/Web Vigia Telcom/vigia-telcom/src/layouts/partials/Header.astro", void 0);

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
  return renderTemplate`<html lang="en" data-astro-cid-5hce7sga> <head><!-- favicon --><link rel="shortcut icon"${addAttribute(config.site.favicon, "href")}><!-- theme meta --><meta name="theme-name" content="violeta"><meta name="msapplication-TileColor" content="#000000"><meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff"><meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><!-- responsive meta --><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"><!-- title --><title>
      ${plainify(meta_title ? meta_title : title ? title : config.site.title)}
    </title><!-- canonical url -->${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")} item-prop="url">`}<!-- noindex robots -->${noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`}<!-- meta-description --><meta name="description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-5hce7sga": true })}<!-- author from config.json --><meta name="author"${addAttribute(config.metadata.meta_author, "content")}><!-- og-title --><meta property="og:title"${addAttribute(plainify(
    meta_title ? meta_title : title ? title : config.site.title
  ), "content")}><!-- og-description --><meta property="og:description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(`${config.site.base_url}/${Astro2.url.pathname.replace("/", "")}`, "content")}><!-- twitter-title --><meta name="twitter:title"${addAttribute(plainify(
    meta_title ? meta_title : title ? title : config.site.title
  ), "content")}><!-- twitter-description --><meta name="twitter:description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}><!-- og-image --><meta property="og:image"${addAttribute(`${config.site.base_url}${image ? image : config.metadata.meta_image}`, "content")}><!-- twitter-image --><meta name="twitter:image"${addAttribute(`${config.site.base_url}${image ? image : config.metadata.meta_image}`, "content")}><meta name="twitter:card" content="summary_large_image">${renderScript($$result, "/Users/carlosmirosaguilera/Web Vigia Telcom/vigia-telcom/src/layouts/Base.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body class="debug-screens bg-[#101419]" data-astro-cid-5hce7sga> <!-- <TwSizeIndicator /> --> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5hce7sga": true })} <main id="main-content" data-astro-cid-5hce7sga> ${renderSlot($$result, $$slots["default"])} </main> <!-- <Footer /> -->  <footer class="bg-[#181C21] pt-15 px-4 sm:px-6 md:px-8 lg:px-20 lg:py-16" data-astro-cid-5hce7sga> <div class="max-w-7xl mx-auto" data-astro-cid-5hce7sga> <div class="flex flex-col lg:flex-row gap-16 pb-12" data-astro-cid-5hce7sga> <div class="flex-1 max-w-full lg:max-w-[400px]" data-astro-cid-5hce7sga> <div class="mb-6 flex flex-row gap-4" data-astro-cid-5hce7sga> <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5hce7sga> <path d="m7.25 4.11 6 3.366 6-3.367m-12 20.176v-6.721l-6-3.367m24 0-6 3.367v6.72M1.61 7.67l11.64 6.54 11.64-6.54M13.25 27.25V14.197m12 5.18V9.017c0-.454-.124-.9-.358-1.293a2.63 2.63 0 0 0-.975-.947l-9.333-5.18a2.73 2.73 0 0 0-2.667 0l-9.333 5.18a2.63 2.63 0 0 0-.976.947 2.54 2.54 0 0 0-.358 1.293v10.36c0 .454.124.9.358 1.293s.57.72.976.947l9.333 5.18a2.73 2.73 0 0 0 2.667 0l9.333-5.18a2.63 2.63 0 0 0 .975-.947 2.53 2.53 0 0 0 .358-1.293" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5hce7sga></path> </svg> <p class="text-[#78D3EB] text-xl font-bold" data-astro-cid-5hce7sga>VIGIA TELCOM</p> </div> <p class="text-sm leading-7 text-zinc-500 mb-7 max-w-80" data-astro-cid-5hce7sga>
Proporcionando la infraestructura digital del mañana, hoy. Vigilancia y velocidad en perfecta armonía.
</p> <div class="flex gap-4" data-astro-cid-5hce7sga> <a href="#" class="size-9 rounded-full flex items-center justify-center hover:bg-zinc-50 transition-colors" data-astro-cid-5hce7sga> <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5hce7sga> <path d="m5.44.5 3.777 4.994.37.49.405-.463L14.385.5h1.428l-5.296 6.054-.269.306.246.325 6.479 8.565h-4.296l-4.195-5.484-.37-.486-.403.46-4.822 5.51h-1.43l5.716-6.533.27-.308-.25-.325L1.012.5zM2.822 1.867l9.972 13.036.15.197h2.78l-.607-.801-9.86-13.037-.15-.199h-2.9z" fill="#64748B" stroke="#64748B" data-astro-cid-5hce7sga></path> </svg> </a> <a href="#" class="size-9 rounded-ful flex items-center justify-center hover:bg-zinc-50 transition-colors" data-astro-cid-5hce7sga> <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5hce7sga> <path d="M.937 10.486a19.8 19.8 0 0 1 0-8.276 1.65 1.65 0 0 1 1.166-1.158c4.47-.736 9.03-.736 13.5 0A1.67 1.67 0 0 1 16.77 2.21a19.8 19.8 0 0 1 0 8.276 1.65 1.65 0 0 1-1.167 1.159c-4.47.735-9.03.735-13.5 0a1.67 1.67 0 0 1-1.166-1.159" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5hce7sga></path> <path d="m7.187 9.466 4.166-2.483L7.187 4.5z" stroke="#90a1b9" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5hce7sga></path> </svg> </a> <a href="#" class="size-9 rounded-full flex items-center justify-center hover:bg-zinc-50 transition-colors" data-astro-cid-5hce7sga> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5hce7sga> <path d="M13 .5H4.667C2.365.5.5 2.353.5 4.638v8.276c0 2.285 1.865 4.138 4.167 4.138H13c2.301 0 4.167-1.853 4.167-4.138V4.638C17.167 2.353 15.3.5 13 .5" stroke="#90a1b9" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5hce7sga></path> <path d="M12.167 8.325a3.3 3.3 0 0 1-.339 2.01 3.32 3.32 0 0 1-1.46 1.432 3.35 3.35 0 0 1-3.856-.616 3.29 3.29 0 0 1-.62-3.83c.315-.62.82-1.128 1.442-1.449a3.35 3.35 0 0 1 3.893.598c.505.502.835 1.152.94 1.855" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5hce7sga></path> </svg> </a> </div> </div> <div class="flex flex-wrap sm:flex-nowrap flex-1 justify-between gap-8 w-full max-w-3xl" data-astro-cid-5hce7sga> <div data-astro-cid-5hce7sga> <h3 class="text-base font-medium text-[#78D3EB] mb-6" data-astro-cid-5hce7sga>Quienes Somos</h3> <ul class="flex flex-col gap-3 list-none" data-astro-cid-5hce7sga> <li data-astro-cid-5hce7sga><a href="#" class="text-sm text-[#64748B] hover:text-zinc-700 transition-colors" data-astro-cid-5hce7sga>Nosotros</a></li> <li data-astro-cid-5hce7sga><a href="#" class="text-sm text-[#64748B] hover:text-zinc-700 transition-colors" data-astro-cid-5hce7sga>Trabaja con nosotros</a></li> </ul> </div> <div data-astro-cid-5hce7sga> <h3 class="text-base font-medium text-[#78D3EB] mb-6" data-astro-cid-5hce7sga>Atención al cliente</h3> <ul class="flex flex-col gap-3 list-none" data-astro-cid-5hce7sga> <li data-astro-cid-5hce7sga><a href="#" class="text-sm text-[#64748B] hover:text-zinc-700 transition-colors" data-astro-cid-5hce7sga>Contacto</a></li> <li data-astro-cid-5hce7sga><a href="#" class="text-sm text-[#64748B] hover:text-zinc-700 transition-colors" data-astro-cid-5hce7sga>Código de ética</a></li> <li data-astro-cid-5hce7sga><a href="#" class="text-sm text-[#64748B] hover:text-zinc-700 transition-colors" data-astro-cid-5hce7sga>Mapa de cobertura</a></li> </ul> </div> <div data-astro-cid-5hce7sga> <h3 class="text-base font-medium text-[#78D3EB] mb-6" data-astro-cid-5hce7sga>Legales </h3> <ul class="flex flex-col gap-3 list-none" data-astro-cid-5hce7sga> <li data-astro-cid-5hce7sga><a href="#" class="text-sm text-[#64748B] hover:text-zinc-700 transition-colors" data-astro-cid-5hce7sga>Tarifas</a></li> <li data-astro-cid-5hce7sga><a href="#" class="text-sm text-[#64748B] hover:text-zinc-700 transition-colors" data-astro-cid-5hce7sga>Catálogo de trámites</a></li> <li data-astro-cid-5hce7sga><a href="#" class="text-sm text-[#64748B] hover:text-zinc-700 transition-colors" data-astro-cid-5hce7sga>Contrato de Adhesión</a></li> <li data-astro-cid-5hce7sga><a href="#" class="text-sm text-[#64748B] hover:text-zinc-700 transition-colors" data-astro-cid-5hce7sga>Cobertura de Servicio</a></li> <li data-astro-cid-5hce7sga><a href="#" class="text-sm text-[#64748B] hover:text-zinc-700 transition-colors" data-astro-cid-5hce7sga>Carta de derechos mínimos</a></li> <li data-astro-cid-5hce7sga><a href="#" class="text-sm text-[#64748B] hover:text-zinc-700 transition-colors" data-astro-cid-5hce7sga>Código de prácticas comerciales</a></li> <li data-astro-cid-5hce7sga><a href="#" class="text-sm text-[#64748B] hover:text-zinc-700 transition-colors" data-astro-cid-5hce7sga>Código de Políticas de Gestión de Tráfico y Administración de Red</a></li> </ul> </div> </div> </div> <!-- <div class="flex flex-col md:flex-row gap-6 md:gap-16 py-9 max-w-6xl">
            <div class="flex items-start gap-2.5 flex-1">
                <div class="size-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.667 8.335c0 4.16-4.616 8.494-6.166 9.832a.83.83 0 0 1-1.002 0c-1.55-1.338-6.166-5.672-6.166-9.832a6.667 6.667 0 0 1 13.334 0" stroke="#45556c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M7.5 8.335 9.167 10 12.5 6.668" stroke="#45556c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div>
                    <h4 class="text-base font-medium text-zinc-800 mb-0.5">Address</h4>
                    <p class="text-sm text-zinc-500 leading-relaxed">548 Market Street, Suite 410<br />San Francisco, United States</p>
                </div>
            </div>
            <div class="flex items-start gap-2.5 flex-1">
                <div class="size-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#a)">
                            <path d="M10.95 13.115a.79.79 0 0 0 .96-.24l.282-.368a1.58 1.58 0 0 1 1.266-.633h2.375a1.583 1.583 0 0 1 1.584 1.583v2.375a1.583 1.583 0 0 1-1.584 1.583 14.25 14.25 0 0 1-14.25-14.25 1.583 1.583 0 0 1 1.584-1.583h2.375a1.583 1.583 0 0 1 1.583 1.583V5.54a1.58 1.58 0 0 1-.633 1.267l-.37.278a.79.79 0 0 0-.232.976 11.1 11.1 0 0 0 5.06 5.054" stroke="#45556c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" ></path>
                        </g>
                        <defs>
                            <clipPath id="a">
                                <path fill="#fff" d="M0 0h19v19H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div>
                    <h4 class="text-base font-medium text-zinc-800 mb-0.5">Phone</h4>
                    <p class="text-sm text-zinc-500 leading-relaxed">+1 (55) 123-4567</p>
                </div>
            </div>
            <div class="flex items-start gap-2.5 flex-1">
                <div class="size-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m18.333 5.832-7.492 4.773a1.67 1.67 0 0 1-1.674 0l-7.5-4.773" stroke="#45556c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M16.667 3.332H3.333c-.92 0-1.666.746-1.666 1.667v10c0 .92.746 1.666 1.666 1.666h13.334c.92 0 1.666-.746 1.666-1.666v-10c0-.92-.746-1.667-1.666-1.667" stroke="#45556c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div>
                    <h4 class="text-base font-medium text-zinc-800 mb-0.5">Email</h4>
                    <p class="text-sm text-zinc-500 leading-relaxed">contact@prebuiltui.com</p>
                </div>
            </div>
        </div> --> <div class="flex flex-col md:flex-row justify-between items-center gap-4 py-4 border-t border-[#78D3EB]" data-astro-cid-5hce7sga> <p class="text-sm text-zinc-500" data-astro-cid-5hce7sga>© 2026 Vigia Telcom. Todos los derechos reservados.</p> <div class="flex flex-wrap justify-center gap-5 md:gap-9" data-astro-cid-5hce7sga> <a href="#" class="text-sm text-[#64748B] hover:text-zinc-700 transition-colors" data-astro-cid-5hce7sga>Política de Privacidad</a> <a href="#" class="text-sm text-[#64748B] hover:text-zinc-700 transition-colors" data-astro-cid-5hce7sga>Aviso de Privacidad</a> <a href="#" class="text-sm text-[#64748B] hover:text-zinc-700 transition-colors" data-astro-cid-5hce7sga>Acerca de</a> </div> </div> </div> </footer> </body></html>`;
}, "/Users/carlosmirosaguilera/Web Vigia Telcom/vigia-telcom/src/layouts/Base.astro", void 0);

export { $$Base as $ };
