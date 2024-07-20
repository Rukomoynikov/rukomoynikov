var B=Object.defineProperty;var D=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _=(e,t,n)=>D(e,typeof t!="symbol"?t+"":t,n);import{r as $,n as x,l as N,m as P,p as S,q as j,v as A,w as O,x as I,y as v,z as R,A as q,B as z}from"./scheduler.B0Fkv_Dq.js";let y=!1;function G(){y=!0}function F(){y=!1}function U(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function V(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let c=0;c<t.length;c++){const u=t[c];u.claim_order!==void 0&&r.push(u)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const c=t[r].claim_order,u=(s>0&&t[n[s]].claim_order<=c?s+1:U(1,s,h=>t[n[h]].claim_order,c))-1;i[r]=n[u]+1;const o=u+1;n[o]=r,s=Math.max(o,s)}const a=[],l=[];let f=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(a.push(t[r-1]);f>=r;f--)l.push(t[f]);f--}for(;f>=0;f--)l.push(t[f]);a.reverse(),l.sort((r,c)=>r.claim_order-c.claim_order);for(let r=0,c=0;r<l.length;r++){for(;c<a.length&&l[r].claim_order>=a[c].claim_order;)c++;const u=c<a.length?a[c]:null;e.insertBefore(l[r],u)}}function W(e,t){if(y){for(V(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function J(e,t,n){e.insertBefore(t,n||null)}function K(e,t,n){y&&!n?W(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function p(e){e.parentNode&&e.parentNode.removeChild(e)}function ue(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function H(e){return document.createElement(e)}function Q(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function w(e){return document.createTextNode(e)}function _e(){return w(" ")}function de(){return w("")}function he(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function L(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const X=["width","height"];function Y(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const i in t)t[i]==null?e.removeAttribute(i):i==="style"?e.style.cssText=t[i]:i==="__value"?e.value=e[i]=t[i]:n[i]&&n[i].set&&X.indexOf(i)===-1?e[i]=t[i]:L(e,i,t[i])}function Z(e,t){Object.keys(t).forEach(n=>{k(e,n,t[n])})}function k(e,t,n){const i=t.toLowerCase();i in e?e[i]=typeof e[i]=="boolean"&&n===""?!0:n:t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:L(e,t,n)}function me(e){return/-/.test(e)?Z:Y}function pe(e){return e.dataset.svelteH}function ee(e){return Array.from(e.childNodes)}function C(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function M(e,t,n,i,s=!1){C(e);const a=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const f=e[l];if(t(f)){const r=n(f);return r===void 0?e.splice(l,1):e[l]=r,s||(e.claim_info.last_index=l),f}}for(let l=e.claim_info.last_index-1;l>=0;l--){const f=e[l];if(t(f)){const r=n(f);return r===void 0?e.splice(l,1):e[l]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,f}}return i()})();return a.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,a}function te(e,t,n,i){return M(e,s=>s.nodeName===t,s=>{const a=[];for(let l=0;l<s.attributes.length;l++){const f=s.attributes[l];n[f.name]||a.push(f.name)}a.forEach(l=>s.removeAttribute(l))},()=>i(t))}function $e(e,t,n){return te(e,t,n,H)}function ne(e,t){return M(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(t),!0)}function ye(e){return ne(e," ")}function b(e,t,n){for(let i=n;i<e.length;i+=1){const s=e[i];if(s.nodeType===8&&s.textContent.trim()===t)return i}return-1}function ge(e,t){const n=b(e,"HTML_TAG_START",0),i=b(e,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new g(t);C(e);const s=e.splice(n,i-n+1);p(s[0]),p(s[s.length-1]);const a=s.slice(1,s.length-1);if(a.length===0)return new g(t);for(const l of a)l.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new g(t,a)}function xe(e,t){t=""+t,e.data!==t&&(e.data=t)}function we(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function Te(e,t,n){e.classList.toggle(t,!!n)}function Ee(e,t){const n=[];let i=0;for(const s of t.childNodes)if(s.nodeType===8){const a=s.textContent.trim();a===`HEAD_${e}_END`?(i-=1,n.push(s)):a===`HEAD_${e}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class ie{constructor(t=!1){_(this,"is_svg",!1);_(this,"e");_(this,"n");_(this,"t");_(this,"a");this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,i=null){this.e||(this.is_svg?this.e=Q(n.nodeName):this.e=H(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(i)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)J(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(p)}}class g extends ie{constructor(n=!1,i){super(n);_(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)K(this.t,this.n[i],n)}}function Ne(e,t){return new e(t)}const m=new Set;let d;function Ae(){d={r:0,c:[],p:d}}function ve(){d.r||$(d.c),d=d.p}function se(e,t){e&&e.i&&(m.delete(e),e.i(t))}function be(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function Se(e){e&&e.c()}function He(e,t){e&&e.l(t)}function re(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),A(()=>{const a=e.$$.on_mount.map(R).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...a):$(a),e.$$.on_mount=[]}),s.forEach(A)}function le(e,t){const n=e.$$;n.fragment!==null&&(O(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ce(e,t){e.$$.dirty[0]===-1&&(q.push(e),z(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Le(e,t,n,i,s,a,l=null,f=[-1]){const r=I;v(e);const c=e.$$={fragment:null,ctx:[],props:a,update:x,not_equal:s,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:N(),dirty:f,skip_bound:!1,root:t.target||r.$$.root};l&&l(c.root);let u=!1;if(c.ctx=n?n(e,t.props||{},(o,h,...T)=>{const E=T.length?T[0]:h;return c.ctx&&s(c.ctx[o],c.ctx[o]=E)&&(!c.skip_bound&&c.bound[o]&&c.bound[o](E),u&&ce(e,o)),h}):[],c.update(),u=!0,$(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){G();const o=ee(t.target);c.fragment&&c.fragment.l(o),o.forEach(p)}else c.fragment&&c.fragment.c();t.intro&&se(e.$$.fragment),re(e,t.target,t.anchor),F(),P()}v(r)}class Ce{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){le(this,1),this.$destroy=x}$on(t,n){if(!S(n))return x;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!j(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ae="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ae);export{ve as A,we as B,Ae as C,Ne as D,Ee as E,Y as F,g as H,Ce as S,ee as a,ne as b,$e as c,p as d,H as e,ye as f,K as g,W as h,Le as i,xe as j,Se as k,He as l,re as m,se as n,be as o,le as p,L as q,pe as r,_e as s,w as t,ue as u,de as v,ge as w,Te as x,he as y,me as z};
