/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro/server_de889e61.mjs';
import 'clsx';
import { $ as $$Layout } from './404_1f025aa2.mjs';
import { $ as $$ProjectsCarousel } from './index_7b10729b.mjs';
/* empty css                                    */
const $$Astro = createAstro();
const $$ProjectDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectDetails;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projet Details", "data-astro-cid-bbnrcoat": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header class="text-white" data-astro-cid-bbnrcoat>Back Arrow</header><div class="wrapper grid place-content-center gap- bg-gray-500 text-white text-center" data-astro-cid-bbnrcoat>${renderComponent($$result2, "ProjectsCarousel", $$ProjectsCarousel, { "data-astro-cid-bbnrcoat": true })}<!--     <h1 class="text-4xl">Hello world!</h1> --><!-- <div class="desktop-mockup">
      <div class="img-wrapper">
        <Image src={image} alt="test image" transition:name="image" />
      </div>
    </div> --><!--     <LaptopMockup />
    <SmartphoneMockup /> --></div>` })}`;
}, "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/pages/projectDetails.astro", void 0);

const $$file = "/Users/leolecee/Desktop/OpenClassrooms/Projet_12/my-portfolio/src/pages/projectDetails.astro";
const $$url = "/projectDetails";

export { $$ProjectDetails as default, $$file as file, $$url as url };
