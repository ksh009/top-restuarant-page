(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");if(c.length)for(var a=c.length-1;a>-1&&!t;)t=c[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{function t(e){const t=document.createElement("button");return t.textContent=e,t}const n=e.p+"img/food-hero.jpg",c=e.p+"img/food-card1.jpg",a=e.p+"img/food-card2.jpg",i=e.p+"img/food-card3.jpg";function o(e,t,n,c){const a=document.createElement("div");return a.classList.add("menu-item"),a.appendChild(function(e){const t=document.createElement("img");return t.src=e,t.alt="Menu Item Image",t}(e)),a.appendChild(function(e){const t=document.createElement("h3");return t.classList.add("item-header"),t.textContent=e,t}(t)),a.appendChild(function(e){const t=document.createElement("p");return t.classList.add("item-description"),t.textContent=e,t}(n)),a.appendChild(function(e){const t=document.createElement("p");return t.classList.add("item-price"),t.textContent=e,t}(c)),a.appendChild(function(){const e=document.createElement("a");return e.classList.add("cta-btn"),e.href="#",e.textContent="Order Now",e}()),a}function d(e,t,n){const c=document.createElement("div");c.classList.add("form-group");const a=document.createElement("input");a.setAttribute("type",e),a.setAttribute("name",t),a.setAttribute("placeholder",n);const i=document.createElement("label");return i.setAttribute("for",t),i.textContent=n,c.appendChild(i),c.appendChild(a),c}const r=document.getElementById("content"),s=document.createElement("main");s.classList.add("main-content-container"),r.appendChild(function(){const e=function(){const e=document.createElement("header");return e.classList.add("nav-container"),e}(),n=function(){const e=document.createElement("nav");return e.classList.add("nav"),e}(),c=function(){const e=document.createElement("div");e.classList.add("logo");const t=function(){const e=document.createElement("a");return e.href="#",e.textContent="Snack Shack",e}();return e.appendChild(t),e}(),a=function(){const e=document.createElement("div");e.classList.add("auth");const n=t("SIGN UP"),c=t("SIGN IN");return e.appendChild(n),e.appendChild(c),e}(),i=function(){document.querySelector(".hero"),document.querySelector(".menu-container"),document.querySelector(".contact-container");const e=document.createElement("div");e.classList.add("middle-buttons");const n=t("Home"),c=t("Menu"),a=t("Contact");return n.classList.add("active"),n.addEventListener("click",(()=>{n.classList.add("active"),c.classList.remove("active"),a.classList.remove("active")})),c.addEventListener("click",(()=>{c.classList.add("active"),n.classList.remove("active"),a.classList.remove("active")})),a.addEventListener("click",(()=>{a.classList.add("active"),n.classList.remove("active"),c.classList.remove("active")})),e.appendChild(n),e.appendChild(c),e.appendChild(a),e}();return n.appendChild(c),n.appendChild(i),n.appendChild(a),e.appendChild(n),e}()),s.appendChild(function(){const e=document.createElement("section");return e.classList.add("hero"),e.style.backgroundImage=`url(${n})`,e.appendChild(function(){const e=document.createElement("div");return e.classList.add("hero-content"),e.appendChild(function(){const e=document.createElement("h1");return e.textContent="Welcome to the Snack Shack",e}()),e.appendChild(function(){const e=document.createElement("p");return e.textContent="Bite into Happiness at The Snack Shack. Indulge in our delectable treats and savor every moment. From juicy burgers to crispy fries and everything in between, our menu will leave your taste buds begging for more. Come visit us today!",e}()),e.appendChild(function(){const e=document.createElement("a");return e.classList.add("cta-btn"),e.href="#",e.textContent="Place an order",e}()),e}()),e}()),s.appendChild(function(){const e=document.createElement("section");return e.classList.add("menu-container"),e.style.backgroundImage=`url(${n})`,e.appendChild(o(c,"Menu Item 1","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus vel neque ac hendrerit.","$10.99")),e.appendChild(o(a,"Menu Item 2","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus vel neque ac hendrerit.","$12.99")),e.appendChild(o(i,"Menu Item 3","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus vel neque ac hendrerit.","$8.99")),e}()),s.appendChild(function(){const e=document.createElement("section");e.classList.add("contact-container"),e.style.backgroundImage=`url(${n})`;const t=function(){const e=document.createElement("form");return e.classList.add("contact-form"),e.setAttribute("action","#"),e.setAttribute("method","post"),e}();return t.appendChild(d("text","name","Name")),t.appendChild(d("email","email","Email")),t.appendChild(d("tel","phone","Phone")),t.appendChild(d("textarea","message","Message")),t.appendChild(function(e){const t=document.createElement("button");return t.classList.add("submit-btn"),t.setAttribute("type","submit"),t.textContent="Submit",t}()),e.appendChild(t),e}()),r.appendChild(s)})()})();