var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function s(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(s)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l;const u="undefined"!=typeof window;let a=u?()=>window.performance.now():()=>Date.now(),d=u?t=>requestAnimationFrame(t):t;const f=new Set;function m(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&d(m)}function h(t){let e;return 0===f.size&&d(m),{promise:new Promise((n=>{f.add(e={c:t,f:n})})),abort(){f.delete(e)}}}function $(t,e){t.appendChild(e)}function p(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function g(t){const e=b("style");return function(t,e){$(t.head||t,e)}(p(t),e),e}function v(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function _(){return k(" ")}function w(){return k("")}function E(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function C(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function z(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function S(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}function j(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}const I=new Set;let T,L=0;function A(t,e,n,s,o,i,r,c=0){const l=16.666/s;let u="{\n";for(let t=0;t<=1;t+=l){const s=e+(n-e)*i(t);u+=100*t+`%{${r(s,1-s)}}\n`}const a=u+`100% {${r(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${c}`,f=p(t);I.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=g(t).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,m.insertRule(`@keyframes ${d} ${a}`,m.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${d} ${s}ms linear ${o}ms 1 both`,L+=1,d}function N(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-s.length;o&&(t.style.animation=s.join(", "),L-=o,L||d((()=>{L||(I.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),I.clear())})))}function R(t){T=t}function D(){if(!T)throw new Error("Function called outside component initialization");return T}function M(){const t=D();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const o=j(e,n);s.slice().forEach((e=>{e.call(t,o)}))}}}function B(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const O=[],P=[],U=[],H=[],q=Promise.resolve();let F=!1;function J(t){U.push(t)}let K=!1;const V=new Set;function G(){if(!K){K=!0;do{for(let t=0;t<O.length;t+=1){const e=O[t];R(e),Q(e.$$)}for(R(null),O.length=0;P.length;)P.pop()();for(let t=0;t<U.length;t+=1){const e=U[t];V.has(e)||(V.add(e),e())}U.length=0}while(O.length);for(;H.length;)H.pop()();F=!1,K=!1,V.clear()}}function Q(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}let W;function X(){return W||(W=Promise.resolve(),W.then((()=>{W=null}))),W}function Y(t,e,n){t.dispatchEvent(j(`${e?"intro":"outro"}${n}`))}const Z=new Set;let tt;function et(){tt={r:0,c:[],p:tt}}function nt(){tt.r||i(tt.c),tt=tt.p}function st(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function ot(t,e,n,s){if(t&&t.o){if(Z.has(t))return;Z.add(t),tt.c.push((()=>{Z.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}const it={duration:0};function rt(n,s,o,c){let l=s(n,o),u=c?0:1,d=null,f=null,m=null;function $(){m&&N(n,m)}function p(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function g(s){const{delay:o=0,duration:r=300,easing:c=e,tick:g=t,css:v}=l||it,x={start:a()+o,b:s};s||(x.group=tt,tt.r+=1),d||f?f=x:(v&&($(),m=A(n,u,s,r,o,c,v)),s&&g(0,1),d=p(x,r),J((()=>Y(n,s,"start"))),h((t=>{if(f&&t>f.start&&(d=p(f,r),f=null,Y(n,d.b,"start"),v&&($(),m=A(n,u,d.b,d.duration,0,c,l.css))),d)if(t>=d.end)g(u=d.b,1-u),Y(n,d.b,"end"),f||(d.b?$():--d.group.r||i(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;u=d.a+d.d*c(e/d.duration),g(u,1-u)}return!(!d&&!f)})))}return{run(t){r(l)?X().then((()=>{l=l(),g(t)})):g(t)},end(){$(),d=f=null}}}function ct(t,e){const n={},s={},o={$$scope:1};let i=t.length;for(;i--;){const r=t[i],c=e[i];if(c){for(const t in r)t in c||(s[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[i]=c}else for(const t in r)o[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function lt(t){return"object"==typeof t&&null!==t?t:{}}function ut(t){t&&t.c()}function at(t,e,n,o){const{fragment:c,on_mount:l,on_destroy:u,after_update:a}=t.$$;c&&c.m(e,n),o||J((()=>{const e=l.map(s).filter(r);u?u.push(...e):i(e),t.$$.on_mount=[]})),a.forEach(J)}function dt(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){-1===t.$$.dirty[0]&&(O.push(t),F||(F=!0,q.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function mt(e,n,s,r,c,l,u,a=[-1]){const d=T;R(e);const f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:o(),dirty:a,skip_bound:!1,root:n.target||d.$$.root};u&&u(f.root);let m=!1;if(f.ctx=s?s(e,n.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),m&&ft(e,t)),n})):[],f.update(),m=!0,i(f.before_update),f.fragment=!!r&&r(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(x)}else f.fragment&&f.fragment.c();n.intro&&st(e.$$.fragment),at(e,n.target,n.anchor,n.customElement),G()}R(d)}class ht{$destroy(){dt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function $t(e){let n,s,o,i;return{c(){n=b("button"),s=b("span"),C(s,"class","close svelte-1xt4fkd"),S(n,"--size",e[0]+"em"),S(n,"--x-size",e[0]/9+"em"),C(n,"class","svelte-1xt4fkd")},m(t,r){v(t,n,r),$(n,s),o||(i=E(n,"click",e[1]),o=!0)},p(t,[e]){1&e&&S(n,"--size",t[0]+"em"),1&e&&S(n,"--x-size",t[0]/9+"em")},i:t,o:t,d(t){t&&x(n),o=!1,i()}}}function pt(t,e,n){let{size:s=1.2}=e;return t.$$set=t=>{"size"in t&&n(0,s=t.size)},[s,function(e){B.call(this,t,e)}]}class gt extends ht{constructor(t){super(),mt(this,t,pt,$t,c,{size:0})}}function vt(t){const e=t-1;return e*e*e+1}function xt(t,{delay:n=0,duration:s=400,easing:o=e}={}){const i=+getComputedStyle(t).opacity;return{delay:n,duration:s,easing:o,css:t=>"opacity: "+t*i}}function yt(t,{delay:e=0,duration:n=400,easing:s=vt,x:o=0,y:i=0,opacity:r=0}={}){const c=getComputedStyle(t),l=+c.opacity,u="none"===c.transform?"":c.transform,a=l*(1-r);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*o}px, ${(1-t)*i}px);\n\t\t\topacity: ${l-a*e}`}}function bt(t,e,n){const s=t.slice();return s[18]=e[n],s}function kt(e){let n;return{c(){n=b("div"),n.innerHTML="<div>No comments... Be the first!</div>",C(n,"class","comment svelte-21nchx")},m(t,e){v(t,n,e)},p:t,d(t){t&&x(n)}}}function _t(t){let e,n,s,o=t[1],i=[];for(let e=0;e<o.length;e+=1)i[e]=wt(bt(t,o,e));return{c(){e=b("h4"),e.textContent="Comments",n=_();for(let t=0;t<i.length;t+=1)i[t].c();s=w()},m(t,o){v(t,e,o),v(t,n,o);for(let e=0;e<i.length;e+=1)i[e].m(t,o);v(t,s,o)},p(t,e){if(2&e){let n;for(o=t[1],n=0;n<o.length;n+=1){const r=bt(t,o,n);i[n]?i[n].p(r,e):(i[n]=wt(r),i[n].c(),i[n].m(s.parentNode,s))}for(;n<i.length;n+=1)i[n].d(1);i.length=o.length}},d(t){t&&x(e),t&&x(n),y(i,t),t&&x(s)}}}function wt(t){let e,n,s=t[18]+"";return{c(){e=b("div"),n=k(s)},m(t,s){v(t,e,s),$(e,n)},p(t,e){2&e&&s!==(s=t[18]+"")&&z(n,s)},d(t){t&&x(e)}}}function Et(n){let s,o,c,l,u,d,f,m,p,g,y,w,S,j,I,T,L,R,D,M,B,O,P,U;function H(t,e){return t[1]&&t[1].length>0?_t:kt}c=new gt({}),c.$on("click",n[7]);let q=H(n),F=q(n);return{c(){s=b("div"),o=b("div"),ut(c.$$.fragment),l=_(),u=b("div"),d=b("div"),f=b("h3"),m=k(n[2]),p=_(),g=b("hr"),y=_(),w=b("div"),S=b("div"),S.textContent="Edit",j=_(),I=b("div"),T=_(),L=b("hr"),R=_(),F.c(),C(f,"class","svelte-21nchx"),C(g,"class","svelte-21nchx"),C(S,"class","edit svelte-21nchx"),C(I,"contenteditable","false"),void 0===n[0]&&J((()=>n[13].call(I))),C(w,"class","desc svelte-21nchx"),C(L,"class","svelte-21nchx"),C(d,"class","centered svelte-21nchx"),C(u,"class","content svelte-21nchx"),C(o,"class","bug svelte-21nchx"),C(s,"class","modal svelte-21nchx")},m(t,e){v(t,s,e),$(s,o),at(c,o,null),$(o,l),$(o,u),$(u,d),$(d,f),$(f,m),$(d,p),$(d,g),$(d,y),$(d,w),$(w,S),$(w,j),$(w,I),n[12](I),void 0!==n[0]&&(I.textContent=n[0]),$(d,T),$(d,L),$(u,R),F.m(u,null),n[14](o),O=!0,P||(U=[E(S,"click",n[5]),E(I,"blur",n[6]),E(I,"input",n[13])],P=!0)},p(t,[e]){(!O||4&e)&&z(m,t[2]),1&e&&t[0]!==I.textContent&&(I.textContent=t[0]),q===(q=H(t))&&F?F.p(t,e):(F.d(1),F=q(t),F&&(F.c(),F.m(u,null)))},i(n){O||(st(c.$$.fragment,n),J((()=>{M&&M.end(1),D=function(n,s,o){let i,c,l=s(n,o),u=!1,d=0;function f(){i&&N(n,i)}function m(){const{delay:s=0,duration:o=300,easing:r=e,tick:m=t,css:$}=l||it;$&&(i=A(n,0,1,o,s,r,$,d++)),m(0,1);const p=a()+s,g=p+o;c&&c.abort(),u=!0,J((()=>Y(n,!0,"start"))),c=h((t=>{if(u){if(t>=g)return m(1,0),Y(n,!0,"end"),f(),u=!1;if(t>=p){const e=r((t-p)/o);m(e,1-e)}}return u}))}let $=!1;return{start(){$||($=!0,N(n),r(l)?(l=l(),X().then(m)):m())},invalidate(){$=!1},end(){u&&(f(),u=!1)}}}(o,yt,{x:-200,duration:500}),D.start()})),J((()=>{B||(B=rt(s,xt,{},!0)),B.run(1)})),O=!0)},o(n){ot(c.$$.fragment,n),D&&D.invalidate(),M=function(n,s,o){let c,l=s(n,o),u=!0;const d=tt;function f(){const{delay:s=0,duration:o=300,easing:r=e,tick:f=t,css:m}=l||it;m&&(c=A(n,1,0,o,s,r,m));const $=a()+s,p=$+o;J((()=>Y(n,!1,"start"))),h((t=>{if(u){if(t>=p)return f(0,1),Y(n,!1,"end"),--d.r||i(d.c),!1;if(t>=$){const e=r((t-$)/o);f(1-e,e)}}return u}))}return d.r+=1,r(l)?X().then((()=>{l=l(),f()})):f(),{end(t){t&&l.tick&&l.tick(1,0),u&&(c&&N(n,c),u=!1)}}}(o,yt,{x:-200,duration:250}),B||(B=rt(s,xt,{},!1)),B.run(0),O=!1},d(t){t&&x(s),dt(c),n[12](null),F.d(),n[14](null),t&&M&&M.end(),t&&B&&B.end(),P=!1,i(U)}}}function Ct(t,e,n){let{status:s="Unconfirmed"}=e,{title:o="Untitled"}=e,{description:i="No description."}=e,{comments:r=[]}=e,{key:c={}}=e;const l=M();let u;const a=t=>{l("updated",{description:i})};let d;return t.$$set=t=>{"status"in t&&n(8,s=t.status),"title"in t&&n(2,o=t.title),"description"in t&&n(0,i=t.description),"comments"in t&&n(1,r=t.comments),"key"in t&&n(9,c=t.key)},[i,r,o,u,d,()=>{n(3,u.contentEditable=!0,u),u.focus()},t=>{n(3,u.contentEditable=!1,u),a()},()=>{l("close",{})},s,c,t=>{n(1,r=[...r,t])},(t,e)=>{d.addEventListener(t,e)},function(t){P[t?"unshift":"push"]((()=>{u=t,n(3,u)}))},function(){i=this.textContent,n(0,i)},function(t){P[t?"unshift":"push"]((()=>{d=t,n(4,d)}))}]}class zt extends ht{constructor(t){super(),mt(this,t,Ct,Et,c,{status:8,title:2,description:0,comments:1,key:9,addComment:10,addEventListener:11})}get status(){return this.$$.ctx[8]}set status(t){this.$$set({status:t}),G()}get title(){return this.$$.ctx[2]}set title(t){this.$$set({title:t}),G()}get description(){return this.$$.ctx[0]}set description(t){this.$$set({description:t}),G()}get comments(){return this.$$.ctx[1]}set comments(t){this.$$set({comments:t}),G()}get key(){return this.$$.ctx[9]}set key(t){this.$$set({key:t}),G()}get addComment(){return this.$$.ctx[10]}get addEventListener(){return this.$$.ctx[11]}}function St(e){let n,s,o,i,r,c,l,u,a,d,f,m,h,p=e[5][e[0]]+"",g=e[2].length+"";return{c(){n=b("li"),s=b("div"),o=k(e[1]),i=_(),r=b("div"),c=k(p),u=_(),a=b("div"),d=k(g),f=k(" comments"),C(s,"class","title svelte-k2syno"),C(r,"class",l="status "+e[0]+" svelte-k2syno"),C(a,"class","cmnt svelte-k2syno"),C(n,"index",e[3]),C(n,"class","svelte-k2syno")},m(t,l){v(t,n,l),$(n,s),$(s,o),$(n,i),$(n,r),$(r,c),$(n,u),$(n,a),$(a,d),$(a,f),e[7](n),m||(h=E(n,"click",e[6]),m=!0)},p(t,[e]){2&e&&z(o,t[1]),1&e&&p!==(p=t[5][t[0]]+"")&&z(c,p),1&e&&l!==(l="status "+t[0]+" svelte-k2syno")&&C(r,"class",l),4&e&&g!==(g=t[2].length+"")&&z(d,g),8&e&&C(n,"index",t[3])},i:t,o:t,d(t){t&&x(n),e[7](null),m=!1,h()}}}function jt(t,e,n){let{status:s="unconfirmed"}=e,{title:o="Untitled"}=e,{comments:i=[]}=e,{index:r}=e;const c=M();let l;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"title"in t&&n(1,o=t.title),"comments"in t&&n(2,i=t.comments),"index"in t&&n(3,r=t.index)},[s,o,i,r,l,{unconfirmed:"Unconfirmed",confirmed:"Confirmed",rejected:"Rejected",inprogress:"In Progress"},()=>{c("click",{target:l,index:r})},function(t){P[t?"unshift":"push"]((()=>{l=t,n(4,l)}))}]}class It extends ht{constructor(t){super(),mt(this,t,jt,St,c,{status:0,title:1,comments:2,index:3})}get status(){return this.$$.ctx[0]}set status(t){this.$$set({status:t}),G()}get title(){return this.$$.ctx[1]}set title(t){this.$$set({title:t}),G()}get comments(){return this.$$.ctx[2]}set comments(t){this.$$set({comments:t}),G()}get index(){return this.$$.ctx[3]}set index(t){this.$$set({index:t}),G()}}function Tt(e){let n,s,o,i,r,c,l,u,a;return{c(){n=b("div"),s=b("label"),o=b("input"),i=_(),r=b("div"),c=_(),l=b("em"),l.textContent="Enable Dark Mode!",C(o,"type","checkbox"),C(o,"id","checkbox"),C(o,"class","svelte-1h10l8o"),C(r,"class","slider round svelte-1h10l8o"),C(s,"class","theme-switch svelte-1h10l8o"),C(s,"for","checkbox"),C(l,"class","svelte-1h10l8o"),C(n,"class","theme-switch-wrapper svelte-1h10l8o"),S(n,"--float",e[0]?e[0]:"none")},m(t,d){v(t,n,d),$(n,s),$(s,o),e[2](o),$(s,i),$(s,r),$(n,c),$(n,l),u||(a=E(n,"change",Lt),u=!0)},p(t,[e]){1&e&&S(n,"--float",t[0]?t[0]:"none")},i:t,o:t,d(t){t&&x(n),e[2](null),u=!1,a()}}}function Lt(t){t.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}function At(t,e,n){let s,{float:o}=e;const i=localStorage.getItem("theme")?localStorage.getItem("theme"):null;var r;return i&&document.documentElement.setAttribute("data-theme",i),r=()=>n(1,s.checked=i&&"dark"===i,s),D().$$.on_mount.push(r),setTimeout((()=>document.body.classList.add("transitions-enabled")),1e3),t.$$set=t=>{"float"in t&&n(0,o=t.float)},[o,s,function(t){P[t?"unshift":"push"]((()=>{s=t,n(1,s)}))}]}class Nt extends ht{constructor(t){super(),mt(this,t,At,Tt,c,{float:0})}}function Rt(e){let n,s,o,i,r;return{c(){var t,c;n=b("a"),s=b("img"),i=k(" Join my "),r=b("span"),r.textContent="Discord",t=s.src,c=o="./discord.svg",l||(l=document.createElement("a")),l.href=c,t!==l.href&&C(s,"src","./discord.svg"),C(s,"class","discord svelte-18i8r50"),C(s,"alt","Discord"),C(r,"class","highlight svelte-18i8r50"),C(n,"href","https://discord.gg/VwrK3jj"),S(n,"--font-size",e[0]+"em"),S(n,"--img-size",1.2*e[0]+"em"),C(n,"class","svelte-18i8r50")},m(t,e){v(t,n,e),$(n,s),$(n,i),$(n,r)},p(t,[e]){1&e&&S(n,"--font-size",t[0]+"em"),1&e&&S(n,"--img-size",1.2*t[0]+"em")},i:t,o:t,d(t){t&&x(n)}}}function Dt(t,e,n){let{fontSize:s}=e;return t.$$set=t=>{"fontSize"in t&&n(0,s=t.fontSize)},[s]}class Mt extends ht{constructor(t){super(),mt(this,t,Dt,Rt,c,{fontSize:0})}}function Bt(e){let n,s,o,i,r,c,l,u,a,d;return l=new Mt({props:{fontSize:"1"}}),{c(){n=b("footer"),s=b("hr"),o=_(),i=b("div"),r=b("a"),r.textContent="Contact Me!",c=_(),ut(l.$$.fragment),u=_(),a=b("div"),a.textContent="© 2021 Travja",C(r,"href","#"),C(r,"class","svelte-j5zwwo"),C(i,"class","links svelte-j5zwwo"),C(a,"class","copy svelte-j5zwwo")},m(t,e){v(t,n,e),$(n,s),$(n,o),$(n,i),$(i,r),$(i,c),at(l,i,null),$(n,u),$(n,a),d=!0},p:t,i(t){d||(st(l.$$.fragment,t),d=!0)},o(t){ot(l.$$.fragment,t),d=!1},d(t){t&&x(n),dt(l)}}}class Ot extends ht{constructor(t){super(),mt(this,t,null,Bt,c,{})}}function Pt(t,e,n){const s=t.slice();return s[13]=e[n],s[15]=n,s}function Ut(t){let e,s;const o=[t[13],{index:t[15]}];let i={};for(let t=0;t<o.length;t+=1)i=n(i,o[t]);return e=new It({props:i}),e.$on("click",t[4]),{c(){ut(e.$$.fragment)},m(t,n){at(e,t,n),s=!0},p(t,n){const s=1&n?ct(o,[lt(t[13]),o[1]]):{};e.$set(s)},i(t){s||(st(e.$$.fragment,t),s=!0)},o(t){ot(e.$$.fragment,t),s=!1},d(t){dt(e,t)}}}function Ht(t){let e,s;const o=[{class:"modal"},t[3]];let i={};for(let t=0;t<o.length;t+=1)i=n(i,o[t]);return e=new zt({props:i}),t[8](e),e.$on("updated",t[5]),e.$on("close",t[6]),{c(){ut(e.$$.fragment)},m(t,n){at(e,t,n),s=!0},p(t,n){const s=8&n?ct(o,[o[0],lt(t[3])]):{};e.$set(s)},i(t){s||(st(e.$$.fragment,t),s=!0)},o(t){ot(e.$$.fragment,t),s=!1},d(n){t[8](null),dt(e,n)}}}function qt(t){let e,n,s,o,i,r,c,l,u,a,d,f,m,h,p,g;i=new Nt({props:{float:"right"}});let k=t[0],E=[];for(let e=0;e<k.length;e+=1)E[e]=Ut(Pt(t,k,e));const z=t=>ot(E[t],1,1,(()=>{E[t]=null}));m=new Ot({});let S=t[3]&&Ht(t);return{c(){e=b("header"),e.innerHTML='<h1 class="svelte-1dp0nfu">Travja&#39;s Bug Tracker</h1>',n=_(),s=b("div"),o=b("div"),ut(i.$$.fragment),r=_(),c=b("h1"),c.textContent="Bugs",l=_(),u=b("ul");for(let t=0;t<E.length;t+=1)E[t].c();a=_(),d=b("div"),f=_(),ut(m.$$.fragment),h=_(),S&&S.c(),p=w(),C(e,"class","svelte-1dp0nfu"),C(u,"class","svelte-1dp0nfu"),C(d,"class","spacer"),C(s,"class","content svelte-1dp0nfu")},m(x,y){v(x,e,y),v(x,n,y),v(x,s,y),$(s,o),at(i,o,null),$(o,r),$(o,c),$(o,l),$(o,u);for(let t=0;t<E.length;t+=1)E[t].m(u,null);t[7](u),$(s,a),$(s,d),$(s,f),at(m,s,null),v(x,h,y),S&&S.m(x,y),v(x,p,y),g=!0},p(t,[e]){if(17&e){let n;for(k=t[0],n=0;n<k.length;n+=1){const s=Pt(t,k,n);E[n]?(E[n].p(s,e),st(E[n],1)):(E[n]=Ut(s),E[n].c(),st(E[n],1),E[n].m(u,null))}for(et(),n=k.length;n<E.length;n+=1)z(n);nt()}t[3]?S?(S.p(t,e),8&e&&st(S,1)):(S=Ht(t),S.c(),st(S,1),S.m(p.parentNode,p)):S&&(et(),ot(S,1,1,(()=>{S=null})),nt())},i(t){if(!g){st(i.$$.fragment,t);for(let t=0;t<k.length;t+=1)st(E[t]);st(m.$$.fragment,t),st(S),g=!0}},o(t){ot(i.$$.fragment,t),E=E.filter(Boolean);for(let t=0;t<E.length;t+=1)ot(E[t]);ot(m.$$.fragment,t),ot(S),g=!1},d(o){o&&x(e),o&&x(n),o&&x(s),dt(i),y(E,o),t[7](null),dt(m),o&&x(h),S&&S.d(o),o&&x(p)}}}function Ft(t,e,n){let s,o,i,r=[{status:"confirmed",title:"This is a bug",description:"Hey.. this doesnt work. I've tried everything but I can't get it to go anywhere. Help me! If I keep typing a really long thing, will it solve my problems? If I pester, does it work?"},{title:"This is bug 2",status:"rejected"},{title:"This is bug 3",status:"inprogress",comments:["Comment one","Comment two.. this works."]},{}];const c=()=>{n(3,l=void 0),n(2,o=void 0)};let l;const u=t=>{n(3,l=t)};return[r,s,o,l,t=>{console.log(t.detail);let e=t.detail.index;o&&i!==e?(o.addEventListener("outroend",(()=>u(r[e]))),c()):u(r[e]),i=e},t=>{n(0,r[i].description=t.detail.description,r)},c,function(t){P[t?"unshift":"push"]((()=>{s=t,n(1,s)}))},function(t){P[t?"unshift":"push"]((()=>{o=t,n(2,o)}))}]}const Jt=new class extends ht{constructor(t){super(),mt(this,t,Ft,qt,c,{})}}({target:document.body,props:{}});return window.ServerURL="",Jt}();
