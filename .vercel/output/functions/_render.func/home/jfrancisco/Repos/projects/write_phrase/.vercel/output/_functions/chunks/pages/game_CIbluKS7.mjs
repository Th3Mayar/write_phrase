/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderHead, g as renderSlot, h as renderComponent } from '../astro_MPgKAn2h.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useEffect } from 'react';
import { create } from 'zustand';
import JSConfetti from 'js-confetti';
import PropTypes from 'prop-types';
import { unstable_useForkRef, unstable_ownerWindow, unstable_useEnhancedEffect, unstable_debounce } from '@mui/utils';

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>© 2024 Todos los derechos reservados para Game Write Phrase <span data-astro-cid-sz7xmlte>Desarrollado con Astro by CODESYS INC</span></p> </footer> `;
}, "/home/jfrancisco/Repos/projects/write_phrase/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Whrite Phrase"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/GameWrite.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/jfrancisco/Repos/projects/write_phrase/src/layouts/Layout.astro", void 0);

const questionPlay = [
    {
        id: 1,
        texto: "La tecnología avanza a pasos agigantados, transformando nuestra forma de vivir y trabajar. La inteligencia artificial, en particular, está revolucionando múltiples industrias al ofrecer soluciones innovadoras y eficientes.",
        autor: "John Smith",
        nombre: "Avance Tecnológico",
        textColor: "white"
    },
    {
        id: 2,
        texto: "El cambio climático es uno de los desafíos más urgentes que enfrenta la humanidad. Con el aumento de las temperaturas y los fenómenos meteorológicos extremos, es crucial tomar medidas para mitigar sus efectos y proteger nuestro planeta para las generaciones futuras.",
        autor: "María López",
        nombre: "Crisis Climática",
        textColor: "white"
    },
    {
        id: 3,
        texto: "La globalización ha conectado a personas de todo el mundo como nunca antes. Esta interconexión ha traído consigo beneficios económicos y culturales, pero también desafíos en términos de desigualdad y preservación de la identidad cultural.",
        autor: "Ahmed Khan",
        nombre: "Globalización",
        textColor: "white"
    },
    {
        id: 4,
        texto: "La pandemia de COVID-19 ha impactado profundamente en todos los aspectos de la vida. Desde la salud pública hasta la economía global, esta crisis ha puesto a prueba la capacidad de adaptación y resiliencia de las sociedades en todo el mundo.",
        autor: "Anna García",
        nombre: "COVID-19",
        textColor: "white"
    },
    {
        id: 5,
        texto: "El emprendimiento es fundamental para impulsar la innovación y el crecimiento económico. Los emprendedores son agentes de cambio que desafían lo establecido y crean nuevas oportunidades en el mercado.",
        autor: "Carlos Martínez",
        nombre: "Emprendimiento",
        textColor: "white"
    },
    {
        id: 6,
        texto: "El desarrollo sostenible busca satisfacer las necesidades actuales sin comprometer la capacidad de las futuras generaciones para satisfacer las suyas. Es un enfoque integral que aborda aspectos económicos, sociales y ambientales.",
        autor: "Luisa Fernández",
        nombre: "Desarrollo Sostenible",
        textColor: "white"
    },
    {
        id: 7,
        texto: "La inteligencia emocional es clave para el éxito personal y profesional. Nos permite entender y manejar nuestras emociones, así como relacionarnos de manera efectiva con los demás.",
        autor: "David Rodríguez",
        nombre: "Inteligencia Emocional",
        textColor: "white"
    },
    {
        id: 8,
        texto: "La inteligencia artificial está transformando la forma en que interactuamos con la tecnología. Desde asistentes virtuales hasta sistemas de recomendación, la IA está cada vez más presente en nuestra vida diaria.",
        autor: "Laura Pérez",
        nombre: "Inteligencia Artificial",
        textColor: "white"
    },
    {
        id: 9,
        texto: "La educación es la base del progreso humano. Brindar acceso a una educación de calidad es fundamental para empoderar a las personas y construir un futuro próspero.",
        autor: "Roberto Gómez",
        nombre: "Educación",
        textColor: "white"
    },
    {
        id: 10,
        texto: "El arte y la cultura son expresiones fundamentales de la identidad humana. Promover el acceso a la cultura y preservar el patrimonio artístico son aspectos clave para enriquecer nuestra sociedad.",
        autor: "María García",
        nombre: "Arte y Cultura",
        textColor: "white"
    },
    {
        id: 11,
        texto: "La igualdad de género es un principio fundamental de los derechos humanos. Promover la igualdad de oportunidades y el empoderamiento de las mujeres es esencial para construir sociedades justas y equitativas.",
        autor: "Elena Ruiz",
        nombre: "Igualdad de Género",
        "textColor": "white"
    },
    {
        id: 12,
        texto: "La ciencia y la tecnología son motores del progreso humano. Fomentar la investigación y la innovación es clave para resolver los desafíos globales y mejorar la calidad de vida de las personas.",
        autor: "Jorge Martínez",
        nombre: "Ciencia y Tecnología",
        textColor: "white"
    },
    {
        id: 13,
        texto: "El respeto por la diversidad cultural enriquece nuestras sociedades y promueve la convivencia pacífica. Valorar las diferencias y promover la inclusión son pilares de una sociedad democrática y tolerante.",
        autor: "Ana López",
        nombre: "Diversidad Cultural",
        textColor: "white"
    },
    {
        id: 14,
        texto: "La salud mental es tan importante como la salud física. Promover el bienestar emocional y brindar acceso a servicios de salud mental es fundamental para una sociedad saludable y equilibrada.",
        autor: "Mario González",
        nombre: "Salud Mental",
        textColor: "white"
    },
    {
        id: 15,
        texto: "La innovación tecnológica está impulsando la transformación digital en todos los sectores. Desde la industria manufacturera hasta los servicios financieros, la digitalización está cambiando la forma en que trabajamos y vivimos.",
        autor: "Laura Gómez",
        nombre: "Transformación Digital",
        textColor: "white"
    },
    {
        id: 16,
        texto: "La justicia social es un principio fundamental para construir sociedades inclusivas y equitativas. Promover la igualdad de oportunidades y combatir la discriminación son pasos clave hacia un mundo más justo.",
        autor: "Carlos Sánchez",
        nombre: "Justicia Social",
        textColor: "white"
    },
    {
        id: 17,
        texto: "La cooperación internacional es esencial para abordar los desafíos globales. Trabajar juntos en áreas como el cambio climático, la seguridad alimentaria y la salud pública puede llevar a soluciones más efectivas y sostenibles.",
        autor: "Luis Martínez",
        nombre: "Cooperación Internacional",
        textColor: "white"
    },
    {
        id: 18,
        texto: "La ética en la inteligencia artificial es un tema crucial en la era digital. Garantizar que los sistemas de IA sean justos, transparentes y responsables es fundamental para proteger los derechos y la dignidad de las personas.",
        autor: "Elena García",
        nombre: "Ética en la IA",
        textColor: "white"
    },
    {
        id: 19,
        texto: "El voluntariado es una forma poderosa de contribuir al bienestar de la sociedad. El tiempo y los esfuerzos dedicados por los voluntarios tienen un impacto significativo en comunidades de todo el mundo.",
        autor: "Andrés López",
        nombre: "Voluntariado",
        textColor: "white"
    }
];

const usePhrasesStore = create((set) => {
  return {
    texto: "",
    phrases: [],
    currentPhrase: 0,
    textColor: "white",
    typedLetters: [],
    setPhrase: (phrase) => {
      set({ texto: phrase });
    },
    fetchPhrases: async (limit) => {
      try {
        const randomIndex = Math.floor(Math.random() * questionPlay.length);
        const randomPhrase = questionPlay[randomIndex];
        set({ phrases: [randomPhrase] });
      } catch (error) {
        console.error("Error fetching phrases:", error);
      }
    },
    setTextColor: (color) => {
      set({ textColor: color });
    }
  };
});

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}

const _excluded = ["onChange", "maxRows", "minRows", "style", "value"];
function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}
const styles = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};
function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0 || obj.outerHeightStyle === 0 && !obj.overflowing;
}

/**
 *
 * Demos:
 *
 * - [Textarea Autosize](https://mui.com/base-ui/react-textarea-autosize/)
 * - [Textarea Autosize](https://mui.com/material-ui/react-textarea-autosize/)
 *
 * API:
 *
 * - [TextareaAutosize API](https://mui.com/base-ui/react-textarea-autosize/components-api/#textarea-autosize)
 */
const TextareaAutosize = /*#__PURE__*/React.forwardRef(function TextareaAutosize(props, forwardedRef) {
  const {
      onChange,
      maxRows,
      minRows = 1,
      style,
      value
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    current: isControlled
  } = React.useRef(value != null);
  const inputRef = React.useRef(null);
  const handleRef = unstable_useForkRef(forwardedRef, inputRef);
  const shadowRef = React.useRef(null);
  const calculateTextareaStyles = React.useCallback(() => {
    const input = inputRef.current;
    const containerWindow = unstable_ownerWindow(input);
    const computedStyle = containerWindow.getComputedStyle(input);

    // If input's width is shrunk and it's not visible, don't sync height.
    if (computedStyle.width === '0px') {
      return {
        outerHeightStyle: 0,
        overflowing: false
      };
    }
    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || 'x';
    if (inputShallow.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += ' ';
    }
    const boxSizing = computedStyle.boxSizing;
    const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
    const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);

    // The height of the inner content
    const innerHeight = inputShallow.scrollHeight;

    // Measure height of a textarea with a single row
    inputShallow.value = 'x';
    const singleRowHeight = inputShallow.scrollHeight;

    // The height of the outer content
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);

    // Take the box sizing into account for applying this value as a style.
    const outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    const overflowing = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle,
      overflowing
    };
  }, [maxRows, minRows, props.placeholder]);
  const syncHeight = React.useCallback(() => {
    const textareaStyles = calculateTextareaStyles();
    if (isEmpty(textareaStyles)) {
      return;
    }
    const input = inputRef.current;
    input.style.height = `${textareaStyles.outerHeightStyle}px`;
    input.style.overflow = textareaStyles.overflowing ? 'hidden' : '';
  }, [calculateTextareaStyles]);
  unstable_useEnhancedEffect(() => {
    const handleResize = () => {
      syncHeight();
    };
    // Workaround a "ResizeObserver loop completed with undelivered notifications" error
    // in test.
    // Note that we might need to use this logic in production per https://github.com/WICG/resize-observer/issues/38
    // Also see https://github.com/mui/mui-x/issues/8733
    let rAF;
    const rAFHandleResize = () => {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => {
        handleResize();
      });
    };
    const debounceHandleResize = unstable_debounce(handleResize);
    const input = inputRef.current;
    const containerWindow = unstable_ownerWindow(input);
    containerWindow.addEventListener('resize', debounceHandleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(process.env.NODE_ENV === 'test' ? rAFHandleResize : handleResize);
      resizeObserver.observe(input);
    }
    return () => {
      debounceHandleResize.clear();
      cancelAnimationFrame(rAF);
      containerWindow.removeEventListener('resize', debounceHandleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [calculateTextareaStyles, syncHeight]);
  unstable_useEnhancedEffect(() => {
    syncHeight();
  });
  const handleChange = event => {
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return /*#__PURE__*/jsxs(React.Fragment, {
    children: [/*#__PURE__*/jsx("textarea", _extends({
      value: value,
      onChange: handleChange,
      ref: handleRef
      // Apply the rows prop to get a "correct" first SSR paint
      ,
      rows: minRows,
      style: style
    }, other)), /*#__PURE__*/jsx("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: _extends({}, styles.shadow, style, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" ? TextareaAutosize.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * @ignore
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  placeholder: PropTypes.string,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * @ignore
   */
  value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.number, PropTypes.string])
} : void 0;

const Phrase = () => {
  const fetchPhrases = usePhrasesStore((state) => state.fetchPhrases);
  const phrases = usePhrasesStore((state) => state.phrases);
  const setTextColor = usePhrasesStore((state) => state.setTextColor);
  const typedLetters = usePhrasesStore((state) => state.typedLetters);
  const phrase = usePhrasesStore();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchPhrases(1);
      } catch (error) {
        console.error("Error fetching phrases:", error);
      }
    };
    fetchData();
  }, []);
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const newTypedLetters = inputValue.split("").map((letter, index) => ({
      letter,
      correct: letter === phrases[0]?.texto[index]
    }));
    usePhrasesStore.setState({ typedLetters: newTypedLetters });
    const allCorrect = newTypedLetters.every((letterObj) => letterObj.correct);
    if (allCorrect) {
      setTextColor("#ffff");
      const jsConfetti = new JSConfetti();
      if (inputValue.length === phrases[0]?.texto.length) {
        jsConfetti.addConfetti();
        setTimeout(() => {
          fetchPhrases(1);
          e.target.value = "";
          usePhrasesStore.setState({ typedLetters: [] });
        }, 3e3);
      }
    } else {
      setTextColor("");
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { className: "instructions select-none", style: { color: phrase.textColor }, children: phrases.length > 0 && phrases[0]?.texto.split("").map((letter, index) => /* @__PURE__ */ jsx(
      "span",
      {
        style: { color: typedLetters[index]?.correct ? "white" : "#f3ec78" },
        children: letter
      },
      index
    )) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("li", { className: "link-input", children: /* @__PURE__ */ jsxs("label", { htmlFor: "Write phrase", children: [
      /* @__PURE__ */ jsx("h2", { children: "Write Phrase" }),
      /* @__PURE__ */ jsx(
        TextareaAutosize,
        {
          name: "write-phrase",
          placeholder: "Type the phrase without making a mistake 👆",
          variant: "outline",
          onChange: handleChange,
          className: "w-full p-2 border border-gray-300 rounded-md"
        }
      )
    ] }) }) })
  ] }) });
};

const $$Astro = createAstro();
const $$Game = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Game;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Write Phrase" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <img class="logoGame" src="/GameWritePNG.svg" alt="Game Write"> <h1>Game <span>Write Phrase</span></h1> <div class="content"> ${renderComponent($$result2, "Phrase", Phrase, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/jfrancisco/Repos/projects/write_phrase/src/components/Phrase", "client:component-export": "default" })} </div> </main> ` })}`;
}, "/home/jfrancisco/Repos/projects/write_phrase/src/pages/game.astro", void 0);

const $$file = "/home/jfrancisco/Repos/projects/write_phrase/src/pages/game.astro";
const $$url = "/game";

const game = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Game,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, game as g };
