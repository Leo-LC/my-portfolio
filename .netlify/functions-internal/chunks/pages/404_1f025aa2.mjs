import '@astrojs/internal-helpers/path';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, d as renderHead, e as renderComponent, f as renderSlot } from '../astro/server_de889e61.mjs';
import 'clsx';
/* empty css                           */import { A as AstroError, f as ImageMissingAlt, i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_74df32db.mjs';
/* empty css                           *//* empty css                         */
const $$Astro$6 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/node_modules/.pnpm/astro@3.5.3_sass@1.69.5/node_modules/astro/components/Image.astro", void 0);

const $$Astro$5 = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}></picture>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/node_modules/.pnpm/astro@3.5.3_sass@1.69.5/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro();
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Head;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/glasses.svg"><meta name="generator"', '><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"><title>', '</title><!-- FontAwesome Icons --><script src="https://kit.fontawesome.com/bf28b7cad2.js" crossorigin="anonymous"><\/script>', "</head>"])), addAttribute(Astro2.generator, "content"), title, renderHead());
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/layouts/Head.astro", void 0);

const background = new Proxy({"src":"/_astro/sculpt-1.3bef654e.jpg","width":3483,"height":5224,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4>${renderComponent($$result, "Head", $$Head, { "title": title, "data-astro-cid-sckkx6r4": true })}${maybeRenderHead()}<body class="dark" data-astro-cid-sckkx6r4><div class="background" data-astro-cid-sckkx6r4>${renderComponent($$result, "Image", $$Image, { "src": background, "alt": "background", "class": "background__image thumbnail", "data-astro-cid-sckkx6r4": true })}</div>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$CTAButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CTAButton;
  const { text, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="btn"${addAttribute(href, "href")} id="contact-me" data-astro-cid-old54qwp><span class="text" data-astro-cid-old54qwp>${text}</span><span aria-hidden="true" class="marquee" data-astro-cid-old54qwp>${text}</span></a>`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/components/Buttons/CTAButton.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout404;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/layouts/Layout404.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout404, { "title": "Page not found", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="wrapper-404" data-astro-cid-zetdm5md><h1 class="text-6xl md:text-8xl lg:text-9xl" data-astro-cid-zetdm5md>404</h1><h2 class="text-6xl md:text-8xl lg:text-9xl" data-astro-cid-zetdm5md>Page not found</h2><p class="text-xl md:text-2xl lg:text-4xl" data-astro-cid-zetdm5md>
Apologies, this page does not exist yet.
</p><p class="text-xl md:text-2xl lg:text-4xl" data-astro-cid-zetdm5md>Please let me redirect you</p>${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": "/", "text": "Back home", "data-astro-cid-zetdm5md": true })}</div>` })}`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/pages/404.astro", void 0);

const $$file = "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _, $$CTAButton as a, $$Image as b, imageConfig as i };
