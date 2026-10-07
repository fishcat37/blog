import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@12.1.0/dist/mermaid.esm.min.mjs";

const diagrams = Array.from(document.querySelectorAll("pre.mermaid"), element => ({
    element,
    source: element.textContent
}));

async function renderDiagrams() {
    mermaid.initialize({
        startOnLoad: false,
        theme: document.documentElement.dataset.theme === "dark" ? "dark" : "default"
    });
    for (const { element, source } of diagrams) {
        element.textContent = source;
        element.removeAttribute("data-processed");
    }
    await mermaid.run({ nodes: diagrams.map(diagram => diagram.element) });
}

// Serialize redraws so theme changes cannot overlap an unfinished render.
let renderQueue = Promise.resolve();
function scheduleRender() {
    renderQueue = renderQueue.then(renderDiagrams).catch(error => {
        console.error("Mermaid 渲染失败：", error);
    });
}

new MutationObserver(scheduleRender).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"]
});
scheduleRender();
