(()=>{"use strict";var e=document.querySelector(".popup_profile-edit"),t=document.querySelector(".profile__button-edit"),n=document.querySelector(".popup__button-close"),o=document.querySelector(".profile__name"),r=document.querySelector(".profile__description"),c=document.querySelector(".profile__image"),a=document.querySelector(".popup__input_place_name"),u=document.querySelector(".popup__input_place_url"),i=document.querySelector(".popup__form"),l=(document.querySelector(".popup__overlay"),document.querySelector(".popup__input_data_name")),s=document.querySelector(".popup__input_data_description"),d=document.querySelector(".popup__input_data_avatar"),p=document.querySelector(".popup__caption"),f=document.querySelector(".popup__image"),m=document.querySelector(".popup_card-add"),_=document.querySelector(".profile__button-add"),v=document.querySelector(".popup__button-close_card-add"),y=document.querySelector(".popup_scale-image"),h=document.querySelector(".popup__button-close_scale-image"),S=document.querySelector(".elements__list"),b=m.querySelector(".popup__form"),q=document.querySelector("#template-card"),g=document.querySelector(".profile__image-button-edit"),C=document.querySelector(".popup_avatar-edit"),E=C.querySelector(".popup__form"),L=document.querySelector(".popup__button-close_avatar-edit"),k="",x={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},A=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""},w=function(e,t){e.classList.add(t.inactiveButtonClass)},U=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?function(e,t){e.classList.remove(t.inactiveButtonClass)}(t,n):w(t,n)},j=function(e,t){Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(n){A(e,n,t)}));var n=e.querySelector(t.submitButtonSelector);w(n,t)},T={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-7",headers:{authorization:"400483bd-d199-4e6d-9f74-66e7b1937a87","Content-Type":"application/json"}},O=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},I=function(e){return fetch("".concat(T.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:T.headers}).then(O)},P=function(e){return fetch("".concat(T.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:T.headers}).then(O)},B=function(e){return fetch("".concat(T.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:T.headers}).then(O)},D=function(e){e.classList.add("popup_opened"),document.addEventListener("keydown",J),e.addEventListener("mousedown",(function(){return N(e)})),e.querySelector(".popup__overlay").addEventListener("mousedown",(function(e){e.stopPropagation()}))},N=function e(t){t.classList.remove("popup_opened"),document.removeEventListener("keydown",J),t.removeEventListener("mousedown",(function(){return e(t)})),t.querySelector(".popup__overlay").removeEventListener("mousedown",(function(e){e.stopPropagation()}))};function J(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");N(t)}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function G(e){var t=q.content.cloneNode(!0);t.querySelector(".card__title").textContent=e.name;var n=t.querySelector(".card__image");n.alt=e.name,n.src=e.link;var o=e._id,r=e.owner,c=t.querySelector(".card__button-remove");r._id!==k&&(c.style.display="none"),c.addEventListener("click",(function(){r._id===k&&(I(o),c.closest(".card").remove())}));var a=t.querySelector(".card__button-like"),u=t.querySelector(".card__count-like");return u.textContent=e.likes?e.likes.length:0,"true"===localStorage.getItem("like_".concat(o))&&a.classList.add("card__button-like_active"),a.addEventListener("click",(function(){a.classList.contains("card__button-like_active")?B(o).then((function(e){localStorage.setItem("like_".concat(o),!1),a.classList.remove("card__button-like_active"),u.textContent=e.likes.length})).catch((function(e){console.log(e)})):P(o).then((function(e){localStorage.setItem("like_".concat(o),!0),a.classList.add("card__button-like_active"),u.textContent=e.likes.length})).catch((function(e){console.log(e)}))})),n.addEventListener("click",(function(){return function(e){p.textContent=e.name,f.src=e.link,f.alt=e.name,D(y)}(e)})),t}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}Promise.all([fetch("".concat(T.baseUrl,"/users/me"),{method:"GET",headers:T.headers}).then(O),fetch("".concat(T.baseUrl,"/cards"),{method:"GET",headers:T.headers}).then(O)]).then((function(e){var t,n,a=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(o=c.call(n)).done)&&(u.push(o.value),u.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[0],i=a[1];o.textContent=u.name,r.textContent=u.about,c.src=u.avatar,k=u._id,function(e){var t=e.map(G);S.prepend.apply(S,function(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t))}(i)})).catch((function(e){console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);U(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?A(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)}(e,r,t),U(n,o,t)}))}))}(t,e)}))}(x),t.addEventListener("click",(function(){l.value=o.textContent,s.value=r.textContent,D(e)})),n.addEventListener("click",(function(){N(e)})),g.addEventListener("click",(function(){D(C)})),L.addEventListener("click",(function(){N(C)})),E.addEventListener("submit",(function(e){(function(e){e.preventDefault();var t,n=e.target.querySelector(".popup__button-save"),o=n.textContent;n.textContent="Сохранение...",(t={avatar:d.value},fetch("".concat(T.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:T.headers,body:JSON.stringify({avatar:t.avatar})}).then(O)).then((function(e){c.src=e.avatar})).then((function(){n.textContent="Сохранить",N(C)})).catch((function(e){console.log(e),n.textContent=o}))})(e),E.reset(),j(C,x)})),i.addEventListener("submit",(function(t){(function(t){t.preventDefault();var n,c=t.target.querySelector(".popup__button-save"),a=c.textContent;c.textContent="Сохранение...",(n={name:l.value,about:s.value},fetch("".concat(T.baseUrl,"/users/me"),{method:"PATCH",headers:T.headers,body:JSON.stringify({name:n.name,about:n.about})}).then(O)).then((function(e){o.textContent=e.name,r.textContent=e.about})).then((function(){c.textContent="Сохранить",N(e)})).catch((function(e){console.log(e),c.textContent=a}))})(t),j(e,x)})),_.addEventListener("click",(function(){D(m)})),v.addEventListener("click",(function(){N(m)})),h.addEventListener("click",(function(){return N(y)})),b.addEventListener("submit",(function(e){(function(e){e.preventDefault();var t,n=e.target.querySelector(".popup__button-save"),o=n.textContent;n.textContent="Создание...",(t={name:a.value,link:u.value},fetch("".concat(T.baseUrl,"/cards"),{method:"POST",headers:T.headers,body:JSON.stringify({name:t.name,link:t.link})}).then(O)).then((function(e){var t=G(e);S.prepend(t),b.reset()})).then((function(){n.textContent="Создать",N(m)})).catch((function(e){console.log(e),n.textContent=o}))})(e),b.reset(),j(m,x)}))})();