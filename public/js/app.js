!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=function(){function t(){this.posts=[]}return t.prototype.start=function(){var t=this;console.log(">> Start app"),new r.NavBarComponent,(new o.ToDoService).getAll().then((function(e){t.posts=e,t.posts.forEach((function(t){console.log(t.id)}))}))},t}();document.addEventListener("DOMContentLoaded",(function(){(new i).start()}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ToDoService=void 0;var o=n(2),r=n(3),i=function(){function t(){this.serviceURL=r.ApiConfig.BASE_URL+"/todos/",this.http=new o.HttpClient}return t.prototype.getAll=function(){return this.http.get(this.serviceURL)},t.prototype.find=function(){},t.prototype.create=function(){},t.prototype.update=function(){},t.prototype.destroy=function(){},t}();e.ToDoService=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.HttpClient=void 0;var o=function(){function t(){}return t.prototype.get=function(e){return t.configureRequest(e,"GET")},t.prototype.post=function(e,n){return t.configureRequest(e,"POST")},t.configureRequest=function(t,e,n){return void 0===n&&(n=null),fetch(t,{method:e}).then((function(t){return t.json()}))},t}();e.HttpClient=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ApiConfig=void 0;var o=function(){function t(){}return t.BASE_URL="https://jsonplaceholder.typicode.com",t}();e.ApiConfig=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.NavBarComponent=void 0;var o=function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach((function(t){t.addEventListener("click",(function(){var e=t.dataset.target,n=document.getElementById(e);t.classList.toggle("is-active"),null==n||n.classList.toggle("is-active")}))}))};e.NavBarComponent=o}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy90by1kby5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9odHRwLWNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FwaS1jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2LWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJwb3N0cyIsInN0YXJ0IiwiY29uc29sZSIsImxvZyIsIk5hdkJhckNvbXBvbmVudCIsIlRvRG9TZXJ2aWNlIiwiZ2V0QWxsIiwidGhlbiIsImZvckVhY2giLCJwb3N0IiwiaWQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJBcHAiLCJzZXJ2aWNlVVJMIiwiQXBpQ29uZmlnIiwiQkFTRV9VUkwiLCJ0aGlzIiwiaHR0cCIsIkh0dHBDbGllbnQiLCJmaW5kIiwidXBkYXRlIiwiZGVzdHJveSIsInVybCIsImNvbmZpZ3VyZVJlcXVlc3QiLCJib2R5IiwibWV0aG9kIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCIkbmF2YmFyQnVyZ2VycyIsIkFycmF5Iiwic2xpY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiZWwiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiJHRhcmdldCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQTFCLEVBQW9Ca0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9BLElBQ3RELEVBQVBFLEdBQTRCLGlCQUFURixFQUFtQixJQUFJLElBQUlNLEtBQU9OLEVBQU9yQixFQUFvQlUsRUFBRWUsRUFBSUUsRUFBSyxTQUFTQSxHQUFPLE9BQU9OLEVBQU1NLElBQVFDLEtBQUssS0FBTUQsSUFDOUksT0FBT0YsR0FJUnpCLEVBQW9CNkIsRUFBSSxTQUFTMUIsR0FDaEMsSUFBSVMsRUFBU1QsR0FBVUEsRUFBT3FCLFdBQzdCLFdBQXdCLE9BQU9yQixFQUFnQixTQUMvQyxXQUE4QixPQUFPQSxHQUV0QyxPQURBSCxFQUFvQlUsRUFBRUUsRUFBUSxJQUFLQSxHQUM1QkEsR0FJUlosRUFBb0JhLEVBQUksU0FBU2lCLEVBQVFDLEdBQVksT0FBT2pCLE9BQU9rQixVQUFVQyxlQUFlMUIsS0FBS3VCLEVBQVFDLElBR3pHL0IsRUFBb0JrQyxFQUFJLEdBSWpCbEMsRUFBb0JBLEVBQW9CbUMsRUFBSSxHLGdGQ2xGckQsV0FFQSxPQUVBLDBCQUNTLEtBQUFDLE1BQXFCLEdBYTlCLE9BWEUsWUFBQUMsTUFBQSxzQkFDRUMsUUFBUUMsSUFBSSxnQkFDWixJQUFJLEVBQUFDLGlCQUVKLElBQUksRUFBQUMsYUFBY0MsU0FBU0MsTUFBSyxTQUFDUCxHQUMvQixFQUFLQSxNQUFRQSxFQUNiLEVBQUtBLE1BQU1RLFNBQVEsU0FBQ0MsR0FDbEJQLFFBQVFDLElBQUlNLEVBQUtDLFdBSXpCLEVBZEEsR0FnQkFDLFNBQVNDLGlCQUFpQixvQkFBb0IsWUFDNUMsSUFBSUMsR0FBTVosWSxtR0NyQlosV0FDQSxPQUVBLGFBSUUsYUFGUSxLQUFBYSxXQUF3QixFQUFBQyxVQUFVQyxTQUFRLFVBR2hEQyxLQUFLQyxLQUFPLElBQUksRUFBQUMsV0FjcEIsT0FYRSxZQUFBYixPQUFBLFdBQ0UsT0FBT1csS0FBS0MsS0FBS3JDLElBQUlvQyxLQUFLSCxhQUc1QixZQUFBTSxLQUFBLGFBRUEsWUFBQTlCLE9BQUEsYUFFQSxZQUFBK0IsT0FBQSxhQUVBLFlBQUFDLFFBQUEsYUFDRixFQW5CQSxHQUFhLEVBQUFqQixlLGtHQ0hiLCtCQWdCQSxPQWZFLFlBQUF4QixJQUFBLFNBQUkwQyxHQUNGLE9BQU9KLEVBQVdLLGlCQUFpQkQsRUFBSyxRQUcxQyxZQUFBZCxLQUFBLFNBQUtjLEVBQWFFLEdBQ2hCLE9BQU9OLEVBQVdLLGlCQUFpQkQsRUFBSyxTQUduQyxFQUFBQyxpQkFBUCxTQUNFRCxFQUNBRyxFQUNBRCxHQUVBLFlBRkEsSUFBQUEsTUFBQSxNQUVPRSxNQUFNSixFQUFLLENBQUVHLE9BQU0sSUFBSW5CLE1BQUssU0FBQ3FCLEdBQXVCLE9BQUFBLEVBQVNDLFdBRXhFLEVBaEJBLEdBQWEsRUFBQVYsYyxpR0NBYiwrQkFHQSxPQUZ5QixFQUFBSCxTQUNyQix1Q0FDSixFQUhBLEdBQWEsRUFBQUQsYSx1R0NBYixNQUNFLFdBRUUsSUFBTWUsRUFBaUJDLE1BQU1uQyxVQUFVb0MsTUFBTTdELEtBQzNDd0MsU0FBU3NCLGlCQUFpQixrQkFDMUIsR0FJRUgsRUFBZUksT0FBUyxHQUUxQkosRUFBZXRCLFNBQVEsU0FBQzJCLEdBQ3RCQSxFQUFHdkIsaUJBQWlCLFNBQVMsV0FFM0IsSUFBTXdCLEVBQVNELEVBQUdFLFFBQVFELE9BQ3BCRSxFQUFVM0IsU0FBUzRCLGVBQWVILEdBR3hDRCxFQUFHSyxVQUFVQyxPQUFPLGFBQ3BCSCxXQUFTRSxVQUFVQyxPQUFPLG9CQW5CdkIsRUFBQXJDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IFRvRG9TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy90by1kby5zZXJ2aWNlJztcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuL21vZGVscy9wb3N0JztcbmltcG9ydCB7IE5hdkJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXYtYmFyLmNvbXBvbmVudCc7XG5cbmNsYXNzIEFwcCB7XG4gIHB1YmxpYyBwb3N0czogQXJyYXk8UG9zdD4gPSBbXTtcblxuICBzdGFydCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnPj4gU3RhcnQgYXBwJyk7XG4gICAgbmV3IE5hdkJhckNvbXBvbmVudCgpO1xuXG4gICAgbmV3IFRvRG9TZXJ2aWNlKCkuZ2V0QWxsKCkudGhlbigocG9zdHM6IEFycmF5PFBvc3Q+KSA9PiB7XG4gICAgICB0aGlzLnBvc3RzID0gcG9zdHM7XG4gICAgICB0aGlzLnBvc3RzLmZvckVhY2goKHBvc3Q6IFBvc3QpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocG9zdC5pZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBuZXcgQXBwKCkuc3RhcnQoKTtcbn0pO1xuIiwiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJy4uL3V0aWxzL2h0dHAtY2xpZW50JztcbmltcG9ydCB7IEFwaUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9hcGktY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFRvRG9TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50O1xuICBwcml2YXRlIHNlcnZpY2VVUkw6IHN0cmluZyA9IGAke0FwaUNvbmZpZy5CQVNFX1VSTH0vdG9kb3MvYDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmh0dHAgPSBuZXcgSHR0cENsaWVudCgpO1xuICB9XG5cbiAgZ2V0QWxsKCk6IFByb21pc2U8QXJyYXk8UG9zdD4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZpY2VVUkwpO1xuICB9XG5cbiAgZmluZCgpIHt9XG5cbiAgY3JlYXRlKCkge31cblxuICB1cGRhdGUoKSB7fVxuXG4gIGRlc3Ryb3koKSB7fVxufVxuIiwiZXhwb3J0IGNsYXNzIEh0dHBDbGllbnQge1xuICBnZXQodXJsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBIdHRwQ2xpZW50LmNvbmZpZ3VyZVJlcXVlc3QodXJsLCAnR0VUJyk7XG4gIH1cblxuICBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBvYmplY3QgfCBudWxsKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gSHR0cENsaWVudC5jb25maWd1cmVSZXF1ZXN0KHVybCwgJ1BPU1QnKTtcbiAgfVxuXG4gIHN0YXRpYyBjb25maWd1cmVSZXF1ZXN0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIGJvZHk6IG9iamVjdCB8IG51bGwgPSBudWxsXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwgeyBtZXRob2QgfSkudGhlbigocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQXBpQ29uZmlnIHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBCQVNFX1VSTDogc3RyaW5nID1cbiAgICAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tJztcbn1cbiIsImV4cG9ydCBjbGFzcyBOYXZCYXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBHZXQgYWxsIFwibmF2YmFyLWJ1cmdlclwiIGVsZW1lbnRzXG4gICAgY29uc3QgJG5hdmJhckJ1cmdlcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXItYnVyZ2VyJyksXG4gICAgICAwXG4gICAgKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgbmF2YmFyIGJ1cmdlcnNcbiAgICBpZiAoJG5hdmJhckJ1cmdlcnMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gQWRkIGEgY2xpY2sgZXZlbnQgb24gZWFjaCBvZiB0aGVtXG4gICAgICAkbmF2YmFyQnVyZ2Vycy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAvLyBHZXQgdGhlIHRhcmdldCBmcm9tIHRoZSBcImRhdGEtdGFyZ2V0XCIgYXR0cmlidXRlXG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZWwuZGF0YXNldC50YXJnZXQ7XG4gICAgICAgICAgY29uc3QgJHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7XG5cbiAgICAgICAgICAvLyBUb2dnbGUgdGhlIFwiaXMtYWN0aXZlXCIgY2xhc3Mgb24gYm90aCB0aGUgXCJuYXZiYXItYnVyZ2VyXCIgYW5kIHRoZSBcIm5hdmJhci1tZW51XCJcbiAgICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAkdGFyZ2V0Py5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=