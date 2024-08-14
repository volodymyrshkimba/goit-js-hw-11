(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d=document.querySelector(".search-form"),p=document.querySelector(".gallery"),h=i=>{i.preventDefault();const o=i.target.elements.user_keyword.value;if(o.trim()===""){console.log("Enter correct key");return}const n=new URLSearchParams({key:"45426984-94cd792edc1ba8c0f2dda7afb",q:`${o.trim()}`,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${n}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(r.hits.length===0){console.log("Sorry, there are no images matching your search query. Please try again!");return}console.log(r.hits);const e=r.hits.map(t=>{const{webformatURL:s,largeImageURL:l,tags:c,likes:a,views:u,comments:m,downloads:f}=t;return`<li class="item">
        						<a class="item-link" href="${l}"><img class="item-img" src="${s}" alt="" title="${c}" /></a>
								<ul class="item-desc">
         						 <li>Likes
									 	<p>${a}</p>
									 </li>
      						    <li>Views
									 	<p>${u}</p>
									 </li>
    						       <li>Comments
									 	<p>${m}</p>
									 </li>
     							    <li>Downloads
									 	<p>${f}</p>
									 </li>
      					   </ul>
                    </li>`}).join("");console.log(e),p.innerHTML=e}).catch(r=>console.log(r))};d.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
