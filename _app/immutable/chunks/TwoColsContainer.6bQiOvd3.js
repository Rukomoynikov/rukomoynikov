import{s as z,c as g,m as $,u as C,g as b,d as k,p as j}from"./scheduler.OdtVIPiv.js";import{S,i as T,g as h,h as p,j as v,f as c,k as d,a as y,d as _,t as m,s as q,c as w,y as E,p as A,b as B}from"./index.Gg6tYAxy.js";function F(i){let t,l;const r=i[3].default,e=g(r,i,i[2],null);return{c(){t=h("div"),e&&e.c(),this.h()},l(s){t=p(s,"DIV",{class:!0});var a=v(t);e&&e.l(a),a.forEach(c),this.h()},h(){d(t,"class",$(i[0])+" svelte-1i3ol08")},m(s,a){y(s,t,a),e&&e.m(t,null),l=!0},p(s,[a]){e&&e.p&&(!l||a&4)&&C(e,r,s,s[2],l?k(r,s[2],a,null):b(s[2]),null)},i(s){l||(_(e,s),l=!0)},o(s){m(e,s),l=!1},d(s){s&&c(t),e&&e.d(s)}}}function G(i,t,l){let{$$slots:r={},$$scope:e}=t;const s="1200";let a=`container--${s}`;return i.$$set=o=>{"$$scope"in o&&l(2,e=o.$$scope)},[a,s,e,r]}class N extends S{constructor(t){super(),T(this,t,G,F,z,{size:1})}get size(){return this.$$.ctx[1]}}const H=i=>({}),I=i=>({});function V(i){let t,l;const r=i[3].aside,e=g(r,i,i[2],I);return{c(){t=h("div"),e&&e.c(),this.h()},l(s){t=p(s,"DIV",{class:!0});var a=v(t);e&&e.l(a),a.forEach(c),this.h()},h(){d(t,"class","col-2 svelte-1usoguu")},m(s,a){y(s,t,a),e&&e.m(t,null),l=!0},p(s,a){e&&e.p&&(!l||a&4)&&C(e,r,s,s[2],l?k(r,s[2],a,H):b(s[2]),I)},i(s){l||(_(e,s),l=!0)},o(s){m(e,s),l=!1},d(s){s&&c(t),e&&e.d(s)}}}function J(i){let t,l,r,e,s;const a=i[3].default,o=g(a,i,i[2],null);let n=i[1].aside&&V(i);return{c(){t=h("div"),l=h("div"),o&&o.c(),r=q(),n&&n.c(),this.h()},l(u){t=p(u,"DIV",{class:!0});var f=v(t);l=p(f,"DIV",{class:!0});var D=v(l);o&&o.l(D),D.forEach(c),r=w(f),n&&n.l(f),f.forEach(c),this.h()},h(){d(l,"class","col-1 svelte-1usoguu"),d(t,"class",e=$(`columns ${i[0]}`)+" svelte-1usoguu")},m(u,f){y(u,t,f),E(t,l),o&&o.m(l,null),E(t,r),n&&n.m(t,null),s=!0},p(u,[f]){o&&o.p&&(!s||f&4)&&C(o,a,u,u[2],s?k(a,u[2],f,null):b(u[2]),null),u[1].aside?n?(n.p(u,f),f&2&&_(n,1)):(n=V(u),n.c(),_(n,1),n.m(t,null)):n&&(A(),m(n,1,1,()=>{n=null}),B()),(!s||f&1&&e!==(e=$(`columns ${u[0]}`)+" svelte-1usoguu"))&&d(t,"class",e)},i(u){s||(_(o,u),_(n),s=!0)},o(u){m(o,u),m(n),s=!1},d(u){u&&c(t),o&&o.d(u),n&&n.d()}}}function K(i,t,l){let{$$slots:r={},$$scope:e}=t;const s=j(r);let{layout:a="standard"}=t;return i.$$set=o=>{"layout"in o&&l(0,a=o.layout),"$$scope"in o&&l(2,e=o.$$scope)},[a,s,e,r]}class O extends S{constructor(t){super(),T(this,t,K,J,z,{layout:0})}}export{N as C,O as T};