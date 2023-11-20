/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent, s as spreadAttributes, u as unescapeHTML, F as Fragment, g as createTransitionScope, f as renderSlot } from '../astro/server_de889e61.mjs';
import 'clsx';
import { $ as $$Layout, a as $$CTAButton, b as $$Image } from './404_1f025aa2.mjs';
import { s as styles, a as styles$1, b as styles$2 } from '../index.222a3623_36b6484b.mjs';
import { optimize } from 'svgo';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
/* empty css                           */
const navLinksData = [
  {
    text: "About.",
    href: "#about",
  },
  {
    text: "Skills.",
    href: "#skills",
  },
  {
    text: "Works.",
    href: "#works",
  },
  {
    text: "Contact.",
    href: "#contact",
  },
];

const $$Astro$m = createAstro();
const $$NavLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href, text, style } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="nav__item text-2xl md:text-4xl xl:text-6xl"${addAttribute(style, "style")}${addAttribute(href, "href")} data-astro-cid-y46ac4dy>${text}</a>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Links/NavLink.astro", void 0);

const $$Astro$l = createAstro();
const $$NavLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$NavLinks;
  return renderTemplate`${navLinksData.map((link, i) => {
    return renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { "href": link.href, "text": link.text.toUpperCase(), "style": `--delay : ${i}` })}`;
  })}`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Links/NavLinks.astro", void 0);

const __vite_glob_1_0 = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z\"/></svg>";

const __vite_glob_1_1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z\"/></svg>";

const __vite_glob_1_2 = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"/></svg>";

const __vite_glob_1_3 = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z\"/></svg>";

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({"/src/icons/Facebook.svg": __vite_glob_1_0,"/src/icons/Github.svg": __vite_glob_1_1,"/src/icons/Instagram.svg": __vite_glob_1_2,"/src/icons/LinkedIn.svg": __vite_glob_1_3});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$k = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/node_modules/.pnpm/astro-icon@0.8.1/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$j = createAstro();
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}</svg>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/node_modules/.pnpm/astro-icon@0.8.1/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$i = createAstro();
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/node_modules/.pnpm/astro-icon@0.8.1/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$h = createAstro();
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>${title ? renderTemplate`<title>${title}</title>` : ""}<use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use></svg>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/node_modules/.pnpm/astro-icon@0.8.1/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$g = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav class="nav relative flex justify-between"><a class="nav__name full-name text-2xl md:text-4xl xl:text-6xl" href="#hero" id="nametag">LEO LECEE</a><input type="checkbox" id="check-menu" class="hidden"><label class="cursor-pointer hamburger hidden" for="check-menu">${renderComponent($$result, "Icon", $$Icon, { "name": "ic:round-menu", "width": "36px", "id": "menu-open", "color": "var(--text-primary)" })}${renderComponent($$result, "Icon", $$Icon, { "name": "ic:round-close", "width": "36px", "id": "menu-close", "color": "var(--text-primary)" })}</label><div class="flex flex-wrap nav__menu">${renderComponent($$result, "NavLinks", $$NavLinks, {})}</div></nav>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Navbar/Navbar.astro", void 0);

const $$Astro$f = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full z-50 top-0" data-astro-cid-2w66rqv5>${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-2w66rqv5": true })}</header>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Header/Header.astro", void 0);

const DateAPI = () => {
  const date = /* @__PURE__ */ new Date();
  const [displayDate, setDisplayDate] = useState("");
  const desktopOptions = {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "short"
  };
  const mobileOptions = {
    weekday: "short",
    day: "numeric",
    month: "2-digit",
    year: "2-digit"
  };
  useEffect(() => {
    const windowWidth = window.innerWidth;
    const formattedDate = date.toLocaleDateString(
      "en-GB",
      windowWidth < 768 ? mobileOptions : desktopOptions
    );
    setDisplayDate(formattedDate);
  }, []);
  return /* @__PURE__ */ jsx("p", { children: displayDate });
};

const $$Astro$e = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Footer;
  const date = /* @__PURE__ */ new Date();
  const year = date.getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="flex text-base justify-between p-4 relative bottom-0 overflow-hidden" data-astro-cid-ak3upacl${addAttribute(createTransitionScope($$result, "nvd2zo54"), "data-astro-transition-persist")}><div data-astro-cid-ak3upacl></div><p class="flex md:hidden" data-astro-cid-ak3upacl>&#169; ${year}</p><p class="hidden md:flex" data-astro-cid-ak3upacl>Copyright ${year}</p>${renderComponent($$result, "DateAPI", DateAPI, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/API/DateAPI/DateAPI", "client:component-export": "default", "data-astro-cid-ak3upacl": true })}</footer>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Footer/Footer.astro", "self");

const $$Astro$d = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, {})}${renderSlot($$result2, $$slots["default"])}${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/layouts/MainLayout.astro", void 0);

const socialData = [
  {
    name: "Github",
    icon: "fa:github-square",
    href: "https://www.github.com",
  },
  {
    name: "Facebook",
    icon: "fa:facebook-square",
    href: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: "fa:instagram",
    href: "https://www.instagram.com",
  },
  {
    name: "LinkedIn",
    icon: "fa:linkedin-square",
    href: "https://www.linkedin.com/",
  },
];

const $$Astro$c = createAstro();
const $$SocialLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SocialLink;
  const {
    text,
    href,
    icon,
    color,
    size = "32px",
    classes,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`${[classes]} test`, "class:list")}${spreadAttributes(rest)} target="_blank"${addAttribute(`Link to ${icon.name}`, "aria-label")}${addAttribute(icon, "id")} data-astro-cid-rzonviyn>${renderComponent($$result, "Icon", $$Icon, { "name": icon, "color": color, "width": size, "class": "icon", "data-astro-cid-rzonviyn": true })}</a>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Links/SocialLink.astro", void 0);

const $$Astro$b = createAstro();
const $$SocialLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SocialLinks;
  return renderTemplate`${maybeRenderHead()}<aside class="social absolute z-10 left-8 bottom-0 flex flex-col-reverse gap-4 items-center" data-astro-cid-zsiyppfo><div class="relative" id="socialLine" data-astro-cid-zsiyppfo></div><ul class="flex flex-col gap-4 relative" data-astro-cid-zsiyppfo>${socialData.map((item) => {
    return renderTemplate`<li data-astro-cid-zsiyppfo>${renderComponent($$result, "SocialLink", $$SocialLink, { "href": item.href, "icon": item.icon, "id": item.name, "data-astro-cid-zsiyppfo": true })}</li>`;
  })}</ul></aside>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Links/SocialLinks.astro", void 0);

const $$Astro$a = createAstro();
const $$ScrollArrow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ScrollArrow;
  return renderTemplate`${maybeRenderHead()}<button id="scrollToTop" class="border border-[var(--text-primary)] rounded-lg z-10 cursor-pointer fixed bottom-[var(--footer-height)] mb-4 right-10" data-astro-cid-m7x2x5kg>${renderComponent($$result, "Icon", $$Icon, { "id": "icon", "name": "ph:arrow-down-thin", "width": "48px", "height": "100px", "fill": "var(--border-strong)", "color": "var(--text-primary)", "data-astro-cid-m7x2x5kg": true })}</button>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Hero/ScrollArrow.astro", void 0);

const $$Astro$9 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="relative" data-astro-cid-a42nmg7r>${renderComponent($$result, "SocialLinks", $$SocialLinks, { "data-astro-cid-a42nmg7r": true })}<div class="hero_wrapper absolute inset-0 pt-[var(--header-height)] flex flex-col gap-8" data-astro-cid-a42nmg7r><div class="text-center" data-astro-cid-a42nmg7r><div class="clip" data-astro-cid-a42nmg7r><h3 id="first-line" class="text-[1.75rem] md:text-5xl xl:text-[3.5rem]" data-astro-cid-a42nmg7r>
Hi my name is Léo,
</h3></div><div class="clip" data-astro-cid-a42nmg7r><h3 class="text-[1.75rem] md:text-5xl xl:text-[3.5rem]" data-astro-cid-a42nmg7r>
I am a dedicated, passionate
</h3></div><div class="clip" data-astro-cid-a42nmg7r><h1 class="text-[6rem] md:text-[10rem] xl:text-[12rem] uppercase" data-astro-cid-a42nmg7r>
Front-End
</h1></div><div class="clip" data-astro-cid-a42nmg7r><h1 class="text-[6rem] md:text-[10rem] xl:text-[12rem] uppercase" data-astro-cid-a42nmg7r>
Developer
</h1></div><div class="clip" data-astro-cid-a42nmg7r><h3 id="last-line" class="text-[1.75rem] md:text-5xl xl:text-[3.5rem]" data-astro-cid-a42nmg7r>
Let's create <span class="accent" data-astro-cid-a42nmg7r>YOUR</span> web today.
</h3></div></div>${renderComponent($$result, "CTAButton", $$CTAButton, { "text": "Contact me", "href": "#contact", "data-astro-cid-a42nmg7r": true })}${renderComponent($$result, "ScrollArrow", $$ScrollArrow, { "data-astro-cid-a42nmg7r": true })}</div></section><!-- Animation Script -->`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Hero/Hero.astro", void 0);

const SectionTitle = ({ title }) => {
  const firstLine = useRef(null);
  const secondLine = useRef(null);
  const thirdLine = useRef(null);
  const slider = useRef(null);
  return /* @__PURE__ */ jsx("div", { className: "flex relative z-[1] section-title", id: "sliderContainer", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref: slider,
      className: `${styles.slider} flex relative bg-transparent z-[1] whitespace-nowrap`,
      children: [
        /* @__PURE__ */ jsx(
          "h2",
          {
            "data-content": title,
            ref: firstLine,
            className: "relative uppercase text-[4rem] md:text-[6rem] xl:text-[8rem] leading-none",
            children: title
          }
        ),
        /* @__PURE__ */ jsx(
          "h2",
          {
            "data-content": title,
            ref: secondLine,
            className: "relative uppercase text-[4rem] md:text-[6rem] xl:text-[8rem] leading-none",
            children: title
          }
        ),
        /* @__PURE__ */ jsx(
          "h2",
          {
            "data-content": title,
            ref: thirdLine,
            className: "relative uppercase text-[4rem] md:text-[6rem] xl:text-[8rem] leading-none",
            children: title
          }
        )
      ]
    }
  ) });
};

const $$Astro$8 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section id="about" class="relative h-screen pt-[var(--header-height)] pb-[var(--footer-height)] overflow-hidden flex flex-col gap-4 xl:gap-8 justify-center items-center" data-astro-cid-vky6iplv><!--   <div class="background absolute z-0 inset-0">
    <img
      class="thumbnail h-full object-cover"
      src="src/images/Coffee Ata Y.jpg"
      alt=""
    />
  </div> -->${renderComponent($$result, "SectionTitle", SectionTitle, { "client:visible": true, "title": "Let me introduce myself .\xA0", "client:component-hydration": "visible", "client:component-path": "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Text/SectionTitle/SectionTitle.tsx", "client:component-export": "default", "data-astro-cid-vky6iplv": true })}<div class="about_wrapper relative inset-0 overflow-hidden flex flex-col grow" data-astro-cid-vky6iplv><q class="quote relative italic text-center md:text-right text-xl md:text-2xl xl:text-3xl px-4 z-[1]" data-astro-cid-vky6iplv>Embrace challenges to predict and create your future.</q><div class="details_wrapper flex flex-col gap-12 md:gap-24 xl:gap-12 grow items-center justify-center text-center px-[12vw] md:px-[15vw] xl:px-[20vw]" data-astro-cid-vky6iplv><p class="details_text text-xl md:text-2xl xl:text-4xl" data-astro-cid-vky6iplv>
I'm all about crafting web experiences that not only meet but exceed
        expectations. Collaboration and communication are at the heart of my
        work – it's about joining forces to bring visions to life.
</p><div class="separator w-[50%] h-0.5" data-astro-cid-vky6iplv></div><p class="details_text text-xl md:text-2xl xl:text-4xl" data-astro-cid-vky6iplv>
Beyond the screen, I'm an avid traveler, continuously drawn to new
        countries and cultures. The comforting aroma of coffee and the soothing
        sounds of music inspire my personal journey.
</p></div></div></section>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/About/About.astro", void 0);

const Coffee = new Proxy({"src":"/_astro/Coffee.a65dcc2d.jpg","width":3456,"height":5184,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const projectsData = [
  {
    id: 1,
    title: "Portfolio Nina Carducci",
    description:
      "Le challenge était d'optimiser le site de la photographe Nina Carducci. Il a fallu reprendre l'ensemble de ses photos et les optimiser pour le web. J'ai également pris le temps de réaliser un référencement local afin d'améliorer sa visibilité auprès de clients potentiels. Amélioration du SEO.",
    technologies: ["React ", "CSS ", "Lighthouse ", "Wave "],
    client: "OpenClassrooms",
    source: Coffee,
    name: "Project 9",
    github: "https://github.com/Leo-LC/projet_09",
    website: null,
  },
  {
    id: 2,
    title: "Débug Application Reac",
    description:
      "Le client possédait déjà un site de présentation de ses projets. En revance, celui-ci comportait plusieurs soucis et 'bugs' techniques qu'il a fallu identifier et corriger",
    technologies: ["React", "Browser Devtools"],
    client: "OpenClassrooms",
    source: Coffee,
    name: "Project 2",
    github: "https://github.com/Leo-LC/projet_10",
    website: null,
  },
  {
    id: 3,
    title: "Argent Bank",
    description:
      "Double challenge ici. Dans un premier temps, se servir des wireframes et de la base de donneé existante pour réaliser les appels à l'API pour les requêtes stipulées par le client. Dans un second temps, il a fallu créer des routes API pour de futures fonctionnalités en respectant les principes existants.",
    technologies: ["Javascript", "React", "CSS"],
    client: "OpenClassrooms",
    source: Coffee,
    name: "Project 3",
    github: "https://github.com/Leo-LC/projet_11",
    website: null,
  },
];

const $$Astro$7 = createAstro();
const $$LaptopMockup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LaptopMockup;
  const { src } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-4n4f5oys><div class="relative mx-auto border-[var(--border-strong)] border-t-[18px] border-x-[8px] rounded-t-l" data-astro-cid-4n4f5oys><div class="circle c1" data-astro-cid-4n4f5oys></div><div class="circle c2" data-astro-cid-4n4f5oys></div><div class="circle c3" data-astro-cid-4n4f5oys></div><div class="overflow-hidden" data-astro-cid-4n4f5oys>${renderComponent($$result, "Image", $$Image, { "src": src, "class": "w-full aspect-[3/2] object-cover", "alt": "", "data-astro-cid-4n4f5oys": true })}</div></div></div>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Mockups/LaptopMockup.astro", void 0);

const $$Astro$6 = createAstro();
const $$ProjectSlide = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ProjectSlide;
  const { src, description, technologies, client, title, website, github } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="splide__slide" data-astro-cid-7gglzsj2><!--   <div class="overlay"></div> --><div class="mockup rounded-t-2xl relative w-3/4 justify-self-center" data-astro-cid-7gglzsj2>${renderComponent($$result, "LaptopMockup", $$LaptopMockup, { "src": src, "data-astro-cid-7gglzsj2": true })}<!-- <MobileMockup src={src} /> --><h4 class="title" data-astro-cid-7gglzsj2>${title}</h4></div><div class="text flex flex-col gap-4" data-astro-cid-7gglzsj2><div data-astro-cid-7gglzsj2><h4 data-astro-cid-7gglzsj2>DESCRIPTION</h4><p class="max-w-[60ch]" data-astro-cid-7gglzsj2>${description}</p></div><div data-astro-cid-7gglzsj2><h4 data-astro-cid-7gglzsj2>TECHNOLOGIES UTILISEES</h4><p data-astro-cid-7gglzsj2>${technologies}</p></div><div data-astro-cid-7gglzsj2><h4 data-astro-cid-7gglzsj2>CLIENT</h4><p data-astro-cid-7gglzsj2>${client}</p></div></div><div class="links flex gap-8" data-astro-cid-7gglzsj2>${website && renderTemplate`<a href="#" data-astro-cid-7gglzsj2>${website}Le site live</a>`}<a${addAttribute(github, "href")} target="_blank" data-astro-cid-7gglzsj2>Le repo Github</a></div></li>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Works/ProjectSlide.astro", void 0);

const $$Astro$5 = createAstro();
const $$ProjectsCarousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ProjectsCarousel;
  return renderTemplate`<!-- <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m14 7l-5 5l5 5V7z"/></svg> -->${maybeRenderHead()}<section class="splide" aria-label="Splide Basic HTML Example" data-astro-cid-wjnakilf><ul class="splide__pagination" data-astro-cid-wjnakilf></ul><!--   <div class="splide__arrows">
    <button class="splide__arrow splide__arrow--prev">
      <Icon name="ic:sharp-arrow-right" />
    </button>
    <button class="splide__arrow splide__arrow--next"> Next</button>
  </div> --><div class="splide__track" data-astro-cid-wjnakilf><ul class="splide__list" data-astro-cid-wjnakilf>${projectsData.map((project) => renderTemplate`${renderComponent($$result, "ProjectSlide", $$ProjectSlide, { "src": project.source, "description": project.description, "technologies": project.technologies, "client": project.client, "website": project.website, "github": project.github, "title": project.title.toUpperCase(), "data-astro-cid-wjnakilf": true })}`)}</ul></div></section>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Works/ProjectsCarousel.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro();
const $$Works = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Works;
  return renderTemplate(_a || (_a = __template(["", '<section id="works" class="relative pt-[var(--header-height)] pb-[var(--footer-height)] flex flex-col gap-8 min-h-screen overflow-hidden" data-astro-cid-qs73ah5k>', '<!--  <div class="overlay hidden xl:flex absolute z-10 flex-col text-center">\n      <span>Project</span>\n      <div class="clip">\n        <h4>Nom du Projet</h4>\n      </div>\n    </div> --><div class="p-8" data-astro-cid-qs73ah5k>', '</div></section><!-- Overflay Styling --><!-- <style>\n  .overlay {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 10;\n    pointer-events: none;\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n  }\n\n  .overlay span {\n    text-transform: uppercase;\n    font-size: 2rem;\n    line-height: 1;\n  }\n\n  .overlay h4 {\n    font-family: var(--headings-font-family);\n    font-size: 4rem;\n    line-height: 1;\n    font-weight: 700;\n    text-transform: uppercase;\n  }\n  .clip {\n    background-color: transparent;\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\n  }\n  .reveal {\n    animation: reveal 0.3s ease-in-out;\n  }\n  @keyframes reveal {\n    0% {\n      transform: translateY(100%);\n    }\n    100% {\n      transform: translateY(0);\n    }\n  }\n</style> --><!-- Overlay Script --><!-- <script>\n  const cards = document.querySelectorAll(".card");\n  const overlay = document.querySelector(".overlay") as HTMLElement;\n  const overlayTitle = overlay.querySelector("h4") as HTMLElement;\n\n  cards.forEach((card) => {\n    card.addEventListener("mouseover", (e) => {\n      overlayTitle.classList.add("reveal");\n\n      overlay.style.opacity = "1";\n\n      cards.forEach((c) => {\n        c.setAttribute("data-active", "false");\n      });\n      card.setAttribute("data-active", "true");\n    });\n\n    card.addEventListener("mouseout", () => {\n      overlay.style.opacity = "0";\n      overlayTitle.classList.remove("reveal");\n      cards.forEach((c) => {\n        c.setAttribute("data-active", "true");\n      });\n    });\n  });\n<\/script> -->'])), maybeRenderHead(), renderComponent($$result, "SectionTitle", SectionTitle, { "client:visible": true, "title": "Some of my Recent projects .\xA0", "client:component-hydration": "visible", "client:component-path": "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Text/SectionTitle/SectionTitle", "client:component-export": "default", "data-astro-cid-qs73ah5k": true }), renderComponent($$result, "ProjectsCarousel", $$ProjectsCarousel, { "data-astro-cid-qs73ah5k": true }));
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Works/Works.astro", void 0);

const FormInput = ({ id, label, type }) => {
  const numberOfLines = 5;
  return /* @__PURE__ */ jsxs("div", { className: styles$1.inputWrapper, children: [
    type === "text" || type === "email" ? /* @__PURE__ */ jsx(
      "input",
      {
        type,
        id,
        className: styles$1.input,
        placeholder: " ",
        required: true
      }
    ) : type === "textarea" ? /* @__PURE__ */ jsx(
      "textarea",
      {
        name: "Message",
        id,
        rows: numberOfLines,
        className: styles$1.textarea,
        placeholder: " ",
        required: true
      }
    ) : null,
    /* @__PURE__ */ jsx("label", { htmlFor: id, className: styles$1.label, children: label })
  ] });
};

const ContactForm = () => {
  const formAction = "https://public.herotofu.com/v1/84da5320-74b4-11ee-80c8-136eb968d513";
  return /* @__PURE__ */ jsxs(
    "form",
    {
      className: " text-base text-center md:text-left flex flex-col w-[70%] gap-[4rem] ",
      id: "contact-form",
      action: formAction,
      method: "post",
      acceptCharset: "UTF-8",
      children: [
        /* @__PURE__ */ jsx(FormInput, { type: "text", id: "name", label: "Your Name*" }),
        /* @__PURE__ */ jsx(FormInput, { type: "email", id: "email", label: "Your Email*" }),
        /* @__PURE__ */ jsx(FormInput, { type: "textarea", id: "message", label: "Your Message*" }),
        /* @__PURE__ */ jsxs("div", { className: styles$2.btn, children: [
          /* @__PURE__ */ jsx("input", { type: "submit", value: "Send it !" }),
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: styles$2.scroll, children: "Send it !" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                textIndent: "-99999px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                position: "absolute"
              },
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsx("input", { type: "text", name: "_gotcha", tabIndex: -1, autoComplete: "off" })
            }
          )
        ] })
      ]
    }
  );
};

const $$Astro$3 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="relative pt-[var(--header-height)] pb-8 flex flex-col items-center gap-8 overflow-hidden" data-astro-cid-goehoidx>${renderComponent($$result, "SectionTitle", SectionTitle, { "client:visible": true, "title": "Want to reach me ?\xA0", "client:component-hydration": "visible", "client:component-path": "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Text/SectionTitle/SectionTitle", "client:component-export": "default", "data-astro-cid-goehoidx": true })}<div class="relative flex justify-center items-center rounded-[3rem] py-12 overflow-hidden" id="contact-wrapper" data-astro-cid-goehoidx>${renderComponent($$result, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Contact/ContactForm.tsx", "client:component-export": "default", "data-astro-cid-goehoidx": true })}</div></section>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Contact/Contact.astro", void 0);

const $$Astro$2 = createAstro();
const $$SkillsCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SkillsCard;
  return renderTemplate`${maybeRenderHead()}<div class="cards-wrapper relative z-[1] grid gap-2 py-8" data-astro-cid-zqsthc7k><div class="card" data-astro-cid-zqsthc7k><div class="card_content" data-astro-cid-zqsthc7k><i class="fa-brands fa-react" data-astro-cid-zqsthc7k></i><span data-astro-cid-zqsthc7k>React</span></div></div><div class="card" data-astro-cid-zqsthc7k><div class="card_content" data-astro-cid-zqsthc7k><i class="fa-brands fa-node-js" data-astro-cid-zqsthc7k></i><span data-astro-cid-zqsthc7k>Node</span></div></div><div class="card" data-astro-cid-zqsthc7k><div class="card_content" data-astro-cid-zqsthc7k><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" data-astro-cid-zqsthc7k><g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal" data-astro-cid-zqsthc7k><g transform="scale(10.66667,10.66667)" data-astro-cid-zqsthc7k><path d="M3,5v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2h-14c-1.105,0 -2,0.895 -2,2zM13.666,12.451h-2.118v6.549h-1.707v-6.549h-2.074v-1.451h5.899zM13.998,18.626v-1.751c0,0 0.956,0.721 2.104,0.721c1.148,0 1.103,-0.75 1.103,-0.853c0,-1.089 -3.251,-1.089 -3.251,-3.501c0,-3.281 4.737,-1.986 4.737,-1.986l-0.059,1.559c0,0 -0.794,-0.53 -1.692,-0.53c-0.897,0 -1.221,0.427 -1.221,0.883c0,1.177 3.281,1.059 3.281,3.428c0,3.648 -5.002,2.03 -5.002,2.03z" data-astro-cid-zqsthc7k></path></g></g></svg><span data-astro-cid-zqsthc7k>TypeScript</span></div></div><div class="card" data-astro-cid-zqsthc7k><div class="card_content" data-astro-cid-zqsthc7k><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" data-astro-cid-zqsthc7k><defs data-astro-cid-zqsthc7k><linearGradient x1="32.414" y1="44.02" x2="32.414" y2="3" gradientUnits="userSpaceOnUse" id="color-1_kXuRhjMIeKhk_gr1" data-astro-cid-zqsthc7k><stop offset="0" stop-color="var(--text-primary)" data-astro-cid-zqsthc7k></stop><stop offset="1" stop-color="var(--text-primary)" data-astro-cid-zqsthc7k></stop></linearGradient><linearGradient x1="32.376" y1="64" x2="32.376" y2="7" gradientUnits="userSpaceOnUse" id="color-2_kXuRhjMIeKhk_gr2" data-astro-cid-zqsthc7k><stop offset="0" stop-color="var(--text-primary)" data-astro-cid-zqsthc7k></stop><stop offset="1" stop-color="var(--text-primary)" data-astro-cid-zqsthc7k></stop></linearGradient></defs><g transform="" data-astro-cid-zqsthc7k><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal" data-astro-cid-zqsthc7k><g transform="scale(4,4)" data-astro-cid-zqsthc7k><path d="M8.631,44.021c-0.242,0 -0.482,-0.088 -0.67,-0.258c-0.303,-0.273 -0.409,-0.703 -0.269,-1.086c6.221,-16.95 13.643,-37.17 13.671,-37.242c0.765,-2.01 1.985,-2.435 2.871,-2.435h16.36c1.273,0 2.324,0.9 2.885,2.469c0.099,0.273 13.656,37.207 13.656,37.207c0.146,0.397 0.025,0.843 -0.3,1.114c-0.324,0.271 -0.786,0.307 -1.15,0.09c-0.063,-0.038 -6.445,-3.769 -15.563,-3.769c-0.434,0 -0.818,-0.28 -0.951,-0.692l-6.068,-18.781c-0.131,-0.51 -0.412,-0.833 -0.688,-0.833c-0.276,0 -0.558,0.323 -0.67,0.769l-6.087,18.846c-0.133,0.413 -0.518,0.692 -0.951,0.692c-7.715,0 -15.56,3.771 -15.638,3.809c-0.139,0.066 -0.29,0.1 -0.438,0.1zM24.234,5c-0.468,0 -0.807,0.631 -1.008,1.161c-0.113,0.303 -9.943,27.086 -12.854,35.017c2.856,-1.137 8.137,-2.909 13.603,-3.058l5.849,-18.099c0.323,-1.301 1.372,-2.218 2.591,-2.218c1.219,0 2.268,0.917 2.609,2.282l5.829,18.032c6.083,0.123 10.881,1.748 13.545,2.901c-3.887,-10.585 -12.78,-34.811 -12.804,-34.88c-0.151,-0.423 -0.483,-1.138 -0.999,-1.138z" fill="url(#color-1_kXuRhjMIeKhk_gr1)" data-astro-cid-zqsthc7k></path><path d="M25.049,7h14.731c0.305,0.832 1.979,5.397 11.267,30.697c-2.399,-0.708 -5.356,-1.327 -8.721,-1.522l-5.393,-16.69c-0.595,-2.173 -2.438,-3.68 -4.52,-3.68c-2.082,0 -3.925,1.507 -4.52,3.68l-5.399,16.71c-3.193,0.237 -6.26,0.945 -8.79,1.709c3.687,-10.043 10.655,-29.03 11.345,-30.904zM24.098,55.103c0.038,-0.14 0.075,-0.26 0.101,-0.381c0.339,-1.575 1.619,-2.575 3.236,-2.528c1.576,0.046 2.413,0.844 2.656,2.626c0.1,0.731 0.1,1.479 0.11,2.221c0.021,1.524 0.414,2.932 1.242,4.205c0.783,1.206 1.812,2.124 3.22,2.754c-0.056,-0.189 -0.078,-0.266 -0.102,-0.344c-1.036,-3.178 -0.29,-5.363 2.467,-7.227c0.897,-0.606 1.817,-1.181 2.686,-1.824c2.173,-1.608 3.539,-3.728 3.861,-6.474c0.132,-1.127 0.034,-2.235 -0.345,-3.332c-0.504,0.306 -0.93,0.608 -1.391,0.835c-4.03,1.983 -8.291,2.228 -12.63,1.572c-2.81,-0.425 -5.523,-1.179 -7.482,-3.557c-1.129,3.772 -0.338,8.978 2.373,11.456z" fill="url(#color-2_kXuRhjMIeKhk_gr2)" data-astro-cid-zqsthc7k></path></g></g></g></svg><span data-astro-cid-zqsthc7k>Astro</span></div></div><div class="card" data-astro-cid-zqsthc7k><div class="card_content" data-astro-cid-zqsthc7k><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" data-astro-cid-zqsthc7k><g transform="" data-astro-cid-zqsthc7k><g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal" data-astro-cid-zqsthc7k><g transform="scale(5.33333,5.33333)" data-astro-cid-zqsthc7k><path d="M18.974,31.5c0,0.828 -0.671,1.5 -1.5,1.5c-0.829,0 -1.5,-0.672 -1.5,-1.5v-14c0,-0.653 0.423,-1.231 1.045,-1.43c0.625,-0.198 1.302,0.03 1.679,0.563l16.777,23.704c5.142,-3.628 8.525,-9.602 8.525,-16.337c0,-11 -9,-20 -20,-20c-11,0 -20,9 -20,20c0,11 9,20 20,20c3.192,0 6.206,-0.777 8.89,-2.122l-13.916,-19.662zM28.974,16.5c0,-0.828 0.671,-1.5 1.5,-1.5c0.829,0 1.5,0.672 1.5,1.5v13.84l-3,-4.227z" data-astro-cid-zqsthc7k></path></g></g></g></svg><span data-astro-cid-zqsthc7k>Next</span></div></div><div class="card" data-astro-cid-zqsthc7k><div class="card_content" data-astro-cid-zqsthc7k><i class="fa-brands fa-figma" data-astro-cid-zqsthc7k></i><span data-astro-cid-zqsthc7k>Figma</span></div></div><div class="card" data-astro-cid-zqsthc7k><div class="card_content" data-astro-cid-zqsthc7k><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" data-astro-cid-zqsthc7k><g transform="" data-astro-cid-zqsthc7k><g fill="var(--text-primary)" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal" data-astro-cid-zqsthc7k><g transform="scale(5.12,5.12)" data-astro-cid-zqsthc7k><path d="M24,2c-7.168,0 -13,8.29233 -13,18.48633c0,5.26619 1.56494,10.00832 4.06055,13.37305c-0.19039,1.02259 0.08393,2.07689 0.74856,2.87702c0.66464,0.80013 1.65072,1.26318 2.69089,1.2636c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5c-0.19052,0.00143 -0.3806,0.01841 -0.56836,0.05078c-1.78808,-2.66355 -2.93164,-6.43932 -2.93164,-10.56445c0,-7.853 4.122,-14.48633 9,-14.48633c4.119,0 7.68913,4.7375 8.70313,10.9375c1.422,0.408 2.83856,0.95995 4.22656,1.62695c-0.678,-9.294 -6.21769,-16.56445 -12.92969,-16.56445zM22.5,17c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.33477,-0.00071 2.55294,-0.76055 3.14063,-1.95898c3.24975,-0.20353 7.00547,0.7991 10.47266,2.87695c6.86,4.113 10.59053,11.30508 8.14453,15.70508c-0.804,1.446 -2.25245,2.48591 -4.18945,3.00391c-2.789,0.746 -6.20912,0.36672 -9.57812,-0.98828c-1.069,0.994 -2.24434,1.92716 -3.52734,2.78516c3.328,1.681 6.84761,2.57227 10.09961,2.57227c1.41,0 2.77102,-0.16586 4.04102,-0.50586c3.007,-0.805 5.30739,-2.50783 6.65039,-4.92383c3.584,-6.449 -0.62598,-15.70812 -9.58398,-21.07812c-4.26247,-2.55641 -8.98438,-3.73447 -13.13477,-3.39453c-0.65947,-0.69658 -1.57593,-1.09197 -2.53516,-1.09375zM9.16016,23.32422c-7.081,5.471 -10.11811,13.47519 -6.91211,19.24219c1.343,2.416 3.64339,4.11883 6.65039,4.92383c1.271,0.34 2.62902,0.50586 4.04102,0.50586c3.8,0 7.97058,-1.20642 11.76758,-3.48242c4.24784,-2.54671 7.38872,-5.96995 9.16992,-9.55078c1.7511,-0.19075 3.12305,-1.66185 3.12305,-3.46289c0,-1.93 -1.57,-3.5 -3.5,-3.5c-1.93,0 -3.5,1.57 -3.5,3.5c0,0.54022 0.13208,1.04663 0.35156,1.50391c-1.44393,2.97478 -4.13811,5.94148 -7.70117,8.07813c-4.296,2.576 -9.05075,3.52792 -12.71875,2.54492c-1.936,-0.518 -3.3835,-1.55791 -4.1875,-3.00391c-1.934,-3.48 0.00216,-8.69958 4.28516,-12.76758c-0.411,-1.44 -0.70514,-2.95625 -0.86914,-4.53125z" data-astro-cid-zqsthc7k></path></g></g></g></svg><span data-astro-cid-zqsthc7k>Redux</span></div></div><div class="card" data-astro-cid-zqsthc7k><div class="card_content" data-astro-cid-zqsthc7k><i class="fa-brands fa-github" data-astro-cid-zqsthc7k></i><span data-astro-cid-zqsthc7k>Git</span></div></div></div>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Skills/SkillsCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="relative min-h-screen pt-[var(--header-height)] pb-[var(--footer-height)] overflow-hidden snap-start flex flex-col gap-8" data-astro-cid-7rhnesoy>${renderComponent($$result, "SectionTitle", SectionTitle, { "client:visible": true, "title": "My Front-End Toolbox .\xA0", "client:component-hydration": "visible", "client:component-path": "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Text/SectionTitle/SectionTitle", "client:component-export": "default", "data-astro-cid-7rhnesoy": true })}<div class="toolbox_wrapper relative inset-0 flex flex-col gap-4 xl:gap-12 justify-center items-center grow" data-astro-cid-7rhnesoy>${renderComponent($$result, "SkillsCard", $$SkillsCard, { "data-astro-cid-7rhnesoy": true })}<div class="separator w-[50%] h-0.5 my-12 hidden md:block" data-astro-cid-7rhnesoy></div><p class="px-[20vw] text-center hidden md:block" data-astro-cid-7rhnesoy>
I am constantly refining my craft and pushing my abilities to create
      captivating web experiences. With a passion for building fast, responsive,
      and user-friendly websites, I'm excited to collaborate and bring your web
      visions to life!
</p></div></section><!-- Animation Script -->`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Skills/Skills.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "L\xE9o _ Web Developer " }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="relative"><!-- <Cursor client:load /> -->${renderComponent($$result2, "Hero", $$Hero, {})}${renderComponent($$result2, "About", $$About, {})}${renderComponent($$result2, "Skills", $$Skills, {})}${renderComponent($$result2, "Works", $$Works, {})}${renderComponent($$result2, "Contact", $$Contact, {})}</main>` })}<!-- Lenis Base CSS -->`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ProjectsCarousel as $, index as i };
