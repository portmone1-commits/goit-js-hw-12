/* empty css                      */import{a as S,S as q,i as n}from"./assets/vendor-Cu43xbyG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const M="https://pixabay.com/api/",E="55320166-80faf599e236f6e8a9c40b324",R=15;async function f(t,o){return(await S.get(M,{params:{key:E,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:R}})).data}const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),h=document.querySelector(".load-more"),$=new q(".gallery a",{captionsData:"alt",captionDelay:250});function B(t){return t.map(({webformatURL:o,largeImageURL:s,tags:i,likes:e,views:r,comments:c,downloads:P})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${i}"
            />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> ${e}</p>
            <p class="info-item"><b>Views</b> ${r}</p>
            <p class="info-item"><b>Comments</b> ${c}</p>
            <p class="info-item"><b>Downloads</b> ${P}</p>
          </div>
        </li>
      `).join("")}function p(t){m.insertAdjacentHTML("beforeend",B(t)),$.refresh()}function A(){m.innerHTML=""}function y(){g.classList.add("is-visible")}function b(){g.classList.remove("is-visible")}function L(){h.classList.add("is-visible")}function u(){h.classList.remove("is-visible")}const v=document.querySelector(".form"),O=document.querySelector(".load-more"),_=document.querySelector(".gallery");let d="",a=1,l=0;const w=15;v.addEventListener("submit",x);O.addEventListener("click",C);async function x(t){t.preventDefault();const o=t.currentTarget.elements["search-text"].value.trim();if(!o){n.warning({message:"Please enter a search query!",position:"topRight"});return}d=o,a=1,l=0,A(),u(),y();try{const s=await f(d,a);if(l=s.totalHits,!s.hits||s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(s.hits);const i=Math.ceil(l/w);a<i?L():(u(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b(),v.reset()}}async function C(){a+=1,u(),y();try{const t=await f(d,a);p(t.hits),H();const o=Math.ceil(l/w);a<o?L():(u(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b()}}function H(){const t=_.firstElementChild;if(!t)return;const o=t.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
