import{j as d}from"./jsx-runtime.B4ELNKBR.js";import{r as a}from"./index.B80Lgev0.js";import{c as E,a as V}from"./utils.Ccw_z42z.js";import"./astro/assets-service.C74q3Q98.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x=(...t)=>t.filter((n,e,o)=>!!n&&n.trim()!==""&&o.indexOf(n)===e).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var S={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=a.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:e=2,absoluteStrokeWidth:o,className:r="",children:s,iconNode:i,...c},m)=>a.createElement("svg",{ref:m,...S,width:n,height:n,stroke:t,strokeWidth:o?Number(e)*24/Number(n):e,className:x("lucide",r),...c},[...i.map(([l,u])=>a.createElement(l,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(t,n)=>{const e=a.forwardRef(({className:o,...r},s)=>a.createElement(A,{ref:s,iconNode:n,className:x(`lucide-${R(t)}`,o),...r}));return e.displayName=`${t}`,e};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=k("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=k("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function P(t,n){typeof t=="function"?t(n):t!=null&&(t.current=n)}function T(...t){return n=>t.forEach(e=>P(e,n))}var w=a.forwardRef((t,n)=>{const{children:e,...o}=t,r=a.Children.toArray(e),s=r.find(B);if(s){const i=s.props.children,c=r.map(m=>m===s?a.Children.count(i)>1?a.Children.only(null):a.isValidElement(i)?i.props.children:null:m);return d.jsx(g,{...o,ref:n,children:a.isValidElement(i)?a.cloneElement(i,void 0,c):null})}return d.jsx(g,{...o,ref:n,children:e})});w.displayName="Slot";var g=a.forwardRef((t,n)=>{const{children:e,...o}=t;if(a.isValidElement(e)){const r=$(e);return a.cloneElement(e,{...L(o,e.props),ref:n?T(n,r):r})}return a.Children.count(e)>1?a.Children.only(null):null});g.displayName="SlotClone";var W=({children:t})=>d.jsx(d.Fragment,{children:t});function B(t){return a.isValidElement(t)&&t.type===W}function L(t,n){const e={...n};for(const o in n){const r=t[o],s=n[o];/^on[A-Z]/.test(o)?r&&s?e[o]=(...c)=>{s(...c),r(...c)}:r&&(e[o]=r):o==="style"?e[o]={...r,...s}:o==="className"&&(e[o]=[r,s].filter(Boolean).join(" "))}return{...t,...e}}function $(t){let n=Object.getOwnPropertyDescriptor(t.props,"ref")?.get,e=n&&"isReactWarning"in n&&n.isReactWarning;return e?t.ref:(n=Object.getOwnPropertyDescriptor(t,"ref")?.get,e=n&&"isReactWarning"in n&&n.isReactWarning,e?t.props.ref:t.props.ref||t.ref)}const p=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,b=E,z=(t,n)=>e=>{var o;if(n?.variants==null)return b(t,e?.class,e?.className);const{variants:r,defaultVariants:s}=n,i=Object.keys(r).map(l=>{const u=e?.[l],h=s?.[l];if(u===null)return null;const f=p(u)||p(h);return r[l][f]}),c=e&&Object.entries(e).reduce((l,u)=>{let[h,f]=u;return f===void 0||(l[h]=f),l},{}),m=n==null||(o=n.compoundVariants)===null||o===void 0?void 0:o.reduce((l,u)=>{let{class:h,className:f,...C}=u;return Object.entries(C).every(N=>{let[y,v]=N;return Array.isArray(v)?v.includes({...s,...c}[y]):{...s,...c}[y]===v})?[...l,h,f]:l},[]);return b(t,i,m,e?.class,e?.className)},I=z("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),j=a.forwardRef(({className:t,variant:n,size:e,asChild:o=!1,...r},s)=>{const i=o?w:"button";return d.jsx(i,{className:V(I({variant:n,size:e,className:t})),ref:s,...r})});j.displayName="Button";function _(){const[t,n]=a.useState("light");a.useEffect(()=>{const r=window.matchMedia("(prefers-color-scheme: dark)").matches,s=localStorage.getItem("theme")||(r?"dark":"light");n(s),e(s)},[]);const e=r=>{document.documentElement.classList.toggle("dark",r==="dark")},o=()=>{const r=t==="light"?"dark":"light";n(r),localStorage.setItem("theme",r),e(r)};return d.jsxs(j,{variant:"outline",size:"icon",onClick:o,className:"mx-2",children:[t==="dark"?d.jsx(O,{className:"h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100"}):d.jsx(M,{className:"h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100"}),d.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}export{_ as ModeToggle};
