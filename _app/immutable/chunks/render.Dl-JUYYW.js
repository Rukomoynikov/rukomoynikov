import{i as m,g as D,H,b as L,d as p,e as h,h as E,j as O,k as _,l as I,m as Y,o as j,q as k,u as C,v as M,w as S,x as V,p as $,y as w,z as q,a as z,A as W}from"./runtime.C1_VR7Gp.js";import{c as B,r as A,d as F,h as y,e as G,i as J}from"./disclose-version.BSXahmD8.js";function U(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function K(t,e){return N(t,e)}function X(t,e){m(),e.intro=e.intro??!1;const n=e.target,l=w,u=_;try{for(var a=D(n);a&&(a.nodeType!==8||a.data!==H);)a=L(a);if(!a)throw p;h(!0),E(a),O();const o=N(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==I)throw Y(),p;return h(!1),o}catch(o){if(o===p)return e.recover===!1&&j(),m(),k(n),h(!1),K(t,e);throw o}finally{h(l),E(u),F()}}const i=new Map;function N(t,{target:e,anchor:n,props:l={},events:u,context:a,intro:o=!0}){m();var v=new Set,g=d=>{for(var r=0;r<d.length;r++){var s=d[r];if(!v.has(s)){v.add(s);var f=J(s);e.addEventListener(s,y,{passive:f});var T=i.get(s);T===void 0?(document.addEventListener(s,y,{passive:f}),i.set(s,1)):i.set(s,T+1)}}};g(C(B)),A.add(g);var c=void 0,b=M(()=>{var d=n??e.appendChild(S());return V(()=>{if(a){$({});var r=W;r.c=a}u&&(l.$$events=u),w&&G(d,null),c=t(d,l)||{},w&&(q.nodes_end=_),a&&z()}),()=>{var f;for(var r of v){e.removeEventListener(r,y);var s=i.get(r);--s===0?(document.removeEventListener(r,y),i.delete(r)):i.set(r,s)}A.delete(g),R.delete(c),d!==n&&((f=d.parentNode)==null||f.removeChild(d))}});return R.set(c,b),c}let R=new WeakMap;function Z(t){const e=R.get(t);e&&e()}export{X as h,K as m,U as s,Z as u};
