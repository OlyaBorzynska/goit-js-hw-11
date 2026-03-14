import{a as m,S as u,i as l}from"./assets/vendor-DQvd0HNi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function p(t){const a="https://pixabay.com"+"/api/",e={key:"55022045-3d975f619dbee963f7f59f5ce",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(a,{params:e})}const c=document.querySelector(".gallery"),d=document.querySelector(".loader");let f=new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function g(t){return`<a class="gallery-link" href="${t.largeImageURL}">
        <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
        <div class="small-container">
          <p class="gallery-text">
            <span class="small-title-gallery">Likes</span><br>${t.likes}
          </p>
          <p class="gallery-text">
            <span class="small-title-gallery">Views</span><br>${t.views}
          </p>
          <p class="gallery-text">
            <span class="small-title-gallery">Comments</span><br>${t.comments}
          </p>
          <p class="gallery-text">
            <span class="small-title-gallery">Downloads</span><br>${t.downloads}
          </p>
        </div>
      </a>`}function y(t){return t.map(g).join("")}function h(t){c.insertAdjacentHTML("afterbegin",y(t)),f.refresh()}function b(){c.innerHTML=""}function L(){d.classList.remove("hidden")}function R(){d.classList.add("hidden")}const i=document.querySelector(".form");i.addEventListener("submit",t=>{t.preventDefault(),b();const o=new FormData(i).get("search-text");o.trim()===""?l.error({theme:"dark",position:"topRight",backgroundColor:"red",message:`Sorry, there are no images matching 
      your search query. <br> Please try again!`}):(L(),p(o.trim()).then(a=>{a.data.hits.length===0?l.error({theme:"dark",position:"topRight",backgroundColor:"red",message:`Sorry, there are no images matching 
            your search query. <br> Please try again!`}):(h(a.data.hits),i.reset(),R())}).catch(a=>{l.error({theme:"dark",position:"topRight",backgroundColor:"red",message:`ERROR: ${a}`})}))});
//# sourceMappingURL=index.js.map
