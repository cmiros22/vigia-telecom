import { $ as $$Base } from './Base_DVi7LqPn.mjs';
import { c as createComponent, V as VALID_INPUT_FORMATS } from './_astro_assets_CrcUxtTs.mjs';
import { g as generateCspDigest, s as spreadAttributes, u as unescapeHTML, b as renderTemplate, c as removeBase, i as isRemotePath, d as unflatten, o as object, e as date, f as array, A as AstroError, U as UnknownContentCollectionError, h as string, m as maybeRenderHead, r as renderComponent } from './entrypoint_DCprMgIr.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

const slides = [
  { id: 1, title: "Instalacion fibra optica", content: "Nuestros técnicos certificados", image: "../images/swiper/Slider_01.png" },
  { id: 2, title: "Cable fibra optica", content: "La mejor calidad de cable", image: "../images/swiper/Slider_02.png" }
];
const CarouselParallax = () => {
  const [key, setKey] = useState(0);
  const handleSlideChange = () => {
    setKey((prevKey) => prevKey + 1);
  };
  return /* @__PURE__ */ jsx(
    Swiper,
    {
      pagination: { clickable: true },
      spaceBetween: 50,
      autoplay: true,
      navigation: false,
      modules: [Autoplay, Pagination, Navigation],
      onSlideChange: handleSlideChange,
      className: "h-[90vh] relative",
      children: slides.map((slide) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full relative", children: [
        /* @__PURE__ */ jsx(
          motion.img,
          {
            src: slide.image,
            alt: slide.title,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.9 },
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-36 left-20", children: [
          /* @__PURE__ */ jsx(
            motion.h3,
            {
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 20 },
              transition: { duration: 0.5 },
              className: "text-4xl font-bold text-white",
              children: slide.title
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 20 },
              transition: { duration: 0.5, delay: 0.5 },
              className: "text-white",
              children: slide.content
            }
          )
        ] })
      ] }, key) }, slide.id))
    }
  );
};

var e=e=>Object.prototype.toString.call(e),t=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),o=t=>"[object Date]"===e(t),n=t=>"[object RegExp]"===e(t),r=t=>"[object Error]"===e(t),s=t=>"[object Boolean]"===e(t),l=t=>"[object Number]"===e(t),i=t=>"[object String]"===e(t),c=Array.isArray,u=Object.getOwnPropertyDescriptor,a=Object.prototype.propertyIsEnumerable,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.keys;function d(e){const t=h(e),o=f(e);for(let n=0;n<o.length;n++)a.call(e,o[n])&&t.push(o[n]);return t}function b(e,t){return !u(e,t)?.writable}function y(e,u){if("object"==typeof e&&null!==e){let a;if(c(e))a=[];else if(o(e))a=new Date(e.getTime?e.getTime():e);else if(n(e))a=new RegExp(e);else if(r(e))a={message:e.message};else if(s(e)||l(e)||i(e))a=Object(e);else {if(t(e))return e.slice();a=Object.create(Object.getPrototypeOf(e));}const f=u.includeSymbols?d:h;for(const t of f(e))a[t]=e[t];return a}return e}var g={includeSymbols:false,immutable:false};function m(e,t,o=g){const n=[],r=[];let s=true;const l=o.includeSymbols?d:h,i=!!o.immutable;return function e(u){const a=i?y(u,o):u,f={};let h=true;const d={node:a,node_:u,path:[].concat(n),parent:r[r.length-1],parents:r,key:n[n.length-1],isRoot:0===n.length,level:n.length,circular:void 0,isLeaf:false,notLeaf:true,notRoot:true,isFirst:false,isLast:false,update:function(e,t=false){d.isRoot||(d.parent.node[d.key]=e),d.node=e,t&&(h=false);},delete:function(e){delete d.parent.node[d.key],e&&(h=false);},remove:function(e){c(d.parent.node)?d.parent.node.splice(d.key,1):delete d.parent.node[d.key],e&&(h=false);},keys:null,before:function(e){f.before=e;},after:function(e){f.after=e;},pre:function(e){f.pre=e;},post:function(e){f.post=e;},stop:function(){s=false;},block:function(){h=false;}};if(!s)return d;function g(){if("object"==typeof d.node&&null!==d.node){d.keys&&d.node_===d.node||(d.keys=l(d.node)),d.isLeaf=0===d.keys.length;for(let e=0;e<r.length;e++)if(r[e].node_===u){d.circular=r[e];break}}else d.isLeaf=true,d.keys=null;d.notLeaf=!d.isLeaf,d.notRoot=!d.isRoot;}g();const m=t(d,d.node);if(void 0!==m&&d.update&&d.update(m),f.before&&f.before(d,d.node),!h)return d;if("object"==typeof d.node&&null!==d.node&&!d.circular){r.push(d),g();for(const[t,o]of Object.entries(d.keys??[])){n.push(o),f.pre&&f.pre(d,d.node[o],o);const r=e(d.node[o]);i&&p.call(d.node,o)&&!b(d.node,o)&&(d.node[o]=r.node),r.isLast=!!d.keys?.length&&+t==d.keys.length-1,r.isFirst=0==+t,f.post&&f.post(d,r),n.pop();}r.pop();}return f.after&&f.after(d,d.node),d}(e).node}var j=class{#e;#t;constructor(e,t=g){this.#e=e,this.#t=t;}get(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return;t=t[n];}return t}has(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return  false;t=t[n];}return  true}set(e,t){let o=this.#e,n=0;for(n=0;n<e.length-1;n++){const t=e[n];p.call(o,t)||(o[t]={}),o=o[t];}return o[e[n]]=t,t}map(e){return m(this.#e,e,{immutable:true,includeSymbols:!!this.#t.includeSymbols})}forEach(e){return this.#e=m(this.#e,e,this.#t),this.#e}reduce(e,t){const o=1===arguments.length;let n=o?this.#e:t;return this.forEach(((t,r)=>{t.isRoot&&o||(n=e(t,n,r));})),n}paths(){const e=[];return this.forEach((t=>{e.push(t.path);})),e}nodes(){const e=[];return this.forEach((t=>{e.push(t.node);})),e}clone(){const e=[],o=[],n=this.#t;return t(this.#e)?this.#e.slice():function t(r){for(let t=0;t<e.length;t++)if(e[t]===r)return o[t];if("object"==typeof r&&null!==r){const s=y(r,n);e.push(r),o.push(s);const l=n.includeSymbols?d:h;for(const e of l(r))s[e]=t(r[e]);return e.pop(),o.pop(),s}return r}(this.#e)}};

function createSvgComponent({ meta, attributes, children, styles }) {
  const hasStyles = styles.length > 0;
  const Component = createComponent({
    async factory(result, props) {
      const normalizedProps = normalizeProps(attributes, props);
      if (hasStyles && result.cspDestination) {
        for (const style of styles) {
          const hash = await generateCspDigest(style, result.cspAlgorithm);
          result._metadata.extraStyleHashes.push(hash);
        }
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
    },
    propagation: hasStyles ? "self" : "none"
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_D4oOR4yb.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

object({
  tags: array(string()).optional(),
  lastModified: date().optional()
});
function createGetCollection({
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
  };
}
function createGetEntry({ liveCollections }) {
  return async function getEntry(collectionOrLookupObject, lookup) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!lookup)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = lookup;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
      });
    }
    if (typeof lookupId === "object") {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `The entry identifier must be a string. Received object.`
      });
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry = store.get(collection, lookupId);
      if (!entry) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      entry.data = updateImageReferencesInData(entry.data, entry.filePath, imageAssetMap);
      const result = {
        ...entry,
        collection
      };
      warnForPropertyAccess(
        result.data,
        "slug",
        `[content] Attempted to access deprecated property on "${collection}" entry.
The "slug" property is no longer automatically added to entries. Please use the "id" property instead.`
      );
      warnForPropertyAccess(
        result,
        "render",
        `[content] Invalid attempt to access "render()" method on "${collection}" entry.
To render an entry, use "render(entry)" from "astro:content".`
      );
      return result;
    }
    return void 0;
  };
}
function warnForPropertyAccess(entry, prop, message) {
  if (!(prop in entry)) {
    let _value = void 0;
    Object.defineProperty(entry, prop, {
      get() {
        if (_value === void 0) {
          console.error(message);
        }
        return _value;
      },
      set(v) {
        _value = v;
      },
      enumerable: false
    });
  }
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new j(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        if (imported.__svgData) {
          const { __svgData: svgData, ...meta } = imported;
          ctx.update(createSvgComponent({ meta, ...svgData }));
        } else {
          ctx.update(imported);
        }
      } else {
        ctx.update(src);
      }
    }
  });
}

// astro-head-inject

const liveCollections = {};

const getCollection = createGetCollection({
	liveCollections,
});

const getEntry = createGetEntry({
	liveCollections,
});

const getSinglePage = async (collection) => {
  const allPage = await getCollection(collection);
  const removeIndex = allPage.filter((data) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data) => !data.data.draft);
  return removeDrafts;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/carlosmirosaguilera/Web Vigia Telcom/vigia-telcom/src/lib/contentParser.astro", void 0);

const getTaxonomy = async (collection, name) => {
  const singlePages = await getSinglePage(collection);
  const taxonomyPages = singlePages.map((page) => page.data[name]);
  let taxonomies = [];
  for (let i = 0; i < taxonomyPages.length; i++) {
    const categoryArray = taxonomyPages[i];
    for (let j = 0; j < categoryArray.length; j++) {
      taxonomies.push(categoryArray[j]);
    }
  }
  const taxonomy = [...new Set(taxonomies)];
  return taxonomy;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/carlosmirosaguilera/Web Vigia Telcom/vigia-telcom/src/lib/taxonomyParser.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Plans = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section class="min-h-[90vh] flex items-center justify-center flex-col py-20 px-4 bg-[#101419]"> <h1 class="font-medium text-lg md:text-lg text-[#78D3EB] text-start px-4" style="width: stretch">
NUESTROS PLANES
</h1> <p class="text-4xl text-[#E0E2EA] p-4 text-start mt-4" style="width: stretch">
Elige el plan que mejor se adapte a tus necesidades
</p> <div class="mt-6 flex bg-[#2a2f34] p-1.5 rounded-full"> <button id="monthlyBtn" onclick="togglePricing(false)" class="px-4 py-2 rounded-full text-xs cursor-pointer transition text-white">Mensual</button> <button id="annuallyBtn" onclick="togglePricing(true)" class="px-4 py-2 rounded-full text-xs cursor-pointer transition bg-[#00F5FF] hover:bg-[#00d4e6] text-gray-600">Anual</button> </div> <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <div class="bg-[#1a1e23] rounded-2xl p-6 flex flex-col items-start max-w-md transition duration-300 border-2 border-transparent hover:-translate-y-1 hover:border-[#00F5FF] hover:bg-[#2a2e33]"> <h1 class="font-medium text-lg text-gray-200 mt-1">Basico Sentinel</h1> <p class="text-2xl text-gray-200 mt-2">500 Mbps</p> <h1 class="font-medium text-5xl text-gray-200 mt-6">$<span id="basicPrice">350</span></h1> <div class="w-full mt-8 space-y-2.5 pb-4"> <p class="flex items-center gap-3 text-sm text-zinc-200"> <span class="size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0"> <span class="size-1.5 rounded-full bg-zinc-800"></span> </span>
Essential site setup support
</p> <p class="flex items-center gap-3 text-sm text-zinc-200"> <span class="size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0"> <span class="size-1.5 rounded-full bg-zinc-800"></span> </span>
Access to basic UI templates
</p> <p class="flex items-center gap-3 text-sm text-zinc-200"> <span class="size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0"> <span class="size-1.5 rounded-full bg-zinc-800"></span> </span>
Email support for minor updates
</p> <p class="flex items-center gap-3 text-sm text-zinc-200"> <span class="size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0"> <span class="size-1.5 rounded-full bg-zinc-800"></span> </span>
Access to basic components
</p> </div> <button class="relative w-full border border-[#3E484C] px-4 py-3 rounded-full cursor-pointer text-[#E0E2EA] text-sm mt-8 transition-all duration-300 overflow-hidden hover:text-[#003640] hover:translate-y-[-2px] group"> <span class="relative z-10">Seleccionar plan</span> <div class="absolute inset-0 bg-[linear-gradient(90deg,_rgb(43,_215,_229)_0%,_rgb(15,_186,_203)_49%,_rgb(15,_150,_171)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div> </button> </div> <div class="bg-[#1a1e23] rounded-2xl p-6 flex flex-col items-start max-w-md transition duration-300 border-2 border-transparent hover:-translate-y-1 hover:border-[#00F5FF] hover:bg-[#2a2e33] relative"> <h1 class="font-medium text-lg text-gray-200 mt-1">Pro Guardian</h1> <p class="text-2xl text-gray-200 mt-2">1000 Mbps</p> <h1 class="font-medium text-5xl text-gray-200 mt-6">$<span id="proPrice">450</span></h1> <div class="absolute -top-3 left-1/2 transform -translate-x-1/2"> <span class="inline-block px-4 py-1.5 bg-[#00F5FF] border border-rose-600 rounded-full text-sm font-bold">
Recomendado
</span> </div> <div class="w-full mt-8 space-y-2.5 pb-4"> <p class="flex items-center gap-3 text-sm text-zinc-200"> <span class="size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0"> <span class="size-1.5 rounded-full bg-zinc-800"></span> </span>
Custom web page design up to 5 pages
</p> <p class="flex items-center gap-3 text-sm text-zinc-200"> <span class="size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0"> <span class="size-1.5 rounded-full bg-zinc-800"></span> </span>
Access to basic UI templates
</p> <p class="flex items-center gap-3 text-sm text-zinc-200"> <span class="size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0"> <span class="size-1.5 rounded-full bg-zinc-800"></span> </span>
Email support for minor updates
</p> <p class="flex items-center gap-3 text-sm text-zinc-200"> <span class="size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0"> <span class="size-1.5 rounded-full bg-zinc-800"></span> </span>
Access to basic components
</p> </div> <button class="w-full px-4 py-3 rounded-full cursor-pointer text-[#003640] text-sm mt-8 bg-[linear-gradient(90deg,_rgb(43,_215,_229)_0%,_rgb(15,_186,_203)_49%,_rgb(15,_150,_171)_100%)]">
Contratar
</button> </div> <div class="bg-[#1a1e23] rounded-2xl p-6 flex flex-col items-start max-w-md transition duration-300 border-2 border-transparent hover:-translate-y-1 hover:border-[#00F5FF] hover:bg-[#2a2e33]"> <h1 class="font-medium text-lg text-gray-200 mt-1">Business Shield</h1> <p class="text-2xl text-gray-200 mt-2">2.5 Gbps</p> <h1 class="font-medium text-5xl text-gray-200 mt-6">$<span id="enterprisePrice">600</span></h1> <div class="w-full mt-8 space-y-2.5 pb-4"> <p class="flex items-center gap-3 text-sm text-zinc-200"> <span class="size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0"> <span class="size-1.5 rounded-full bg-zinc-800"></span> </span>
Full website redesign & development
</p> <p class="flex items-center gap-3 text-sm text-zinc-200"> <span class="size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0"> <span class="size-1.5 rounded-full bg-zinc-800"></span> </span>
Advanced analytics insights
</p> <p class="flex items-center gap-3 text-sm text-zinc-200"> <span class="size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0"> <span class="size-1.5 rounded-full bg-zinc-800"></span> </span>
Ongoing dedicated support
</p> <p class="flex items-center gap-3 text-sm text-zinc-200"> <span class="size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0"> <span class="size-1.5 rounded-full bg-zinc-800"></span> </span>
Access to basic UI templates
</p> </div> <button class="relative w-full border border-[#3E484C] px-4 py-3 rounded-full cursor-pointer text-[#E0E2EA] text-sm mt-8 transition-all duration-300 overflow-hidden hover:text-[#003640] hover:translate-y-[-2px] group"> <span class="relative z-10">Seleccionar plan</span> <div class="absolute inset-0 bg-[linear-gradient(90deg,_rgb(43,_215,_229)_0%,_rgb(15,_186,_203)_49%,_rgb(15,_150,_171)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div> </button> </div> </div> </section> <script>
    let isAnnual = true;

    const pricing = {
        basic: { monthly: 10, annual: 100 },
        pro: { monthly: 30, annual: 300 },
        enterprise: { monthly: 50, annual: 500 }
    };

    function togglePricing(annual) {
        isAnnual = annual;

        // Update prices
        document.getElementById('basicPrice').textContent = isAnnual ? pricing.basic.annual : pricing.basic.monthly;
        document.getElementById('proPrice').textContent = isAnnual ? pricing.pro.annual : pricing.pro.monthly;
        document.getElementById('enterprisePrice').textContent = isAnnual ? pricing.enterprise.annual : pricing.enterprise.monthly;

        // Update button styles
        const monthlyBtn = document.getElementById('monthlyBtn');
        const annuallyBtn = document.getElementById('annuallyBtn');

        if (isAnnual) {
            monthlyBtn.className = 'px-4 py-2 rounded-full text-xs cursor-pointer transition text-white transition';
            annuallyBtn.className = 'px-4 py-2 rounded-full text-xs cursor-pointer transition bg-[#00F5FF] hover:bg-[#00d4e6] text-gray-600 transition';
        } else {
            monthlyBtn.className = 'px-4 py-2 rounded-full text-xs cursor-pointer transition bg-[#00F5FF] hover:bg-[#00d4e6] text-gray-600 transition';
            annuallyBtn.className = 'px-4 py-2 rounded-full text-xs cursor-pointer transition text-white transition';
        }
    }
<\/script>`])), maybeRenderHead());
}, "/Users/carlosmirosaguilera/Web Vigia Telcom/vigia-telcom/src/layouts/components/Plans.astro", void 0);

const InnovationIcon = createSvgComponent({"meta":{"src":"/_astro/innovation.CZ1c4nzs.svg","width":31,"height":31,"format":"svg"},"attributes":{"width":"31","height":"31","viewBox":"0 0 31 31","fill":"none"},"children":"\n<path d=\"M5.4 11.9933L8.325 13.2308C8.675 12.5308 9.0375 11.8558 9.4125 11.2058C9.7875 10.5558 10.2 9.90585 10.65 9.25585L8.55 8.84335L5.4 11.9933ZM10.725 15.1058L15 19.3433C16.05 18.9433 17.175 18.3308 18.375 17.5058C19.575 16.6808 20.7 15.7433 21.75 14.6933C23.5 12.9433 24.8688 10.9996 25.8563 8.8621C26.8438 6.7246 27.275 4.75585 27.15 2.95585C25.35 2.83085 23.375 3.2621 21.225 4.2496C19.075 5.2371 17.125 6.60585 15.375 8.35585C14.325 9.40585 13.3875 10.5308 12.5625 11.7308C11.7375 12.9308 11.125 14.0558 10.725 15.1058ZM17.4 12.6683C16.825 12.0933 16.5375 11.3871 16.5375 10.5496C16.5375 9.7121 16.825 9.00585 17.4 8.43085C17.975 7.85585 18.6875 7.56835 19.5375 7.56835C20.3875 7.56835 21.1 7.85585 21.675 8.43085C22.25 9.00585 22.5375 9.7121 22.5375 10.5496C22.5375 11.3871 22.25 12.0933 21.675 12.6683C21.1 13.2433 20.3875 13.5308 19.5375 13.5308C18.6875 13.5308 17.975 13.2433 17.4 12.6683ZM18.1125 24.7058L21.2625 21.5558L20.85 19.4558C20.2 19.9058 19.55 20.3121 18.9 20.6746C18.25 21.0371 17.575 21.3933 16.875 21.7433L18.1125 24.7058ZM29.85 0.218347C30.325 3.24335 30.0312 6.1871 28.9688 9.0496C27.9062 11.9121 26.075 14.6433 23.475 17.2433L24.225 20.9558C24.325 21.4558 24.3 21.9433 24.15 22.4183C24 22.8933 23.75 23.3058 23.4 23.6558L17.1 29.9558L13.95 22.5683L7.5375 16.1558L0.15 13.0058L6.4125 6.70585C6.7625 6.35585 7.18125 6.10585 7.66875 5.95585C8.15625 5.80585 8.65 5.78085 9.15 5.88085L12.8625 6.63085C15.4625 4.03085 18.1875 2.19335 21.0375 1.11835C23.8875 0.0433468 26.825 -0.256653 29.85 0.218347ZM2.8125 20.9183C3.6875 20.0433 4.75625 19.5996 6.01875 19.5871C7.28125 19.5746 8.35 20.0058 9.225 20.8808C10.1 21.7558 10.5312 22.8246 10.5188 24.0871C10.5063 25.3496 10.0625 26.4183 9.1875 27.2933C8.5625 27.9183 7.51875 28.4558 6.05625 28.9058C4.59375 29.3558 2.575 29.7558 0 30.1058C0.35 27.5308 0.75 25.5121 1.2 24.0496C1.65 22.5871 2.1875 21.5433 2.8125 20.9183ZM4.95 23.0183C4.7 23.2683 4.45 23.7246 4.2 24.3871C3.95 25.0496 3.775 25.7183 3.675 26.3933C4.35 26.2933 5.01875 26.1246 5.68125 25.8871C6.34375 25.6496 6.8 25.4058 7.05 25.1558C7.35 24.8558 7.5125 24.4933 7.5375 24.0683C7.5625 23.6433 7.425 23.2808 7.125 22.9808C6.825 22.6808 6.4625 22.5371 6.0375 22.5496C5.6125 22.5621 5.25 22.7183 4.95 23.0183Z\" fill=\"#78D3EB\" />\n","styles":[]});

const SecurityIcon = createSvgComponent({"meta":{"src":"/_astro/security.HR_YKnJl.svg","width":24,"height":30,"format":"svg"},"attributes":{"width":"24","height":"30","viewBox":"0 0 24 30","fill":"none"},"children":"\n<path d=\"M12 30C8.525 29.125 5.65625 27.1312 3.39375 24.0187C1.13125 20.9062 0 17.45 0 13.65V4.5L12 0L24 4.5V13.65C24 17.45 22.8688 20.9062 20.6063 24.0187C18.3438 27.1312 15.475 29.125 12 30ZM12 26.85C14.425 26.1 16.45 24.6187 18.075 22.4062C19.7 20.1938 20.65 17.725 20.925 15H12V3.1875L3 6.5625V13.65C3 13.925 3 14.15 3 14.325C3 14.5 3.025 14.725 3.075 15H12V26.85Z\" fill=\"#78D3EB\" />\n","styles":[]});

const SpeedIcon = createSvgComponent({"meta":{"src":"/_astro/speed.Bpp37t2d.svg","width":30,"height":24,"format":"svg"},"attributes":{"width":"30","height":"24","viewBox":"0 0 30 24","fill":"none"},"children":"\n<path d=\"M12.675 17.25C13.275 17.85 14.05 18.1438 15 18.1313C15.95 18.1187 16.65 17.775 17.1 17.1L25.5 4.5L12.9 12.9C12.225 13.35 11.8688 14.0375 11.8313 14.9625C11.7937 15.8875 12.075 16.65 12.675 17.25ZM15 0C16.475 0 17.8938 0.20625 19.2563 0.61875C20.6187 1.03125 21.9 1.65 23.1 2.475L20.25 4.275C19.425 3.85 18.5688 3.53125 17.6812 3.31875C16.7937 3.10625 15.9 3 15 3C11.675 3 8.84375 4.16875 6.50625 6.50625C4.16875 8.84375 3 11.675 3 15C3 16.05 3.14375 17.0875 3.43125 18.1125C3.71875 19.1375 4.125 20.1 4.65 21H25.35C25.925 20.05 26.3438 19.0625 26.6063 18.0375C26.8688 17.0125 27 15.95 27 14.85C27 13.95 26.8937 13.075 26.6812 12.225C26.4688 11.375 26.15 10.55 25.725 9.75L27.525 6.9C28.275 8.075 28.8687 9.325 29.3062 10.65C29.7437 11.975 29.975 13.35 30 14.775C30.025 16.2 29.8625 17.5625 29.5125 18.8625C29.1625 20.1625 28.65 21.4 27.975 22.575C27.7 23.025 27.325 23.375 26.85 23.625C26.375 23.875 25.875 24 25.35 24H4.65C4.125 24 3.625 23.875 3.15 23.625C2.675 23.375 2.3 23.025 2.025 22.575C1.375 21.45 0.875 20.2563 0.525 18.9937C0.175 17.7312 0 16.4 0 15C0 12.925 0.39375 10.9812 1.18125 9.16875C1.96875 7.35625 3.04375 5.76875 4.40625 4.40625C5.76875 3.04375 7.3625 1.96875 9.1875 1.18125C11.0125 0.39375 12.95 0 15 0Z\" fill=\"#00DCE5\" />\n","styles":[]});

const $$Characteristics = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 px-4 bg-[#0B0F14]"> <div class="grid rounded-lg max-w-6xl mx-auto grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"> <div class="flex flex-col items-start gap-4 transition duration-300 p-14"> <div class="flex items-start p-4 gap-2 text-gray-500 bg-[#31353B] rounded-xl"> ${renderComponent($$result, "InnovationIcon", InnovationIcon, { "width": "24", "height": "24", "class": "Innovation-icon" })} </div> <div> <h2 class="font-medium text-base text-gray-500">Innovación</h2> </div> <p class="text-gray-500 text-sm/6 max-w-72">
Implementamos las últimas tecnologías en hardware de red para garantizar que tu conexión nunca quede obsoleta.
</p> </div> <div class="flex flex-col items-start gap-4 transition duration-300 p-14"> <div class="flex items-start p-4 gap-2 text-gray-500 bg-[#31353B] rounded-xl"> ${renderComponent($$result, "SpeedIcon", SpeedIcon, { "width": "24", "height": "24", "class": "Speed-icon" })} </div> <div> <h2 class="font-medium text-base text-gray-500">Velocidad</h2> </div> <p class="text-gray-500 text-sm/6 max-w-72">Fibra óptica pura hasta tu hogar. Sin cuellos de botella, sin esperas, solo velocidad instantánea.
</p> </div> <div class="flex flex-col items-start gap-4 transition duration-300 p-14"> <div class="flex items-start p-4 gap-2 text-gray-500 bg-[#31353B] rounded-xl"> ${renderComponent($$result, "SecurityIcon", SecurityIcon, { "width": "24", "height": "24", "class": "Security-icon" })} </div> <div> <h2 class="font-medium text-base text-gray-500">Seguridad</h2> </div> <p class="text-gray-500 text-sm/6 max-w-72">Nuestro sistema vigía monitorea patrones de amenaza para proteger tu privacidad desde el primer nodo.
</p> </div> </div> </section>`;
}, "/Users/carlosmirosaguilera/Web Vigia Telcom/vigia-telcom/src/layouts/components/characteristics.astro", void 0);

const $$Promotional = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 px-4"> <section class="flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-2 max-w-5xl w-full text-center rounded-2xl py-20 md:py-24 bg-[url('/images/swiper/FiberOptic.png')] bg-cover bg-center bg-no-repeat relative"> <div class="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div> <div class="relative z-10 flex flex-col items-center gap-7"> <h1 class="text-2xl md:text-3xl font-medium text-white max-w-2xl">Únete a la revolución de la fibra óptica</h1> <div class="h-[3px] w-32 my-1 bg-gradient-to-l from-transparent to-white"></div> <p class="text-sm md:text-base text-white max-w-xl">
El futuro nos espera. Conecta tu hogar o negocio con la red más confiable y segura del país.
</p> <div class="flex flex-row gap-6"> <button class="text-[#003640] px-10 py-3 mt-4 text-sm bg-white hover:scale-105 transition duration-300 rounded-full bg-[linear-gradient(90deg,_rgb(43,_215,_229)_0%,_rgb(15,_186,_203)_49%,_rgb(15,_150,_171)_100%)]">
Comenzar Registro
</button> <button class="text-[#E0E2EA] px-10 py-3 mt-4 text-sm bg-[#31353B] hover:scale-105 transition duration-300 rounded-full ">
Hablar con un asesor
</button> </div> </div> </section> </section>`;
}, "/Users/carlosmirosaguilera/Web Vigia Telcom/vigia-telcom/src/layouts/partials/Promotional.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  await getTaxonomy("integrations", "categories");
  await getSinglePage("integrations");
  const how = await getEntry("how", "index");
  how ? {
    ...how.data,
    content: how.body
  } : {
    };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CarouselParallax", CarouselParallax, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/CarouselParallax", "client:component-export": "default" })}    ${renderComponent($$result2, "Characteristics", $$Characteristics, {})} ${renderComponent($$result2, "Plans", $$Plans, {})} ${renderComponent($$result2, "Promotional", $$Promotional, {})}  ` })}`;
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
