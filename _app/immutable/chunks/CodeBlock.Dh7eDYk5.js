import{d as x,f as F,e as H,a as y,g as _,t as C}from"./disclose-version.C2pdkTQp.js";import{a0 as M,M as B,B as L,L as Y,C as R,x as G,E as J,y as K,A as Q,w as S,as as U,au as V,j as W,av as X,o as Z,aw as ee,p as te,f as ae,a as se,c as h,r as g,t as k,s as q,g as re,R as oe,e as z}from"./runtime.HQ4njjHg.js";import{s as N}from"./render.D9yRpdDH.js";import{p as P,i as T}from"./props.pZSIiB56.js";import{t as O}from"./TwoColsContainer.C_n6h9nT.js";import{i as ne}from"./lifecycle.DkTGpmNP.js";import{s as ie,a as ce}from"./store.ClzQZ7SM.js";import{p as de}from"./stores.B8VA5_nb.js";function fe(a,e,t,s,c){var n=a,o="",d;M(()=>{if(o===(o=e()??"")){B&&L();return}d!==void 0&&(U(d),d=void 0),o!==""&&(d=Y(()=>{if(B){R.data;for(var r=L(),f=r;r!==null&&(r.nodeType!==8||r.data!=="");)f=r,r=G(r);if(r===null)throw J(),K;x(R,f),n=Q(r);return}var p=o+"",v=F(p);x(S(v),v.lastChild),n.before(v)}))})}function le(a,e,t){V(()=>{var s=W(()=>e(a,t==null?void 0:t())||{});if(t&&(s!=null&&s.update)){var c=!1,n={};X(()=>{var o=t();Z(o),c&&ee(n,o)&&(n=o,s.update(o))}),c=!0}if(s!=null&&s.destroy)return()=>s.destroy()})}async function ve(a){if("clipboard"in navigator)await navigator.clipboard.writeText(a);else{const e=document.createElement("input");e.type="text",e.disabled=!0,e.style.setProperty("position","fixed"),e.style.setProperty("z-index","-100"),e.style.setProperty("pointer-events","none"),e.style.setProperty("opacity","0"),e.value=a,document.body.appendChild(e),e.click(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}function $(a){return typeof a=="string"?{text:a}:a}function A(a,e,t=["click"]){for(const s of t)a.addEventListener(s,e,!0)}function I(a,e,t=["click"]){for(const s of t)a.removeEventListener(s,e,!0)}const me=(a,e)=>{let t=$(e);const s=async c=>{var o,d;const n=t.text;try{await ve(n),(o=t.onCopy)==null||o.call(t,{text:n,event:c})}catch(r){const f=new Error(`${r instanceof Error?r.message:r}`,{cause:r});(d=t.onError)==null||d.call(t,{error:f,event:c})}};return A(a,s,t.events),{update(c){I(a,s,t.events),t=$(c),A(a,s,t.events)},destroy(){I(a,s,t.events)}}};var pe=C('<div class="fileName svelte-1cmzv5q"> </div>'),ue=C('<div class="codeBlock svelte-1cmzv5q"><button class="copyButton svelte-1cmzv5q">Copy</button> <!> <!></div>'),ye=C("<div><strong> </strong></div>");function xe(a,e){var E;te(e,!1);const t=ie(),s=()=>ce(de,"$page",t);let c=P(e,"snippet",8,""),n=P(e,"fileName",8,void 0);const o=(E=s().data.codes)==null?void 0:E[c()];let d=oe(!1);const r=()=>{z(d,!0)},f=()=>{z(d,!1)};ne();var p=H(),v=ae(p);T(v,()=>o,b=>{var i=ue(),l=h(i),u=q(l,2);T(u,n,w=>{var m=pe(),D=h(m);g(m),k(()=>N(D,`File: ${n()??""}`)),y(w,m)});var j=q(u,2);fe(j,()=>o.code),g(i),k(()=>{O(i,"codeBlock--with-filename",n()),O(l,"copyButton--show",re(d))}),le(l,(w,m)=>me(w,m),()=>o.raw),_("focus",i,r),_("blur",i,f),_("mouseleave",i,f),_("mouseenter",i,r),y(b,i)},b=>{var i=ye(),l=h(i),u=h(l);g(l),g(i),k(()=>N(u,`Invalid code snippet: ${c()??""}`)),y(b,i)}),y(a,p),se()}export{xe as C};
