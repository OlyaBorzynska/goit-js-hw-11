import{a as c,S as m,i}from"./assets/vendor-DQvd0HNi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();async function f(t){const a="https://pixabay.com"+"/api/",e={key:"55022045-3d975f619dbee963f7f59f5ce",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return c.get(a,{params:e})}const p=document.querySelector(".gallery");let u=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function d(t){return`<a class="gallery-link" href="${t.largeImageURL}">
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
      </a>`}function g(t){return t.map(d).join("")}function y(t){p.insertAdjacentHTML("afterbegin",g(t)),u.refresh()}const o=document.querySelector(".form");o.addEventListener("submit",t=>{t.preventDefault();const l=new FormData(o).get("search-text");l.trim()===""?i.warning({message:"Fill in the search field"}):f(l.trim()).then(a=>{a.data.hits.length===0?i.warning({message:"Sorry, there are no images matching your search query. Please try again!"}):(y(a.data.hits),o.reset())})});
//# sourceMappingURL=index.js.map
