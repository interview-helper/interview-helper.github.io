import{i as mt,c as _t,_ as g,a as tt,n as w,S as Ft,b as Dt,d as Mt,x as q,o as Nt,w as gt,L as Zt,s as te,r as ee,e as oe,f as ie}from"./index-a56939b5.js";import{l as it,$ as ne,a as se,b as re,c as ae,d as le,e as ce,f as pe,g as ue,u as de,h as he,i as fe,j as me,k as ge,m as ye,n as we,o as be,p as kt,q as ve}from"./store-interview-f0d75238.js";const xe=mt`
  @media (min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  .introduce-wrap,
  .career-wrap,
  .project-wrap,
  .techstack-wrap {
    width: 600px;
    max-width: 90vw;
  }

  .submit-wrap {
    display: flex;
    justify-content: flex-end;
    width: calc(600px + 2.5rem);
  }

  .resume-card [slot='header'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .resume-card h3 {
    margin: 0;
  }

  .resume-card sl-icon-button {
    font-size: var(--sl-font-size-medium);
  }

  .add-btn-wrap {
    display: flex;
    justify-content: flex-end;
  }

  sl-textarea:not(:last-child),
  sl-input:not(:last-child),
  sl-select:not(:last-child),
  .add-btn {
    margin-bottom: 1rem;
  }

  .resume-card:not(:last-child) {
    margin-bottom: 1rem;
  }

  sl-textarea::part(form-control-label),
  sl-input::part(form-control-label) {
    width: 100%;
  }

  sl-textarea [slot='label'],
  sl-input [slot='label'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .delete-btn::part(label) {
    margin-right: -1rem;
  }

  .introduce--label {
    margin-bottom: 0.5rem;
  }

  .right-btn {
    position: absolute;
    right: 0;
  }
`;var Ce=mt`
  ${_t}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
  }
`,Pe=mt`
  ${_t}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;const N=Math.min,O=Math.max,rt=Math.round,nt=Math.floor,I=t=>({x:t,y:t}),ke={left:"right",right:"left",bottom:"top",top:"bottom"},Ae={start:"end",end:"start"};function ht(t,e,o){return O(t,N(e,o))}function K(t,e){return typeof t=="function"?t(e):t}function V(t){return t.split("-")[0]}function Q(t){return t.split("-")[1]}function It(t){return t==="x"?"y":"x"}function yt(t){return t==="y"?"height":"width"}function et(t){return["top","bottom"].includes(V(t))?"y":"x"}function wt(t){return It(et(t))}function Ee(t,e,o){o===void 0&&(o=!1);const i=Q(t),n=wt(t),r=yt(n);let s=n==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=at(s)),[s,at(s)]}function Se(t){const e=at(t);return[ft(t),e,ft(e)]}function ft(t){return t.replace(/start|end/g,e=>Ae[e])}function Oe(t,e,o){const i=["left","right"],n=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?n:i:e?i:n;case"left":case"right":return e?r:s;default:return[]}}function $e(t,e,o,i){const n=Q(t);let r=Oe(V(t),o==="start",i);return n&&(r=r.map(s=>s+"-"+n),e&&(r=r.concat(r.map(ft)))),r}function at(t){return t.replace(/left|right|bottom|top/g,e=>ke[e])}function Te(t){return{top:0,right:0,bottom:0,left:0,...t}}function Vt(t){return typeof t!="number"?Te(t):{top:t,right:t,bottom:t,left:t}}function lt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function At(t,e,o){let{reference:i,floating:n}=t;const r=et(e),s=wt(e),l=yt(s),a=V(e),c=r==="y",h=i.x+i.width/2-n.width/2,u=i.y+i.height/2-n.height/2,f=i[l]/2-n[l]/2;let p;switch(a){case"top":p={x:h,y:i.y-n.height};break;case"bottom":p={x:h,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:u};break;case"left":p={x:i.x-n.width,y:u};break;default:p={x:i.x,y:i.y}}switch(Q(e)){case"start":p[s]-=f*(o&&c?-1:1);break;case"end":p[s]+=f*(o&&c?-1:1);break}return p}const Re=async(t,e,o)=>{const{placement:i="bottom",strategy:n="absolute",middleware:r=[],platform:s}=o,l=r.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:n}),{x:h,y:u}=At(c,i,a),f=i,p={},d=0;for(let y=0;y<l.length;y++){const{name:v,fn:m}=l[y],{x:b,y:P,data:A,reset:x}=await m({x:h,y:u,initialPlacement:i,placement:f,strategy:n,middlewareData:p,rects:c,platform:s,elements:{reference:t,floating:e}});if(h=b??h,u=P??u,p={...p,[v]:{...p[v],...A}},x&&d<=50){d++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(c=x.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:n}):x.rects),{x:h,y:u}=At(c,f,a)),y=-1;continue}}return{x:h,y:u,placement:f,strategy:n,middlewareData:p}};async function bt(t,e){var o;e===void 0&&(e={});const{x:i,y:n,platform:r,rects:s,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:f=!1,padding:p=0}=K(e,t),d=Vt(p),v=l[f?u==="floating"?"reference":"floating":u],m=lt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(v)))==null||o?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),b=u==="floating"?{...s.floating,x:i,y:n}:s.reference,P=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),A=await(r.isElement==null?void 0:r.isElement(P))?await(r.getScale==null?void 0:r.getScale(P))||{x:1,y:1}:{x:1,y:1},x=lt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:P,strategy:a}):b);return{top:(m.top-x.top+d.top)/A.y,bottom:(x.bottom-m.bottom+d.bottom)/A.y,left:(m.left-x.left+d.left)/A.x,right:(x.right-m.right+d.right)/A.x}}const ze=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:n,rects:r,platform:s,elements:l}=e,{element:a,padding:c=0}=K(t,e)||{};if(a==null)return{};const h=Vt(c),u={x:o,y:i},f=wt(n),p=yt(f),d=await s.getDimensions(a),y=f==="y",v=y?"top":"left",m=y?"bottom":"right",b=y?"clientHeight":"clientWidth",P=r.reference[p]+r.reference[f]-u[f]-r.floating[p],A=u[f]-r.reference[f],x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let k=x?x[b]:0;(!k||!await(s.isElement==null?void 0:s.isElement(x)))&&(k=l.floating[b]||r.floating[p]);const z=P/2-A/2,F=k/2-d[p]/2-1,D=N(h[v],F),G=N(h[m],F),T=D,J=k-d[p]-G,S=k/2-d[p]/2+z,L=ht(T,S,J),M=Q(n)!=null&&S!=L&&r.reference[p]/2-(S<T?D:G)-d[p]/2<0?S<T?T-S:J-S:0;return{[f]:u[f]-M,data:{[f]:L,centerOffset:S-L+M}}}}),Le=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;const{placement:i,middlewareData:n,rects:r,initialPlacement:s,platform:l,elements:a}=e,{mainAxis:c=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:d=!0,...y}=K(t,e),v=V(i),m=V(s)===s,b=await(l.isRTL==null?void 0:l.isRTL(a.floating)),P=u||(m||!d?[at(s)]:Se(s));!u&&p!=="none"&&P.push(...$e(s,d,p,b));const A=[s,...P],x=await bt(e,y),k=[];let z=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&k.push(x[v]),h){const T=Ee(i,r,b);k.push(x[T[0]],x[T[1]])}if(z=[...z,{placement:i,overflows:k}],!k.every(T=>T<=0)){var F,D;const T=(((F=n.flip)==null?void 0:F.index)||0)+1,J=A[T];if(J)return{data:{index:T,overflows:z},reset:{placement:J}};let S=(D=z.filter(L=>L.overflows[0]<=0).sort((L,H)=>L.overflows[1]-H.overflows[1])[0])==null?void 0:D.placement;if(!S)switch(f){case"bestFit":{var G;const L=(G=z.map(H=>[H.placement,H.overflows.filter(M=>M>0).reduce((M,Jt)=>M+Jt,0)]).sort((H,M)=>H[1]-M[1])[0])==null?void 0:G[0];L&&(S=L);break}case"initialPlacement":S=s;break}if(i!==S)return{reset:{placement:S}}}return{}}}};async function je(t,e){const{placement:o,platform:i,elements:n}=t,r=await(i.isRTL==null?void 0:i.isRTL(n.floating)),s=V(o),l=Q(o),a=et(o)==="y",c=["left","top"].includes(s)?-1:1,h=r&&a?-1:1,u=K(e,t);let{mainAxis:f,crossAxis:p,alignmentAxis:d}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof d=="number"&&(p=l==="end"?d*-1:d),a?{x:p*h,y:f*c}:{x:f*c,y:p*h}}const Be=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:i}=e,n=await je(e,t);return{x:o+n.x,y:i+n.y,data:n}}}},_e=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:n}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:v=>{let{x:m,y:b}=v;return{x:m,y:b}}},...a}=K(t,e),c={x:o,y:i},h=await bt(e,a),u=et(V(n)),f=It(u);let p=c[f],d=c[u];if(r){const v=f==="y"?"top":"left",m=f==="y"?"bottom":"right",b=p+h[v],P=p-h[m];p=ht(b,p,P)}if(s){const v=u==="y"?"top":"left",m=u==="y"?"bottom":"right",b=d+h[v],P=d-h[m];d=ht(b,d,P)}const y=l.fn({...e,[f]:p,[u]:d});return{...y,data:{x:y.x-o,y:y.y-i}}}}},Et=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:i,platform:n,elements:r}=e,{apply:s=()=>{},...l}=K(t,e),a=await bt(e,l),c=V(o),h=Q(o),u=et(o)==="y",{width:f,height:p}=i.floating;let d,y;c==="top"||c==="bottom"?(d=c,y=h===(await(n.isRTL==null?void 0:n.isRTL(r.floating))?"start":"end")?"left":"right"):(y=c,d=h==="end"?"top":"bottom");const v=p-a[d],m=f-a[y],b=!e.middlewareData.shift;let P=v,A=m;if(u){const k=f-a.left-a.right;A=h||b?N(m,k):k}else{const k=p-a.top-a.bottom;P=h||b?N(v,k):k}if(b&&!h){const k=O(a.left,0),z=O(a.right,0),F=O(a.top,0),D=O(a.bottom,0);u?A=f-2*(k!==0||z!==0?k+z:O(a.left,a.right)):P=p-2*(F!==0||D!==0?F+D:O(a.top,a.bottom))}await s({...e,availableWidth:A,availableHeight:P});const x=await n.getDimensions(r.floating);return f!==x.width||p!==x.height?{reset:{rects:!0}}:{}}}};function W(t){return Wt(t)?(t.nodeName||"").toLowerCase():"#document"}function $(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function _(t){var e;return(e=(Wt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Wt(t){return t instanceof Node||t instanceof $(t).Node}function B(t){return t instanceof Element||t instanceof $(t).Element}function j(t){return t instanceof HTMLElement||t instanceof $(t).HTMLElement}function St(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof $(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:o,overflowY:i,display:n}=R(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(n)}function Fe(t){return["table","td","th"].includes(W(t))}function vt(t){const e=xt(),o=R(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function De(t){let e=X(t);for(;j(e)&&!pt(e);){if(vt(e))return e;e=X(e)}return null}function xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function pt(t){return["html","body","#document"].includes(W(t))}function R(t){return $(t).getComputedStyle(t)}function ut(t){return B(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function X(t){if(W(t)==="html")return t;const e=t.assignedSlot||t.parentNode||St(t)&&t.host||_(t);return St(e)?e.host:e}function Ht(t){const e=X(t);return pt(e)?t.ownerDocument?t.ownerDocument.body:t.body:j(e)&&ot(e)?e:Ht(e)}function ct(t,e){var o;e===void 0&&(e=[]);const i=Ht(t),n=i===((o=t.ownerDocument)==null?void 0:o.body),r=$(i);return n?e.concat(r,r.visualViewport||[],ot(i)?i:[]):e.concat(i,ct(i))}function qt(t){const e=R(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const n=j(t),r=n?t.offsetWidth:o,s=n?t.offsetHeight:i,l=rt(o)!==r||rt(i)!==s;return l&&(o=r,i=s),{width:o,height:i,$:l}}function Ct(t){return B(t)?t:t.contextElement}function U(t){const e=Ct(t);if(!j(e))return I(1);const o=e.getBoundingClientRect(),{width:i,height:n,$:r}=qt(e);let s=(r?rt(o.width):o.width)/i,l=(r?rt(o.height):o.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Me=I(0);function Yt(t){const e=$(t);return!xt()||!e.visualViewport?Me:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ne(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==$(t)?!1:e}function Y(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const n=t.getBoundingClientRect(),r=Ct(t);let s=I(1);e&&(i?B(i)&&(s=U(i)):s=U(t));const l=Ne(r,o,i)?Yt(r):I(0);let a=(n.left+l.x)/s.x,c=(n.top+l.y)/s.y,h=n.width/s.x,u=n.height/s.y;if(r){const f=$(r),p=i&&B(i)?$(i):i;let d=f.frameElement;for(;d&&i&&p!==f;){const y=U(d),v=d.getBoundingClientRect(),m=R(d),b=v.left+(d.clientLeft+parseFloat(m.paddingLeft))*y.x,P=v.top+(d.clientTop+parseFloat(m.paddingTop))*y.y;a*=y.x,c*=y.y,h*=y.x,u*=y.y,a+=b,c+=P,d=$(d).frameElement}}return lt({width:h,height:u,x:a,y:c})}function Ie(t){let{rect:e,offsetParent:o,strategy:i}=t;const n=j(o),r=_(o);if(o===r)return e;let s={scrollLeft:0,scrollTop:0},l=I(1);const a=I(0);if((n||!n&&i!=="fixed")&&((W(o)!=="body"||ot(r))&&(s=ut(o)),j(o))){const c=Y(o);l=U(o),a.x=c.x+o.clientLeft,a.y=c.y+o.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-s.scrollLeft*l.x+a.x,y:e.y*l.y-s.scrollTop*l.y+a.y}}function Ve(t){return Array.from(t.getClientRects())}function Ut(t){return Y(_(t)).left+ut(t).scrollLeft}function We(t){const e=_(t),o=ut(t),i=t.ownerDocument.body,n=O(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=O(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-o.scrollLeft+Ut(t);const l=-o.scrollTop;return R(i).direction==="rtl"&&(s+=O(e.clientWidth,i.clientWidth)-n),{width:n,height:r,x:s,y:l}}function He(t,e){const o=$(t),i=_(t),n=o.visualViewport;let r=i.clientWidth,s=i.clientHeight,l=0,a=0;if(n){r=n.width,s=n.height;const c=xt();(!c||c&&e==="fixed")&&(l=n.offsetLeft,a=n.offsetTop)}return{width:r,height:s,x:l,y:a}}function qe(t,e){const o=Y(t,!0,e==="fixed"),i=o.top+t.clientTop,n=o.left+t.clientLeft,r=j(t)?U(t):I(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,a=n*r.x,c=i*r.y;return{width:s,height:l,x:a,y:c}}function Ot(t,e,o){let i;if(e==="viewport")i=He(t,o);else if(e==="document")i=We(_(t));else if(B(e))i=qe(e,o);else{const n=Yt(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return lt(i)}function Xt(t,e){const o=X(t);return o===e||!B(o)||pt(o)?!1:R(o).position==="fixed"||Xt(o,e)}function Ye(t,e){const o=e.get(t);if(o)return o;let i=ct(t).filter(l=>B(l)&&W(l)!=="body"),n=null;const r=R(t).position==="fixed";let s=r?X(t):t;for(;B(s)&&!pt(s);){const l=R(s),a=vt(s);!a&&l.position==="fixed"&&(n=null),(r?!a&&!n:!a&&l.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||ot(s)&&!a&&Xt(t,s))?i=i.filter(h=>h!==s):n=l,s=X(s)}return e.set(t,i),i}function Ue(t){let{element:e,boundary:o,rootBoundary:i,strategy:n}=t;const s=[...o==="clippingAncestors"?Ye(e,this._c):[].concat(o),i],l=s[0],a=s.reduce((c,h)=>{const u=Ot(e,h,n);return c.top=O(u.top,c.top),c.right=N(u.right,c.right),c.bottom=N(u.bottom,c.bottom),c.left=O(u.left,c.left),c},Ot(e,l,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Xe(t){return qt(t)}function Ke(t,e,o){const i=j(e),n=_(e),r=o==="fixed",s=Y(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const a=I(0);if(i||!i&&!r)if((W(e)!=="body"||ot(n))&&(l=ut(e)),i){const c=Y(e,!0,r,e);a.x=c.x+e.clientLeft,a.y=c.y+e.clientTop}else n&&(a.x=Ut(n));return{x:s.left+l.scrollLeft-a.x,y:s.top+l.scrollTop-a.y,width:s.width,height:s.height}}function $t(t,e){return!j(t)||R(t).position==="fixed"?null:e?e(t):t.offsetParent}function Kt(t,e){const o=$(t);if(!j(t))return o;let i=$t(t,e);for(;i&&Fe(i)&&R(i).position==="static";)i=$t(i,e);return i&&(W(i)==="html"||W(i)==="body"&&R(i).position==="static"&&!vt(i))?o:i||De(t)||o}const Qe=async function(t){let{reference:e,floating:o,strategy:i}=t;const n=this.getOffsetParent||Kt,r=this.getDimensions;return{reference:Ke(e,await n(o),i),floating:{x:0,y:0,...await r(o)}}};function Ge(t){return R(t).direction==="rtl"}const st={convertOffsetParentRelativeRectToViewportRelativeRect:Ie,getDocumentElement:_,getClippingRect:Ue,getOffsetParent:Kt,getElementRects:Qe,getClientRects:Ve,getDimensions:Xe,getScale:U,isElement:B,isRTL:Ge};function Je(t,e){let o=null,i;const n=_(t);function r(){clearTimeout(i),o&&o.disconnect(),o=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),r();const{left:c,top:h,width:u,height:f}=t.getBoundingClientRect();if(l||e(),!u||!f)return;const p=nt(h),d=nt(n.clientWidth-(c+u)),y=nt(n.clientHeight-(h+f)),v=nt(c),b={rootMargin:-p+"px "+-d+"px "+-y+"px "+-v+"px",threshold:O(0,N(1,a))||1};let P=!0;function A(x){const k=x[0].intersectionRatio;if(k!==a){if(!P)return s();k?s(!1,k):i=setTimeout(()=>{s(!1,1e-7)},100)}P=!1}try{o=new IntersectionObserver(A,{...b,root:n.ownerDocument})}catch{o=new IntersectionObserver(A,b)}o.observe(t)}return s(!0),r}function Ze(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,c=Ct(t),h=n||r?[...c?ct(c):[],...ct(e)]:[];h.forEach(m=>{n&&m.addEventListener("scroll",o,{passive:!0}),r&&m.addEventListener("resize",o)});const u=c&&l?Je(c,o):null;let f=-1,p=null;s&&(p=new ResizeObserver(m=>{let[b]=m;b&&b.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{p&&p.observe(e)})),o()}),c&&!a&&p.observe(c),p.observe(e));let d,y=a?Y(t):null;a&&v();function v(){const m=Y(t);y&&(m.x!==y.x||m.y!==y.y||m.width!==y.width||m.height!==y.height)&&o(),y=m,d=requestAnimationFrame(v)}return o(),()=>{h.forEach(m=>{n&&m.removeEventListener("scroll",o),r&&m.removeEventListener("resize",o)}),u&&u(),p&&p.disconnect(),p=null,a&&cancelAnimationFrame(d)}}const to=(t,e,o)=>{const i=new Map,n={platform:st,...o},r={...n.platform,_c:i};return Re(t,e,{...n,platform:r})};function eo(t){return oo(t)}function dt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function oo(t){for(let e=t;e;e=dt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=dt(t);e;e=dt(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function io(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t}var C=class extends Ft{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||io(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){this.anchorEl&&(this.cleanup=Ze(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Be({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Et({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=n?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Le({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(_e({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Et({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(ze({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>st.getOffsetParent(o,eo):st.getOffsetParent;to(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Dt(Mt({},st),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:n,placement:r})=>{const s=getComputedStyle(this).direction==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const a=n.arrow.x,c=n.arrow.y;let h="",u="",f="",p="";if(this.arrowPlacement==="start"){const d=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=s?d:"",p=s?"":d}else if(this.arrowPlacement==="end"){const d=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=s?"":d,p=s?d:"",f=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof a=="number"?`${a}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:f,left:p,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return q`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${Nt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?q`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};C.styles=Pe;g([tt(".popup")],C.prototype,"popup",2);g([tt(".popup__arrow")],C.prototype,"arrowEl",2);g([w()],C.prototype,"anchor",2);g([w({type:Boolean,reflect:!0})],C.prototype,"active",2);g([w({reflect:!0})],C.prototype,"placement",2);g([w({reflect:!0})],C.prototype,"strategy",2);g([w({type:Number})],C.prototype,"distance",2);g([w({type:Number})],C.prototype,"skidding",2);g([w({type:Boolean})],C.prototype,"arrow",2);g([w({attribute:"arrow-placement"})],C.prototype,"arrowPlacement",2);g([w({attribute:"arrow-padding",type:Number})],C.prototype,"arrowPadding",2);g([w({type:Boolean})],C.prototype,"flip",2);g([w({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],C.prototype,"flipFallbackPlacements",2);g([w({attribute:"flip-fallback-strategy"})],C.prototype,"flipFallbackStrategy",2);g([w({type:Object})],C.prototype,"flipBoundary",2);g([w({attribute:"flip-padding",type:Number})],C.prototype,"flipPadding",2);g([w({type:Boolean})],C.prototype,"shift",2);g([w({type:Object})],C.prototype,"shiftBoundary",2);g([w({attribute:"shift-padding",type:Number})],C.prototype,"shiftPadding",2);g([w({attribute:"auto-size"})],C.prototype,"autoSize",2);g([w()],C.prototype,"sync",2);g([w({type:Object})],C.prototype,"autoSizeBoundary",2);g([w({attribute:"auto-size-padding",type:Number})],C.prototype,"autoSizePadding",2);var Qt=new Map,no=new WeakMap;function so(t){return t??{keyframes:[],options:{duration:0}}}function Tt(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Gt(t,e){Qt.set(t,so(e))}function Rt(t,e,o){const i=no.get(t);if(i?.[e])return Tt(i[e],o.dir);const n=Qt.get(e);return n?Tt(n,o.dir):{keyframes:[],options:{duration:0}}}function zt(t,e){return new Promise(o=>{function i(n){n.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function Lt(t,e,o){return new Promise(i=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");const n=t.animate(e,Dt(Mt({},o),{duration:ro()?0:o.duration}));n.addEventListener("cancel",i,{once:!0}),n.addEventListener("finish",i,{once:!0})})}function jt(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function ro(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Bt(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{const i=requestAnimationFrame(o);e.addEventListener("cancel",()=>i,{once:!0}),e.addEventListener("finish",()=>i,{once:!0}),e.cancel()})))}var E=class extends Ft{constructor(){super(),this.localize=new Zt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=jt(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=jt(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await Bt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=Rt(this,"tooltip.show",{dir:this.localize.dir()});await Lt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),await Bt(this.body);const{keyframes:t,options:e}=Rt(this,"tooltip.hide",{dir:this.localize.dir()});await Lt(this.popup.popup,t,e),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,zt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,zt(this,"sl-after-hide")}render(){return q`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Nt({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};E.styles=Ce;E.dependencies={"sl-popup":C};g([tt("slot:not([name])")],E.prototype,"defaultSlot",2);g([tt(".tooltip__body")],E.prototype,"body",2);g([tt("sl-popup")],E.prototype,"popup",2);g([w()],E.prototype,"content",2);g([w()],E.prototype,"placement",2);g([w({type:Boolean,reflect:!0})],E.prototype,"disabled",2);g([w({type:Number})],E.prototype,"distance",2);g([w({type:Boolean,reflect:!0})],E.prototype,"open",2);g([w({type:Number})],E.prototype,"skidding",2);g([w()],E.prototype,"trigger",2);g([w({type:Boolean})],E.prototype,"hoist",2);g([gt("open",{waitUntilFirstUpdate:!0})],E.prototype,"handleOpenChange",1);g([gt(["content","distance","hoist","placement","skidding"])],E.prototype,"handleOptionsChange",1);g([gt("disabled")],E.prototype,"handleDisabledChange",1);Gt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Gt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});E.define("sl-tooltip");var ao=Object.defineProperty,lo=Object.getOwnPropertyDescriptor,Pt=(t,e,o,i)=>{for(var n=i>1?void 0:i?lo(e,o):e,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(i?s(e,o,n):s(n))||n);return i&&n&&ao(e,o,n),n};let Z=class extends te{constructor(){super(),this.hasCareer=!1,this.hasProject=!1,this.introduceController=new it.StoreController(this,ne),this.careerController=new it.StoreController(this,se),this.projectController=new it.StoreController(this,re),this.techstackController=new it.StoreController(this,ae)}render(){return q`
      <app-header ?enableBack="${!0}" .title=${"이력서 작성"}>
        <sl-button
          slot="right"
          class="right-btn"
          type="submit"
          variant="primary"
          @click=${async()=>{ee.navigate("interview"),le();for(let t=0;t<this.careerController.value.length;t++)ce(t);for(let t=0;t<this.projectController.value.length;t++)pe(t);ue()}}
          >제출하기</sl-button
        >
      </app-header>

      <main class="page page-about">
        <sl-card class="resume-card">
          <div slot="header">
            자기소개 *
            <sl-tooltip
              content="이력서에 대한 내용이 상세할 수록 예상 면접의 질문이 더욱 정확해집니다."
            >
              <sl-icon-button
                name="question-circle"
                label="Settings"
              ></sl-icon-button>
            </sl-tooltip>
          </div>

          <div class="introduce-wrap">
            <sl-textarea
              name="introduce"
              resize="auto"
              .value=${this.introduceController.value}
              @sl-change=${t=>{de(t.target.value)}}
            >
            </sl-textarea>
          </div>
        </sl-card>

        <sl-card class="resume-card">
          <div slot="header">
            경력

            <sl-switch
              ?checked=${this.hasCareer}
              @sl-change=${()=>this.hasCareer=!this.hasCareer}
              >경력 없음(신입)</sl-switch
            >
          </div>

          <div class="career-wrap">
            ${this.careerController.value.map((t,e)=>q`
                <sl-textarea
                  name="career"
                  resize="auto"
                  ?disabled=${this.hasCareer}
                  .value=${t.text}
                  @sl-change=${o=>{he({index:e,item:{text:o.target.value}})}}
                >
                  <div slot="label">
                    <span>경력 ${e+1}</span>

                    <sl-button
                      class="delete-btn"
                      variant="text"
                      ?disabled=${this.hasCareer}
                      @click=${()=>fe({index:e})}
                    >
                      <sl-icon name="trash" label="삭제"></sl-icon> 삭제
                    </sl-button>
                  </div>
                </sl-textarea>
              `)}

            <div class="add-btn-wrap">
              <sl-button
                class="add-btn"
                type="button"
                variant="default"
                ?disabled=${this.hasCareer}
                @click=${()=>me({text:""})}
              >
                <sl-icon slot="prefix" name="plus-lg"></sl-icon>
                경력 추가</sl-button
              >
            </div>
          </div>
        </sl-card>

        <sl-card class="resume-card">
          <div slot="header">
            프로젝트
            <sl-switch
              ?checked=${this.hasProject}
              @sl-change=${()=>this.hasProject=!this.hasProject}
              >프로젝트 경험 없음</sl-switch
            >
          </div>

          <div class="project-wrap">
            ${this.projectController.value.map((t,e)=>q`
                <sl-textarea
                  name="project"
                  resize="auto"
                  ?disabled=${this.hasProject}
                  .value=${t.text}
                  @sl-change=${o=>{ge({index:e,item:{text:o.target.value}})}}
                >
                  <div slot="label">
                    <span>프로젝트 ${e+1}</span>

                    <sl-button
                      class="delete-btn"
                      variant="text"
                      ?disabled=${this.hasProject}
                      @click=${()=>ye({index:e})}
                    >
                      <sl-icon name="trash" label="삭제"></sl-icon> 삭제
                    </sl-button>
                  </div>
                </sl-textarea>
              `)}

            <div class="add-btn-wrap">
              <sl-button
                class="add-btn"
                type="button"
                variant="default"
                ?disabled=${this.hasProject}
                @click=${()=>we({text:""})}
              >
                <sl-icon slot="prefix" name="plus-lg"></sl-icon>
                프로젝트 추가</sl-button
              >
            </div>
          </div>
        </sl-card>

        <sl-card class="resume-card">
          <div slot="header">기술스택 *</div>

          <div class="techstack-wrap">
            ${this.techstackController.value.map((t,e)=>q`
                <sl-input
                  name="techstack"
                  .value=${t.text}
                  @sl-change=${o=>be({index:e,item:{text:o.target.value}})}
                  @keypress=${o=>{const i=o.key==="Enter",n=e===this.techstackController.value.length-1,r=o.target.value;i&&r&&n&&(kt({text:""}),this.updateComplete.then(()=>{(this.shadowRoot?.querySelector('[name="techstack"]:last-of-type')).focus()}))}}
                >
                  <div slot="label">
                    <span>기술스택 ${e+1}</span>

                    <sl-button
                      class="delete-btn"
                      variant="text"
                      @click=${()=>ve({index:e})}
                    >
                      <sl-icon name="trash" label="삭제"></sl-icon> 삭제
                    </sl-button>
                  </div>
                </sl-input>
              `)}

            <div class="add-btn-wrap">
              <sl-button
                class="add-btn"
                type="button"
                variant="default"
                @click=${()=>kt({text:""})}
              >
                <sl-icon slot="prefix" name="plus-lg"></sl-icon>
                기술스택 추가</sl-button
              >
            </div>
          </div>
        </sl-card>
      </main>
    `}};Z.styles=[oe,xe];Pt([w({type:Boolean})],Z.prototype,"hasCareer",2);Pt([w({type:Boolean})],Z.prototype,"hasProject",2);Z=Pt([ie("app-about")],Z);export{Z as AppAbout};
//# sourceMappingURL=app-about-3b53b5df.js.map
