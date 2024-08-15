import{S as m,i as f}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const d=s=>s.map(o=>{const{webformatURL:i,largeImageURL:t,tags:e,likes:r,views:n,comments:c,downloads:u}=o;return`<li class="item">
					<a class="item-link" href="${t}"><img class="item-img" src="${i}" alt="" title="${e}" /></a>
					<ul class="item-desc">
							<li>Likes
								<p>${r}</p>
							</li>
							<li>Views
								<p>${n}</p>
							</li>
							<li>Comments
								<p>${c}</p>
							</li>
							<li>Downloads
								<p>${u}</p>
							</li>
					</ul>
				</li>`}).join(""),p=s=>{const o=new URLSearchParams({key:"45426984-94cd792edc1ba8c0f2dda7afb",q:`${s.trim()}`,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`)},a=document.querySelector(".search-form"),l=document.querySelector(".gallery"),h=new m(".gallery a"),y=s=>{s.preventDefault();const o=s.target.elements.user_keyword.value;if(o.trim()==="")return;const i=document.createElement("p");i.classList.add("loader"),a.after(i),p(o).then(t=>{if(l.innerHTML="",!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length===0){f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}l.innerHTML=d(t.hits),h.refresh()}).catch(t=>console.log(t)).finally(()=>{i.remove()}),a.reset()};a.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
