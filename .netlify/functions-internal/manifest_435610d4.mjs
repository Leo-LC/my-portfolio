import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import './chunks/astro/server_de889e61.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@3.5.3_sass@1.69.5/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.910650fc.js"}],"styles":[{"type":"inline","content":".splitting .word,.splitting .char{display:inline-block}.splitting .char{position:relative}.splitting .char:before,.splitting .char:after{content:attr(data-char);position:absolute;top:0;left:0;visibility:hidden;transition:inherit;-webkit-user-select:none;-moz-user-select:none;user-select:none}.splitting{--word-center: calc((var(--word-total) - 1) / 2);--char-center: calc((var(--char-total) - 1) / 2);--line-center: calc((var(--line-total) - 1) / 2)}.splitting .word{--word-percent: calc(var(--word-index) / var(--word-total));--line-percent: calc(var(--line-index) / var(--line-total))}.splitting .char{--char-percent: calc(var(--char-index) / var(--char-total));--char-offset: calc(var(--char-index) - var(--char-center));--distance: calc( (var(--char-offset) * var(--char-offset)) / var(--char-center) );--distance-sine: calc(var(--char-offset) / var(--char-center));--distance-percent: calc((var(--distance) / var(--char-center)))}.splitting.cells img{width:100%;display:block}@supports (display: grid){.splitting.cells{position:relative;overflow:hidden;background-size:cover;visibility:hidden}.splitting .cell-grid{background:inherit;position:absolute;top:0;left:0;width:100%;height:100%;display:grid;grid-template:repeat(var(--row-total),1fr) / repeat(var(--col-total),1fr)}.splitting .cell{background:inherit;position:relative;overflow:hidden}.splitting .cell-inner{background:inherit;position:absolute;visibility:visible;width:calc(100% * var(--col-total));height:calc(100% * var(--row-total));left:calc(-100% * var(--col-index));top:calc(-100% * var(--row-index))}.splitting .cell{--center-x: calc((var(--col-total) - 1) / 2);--center-y: calc((var(--row-total) - 1) / 2);--offset-x: calc(var(--col-index) - var(--center-x));--offset-y: calc(var(--row-index) - var(--center-y));--distance-x: calc( (var(--offset-x) * var(--offset-x)) / var(--center-x) );--distance-y: calc( (var(--offset-y) * var(--offset-y)) / var(--center-y) )}}\n"},{"type":"external","src":"/_astro/index.495a3145.css"},{"type":"external","src":"/_astro/index.b00568f0.css"},{"type":"inline","content":".btn[data-astro-cid-old54qwp]{background:var(--slate-a1);color:var(--text-primary);border:2px solid var(--text-primary);letter-spacing:normal;font-size:1.25rem;cursor:pointer;text-transform:uppercase;border-radius:.5rem;overflow:hidden;padding:.8rem 3rem;position:relative;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.btn[data-astro-cid-old54qwp] span[data-astro-cid-old54qwp]{position:absolute;inset:0;display:grid;place-items:center;transition:opacity .2s ease}.btn[data-astro-cid-old54qwp] .marquee[data-astro-cid-old54qwp]{--spacing: 10rem;--start: 0rem;--end: 10rem;opacity:0;position:relative;animation:marquee 4s linear infinite;animation-play-state:paused;text-shadow:var(--text-primary) var(--spacing) 0,var(--text-primary) calc(var(--spacing) * -1) 0,var(--text-primary) calc(var(--spacing) * -2) 0}.btn[data-astro-cid-old54qwp]:hover{box-shadow:3px 3px 0 var(--text-primary)}.btn[data-astro-cid-old54qwp]:hover .marquee[data-astro-cid-old54qwp]{animation-play-state:running;opacity:1}.btn[data-astro-cid-old54qwp]:hover .text[data-astro-cid-old54qwp]{opacity:0}@keyframes marquee{0%{transform:translate(var(--start))}to{transform:translate(var(--end))}}\n"},{"type":"external","src":"/_astro/index.160d36e3.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ff0705a0.js"}],"styles":[{"type":"external","src":"/_astro/index.495a3145.css"},{"type":"external","src":"/_astro/index.160d36e3.css"},{"type":"inline","content":".wrapper[data-astro-cid-bbnrcoat]{height:100svh}\n"}],"routeData":{"route":"/projectdetails","type":"page","pattern":"^\\/projectDetails\\/?$","segments":[[{"content":"projectDetails","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projectDetails.astro","pathname":"/projectDetails","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.78faf9da.js"}],"styles":[{"type":"external","src":"/_astro/index.495a3145.css"},{"type":"inline","content":".btn[data-astro-cid-old54qwp]{background:var(--slate-a1);color:var(--text-primary);border:2px solid var(--text-primary);letter-spacing:normal;font-size:1.25rem;cursor:pointer;text-transform:uppercase;border-radius:.5rem;overflow:hidden;padding:.8rem 3rem;position:relative;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.btn[data-astro-cid-old54qwp] span[data-astro-cid-old54qwp]{position:absolute;inset:0;display:grid;place-items:center;transition:opacity .2s ease}.btn[data-astro-cid-old54qwp] .marquee[data-astro-cid-old54qwp]{--spacing: 10rem;--start: 0rem;--end: 10rem;opacity:0;position:relative;animation:marquee 4s linear infinite;animation-play-state:paused;text-shadow:var(--text-primary) var(--spacing) 0,var(--text-primary) calc(var(--spacing) * -1) 0,var(--text-primary) calc(var(--spacing) * -2) 0}.btn[data-astro-cid-old54qwp]:hover{box-shadow:3px 3px 0 var(--text-primary)}.btn[data-astro-cid-old54qwp]:hover .marquee[data-astro-cid-old54qwp]{animation-play-state:running;opacity:1}.btn[data-astro-cid-old54qwp]:hover .text[data-astro-cid-old54qwp]{opacity:0}@keyframes marquee{0%{transform:translate(var(--start))}to{transform:translate(var(--end))}}\n.wrapper-404[data-astro-cid-zetdm5md]{position:absolute;top:0;left:0;width:100%;height:100vh;gap:2rem;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;color:var(--text-primary)}@media screen and (max-width: 768px){.wrapper-404[data-astro-cid-zetdm5md]{gap:1rem}}\n"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/pages/projectDetails.astro",{"propagation":"none","containsHead":true}],["/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Footer/Footer.astro",{"propagation":"in-tree","containsHead":false}],["/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/layouts/MainLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/.pnpm/astro@3.5.3_sass@1.69.5/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_131640b8.mjs","/src/pages/projectDetails.astro":"chunks/pages/projectDetails_dd546ea6.mjs","\u0000@astrojs-manifest":"manifest_435610d4.mjs","/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/node_modules/.pnpm/@astrojs+react@3.0.4_@types+react-dom@18.2.15_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0_vite@4.5.0/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_fe124244.mjs","\u0000@astro-page:node_modules/.pnpm/astro@3.5.3_sass@1.69.5/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_a85756a6.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_00495991.mjs","\u0000@astro-page:src/pages/projectDetails@_@astro":"chunks/projectDetails_f3876e88.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_cd36074b.mjs","/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Contact/ContactForm.tsx":"_astro/ContactForm.7c1c788b.js","/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/API/DateAPI/DateAPI":"_astro/DateAPI.284e4210.js","/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Text/SectionTitle/SectionTitle":"_astro/SectionTitle.5edef5ba.js","/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Text/SectionTitle/SectionTitle.tsx":"_astro/SectionTitle.f8f55bc1.js","/astro/hoisted.js?q=2":"_astro/hoisted.ff0705a0.js","/astro/hoisted.js?q=0":"_astro/hoisted.910650fc.js","@astrojs/react/client.js":"_astro/client.802dacf3.js","/astro/hoisted.js?q=1":"_astro/hoisted.78faf9da.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/Coffee.a65dcc2d.jpg","/_astro/sculpt-1.3bef654e.jpg","/_astro/index.495a3145.css","/_astro/index.b00568f0.css","/_astro/index.160d36e3.css","/glasses.svg","/fonts/La-Babaca-ffp.woff","/_astro/ContactForm.7c1c788b.js","/_astro/DateAPI.284e4210.js","/_astro/SectionTitle.5edef5ba.js","/_astro/SectionTitle.f8f55bc1.js","/_astro/client.802dacf3.js","/_astro/hoisted.78faf9da.js","/_astro/hoisted.910650fc.js","/_astro/hoisted.ff0705a0.js","/_astro/index.222a3623.02902a13.js","/_astro/index.b6977aac.css","/_astro/index.ed373d49.js","/_astro/jsx-runtime.391947bd.js"]});

export { manifest };
