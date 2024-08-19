"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/digerati/skipToMainContent.ts
  var skipToMainContent = () => {
    const trigger = document.querySelector('[dd-skip-to-main-content="trigger"]'), target = document.querySelector('[dd-skip-to-main-content="target"]');
    if (!trigger || !target) {
      return;
    }
    ["click", "keypress"].forEach((event) => {
      trigger.addEventListener(event, (e) => {
        if (e.type === "keydown" && e.which !== 13) {
          return;
        }
        e.preventDefault();
        target.setAttribute("tabindex", "-1");
        target.focus();
      });
    });
  };

  // src/digerati/currentYear.ts
  var currentYear = () => {
    const target = document.querySelector('[dd-date="current-year"]');
    if (!target) {
      return;
    }
    const fullYear = (/* @__PURE__ */ new Date()).getFullYear();
    target.innerText = fullYear.toString();
  };

  // src/digerati/populateDataAttributeHoverText.ts
  var populateDataAttributeHoverText = () => {
    const elements = document.querySelectorAll("[dd-label]");
    if (!elements) {
      return;
    }
    elements.forEach((element) => {
      let targetElement = element.classList.contains("is-heading-highlight") ? element.previousSibling : element, labelText = targetElement.innerText;
      console.log(labelText);
      element.setAttribute("dd-label", labelText);
    });
  };

  // src/index.ts
  window.Webflow || [];
  window.Webflow.push(() => {
    skipToMainContent();
    currentYear();
    populateDataAttributeHoverText();
  });
})();
//# sourceMappingURL=index.js.map
