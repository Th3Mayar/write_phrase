/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_MPgKAn2h.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './game_CIbluKS7.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Write Phrase" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="grid p-5"> <section class="m-2"> <img class="logo" src="/GameWritePNG.svg" alt="Game Write"> <h1>Game <span>Write Phrase</span></h1> </section> <section class="m-5"> <button type="submit" id="startButton" class="start-button"> <img class="play" src="/play.svg" alt="Play"> </button> </section> </main>  ` })}`;
}, "/home/jfrancisco/Repos/projects/write_phrase/src/pages/index.astro", void 0);

const $$file = "/home/jfrancisco/Repos/projects/write_phrase/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
