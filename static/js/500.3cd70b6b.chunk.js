(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[500],{500:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(885),c=n(791),o=n(501),a=n(871),i=n(690),u=n(7),s=n.n(u),f="Searchbar_input__19umw",p="Searchbar_button__nkcjk",l=n(184);function h(e){var t=e.onSubmit,n=(0,c.useState)(""),o=(0,r.Z)(n,2),a=o[0],i=o[1];return(0,l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===a.trim())return alert("Search field is empty!");t(a)},children:[(0,l.jsx)("input",{className:f,type:"text",placeholder:"Search film",value:a,onChange:function(e){i(e.target.value.toLowerCase())}}),(0,l.jsx)("button",{className:p,type:"submit",children:(0,l.jsx)("span",{children:"Search"})})]})}var m=h;h.protoType={onSubmit:s().func.isRequired};var d="Movies_list__hqYjd";var y=function(){var e,t=(0,o.lr)(),n=(0,r.Z)(t,2),u=n[0],s=n[1],f=(0,c.useState)(null!==(e=u.get("query"))&&void 0!==e?e:""),p=(0,r.Z)(f,2),h=p[0],y=p[1],v=(0,c.useState)([]),_=(0,r.Z)(v,2),b=_[0],k=_[1],x=(0,a.TH)();return(0,c.useEffect)((function(){h&&(0,i.Ai)(h).then((function(e){return k(e.results)}))}),[h]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{onSubmit:function(e){y(e),s({query:e}),k([])}}),b&&(0,l.jsx)("ul",{className:d,children:b.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"".concat(e.id),state:{from:x},children:e.title})},e.id)}))})]})}},690:function(e,t,n){"use strict";n.d(t,{Ai:function(){return p},Hx:function(){return m},Tg:function(){return f},Y5:function(){return l},xc:function(){return h}});var r=n(861),c=n(757),o=n.n(c),a="https://api.themoviedb.org/3",i="dd06e17bf41b8c1999e9b262a8aaf7ee";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(o().mark((function e(){var t,n,r,c=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function f(){return u("".concat(a,"/trending/movie/day?api_key=").concat(i))}function p(e){return u("".concat(a,"/search/movie?api_key=").concat(i,"&query=").concat(e))}function l(e){return u("".concat(a,"/movie/").concat(e,"?api_key=").concat(i))}function h(e){return u("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(i))}function m(e){return u("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(i))}},888:function(e,t,n){"use strict";var r=n(47);function c(){}function o(){}o.resetWarningCache=c,e.exports=function(){function e(e,t,n,c,o,a){if(a!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:c};return n.PropTypes=n,n}},7:function(e,t,n){e.exports=n(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=500.3cd70b6b.chunk.js.map