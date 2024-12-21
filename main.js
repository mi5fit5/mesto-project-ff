/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{F:()=>at});var e,r,n={baseUrl:"https://mesto.nomoreparties.co/v1/cohort-mag-4",headers:{authorization:"9f02ed23-5fe5-42cf-a8a9-b25643da6cbf","Content-Type":"application/json"}},o=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o={method:t,headers:n.headers};return r&&Object.keys(r).length>0&&(o.body=JSON.stringify(r)),console.log("URL для запроса:","".concat(n.baseUrl).concat(e)),fetch("".concat(n.baseUrl).concat(e),o).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))};function i(t,n,i){var a=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),c=a.querySelector(".card__image"),u=a.querySelector(".card__like-button"),l=a.querySelector(".card__like-counter"),s=a.querySelector(".card__delete-button");return a.querySelector(".card__title").textContent=t.name,c.src=t.link,c.alt=t.name,c.addEventListener("click",(function(){return i({name:t.name,link:t.link})})),t.owner_id===t.owner._id&&function(t,n,o){t.classList.add("card__delete-button_is-active"),t.addEventListener("click",(function(){e=n,r=t,o(!0)}))}(s,t._id,n),t.likes.find((function(e){return e._id===t.owner_id}))&&u.classList.add("card__like-button_is-active"),l.textContent=t.likes.length,a.querySelector(".card__like-button").addEventListener("click",(function(){var e,r,n,i;e=t._id,n=l,(r=u).disabled=!0,(r.classList.contains("card__like-button_is-active")?(i=e,o("DELETE","/cards/likes/".concat(i))):function(t){return o("PUT","/cards/likes/".concat(t))}(e)).then((function(t){!function(t,e,r){t.classList.contains("card__like-button_is-active")?t.classList.remove("card__like-button_is-active"):t.classList.add("card__like-button_is-active"),r.length?e.classList.add("card__like-counter_is-active"):e.classList.remove("card__like-counter_is-active"),e.textContent=r.length}(r,n,t.likes)})).catch((function(t){console.log(t)})).finally((function(){r.disabled=!1}))})),a}function a(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",u)}function c(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u)}function u(t){if("Escape"===t.key){var e=document.querySelector(".popup_is-opened");e&&c(e)}}function l(t){var e=t.formElement,r=t.inputElement,n=t.inputErrorClass,o=t.errorClass,i=e.querySelector(".".concat(r.id,"-error"));i.classList.remove(o),i.textContent="",r.classList.remove(n)}function s(t){var e=t.inputList,r=t.submitButtonElement,n=t.inactiveButtonClass;!function(t){return t.some((function(t){return!t.validity.valid}))}(e)?(r.disabled=!1,r.classList.remove(n)):(r.disabled=!0,r.classList.add(n))}function f(t,e){var r=e.inputSelector,n=e.submitButtonSelector,o=e.inactiveButtonClass,i=e.inputErrorClass,a=e.errorClass,c=Array.from(t.querySelectorAll(r)),u=t.querySelector(n);c.forEach((function(e){l({formElement:t,inputElement:e,inputErrorClass:i,errorClass:a})})),s({inputList:c,submitButtonElement:u,inactiveButtonClass:o})}function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function m(){m=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof _?e:_,a=Object.create(i.prototype),c=new B(n||[]);return o(a,"_invoke",{value:x(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var d="suspendedStart",v="suspendedYield",y="executing",h="completed",b={};function _(){}function g(){}function E(){}var L={};l(L,a,(function(){return this}));var w=Object.getPrototypeOf,S=w&&w(w(T([])));S&&S!==r&&n.call(S,a)&&(L=S);var C=E.prototype=_.prototype=Object.create(L);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==p(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function x(e,r,n){var o=d;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===h){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=j(c,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?h:v,l.arg===b)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=h,n.method="throw",n.arg=l.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,b;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function q(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(p(e)+" is not iterable")}return g.prototype=E,o(C,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:g,configurable:!0}),g.displayName=l(E,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,l(t,u,"GeneratorFunction")),t.prototype=Object.create(C),t},e.awrap=function(t){return{__await:t}},k(O.prototype),l(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(C),l(C,u,"Generator"),l(C,a,(function(){return this})),l(C,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,B.prototype={constructor:B,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},e}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return(e=function(t){var e=function(t){if("object"!=p(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==p(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function _(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){b(i,n,o,a,c,"next",t)}function c(t){b(i,n,o,a,c,"throw",t)}a(void 0)}))}}var g,E,L,w,S,C,k,O={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},x=document.querySelector(".places__list"),j=document.querySelectorAll(".popup"),q=document.forms["new-place"],P=q["place-name"],B=q.link,T=document.querySelector(".popup_type_new-card"),A=document.querySelector(".profile__add-button"),I=q.querySelector(".popup__button"),D=document.querySelector(".popup_type_image"),G=D.querySelector(".popup__image"),N=D.querySelector(".popup__caption"),F=document.forms["edit-profile"],M=F.name,U=F.description,H=document.querySelector(".profile__info"),V=H.querySelector(".profile__title"),Y=H.querySelector(".profile__description"),z=document.querySelector(".popup_type_edit"),J=document.querySelector(".profile__image"),R=document.querySelector(".profile__edit-button"),$=F.querySelector(".popup__button"),K=document.forms["edit-avatar"],Q=K.querySelector(".popup__button"),W=K.avatar,X=document.querySelector(".popup_type_edit-avatar"),Z=document.forms["delete-card"],tt=document.querySelector(".popup_type_confirm"),et=tt.querySelector(".popup__close");function rt(t){var e=t.buttonElement,r=t.isItLoading;e.textContent=r?"Сохранение...":"Сохранить"}function nt(t){var e=t.name,r=t.about,n=t.avatar;V.textContent=e,Y.textContent=r,J.style.backgroundImage="url(".concat(n,")")}function ot(t){switch(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"append"){case"append":x.append(t);break;case"prepend":x.prepend(t)}}function it(t){var e=t.name,r=t.link;G.src=r,G.alt=e,N.textContent=e,a(D)}function at(t){t?a(tt):c(tt)}q.addEventListener("submit",(function(t){t.preventDefault();var e,r,n,a={name:P.value,link:B.value};rt({buttonElement:I,isItLoading:!0}),(e=a,r=e.name,n=e.link,o("POST","/cards",{name:r,link:n})).then(function(){var t=_(m().mark((function t(e){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ot(i(y(y({},e),{},{owner_id:e.owner._id}),at,it),"prepend"),c(T),q.reset();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t)})).finally((function(){rt({buttonElement:I,isItLoading:!1})}))})),F.addEventListener("submit",(function(t){t.preventDefault();var e,r,n,i={name:M.value,about:U.value};rt({buttonElement:$,isItLoading:!0}),(e=i,r=e.name,n=e.about,o("PATCH","/users/me",{name:r,about:n})).then((function(t){nt({name:t.name,about:t.about,avatar:t.avatar}),c(z)})).catch((function(t){console.log(t)})).finally((function(){rt({buttonElement:$,isItLoading:!1})}))})),K.addEventListener("submit",(function(t){var e;t.preventDefault(),rt({buttonElement:Q,isItLoading:!0}),(e=W.value,o("PATCH","/users/me/avatar",{avatar:e})).then((function(t){nt({name:t.name,about:t.about,avatar:t.avatar}),c(X)})).catch((function(t){console.log(t)})).finally((function(){rt({buttonElement:Q,isItLoading:!1})}))})),Z.addEventListener("submit",(function(t){return function(t){t.preventDefault();var n,i={cardId:e,deleteButton:r};(n=i.cardId,o("DELETE","/cards/".concat(n))).then((function(){i.deleteButton.closest(".places__item").remove(),at(!1)})).catch((function(t){console.log(t)}))}(t)})),R.addEventListener("click",(function(){M.value=V.textContent,U.value=Y.textContent,f(F,O),a(z)})),A.addEventListener("click",(function(){q.reset(),f(q,O),a(T)})),J.addEventListener("click",(function(){K.reset(),f(K,O),a(X)})),j.forEach((function(t){t.querySelector(".popup__close").addEventListener("click",(function(){return c(t)})),t.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&c(t)})),t.classList.add("popup_is-animated")})),et.addEventListener("click",at(!1)),E=(g=O).formSelector,L=g.inputSelector,w=g.submitButtonSelector,S=g.inactiveButtonClass,C=g.inputErrorClass,k=g.errorClass,Array.from(document.querySelectorAll(E)).forEach((function(t){t.addEventListener("submit",(function(t){t.preventDefault()})),function(t){var e=t.formElement,r=t.inputSelector,n=t.submitButtonSelector,o=t.inactiveButtonClass,i=t.inputErrorClass,a=t.errorClass,c=Array.from(e.querySelectorAll(r)),u=e.querySelector(n);s({inputList:c,submitButtonElement:u,inactiveButtonClass:o}),c.forEach((function(t){t.addEventListener("input",(function(){!function(t){var e=t.formElement,r=t.inputElement,n=t.inputErrorClass,o=t.errorClass;r.validity.patternMismatch?r.setCustomValidity(r.dataset.errorMessage):r.setCustomValidity(""),r.validity.valid?l({formElement:e,inputElement:r,errorClass:o,inputErrorClass:n}):function(t){var e=t.inputElement,r=t.inputErrorClass,n=t.errorClass,o=t.errorMessage,i=t.formElement.querySelector(".".concat(e.id,"-error"));i.textContent=o,i.classList.add(n),e.classList.add(r)}({formElement:e,inputElement:r,errorMessage:r.validationMessage,errorClass:o,inputErrorClass:n})}({formElement:e,inputElement:t,inputErrorClass:i,errorClass:a}),s({inputList:c,submitButtonElement:u,inactiveButtonClass:o})}))}))}({formElement:t,inputSelector:L,submitButtonSelector:w,inactiveButtonClass:S,inputErrorClass:C,errorClass:k})})),Promise.all([o("GET","/cards"),o("GET","/users/me")]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return d(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],a=n[1],c=a.name,u=a.about,l=a.avatar,s=a._id;nt({name:c,about:u,avatar:l}),o.forEach(function(){var t=_(m().mark((function t(e){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ot(i(y(y({},e),{},{owner_id:s}),at,it));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})).catch((function(t){console.log(t)}))})();