!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o,r=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function u(e){try{i(o.next(e))}catch(e){c(e)}}function s(e){try{i(o.throw(e))}catch(e){c(e)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}i((o=o.apply(e,t||[])).next())}))},c=this&&this.__generator||function(e,t){var n,o,r,c,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return c={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function s(c){return function(s){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,o&&(r=2&c[0]?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,o=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(r=u.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){u.label=c[1];break}if(6===c[0]&&u.label<r[1]){u.label=r[1],r=c;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(c);break}r[2]&&u.ops.pop(),u.trys.pop();continue}c=t.call(e,u)}catch(e){c=[6,e],o=0}finally{n=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return console.log(typeof e),e.json()})).then((function(e){return console.log(e)})),r(void 0,void 0,void 0,(function(){var e;return c(this,(function(t){switch(t.label){case 0:return[4,fetch("https://jsonplaceholder.typicode.com/posts")];case 1:return[4,t.sent().json()];case 2:return e=t.sent(),console.log(e),[2]}}))})),fetch("https://jsonplaceholder.typicode.com/pos").then((function(e){if(console.log("Status code: "+e.status),e.status>=200&&e.status<300)return e.json();throw new Error("Error in the fetch request")})).then((function(e){return console.log(e)})).catch((function(e){return console.error("[Fetch error]:",e.message)}));var u={userId:1,_limit:3},s=new URL("https://jsonplaceholder.typicode.com/posts");Object.keys(u).forEach((function(e){s.searchParams.append(e,u[e])})),console.log(s),fetch(s.href).then((function(e){return e.json()})).then((function(e){return console.log(e)}));fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({userId:1,title:"foo",body:"bar"}),headers:{"Content-type":"application/json; charset=UTF-8",Accept:"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)})),null===(o=document.querySelector("#frm-upload"))||void 0===o||o.addEventListener("submit",(function(e){e.preventDefault();var t=e.target,n=new FormData(t);fetch(t.action,{method:"POST",body:n}).then((function(e){return e.text()})).then((function(e){return alert(e)})).catch((function(e){return console.error("[Upload fetch error]:",e.message)}))})),fetch("http://localhost:8000/api/",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.error("[Cors fetch error]:",e.message)})),fetch("http://localhost:8000/api/",{method:"PUT"}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.error("[Cors fetch error]:",e.message)}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwianNvbiIsInBvc3RzIiwiYm9keSIsInN0YXR1cyIsIkVycm9yIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJxdWVyeVBhcmFtcyIsInVzZXJJZCIsIl9saW1pdCIsInVybCIsIlVSTCIsImtleXMiLCJmb3JFYWNoIiwicGFyYW1LZXkiLCJzZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJocmVmIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsInRpdGxlIiwiaGVhZGVycyIsIkFjY2VwdCIsInBvc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiRm9ybURhdGEiLCJhY3Rpb24iLCJ0ZXh0IiwiZGF0YSIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFV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ZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGludGVyZmFjZSBQb3N0IHtcbiAgdXNlcklkOiBudW1iZXI7XG4gIGlkPzogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG59XG5cbmZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKVxuICAudGhlbigocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2codHlwZW9mIHJlc3BvbnNlKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9KSAvLyByZXNwb25zZTogVWludDhBcnJheVxuICAudGhlbigocG9zdHM6IEFycmF5PFBvc3Q+KSA9PiBjb25zb2xlLmxvZyhwb3N0cykpO1xuXG4oYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJ1xuICApO1xuICBjb25zdCBib2R5OiBBcnJheTxQb3N0PiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2coYm9keSk7XG59KSgpO1xuXG4vLyBIYW5kbGUgZXJyb3JcbmZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zJylcbiAgLnRoZW4oKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTdGF0dXMgY29kZTogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGluIHRoZSBmZXRjaCByZXF1ZXN0Jyk7XG4gICAgfVxuICB9KSAvLyByZXNwb25zZTogVWludDhBcnJheVxuICAudGhlbigocG9zdHM6IEFycmF5PFBvc3Q+KSA9PiBjb25zb2xlLmxvZyhwb3N0cykpXG4gIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcignW0ZldGNoIGVycm9yXTonLCBlcnIubWVzc2FnZSkpO1xuXG4vLyBRdWVyeSBwYXJhbXNcbi8vIFJlYWQgbW9yZSBvbjogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2ZldGNoLWFwaVxuY29uc3QgcXVlcnlQYXJhbXMgPSB7XG4gIHVzZXJJZDogMSxcbiAgX2xpbWl0OiAzLFxufTtcbmNvbnN0IHVybDogVVJMID0gbmV3IFVSTCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJyk7XG5PYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaCgocGFyYW1LZXk6IHN0cmluZykgPT4ge1xuICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChwYXJhbUtleSwgcXVlcnlQYXJhbXNbcGFyYW1LZXldKTtcbn0pO1xuY29uc29sZS5sb2codXJsKTtcbmZldGNoKHVybC5ocmVmKVxuICAudGhlbigocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpIC8vIHJlc3BvbnNlOiBVaW50OEFycmF5XG4gIC50aGVuKChwb3N0czogQXJyYXk8UG9zdD4pID0+IGNvbnNvbGUubG9nKHBvc3RzKSk7XG5cbi8vIEhUVFAgLSBNZXRob2RzXG4vLyBSZWFkIG1vcmUgb246IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VzL2RvY3MvV2ViL0hUVFAvTWV0aG9kc1xuXG4vLyBQT1NUXG5jb25zdCBwb3N0OiBQb3N0ID0ge1xuICB1c2VySWQ6IDEsXG4gIHRpdGxlOiAnZm9vJyxcbiAgYm9keTogJ2JhcicsXG59O1xuZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycsIHtcbiAgbWV0aG9kOiAnUE9TVCcsXG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpLFxuICBoZWFkZXJzOiB7XG4gICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgfSxcbn0pXG4gIC50aGVuKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkgLy8gcmVzcG9uc2U6IFVpbnQ4QXJyYXlcbiAgLnRoZW4oKHBvc3Q6IFBvc3QpID0+IGNvbnNvbGUubG9nKHBvc3QpKTtcblxuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoJyNmcm0tdXBsb2FkJylcbiAgPy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZTogRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0OiBIVE1MRm9ybUVsZW1lbnQgPSA8SFRNTEZvcm1FbGVtZW50PmUudGFyZ2V0O1xuXG4gICAgY29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSh0YXJnZXQpO1xuICAgIC8vIGNvbnN0IGZpbGUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbGUnKSkuZmlsZXM7XG4gICAgLy8gaWYgKGZpbGUpIHtcbiAgICAvLyAgIGJvZHkuYXBwZW5kKCdmaWxlJywgZmlsZVswXSk7XG4gICAgLy8gfVxuXG4gICAgZmV0Y2godGFyZ2V0LmFjdGlvbiwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5LFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAudGhlbigoZGF0YTogc3RyaW5nKSA9PiBhbGVydChkYXRhKSlcbiAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT5cbiAgICAgICAgY29uc29sZS5lcnJvcignW1VwbG9hZCBmZXRjaCBlcnJvcl06JywgZXJyLm1lc3NhZ2UpXG4gICAgICApO1xuICB9KTtcblxuZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvJywgeyBtZXRob2Q6ICdHRVQnIH0pXG4gIC50aGVuKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICAuY2F0Y2goKGVycjogRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoJ1tDb3JzIGZldGNoIGVycm9yXTonLCBlcnIubWVzc2FnZSkpO1xuXG5mZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS8nLCB7IG1ldGhvZDogJ1BVVCcgfSlcbiAgLnRoZW4oKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcignW0NvcnMgZmV0Y2ggZXJyb3JdOicsIGVyci5tZXNzYWdlKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9