"use strict";(()=>{var n=()=>{let t=document.querySelector('[dd-skip-to-main-content="trigger"]'),e=document.querySelector('[dd-skip-to-main-content="target"]');!t||!e||["click","keypress"].forEach(r=>{t.addEventListener(r,o=>{o.type==="keydown"&&o.which!==13||(o.preventDefault(),e.setAttribute("tabindex","-1"),e.focus())})})};var i=()=>{let t=document.querySelector('[dd-date="current-year"]');if(!t)return;let e=new Date().getFullYear();t.innerText=e.toString()};var a=()=>{let t=document.querySelectorAll("[dd-label]");t&&t.forEach(e=>{let r=e.innerText;e.setAttribute("dd-label",r)})};window.Webflow;window.Webflow.push(()=>{n(),i(),a()});})();
