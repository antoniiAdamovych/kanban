import { ref, useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, onMounted } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr } from "vue/server-renderer";
import Reveal from "reveal.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import { createApp } from "vue/dist/vue.esm-bundler.js";
const _imports_0$3 = "data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23ffffff'/%3e%3c/svg%3e";
const client = ref({
  activeSlide: 0,
  activeFragment: 0,
  fragmentBeginn: false
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$b = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)}><h1>Kanban</h1><p class="lg:text-base">von Antonii Adamovych, Edler Lennart und Maximilian Wunderlich</p></section>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("public/src/slides/Intro.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Intro = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Kanban",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "kanbanDefinition",
        class: "group"
      }, _attrs))}><h2 class="${ssrRenderClass(`absolute top-1/2 -translate-y-1/2 group-has-[.current-fragment]:lg:-top-full group-has-[.current-fragment]:-top-1/2 group-has-[.current-fragment]:-translate-y-0 left-1/2 -translate-x-1/2 w-max transition-all ease-in-out duration-300 `)}"> Was ist <span class="text-purple-600">Kanban</span></h2><ul style="${ssrRenderStyle({ "--gap": "1.5rem" })}" class="!flex items-start flex-wrap w-full px-20 gap-[var(--gap)]"><li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none"><p class="lg:text-base">Kanban bedeutet auf Japanisch „Signal” und „Karte”.</p></li><li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none bg-purple-900 px-4 rounded-lg"><p class="lg:text-base">Entwickelt in den 1940er Jahren von Toyota.</p></li><li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none"><p class="lg:text-base">Reduktion von Lagerbeständen und Erhöhung der Produktivität. </p></li><li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none"><p class="lg:text-base">Kurze Intervalle zur Ergebnisentwicklung und Feedbackverbesserung.</p></li></ul></section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("public/src/slides/Kanban.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Tickets",
  __ssrInlineRender: true,
  setup(__props) {
    const tasks = ref([
      { title: "Task 1", status: "todo" },
      { title: "Task 2", status: "todo" },
      { title: "Task 3", status: "todo" },
      { title: "Task 4", status: "in-progress" },
      { title: "Task 5", status: "in-progress" },
      { title: "Task 6", status: "done" },
      { title: "Task 7", status: "done" },
      { title: "Task 8", status: "done" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><h4>Struktur</h4><div class="flex gap-4 flex-col justify-center items-center lg:flex-row"><div class="w-full max-w-[500px] px-8 py-8 lg:w-1/3 h-[400px] lg:h-[300px] bg-blue-800 bg-opacity-50 border border-blue-800 rounded-lg lg:p-4"><h6 class="lg:text-xl">To Do</h6><ul class="!m-0 w-full max-h-[255px] lg:max-h-[200px] space-y-2 overflow-auto"><!--[-->`);
      ssrRenderList(tasks.value.filter((task) => task.status == "todo"), (item) => {
        _push(`<li class="list-none w-full"><button class="px-4 w-full relative py-3 rounded-lg bg-blue-700 bg-opacity-50 scale-100 transition-all cursor-pointer active:scale-95 hover:bg-opacity-40 flex items-center justify-between"><p class="lg:text-base !m-0 p-0">${ssrInterpolate(item.title)}</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg></button></li>`);
      });
      _push(`<!--]--></ul></div><div class="w-full max-w-[500px] px-8 py-8 lg:w-1/3 h-[400px] lg:h-[300px] bg-orange-800 bg-opacity-50 border border-orange-800 rounded-lg lg:p-4"><h6 class="lg:text-xl">In Progress</h6><ul class="!m-0 w-full max-h-[255px] lg:max-h-[200px] space-y-2 overflow-auto"><!--[-->`);
      ssrRenderList(tasks.value.filter((task) => task.status == "in-progress"), (item) => {
        _push(`<li class="list-none w-full"><button class="px-4 w-full relative py-3 rounded-lg bg-yellow-700 bg-opacity-50 scale-100 transition-all cursor-pointer active:scale-95 hover:bg-opacity-40 flex items-center justify-between"><p class="lg:text-base !m-0 p-0">${ssrInterpolate(item.title)}</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg></button></li>`);
      });
      _push(`<!--]--></ul></div><div class="w-full max-w-[500px] px-8 py-8 lg:w-1/3 h-[400px] lg:h-[300px] bg-green-800 bg-opacity-50 border border-green-800 rounded-lg lg:p-4"><h6 class="lg:text-xl">Done</h6><ul class="!m-0 w-full max-h-[255px] lg:max-h-[200px] space-y-2 overflow-auto"><!--[-->`);
      ssrRenderList(tasks.value.filter((task) => task.status == "done"), (item, i) => {
        _push(`<li class="list-none w-full"><button class="px-4 w-full relative py-3 rounded-lg bg-green-700 bg-opacity-50 scale-100 transition-all cursor-pointer active:scale-95 hover:bg-opacity-40 flex items-center justify-between"><p class="lg:text-base !m-0 p-0">${ssrInterpolate(item.title)}</p></button></li>`);
      });
      _push(`<!--]--></ul></div></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("public/src/slides/Tickets.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _imports_0$2 = "/assets/avatar-D1ZMADGj.jpeg";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Ticket",
  __ssrInlineRender: true,
  setup(__props) {
    const tasks = ref([
      { title: "Task 1", status: "todo" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><h4>Was steht <span class="text-green-800">darauf</span>?</h4><div class="flex gap-4 flex-col justify-center items-center lg:flex-row"><div class="w-full max-w-[500px] px-8 py-8 lg:w-1/3 h-[400px] lg:h-[300px] bg-blue-800 bg-opacity-50 border border-blue-800 rounded-lg lg:p-4"><h6 class="lg:text-xl">To Do</h6><ul class="!m-0 w-full max-h-[255px] lg:max-h-[200px] space-y-2"><!--[-->`);
      ssrRenderList(tasks.value, (item) => {
        _push(`<li class="list-none w-full"><button class="px-4 w-full relative py-3 rounded-lg bg-blue-700 bg-opacity-50 scale-100 transition-all cursor-pointer active:scale-95 hover:bg-opacity-40 space-y-2"><div class="flex items-center justify-between"><p class="lg:text-base !m-0 p-0">${ssrInterpolate(item.title)}</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg></div><div class="flex w-full gap-1"><div class="fragment text-xs px-3 py-1 max-h-[25px] rounded-full bg-yellow-800 border border-yellow-800 bg-opacity-50 transition-all duration-300 ease-in-out hover:translate-y-px hover:translate-x-px hover:shadow-lg"> 🏝️ Low</div><div class="fragment text-xs px-3 py-1 max-h-[25px] rounded-full bg-purple-800 border border-purple-800 bg-opacity-50 transition-all duration-300 ease-in-out hover:translate-y-px hover:translate-x-px hover:shadow-lg"> 🐇 Small</div><div class="fragment ml-auto group relative"><img class="w-6 aspect-square rounded-full bg-green-400 !m-0"${ssrRenderAttr("src", _imports_0$2)}><p class="text-xs -z-10 opacity-0 group-hover:opacity-100 group-hover:z-10 absolute top-full left-1/2 -translate-x-1/2 w-max !m-0 bg-gray-800 px-2 py-1 rounded-full">Antonii Adamovych</p></div></div></button></li>`);
      });
      _push(`<!--]--></ul></div></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("public/src/slides/Ticket.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap px-[10%]"><div class="col-start-1 w-1/2 col-end-2 row-start-1 row-end-2 border-b border-r items-end py-4"><h6 class="text-center">Vorteile</h6></div><div class="col-start-2 w-1/2 col-end-3 row-start-1 row-end-2 border-b py-4"><h6 class="text-center">Nachteile</h6></div><div class="col-start-1 w-1/2 col-end-2 row-start-2 row-end-3 border-r py-8"><ul class="!list-none space-y-4 !m-0"><li class="flex justify-center transition-all duration-300 hover:bg-blue-800 hover:bg-opacity-30 rounded-lg border border-transparent hover:border hover:border-blue-800"><div class="relative group w-max"><p class="text-3xl text-center !m-0 cursor-default w-max">Visualisierung</p><p class="!m-0 text-sm transition-opacity opacity-0 -z-10 group-hover:opacity-100 group-hover:z-10 absolute w-max max-w-[400px] px-2 py-2 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-800 bottom-full left-full"> der aktuellen Prozesse und deren Stadien. als auch über laufende Arbeitsschritte. </p></div></li><li class="flex justify-center transition-all duration-300 hover:bg-blue-800 hover:bg-opacity-30 rounded-lg border border-transparent hover:border hover:border-blue-800"><div class="relative group w-max"><p class="text-3xl text-center !m-0 cursor-default w-max">Optimierung</p><p class="!m-0 text-sm transition-opacity opacity-0 -z-10 group-hover:opacity-100 group-hover:z-10 absolute w-max max-w-[400px] px-2 py-2 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-800 bottom-full left-full"> der Zusammenarbeit. </p></div></li><li class="flex justify-center transition-all duration-300 hover:bg-blue-800 hover:bg-opacity-30 rounded-lg border border-transparent hover:border hover:border-blue-800"><div class="relative group w-max"><p class="text-3xl text-center !m-0 cursor-default w-max">Zugänglichkeit</p><p class="!m-0 text-sm transition-opacity opacity-0 -z-10 group-hover:opacity-100 group-hover:z-10 absolute w-max max-w-[400px] px-2 py-2 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-800 bottom-full left-full"> für alle Teammitglieder. </p></div></li></ul></div><div class="col-start-2 w-1/2 col-end-3 row-start-2 row-end-3 py-8"><ul class="!list-none space-y-4 !m-0"><li class="flex justify-center transition-all duration-300 hover:bg-blue-800 hover:bg-opacity-30 rounded-lg border border-transparent hover:border hover:border-blue-800"><div class="relative group w-max"><p class="text-3xl text-center !m-0 cursor-default w-max">Kleine Teams</p><p class="!m-0 text-sm transition-opacity opacity-0 -z-10 group-hover:opacity-100 group-hover:z-10 absolute w-max max-w-[400px] px-2 py-2 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-800 bottom-full left-full"> sonst wird es zu schnell zu unübersichtlich. </p></div></li><li class="flex justify-center transition-all duration-300 hover:bg-blue-800 hover:bg-opacity-30 rounded-lg border border-transparent hover:border hover:border-blue-800"><div class="relative group w-max"><p class="text-3xl text-center !m-0 cursor-default w-max">Große Projekte</p><p class="!m-0 text-sm transition-opacity opacity-0 -z-10 group-hover:opacity-100 group-hover:z-10 absolute w-max max-w-[400px] px-2 py-2 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-800 bottom-full left-full"> wegen der Unübersichtlichkeit </p></div></li><li class="flex justify-center transition-all duration-300 hover:bg-blue-800 hover:bg-opacity-30 rounded-lg border border-transparent hover:border hover:border-blue-800"><div class="relative group w-max"><p class="text-3xl text-center !m-0 cursor-default w-max">Prozessverzögerung</p><p class="!m-0 text-sm transition-opacity opacity-0 -z-10 group-hover:opacity-100 group-hover:z-10 absolute w-max max-w-[400px] px-2 py-2 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-800 bottom-full left-full"> Tickets können verloren gehen. </p></div></li></ul></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("public/src/slides/Comparing.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Comparing = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "kanbanDefinition",
    class: "group"
  }, _attrs))}><h2 class="${ssrRenderClass(`absolute top-1/2 -translate-y-1/2 group-has-[:not(.fragment:not(.visible))]:lg:-top-full group-has-[.current-fragment]:-top-1/2 group-has-[.current-fragment]:-translate-y-0 left-1/2 -translate-x-1/2 w-max transition-all ease-in-out duration-300 `)}"> Customizing</h2><ul style="${ssrRenderStyle({ "--gap": "1.5rem" })}" class="!flex items-start flex-wrap w-full px-20 gap-[var(--gap)]"><li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none"><p class="lg:text-base">Farbkodierte Post-its für Teammitglieder.</p></li><li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none"><p class="lg:text-base">Symbole zur Projektzuordnung.</p></li><li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none"><p class="lg:text-base">Prioritäten durch Farben kennzeichnen.</p></li><li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none bg-purple-900 px-4 rounded-lg"><p class="lg:text-base">Zusätzliche Spalten für Analyse- oder Zwischenschritte.</p></li></ul></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("public/src/slides/Custom.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Custom = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "group" }, _attrs))}><h2 class="${ssrRenderClass(`absolute top-1/2 -translate-y-1/2 group-has-[ul_.current-fragment]:lg:-top-full group-has-[ul_.current-fragment]:-top-1/2 group-has-[ul_.current-fragment]:-translate-y-0 left-1/2 -translate-x-1/2 w-max transition-all ease-in-out duration-300 `)}"> Ganz kurz über <span class="text-purple-600 fragment heading">Agile</span></h2><ul style="${ssrRenderStyle({ "--gap": "1.5rem" })}" class="!flex items-start flex-wrap w-full px-20 gap-[var(--gap)]"><li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none"><p class="lg:text-base">Eine Kategorie von Methoden, zu denen unter anderem Scrum und Kanban zählen</p></li><li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none bg-purple-900 px-4 rounded-lg"><p class="lg:text-base">Kollaboration, Selbstorganisation, Revision u. Feedback</p></li><li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none"><p class="lg:text-base">Findet idR Anwendung in der Softwareentwicklung</p></li><li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none"><p class="lg:text-base">Projektphasen statt eines Projektplans</p></li></ul></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("public/src/slides/Agile.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Agile = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-3 grid-rows-2 gap-4"><div class="w-full col-start-1 col-end-3 row-start-1 row-end-2 max-w-[600px] py-8 bg-green-800 bg-opacity-50 border border-green-800 rounded-lg flex items-center pl-24 relative"><div class="bg-green-700 px-3 py-1 rounded-lg absolute left-[1%] h-[90%] w-16 grid place-content-center"><h6 class="-rotate-90 !m-0 w-max">Klassisch</h6></div><ul class="!m-0 w-full max-h-[255px] lg:max-h-[200px] !list-none [&amp;_p]:relative [&amp;_p]:pl-2 [&amp;_p]:after:absolute [&amp;_p]:after:w-2 [&amp;_p]:after:rounded-full [&amp;_p]:after:bg-white [&amp;_p]:after:aspect-square [&amp;_p]:after:right-full [&amp;_p]:after:top-2"><li class="w-full"><p class="text-xl !m-0"> Umfang/kosten klar definiert </p></li><li class="w-full"><p class="text-xl !m-0"> Anforderungen werden zu Anfang erfasst </p></li><li class="w-full"><p class="text-xl !m-0"> Ergebnisse werden erst nach fertigstellung erfasst/bewertet </p></li><li class="w-full"><p class="text-xl !m-0"> Aufteilung d. Projekts in definierte Phasen </p></li></ul></div><div class="w-full col-start-2 col-end-4 row-start-2 row-end-3 max-w-[600px] py-8 bg-blue-800 bg-opacity-50 border border-blue-800 rounded-lg flex items-center pl-24 relative"><div class="bg-blue-700 px-3 py-1 rounded-lg absolute left-[1%] h-[90%] w-16 grid place-content-center"><h6 class="-rotate-90 !m-0 w-max">Agil</h6></div><ul class="!m-0 w-full max-h-[255px] lg:max-h-[200px] !list-none [&amp;_p]:relative [&amp;_p]:pl-2 [&amp;_p]:after:absolute [&amp;_p]:after:w-2 [&amp;_p]:after:rounded-full [&amp;_p]:after:bg-white [&amp;_p]:after:aspect-square [&amp;_p]:after:right-full [&amp;_p]:after:top-2"><li class="w-full"><p class="text-xl !m-0"> Zeit und Kosten werden während des Projektes individuell verteilt, der Umfang steht jedoch fest </p></li><li class="w-full"><p class="text-xl !m-0"> Anforderungen werden im laufenden Prozess erfasst </p></li><li class="w-full"><p class="text-xl !m-0"> Ergebnisse werden in regelmäßigen Abständen überprüft und bewerten </p></li><li class="w-full"><p class="text-xl !m-0"> Aufteilung des Projektes in Teilbereiche, welche jeweils alle Phasen einmal durchlaufen </p></li><li class="w-full"><p class="text-xl !m-0"> Regelmäßiger Austausch der unterschiedlichen Teams </p></li></ul></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("public/src/slides/Classic-Agile.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ClassicAgile = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0$1 = "/assets/checkbox-C-OSODkK.png";
const _imports_1 = "/assets/empty-B84ccOPm.png";
const _imports_2 = "/assets/Progress-BkzFIILk.png";
const _imports_3 = "/assets/CHILL-DwdvZJs1.png";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Efficiency",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [Pagination];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "group" }, _attrs))}><div class="icon absolute transition-all duration-300 group-has-[.fragment.visible]:right-4 group-has-[.fragment.visible]:top-4 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"> ⚡️</div><div class="fragment"><h2>Efficiency</h2><div class="w-full">`);
      _push(ssrRenderComponent(unref(Swiper), { modules }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="w-full !max-h-[500px] object-contain"${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "w-full !max-h-[500px] object-contain",
                      src: _imports_0$1,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="w-full rounded-lg mx-auto"${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "w-full rounded-lg mx-auto",
                      src: _imports_1,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="w-full h-full !max-h-[450px] object-contain rounded-lg mx-auto"${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "w-full h-full !max-h-[450px] object-contain rounded-lg mx-auto",
                      src: _imports_2,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="w-full h-full !max-h-[450px] object-contain rounded-lg mx-auto"${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "w-full h-full !max-h-[450px] object-contain rounded-lg mx-auto",
                      src: _imports_3,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("img", {
                    class: "w-full !max-h-[500px] object-contain",
                    src: _imports_0$1,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("img", {
                    class: "w-full rounded-lg mx-auto",
                    src: _imports_1,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("img", {
                    class: "w-full h-full !max-h-[450px] object-contain rounded-lg mx-auto",
                    src: _imports_2,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("img", {
                    class: "w-full h-full !max-h-[450px] object-contain rounded-lg mx-auto",
                    src: _imports_3,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("public/src/slides/Efficiency.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var container = document.createElement("div");
container.classList.add("confetti-container");
container.style.position = "fixed";
container.style.top = "0";
container.style.left = "0";
container.style.width = "100%";
container.style.height = "0";
container.style.overflow = "visible";
container.style.zIndex = "9999";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Quiz",
  __ssrInlineRender: true,
  setup(__props) {
    const started = ref(false);
    const activeQuestion = ref(0);
    const section = ref(null);
    const currentQuestion = ref({
      id: 0,
      selected: "",
      isRight: false
    });
    const result = ref(0);
    const questions = ref([]);
    onMounted(async () => {
      const res = await fetch("/api/questions").then((res2) => res2.json()).catch((err) => console.error(err));
      if (res) {
        questions.value = res;
      }
    });
    ref("");
    const showStatus = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "section",
        ref: section
      }, _attrs))}>`);
      if (!started.value) {
        _push(`<div class="h-[400px] grid place-content-center"><h2>Quiz</h2><button class="bg-gray-800 bg-opacity-50 border border-gray-800 px-4 py-2 text-base rounded-lg">Start Quiz</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (started.value) {
        _push(`<!--[-->`);
        if (questions.value && questions.value.length > activeQuestion.value) {
          _push(`<div class="h-[400px] grid place-content-center"><h6 class="text-4xl !mb-10">${ssrInterpolate(questions.value[activeQuestion.value].frage)}</h6><div class="grid grid-cols-2 px-20 gap-4"><!--[-->`);
          ssrRenderList(questions.value[activeQuestion.value].optionen, (question, i) => {
            _push(`<div><label class="${ssrRenderClass(`cursor-pointer px-4 py-2 grid place-content-center bg-opacity-50 border min-h-[80px] rounded-lg ${currentQuestion.value.selected == question.id ? "bg-blue-800 border-blue-800" : ""} ${showStatus.value && currentQuestion.value.selected == question.id && currentQuestion.value.isRight ? "bg-green-800 border-green-800" : showStatus.value && currentQuestion.value.selected == question.id && !currentQuestion.value.isRight ? "bg-red-800 border-red-800" : ""}`)}"><span class="text-base !m-0">${ssrInterpolate((i + 1).toString())}. ${ssrInterpolate(question.text)}</span></label></div>`);
          });
          _push(`<!--]--></div><button${ssrIncludeBooleanAttr(!currentQuestion.value.selected) ? " disabled" : ""} class="disabled:opacity-60 disabled:cursor-not-allowed w-max mt-6 mx-auto bg-gray-800 bg-opacity-50 border border-gray-800 px-4 py-2 text-base rounded-lg">Absenden</button></div>`);
        } else {
          _push(`<div class="h-[400px] grid place-content-center"><h2>Ergebnis</h2><p>Du hast ${ssrInterpolate(result.value)} von ${ssrInterpolate(questions.value.length)} Fragen richtig beantwortet!</p></div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("public/src/slides/Quiz.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "/assets/Bild-BB9qqRgN.png";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)}><img class="w-1/2 aspect-square !mx-auto"${ssrRenderAttr("src", _imports_0)} alt=""></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("public/src/slides/End.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const End = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      Reveal.initialize({});
      Reveal.on("slidechanged", (event) => {
        client.value.fragmentBeginn = true;
        client.value.activeSlide = event.indexh;
        const confetti = document.querySelector(".confetti-container");
        if (confetti)
          confetti.remove();
      });
      Reveal.on("fragmentshown", (event) => {
        client.value.fragmentBeginn = false;
        client.value.activeFragment = event.fragment.getAttribute("data-fragment-index");
      });
      Reveal.on("fragmenthidden", (event) => {
        if (event.fragment.getAttribute("data-fragment-index") == "0") {
          client.value.fragmentBeginn = true;
        } else {
          client.value.fragmentBeginn = false;
        }
        client.value.activeFragment = event.fragment.getAttribute("data-fragment-index");
      });
      KeyEvents();
    });
    function KeyEvents() {
      document.addEventListener(
        "keydown",
        (e) => {
          if (e.key === "Enter") {
            toggleFullScreen();
          }
        },
        false
      );
    }
    function toggleFullScreen() {
      const toast = document.querySelector(".toast");
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        if (toast)
          toast.style.opacity = "0";
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
        if (toast)
          toast.style.opacity = "1";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="reveal !hidden lg:!block"><div class="slides">`);
      _push(ssrRenderComponent(Intro, null, null, _parent));
      _push(ssrRenderComponent(Agile, null, null, _parent));
      _push(ssrRenderComponent(ClassicAgile, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(ssrRenderComponent(Comparing, null, null, _parent));
      _push(ssrRenderComponent(Custom, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(End, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div></div><a target="_blank" class="!w-8 aspect-square !absolute top-8 right-8" href="https://github.com/antoniiAdamovych/kanban"><img class="w-full h-full"${ssrRenderAttr("src", _imports_0$3)} alt=""></a><p class="lg:hidden text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-white">Nutze den Laptop!</p><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("public/src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vue = createApp({});
vue.component("App", _sfc_main);
vue.mount("#app");
