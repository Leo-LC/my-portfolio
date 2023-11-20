import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_435610d4.mjs';

const _page0  = () => import('./chunks/generic_a85756a6.mjs');
const _page1  = () => import('./chunks/index_00495991.mjs');
const _page2  = () => import('./chunks/projectDetails_f3876e88.mjs');
const _page3  = () => import('./chunks/404_cd36074b.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.5.3_sass@1.69.5/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/projectDetails.astro", _page2],["src/pages/404.astro", _page3]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
