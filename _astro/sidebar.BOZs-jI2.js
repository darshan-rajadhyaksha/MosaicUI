import{j as v}from"./jsx-runtime.u17CrQMm.js";import{a as b}from"./index.UEuQJ2Tp.js";import{p as ct,m as dt}from"./preview-switch.UBkuet_E.js";import{p as lt,m as ut}from"./preview-switch.TKls56zW.js";import{M as ht,i as Pe,u as Bn,P as pt,a as mt,b as ft,L as gt,m as Ze}from"./proxy.C7iNHNTD.js";function Be(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function yt(...n){return e=>{let r=!1;const o=n.map(i=>{const a=Be(i,e);return!r&&typeof a=="function"&&(r=!0),a});if(r)return()=>{for(let i=0;i<o.length;i++){const a=o[i];typeof a=="function"?a():Be(n[i],null)}}}}function bt(...n){return b.useCallback(yt(...n),n)}class xt extends b.Component{getSnapshotBeforeUpdate(e){const r=this.props.childRef.current;if(Pe(r)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const o=r.offsetParent,i=Pe(o)&&o.offsetWidth||0,a=Pe(o)&&o.offsetHeight||0,s=getComputedStyle(r),c=this.props.sizeRef.current;c.height=parseFloat(s.height),c.width=parseFloat(s.width),c.top=r.offsetTop,c.left=r.offsetLeft,c.right=i-c.width-c.left,c.bottom=a-c.height-c.top,c.direction=s.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function vt({children:n,isPresent:e,anchorX:r,anchorY:o,root:i,pop:a}){const s=b.useId(),c=b.useRef(null),d=b.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:l}=b.useContext(ht),u=n.props?.ref??n?.ref,f=bt(c,u);return b.useInsertionEffect(()=>{const{width:p,height:m,top:g,left:I,right:x,bottom:L,direction:Se}=d.current;if(e||a===!1||!c.current||!p||!m)return;const U=Se==="rtl",O=r==="left"?U?`right: ${x}`:`left: ${I}`:U?`left: ${I}`:`right: ${x}`,J=o==="bottom"?`bottom: ${L}`:`top: ${g}`;c.current.dataset.motionPopId=s;const M=document.createElement("style");l&&(M.nonce=l);const H=i??document.head;return H.appendChild(M),M.sheet&&M.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${m}px !important;
            ${O}px !important;
            ${J}px !important;
          }
        `),()=>{c.current?.removeAttribute("data-motion-pop-id"),H.contains(M)&&H.removeChild(M)}},[e]),v.jsx(xt,{isPresent:e,childRef:c,sizeRef:d,pop:a,children:a===!1?n:b.cloneElement(n,{ref:f})})}const wt=({children:n,initial:e,isPresent:r,onExitComplete:o,custom:i,presenceAffectsLayout:a,mode:s,anchorX:c,anchorY:d,root:l})=>{const u=Bn(_t),f=b.useId();let p=!0,m=b.useMemo(()=>(p=!1,{id:f,initial:e,isPresent:r,custom:i,onExitComplete:g=>{u.set(g,!0);for(const I of u.values())if(!I)return;o&&o()},register:g=>(u.set(g,!1),()=>u.delete(g))}),[r,u,o]);return a&&p&&(m={...m}),b.useMemo(()=>{u.forEach((g,I)=>u.set(I,!1))},[r]),b.useEffect(()=>{!r&&!u.size&&o&&o()},[r]),n=v.jsx(vt,{pop:s==="popLayout",isPresent:r,anchorX:c,anchorY:d,root:l,children:n}),v.jsx(pt.Provider,{value:m,children:n})};function _t(){return new Map}const X=n=>n.key||"";function Le(n){const e=[];return b.Children.forEach(n,r=>{b.isValidElement(r)&&e.push(r)}),e}const kt=({children:n,custom:e,initial:r=!0,onExitComplete:o,presenceAffectsLayout:i=!0,mode:a="sync",propagate:s=!1,anchorX:c="left",anchorY:d="top",root:l})=>{const[u,f]=mt(s),p=b.useMemo(()=>Le(n),[n]),m=s&&!u?[]:p.map(X),g=b.useRef(!0),I=b.useRef(p),x=Bn(()=>new Map),L=b.useRef(new Set),[Se,U]=b.useState(p),[O,J]=b.useState(p);ft(()=>{g.current=!1,I.current=p;for(let R=0;R<O.length;R++){const w=X(O[R]);m.includes(w)?(x.delete(w),L.current.delete(w)):x.get(w)!==!0&&x.set(w,!1)}},[O,m.length,m.join("-")]);const M=[];if(p!==Se){let R=[...p];for(let w=0;w<O.length;w++){const j=O[w],$e=X(j);m.includes($e)||(R.splice(w,0,j),M.push(j))}return a==="wait"&&M.length&&(R=M),J(Le(R)),U(p),null}const{forceRender:H}=b.useContext(gt);return v.jsx(v.Fragment,{children:O.map(R=>{const w=X(R),j=s&&!u?!1:p===O||m.includes(w),$e=()=>{if(L.current.has(w))return;if(x.has(w))L.current.add(w),x.set(w,!0);else return;let qe=!0;x.forEach(at=>{at||(qe=!1)}),qe&&(H?.(),J(I.current),s&&f?.(),o&&o())};return v.jsx(wt,{isPresent:j,initial:!g.current||r?void 0:!1,custom:e,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:j?void 0:$e,anchorX:c,anchorY:d,children:R},w)})})},_=Object.freeze({background:{key:"background",id:"backgrounds",name:"Backgrounds"},component:{key:"component",id:"components",name:"Components"},textEffect:{key:"textEffect",id:"text-effects",name:"Text Effects"},visualEffects:{key:"visualEffects",id:"visual-effects",name:"Visual Effects"}}),N=n=>({...n}),Ct=`import { useState, useRef, useEffect, useLayoutEffect, useMemo, useCallback } from "react";
import cn from "@/utils/cn";

export type NightSkyBackgroundProps = {
  density?: number; 
  spaceColor?: string;
  className?: string;
} & React.ComponentProps<"div">;

const random = (n:number = 1) => {
  return Math.random() * n;
};

const NightSkyBackground = (
  props: NightSkyBackgroundProps
) => {
  const {
    density = 1,
    spaceColor = "rgb(0, 0, 0)",
    className,
    ...rest
  } = props;

  const starsCount = useMemo(() => (
    Math.min(Math.max(100, 1000 * density), 10000)
  ), [density]);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafId = useRef<ReturnType<typeof requestAnimationFrame>>(null);

  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const { devicePixelRatio, canvasWidth, canvasHeight } = useMemo(() => {
    const devicePixelRatio = Math.max(1, globalThis.devicePixelRatio || 1);
    return {
      devicePixelRatio,
      canvasWidth: width * devicePixelRatio,
      canvasHeight: height * devicePixelRatio,
    };
  }, [width, height]);

  const ctx = useMemo(() => {
    return canvasRef.current?.getContext("2d");
  }, [canvasRef.current]);

  const stars = useMemo(() => {
    return Array.from({ 
      length: starsCount,
    }).map(() => ({
      x: random(width),
      y: random(height),
      radius: random(),
      color: (
        random() < 0.8 ? [255, 255, 255] :  (
          [
            Math.floor(random(255)),
            Math.floor(random(255)),
            Math.floor(random(255)),
          ]
        )
      ),
      twinkingRate: random() * 0.01,
      opacity: random(),
      shouldTwinkle: random() < 0.5,
    }))
  }, [starsCount, width, height]);

  const render = useCallback(() => {
    if (!ctx) return;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    ctx.fillStyle = spaceColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.save();
    for (const star of stars) {
      let starOpacity = star.opacity;
      if (star.shouldTwinkle) {
        star.opacity = (star.opacity + star.twinkingRate) % 100;
        starOpacity = Math.cos(star.opacity);
      }
      ctx.beginPath();
      ctx.ellipse(
        star.x, 
        star.y, 
        star.radius, 
        star.radius, 
        0, 
        0, 
        360, 
        false
      );
      ctx.closePath();
      ctx.fillStyle = \`rgba(\${[...star.color, starOpacity].join(", ")})\`;
      ctx.fill();
    }
    ctx.restore();
    rafId.current = requestAnimationFrame(render);
  }, [
    ctx,
    devicePixelRatio,
    width,
    height,
    canvasWidth,
    canvasHeight,
    stars,
  ]);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateContainerDimensions = () => {
      if (!containerRef.current) return;
      const {
        width, 
        height,
      } = containerRef.current.getBoundingClientRect();
      setWidth(width);
      setHeight(height);
    };
    const resizeObserver = new ResizeObserver(updateContainerDimensions);
    resizeObserver.observe(containerRef.current);
    updateContainerDimensions();
    setMounted(true);
    return () => {
      resizeObserver.disconnect();
    }
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;
    render();
    return () => {
      if (!rafId.current) return;
      cancelAnimationFrame(rafId.current);
    };
  }, [mounted, render]);

  return (
    <div
      {...rest}
      ref={containerRef}
      className={cn("absolute top-[0] left-[0] right-[0] bottom-[0] overflow-hidden", className)}
    >
      <canvas
        aria-hidden={true}
        width={canvasWidth}
        height={canvasHeight}
        ref={canvasRef}
      />
    </div>
  );
};

export default NightSkyBackground;`,zt=`import NightSkyBackground from "@/registry/backgrounds/night-sky-background/night-sky-background";

const NightSkyBackgroundPreview = () => {
  return (
    <div className="relative w-full h-full grid place-items-center">
      <NightSkyBackground density={2} />
      <HeroSection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="text-center relative z-[2] max-w-xl p-4">
      <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
        Stars Above You
      </h1>
      <p className="mx-auto mt-6 text-balance max-w-xl text-lg leading-6 text-zinc-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem dignissimos voluptatum molestias at reprehenderit odit, dolor aspernatur corrupti aperiam ipsa facere pariatur impedit.
      </p>
      <a 
        href="#"
        className="inline-block mt-6 rounded-full border px-6 py-3 font-medium backdrop-blur-md transition hover:shadow-lg border-white/15 bg-white/1 text-white hover:bg-white/10"
      >
        Get Component
      </a>
    </div>
  );
};

export default NightSkyBackgroundPreview;`,St={};let le=globalThis.process||{},He=le.argv||[],Y=le.env||{};!(Y.NO_COLOR||He.includes("--no-color"))&&(Y.FORCE_COLOR||He.includes("--color")||le.platform==="win32"||(le.stdout||{}).isTTY&&Y.TERM!=="dumb"||Y.CI);const Ln=Symbol.for("astro:html-string");class $t extends String{[Ln]=!0}const Hn=n=>Pt(n)?n:typeof n=="string"?new $t(n):n;function Pt(n){return!!n?.[Ln]}typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]"&&(typeof navigator<"u"&&navigator.userAgent);var Fe;(function(n){n[n.Include=0]="Include",n[n.None=1]="None"})(Fe||(Fe={}));var We;(function(n){n[n.Required=0]="Required",n[n.Ignore=1]="Ignore"})(We||(We={}));var Ve;(function(n){n[n.Include=0]="Include",n[n.None=1]="None"})(Ve||(Ve={}));var Ue;(function(n){n[n.Required=0]="Required",n[n.Ignore=1]="Ignore"})(Ue||(Ue={}));var Je;function h(n,e,r){function o(c,d){if(c._zod||Object.defineProperty(c,"_zod",{value:{def:d,constr:s,traits:new Set},enumerable:!1}),c._zod.traits.has(n))return;c._zod.traits.add(n),e(c,d);const l=s.prototype,u=Object.keys(l);for(let f=0;f<u.length;f++){const p=u[f];p in c||(c[p]=l[p].bind(c))}}const i=r?.Parent??Object;class a extends i{}Object.defineProperty(a,"name",{value:n});function s(c){var d;const l=r?.Parent?new a:this;o(l,c),(d=l._zod).deferred??(d.deferred=[]);for(const u of l._zod.deferred)u();return l}return Object.defineProperty(s,"init",{value:o}),Object.defineProperty(s,Symbol.hasInstance,{value:c=>r?.Parent&&c instanceof r.Parent?!0:c?._zod?.traits?.has(n)}),Object.defineProperty(s,"name",{value:n}),s}class Z extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class Fn extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}(Je=globalThis).__zod_globalConfig??(Je.__zod_globalConfig={});const Nt=globalThis.__zod_globalConfig;function E(n){return Nt}function Wn(n){const e=Object.values(n).filter(o=>typeof o=="number");return Object.entries(n).filter(([o,i])=>e.indexOf(+o)===-1).map(([o,i])=>i)}function Te(n,e){return typeof e=="bigint"?e.toString():e}function Re(n){return n==null}function Oe(n){const e=n.startsWith("^")?1:0,r=n.endsWith("$")?n.length-1:n.length;return n.slice(e,r)}const Xe=Symbol("evaluating");function y(n,e,r){let o;Object.defineProperty(n,e,{get(){if(o!==Xe)return o===void 0&&(o=Xe,o=r()),o},set(i){Object.defineProperty(n,e,{value:i})},configurable:!0})}function Tt(...n){const e={};for(const r of n){const o=Object.getOwnPropertyDescriptors(r);Object.assign(e,o)}return Object.defineProperties({},e)}const Vn="captureStackTrace"in Error?Error.captureStackTrace:(...n)=>{};function Ye(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function Ae(n){if(Ye(n)===!1)return!1;const e=n.constructor;if(e===void 0||typeof e!="function")return!0;const r=e.prototype;return!(Ye(r)===!1||Object.prototype.hasOwnProperty.call(r,"isPrototypeOf")===!1)}function Un(n){return Ae(n)?{...n}:Array.isArray(n)?[...n]:n instanceof Map?new Map(n):n instanceof Set?new Set(n):n}const At=new Set(["string","number","symbol"]);function It(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Mt(n,e,r){const o=new n._zod.constr(e??n._zod.def);return(!e||r?.parent)&&(o._zod.parent=n),o}function P(n){const e=n;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function q(n,e=0){if(n.aborted===!0)return!0;for(let r=e;r<n.issues.length;r++)if(n.issues[r]?.continue!==!0)return!0;return!1}function Rt(n,e=0){if(n.aborted===!0)return!0;for(let r=e;r<n.issues.length;r++)if(n.issues[r]?.continue===!1)return!0;return!1}function Ot(n,e){return e.map(r=>{var o;return(o=r).path??(o.path=[]),r.path.unshift(n),r})}function G(n){return typeof n=="string"?n:n?.message}function D(n,e,r){const o=n.message?n.message:G(n.inst?._zod.def?.error?.(n))??G(e?.error?.(n))??G(r.customError?.(n))??G(r.localeError?.(n))??"Invalid input",{inst:i,continue:a,input:s,...c}=n;return c.path??(c.path=[]),c.message=o,e?.reportInput&&(c.input=s),c}function Ee(n){return Array.isArray(n)?"array":typeof n=="string"?"string":"unknown"}function V(...n){const[e,r,o]=n;return typeof e=="string"?{message:e,code:"custom",input:r,inst:o}:{...e}}const Jn=(n,e)=>{n.name="$ZodError",Object.defineProperty(n,"_zod",{value:n._zod,enumerable:!1}),Object.defineProperty(n,"issues",{value:e,enumerable:!1}),n.message=JSON.stringify(e,Te,2),Object.defineProperty(n,"toString",{value:()=>n.message,enumerable:!1})},Xn=h("$ZodError",Jn),Yn=h("$ZodError",Jn,{Parent:Error});function Et(n,e=r=>r.message){const r={},o=[];for(const i of n.issues)i.path.length>0?(r[i.path[0]]=r[i.path[0]]||[],r[i.path[0]].push(e(i))):o.push(e(i));return{formErrors:o,fieldErrors:r}}function Dt(n,e=r=>r.message){const r={_errors:[]},o=(i,a=[])=>{for(const s of i.issues)if(s.code==="invalid_union"&&s.errors.length)s.errors.map(c=>o({issues:c},[...a,...s.path]));else if(s.code==="invalid_key")o({issues:s.issues},[...a,...s.path]);else if(s.code==="invalid_element")o({issues:s.issues},[...a,...s.path]);else{const c=[...a,...s.path];if(c.length===0)r._errors.push(e(s));else{let d=r,l=0;for(;l<c.length;){const u=c[l];l===c.length-1?(d[u]=d[u]||{_errors:[]},d[u]._errors.push(e(s))):d[u]=d[u]||{_errors:[]},d=d[u],l++}}}};return o(n),r}const De=n=>(e,r,o,i)=>{const a=o?{...o,async:!1}:{async:!1},s=e._zod.run({value:r,issues:[]},a);if(s instanceof Promise)throw new Z;if(s.issues.length){const c=new(i?.Err??n)(s.issues.map(d=>D(d,a,E())));throw Vn(c,i?.callee),c}return s.value},je=n=>async(e,r,o,i)=>{const a=o?{...o,async:!0}:{async:!0};let s=e._zod.run({value:r,issues:[]},a);if(s instanceof Promise&&(s=await s),s.issues.length){const c=new(i?.Err??n)(s.issues.map(d=>D(d,a,E())));throw Vn(c,i?.callee),c}return s.value},he=n=>(e,r,o)=>{const i=o?{...o,async:!1}:{async:!1},a=e._zod.run({value:r,issues:[]},i);if(a instanceof Promise)throw new Z;return a.issues.length?{success:!1,error:new(n??Xn)(a.issues.map(s=>D(s,i,E())))}:{success:!0,data:a.value}},jt=he(Yn),pe=n=>async(e,r,o)=>{const i=o?{...o,async:!0}:{async:!0};let a=e._zod.run({value:r,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?{success:!1,error:new n(a.issues.map(s=>D(s,i,E())))}:{success:!0,data:a.value}},qt=pe(Yn),Zt=n=>(e,r,o)=>{const i=o?{...o,direction:"backward"}:{direction:"backward"};return De(n)(e,r,i)},Bt=n=>(e,r,o)=>De(n)(e,r,o),Lt=n=>async(e,r,o)=>{const i=o?{...o,direction:"backward"}:{direction:"backward"};return je(n)(e,r,i)},Ht=n=>async(e,r,o)=>je(n)(e,r,o),Ft=n=>(e,r,o)=>{const i=o?{...o,direction:"backward"}:{direction:"backward"};return he(n)(e,r,i)},Wt=n=>(e,r,o)=>he(n)(e,r,o),Vt=n=>async(e,r,o)=>{const i=o?{...o,direction:"backward"}:{direction:"backward"};return pe(n)(e,r,i)},Ut=n=>async(e,r,o)=>pe(n)(e,r,o),B=h("$ZodCheck",(n,e)=>{var r;n._zod??(n._zod={}),n._zod.def=e,(r=n._zod).onattach??(r.onattach=[])}),Jt=h("$ZodCheckMaxLength",(n,e)=>{var r;B.init(n,e),(r=n._zod.def).when??(r.when=o=>{const i=o.value;return!Re(i)&&i.length!==void 0}),n._zod.onattach.push(o=>{const i=o._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<i&&(o._zod.bag.maximum=e.maximum)}),n._zod.check=o=>{const i=o.value;if(i.length<=e.maximum)return;const s=Ee(i);o.issues.push({origin:s,code:"too_big",maximum:e.maximum,inclusive:!0,input:i,inst:n,continue:!e.abort})}}),Xt=h("$ZodCheckMinLength",(n,e)=>{var r;B.init(n,e),(r=n._zod.def).when??(r.when=o=>{const i=o.value;return!Re(i)&&i.length!==void 0}),n._zod.onattach.push(o=>{const i=o._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>i&&(o._zod.bag.minimum=e.minimum)}),n._zod.check=o=>{const i=o.value;if(i.length>=e.minimum)return;const s=Ee(i);o.issues.push({origin:s,code:"too_small",minimum:e.minimum,inclusive:!0,input:i,inst:n,continue:!e.abort})}}),Yt=h("$ZodCheckLengthEquals",(n,e)=>{var r;B.init(n,e),(r=n._zod.def).when??(r.when=o=>{const i=o.value;return!Re(i)&&i.length!==void 0}),n._zod.onattach.push(o=>{const i=o._zod.bag;i.minimum=e.length,i.maximum=e.length,i.length=e.length}),n._zod.check=o=>{const i=o.value,a=i.length;if(a===e.length)return;const s=Ee(i),c=a>e.length;o.issues.push({origin:s,...c?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:o.value,inst:n,continue:!e.abort})}}),Gt=h("$ZodCheckOverwrite",(n,e)=>{B.init(n,e),n._zod.check=r=>{r.value=e.tx(r.value)}}),Kt={major:4,minor:4,patch:3},S=h("$ZodType",(n,e)=>{var r;n??(n={}),n._zod.def=e,n._zod.bag=n._zod.bag||{},n._zod.version=Kt;const o=[...n._zod.def.checks??[]];n._zod.traits.has("$ZodCheck")&&o.unshift(n);for(const i of o)for(const a of i._zod.onattach)a(n);if(o.length===0)(r=n._zod).deferred??(r.deferred=[]),n._zod.deferred?.push(()=>{n._zod.run=n._zod.parse});else{const i=(s,c,d)=>{let l=q(s),u;for(const f of c){if(f._zod.def.when){if(Rt(s)||!f._zod.def.when(s))continue}else if(l)continue;const p=s.issues.length,m=f._zod.check(s);if(m instanceof Promise&&d?.async===!1)throw new Z;if(u||m instanceof Promise)u=(u??Promise.resolve()).then(async()=>{await m,s.issues.length!==p&&(l||(l=q(s,p)))});else{if(s.issues.length===p)continue;l||(l=q(s,p))}}return u?u.then(()=>s):s},a=(s,c,d)=>{if(q(s))return s.aborted=!0,s;const l=i(c,o,d);if(l instanceof Promise){if(d.async===!1)throw new Z;return l.then(u=>n._zod.parse(u,d))}return n._zod.parse(l,d)};n._zod.run=(s,c)=>{if(c.skipChecks)return n._zod.parse(s,c);if(c.direction==="backward"){const l=n._zod.parse({value:s.value,issues:[]},{...c,skipChecks:!0});return l instanceof Promise?l.then(u=>a(u,s,c)):a(l,s,c)}const d=n._zod.parse(s,c);if(d instanceof Promise){if(c.async===!1)throw new Z;return d.then(l=>i(l,o,c))}return i(d,o,c)}}y(n,"~standard",()=>({validate:i=>{try{const a=jt(n,i);return a.success?{value:a.data}:{issues:a.error?.issues}}catch{return qt(n,i).then(s=>s.success?{value:s.data}:{issues:s.error?.issues})}},vendor:"zod",version:1}))});function Ge(n,e,r){n.issues.length&&e.issues.push(...Ot(r,n.issues)),e.value[r]=n.value}const Qt=h("$ZodArray",(n,e)=>{S.init(n,e),n._zod.parse=(r,o)=>{const i=r.value;if(!Array.isArray(i))return r.issues.push({expected:"array",code:"invalid_type",input:i,inst:n}),r;r.value=Array(i.length);const a=[];for(let s=0;s<i.length;s++){const c=i[s],d=e.element._zod.run({value:c,issues:[]},o);d instanceof Promise?a.push(d.then(l=>Ge(l,r,s))):Ge(d,r,s)}return a.length?Promise.all(a).then(()=>r):r}});function Ke(n,e,r,o){for(const a of n)if(a.issues.length===0)return e.value=a.value,e;const i=n.filter(a=>!q(a));return i.length===1?(e.value=i[0].value,i[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:r,errors:n.map(a=>a.issues.map(s=>D(s,o,E())))}),e)}const er=h("$ZodUnion",(n,e)=>{S.init(n,e),y(n._zod,"optin",()=>e.options.some(o=>o._zod.optin==="optional")?"optional":void 0),y(n._zod,"optout",()=>e.options.some(o=>o._zod.optout==="optional")?"optional":void 0),y(n._zod,"values",()=>{if(e.options.every(o=>o._zod.values))return new Set(e.options.flatMap(o=>Array.from(o._zod.values)))}),y(n._zod,"pattern",()=>{if(e.options.every(o=>o._zod.pattern)){const o=e.options.map(i=>i._zod.pattern);return new RegExp(`^(${o.map(i=>Oe(i.source)).join("|")})$`)}});const r=e.options.length===1?e.options[0]._zod.run:null;n._zod.parse=(o,i)=>{if(r)return r(o,i);let a=!1;const s=[];for(const c of e.options){const d=c._zod.run({value:o.value,issues:[]},i);if(d instanceof Promise)s.push(d),a=!0;else{if(d.issues.length===0)return d;s.push(d)}}return a?Promise.all(s).then(c=>Ke(c,o,n,i)):Ke(s,o,n,i)}}),nr=h("$ZodIntersection",(n,e)=>{S.init(n,e),n._zod.parse=(r,o)=>{const i=r.value,a=e.left._zod.run({value:i,issues:[]},o),s=e.right._zod.run({value:i,issues:[]},o);return a instanceof Promise||s instanceof Promise?Promise.all([a,s]).then(([d,l])=>Qe(r,d,l)):Qe(r,a,s)}});function Ie(n,e){if(n===e)return{valid:!0,data:n};if(n instanceof Date&&e instanceof Date&&+n==+e)return{valid:!0,data:n};if(Ae(n)&&Ae(e)){const r=Object.keys(e),o=Object.keys(n).filter(a=>r.indexOf(a)!==-1),i={...n,...e};for(const a of o){const s=Ie(n[a],e[a]);if(!s.valid)return{valid:!1,mergeErrorPath:[a,...s.mergeErrorPath]};i[a]=s.data}return{valid:!0,data:i}}if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return{valid:!1,mergeErrorPath:[]};const r=[];for(let o=0;o<n.length;o++){const i=n[o],a=e[o],s=Ie(i,a);if(!s.valid)return{valid:!1,mergeErrorPath:[o,...s.mergeErrorPath]};r.push(s.data)}return{valid:!0,data:r}}return{valid:!1,mergeErrorPath:[]}}function Qe(n,e,r){const o=new Map;let i;for(const c of e.issues)if(c.code==="unrecognized_keys"){i??(i=c);for(const d of c.keys)o.has(d)||o.set(d,{}),o.get(d).l=!0}else n.issues.push(c);for(const c of r.issues)if(c.code==="unrecognized_keys")for(const d of c.keys)o.has(d)||o.set(d,{}),o.get(d).r=!0;else n.issues.push(c);const a=[...o].filter(([,c])=>c.l&&c.r).map(([c])=>c);if(a.length&&i&&n.issues.push({...i,keys:a}),q(n))return n;const s=Ie(e.value,r.value);if(!s.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);return n.value=s.data,n}const tr=h("$ZodEnum",(n,e)=>{S.init(n,e);const r=Wn(e.entries),o=new Set(r);n._zod.values=o,n._zod.pattern=new RegExp(`^(${r.filter(i=>At.has(typeof i)).map(i=>typeof i=="string"?It(i):i.toString()).join("|")})$`),n._zod.parse=(i,a)=>{const s=i.value;return o.has(s)||i.issues.push({code:"invalid_value",values:r,input:s,inst:n}),i}}),rr=h("$ZodTransform",(n,e)=>{S.init(n,e),n._zod.optin="optional",n._zod.parse=(r,o)=>{if(o.direction==="backward")throw new Fn(n.constructor.name);const i=e.transform(r.value,r);if(o.async)return(i instanceof Promise?i:Promise.resolve(i)).then(s=>(r.value=s,r.fallback=!0,r));if(i instanceof Promise)throw new Z;return r.value=i,r.fallback=!0,r}});function en(n,e){return e===void 0&&(n.issues.length||n.fallback)?{issues:[],value:void 0}:n}const Gn=h("$ZodOptional",(n,e)=>{S.init(n,e),n._zod.optin="optional",n._zod.optout="optional",y(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),y(n._zod,"pattern",()=>{const r=e.innerType._zod.pattern;return r?new RegExp(`^(${Oe(r.source)})?$`):void 0}),n._zod.parse=(r,o)=>{if(e.innerType._zod.optin==="optional"){const i=r.value,a=e.innerType._zod.run(r,o);return a instanceof Promise?a.then(s=>en(s,i)):en(a,i)}return r.value===void 0?r:e.innerType._zod.run(r,o)}}),or=h("$ZodExactOptional",(n,e)=>{Gn.init(n,e),y(n._zod,"values",()=>e.innerType._zod.values),y(n._zod,"pattern",()=>e.innerType._zod.pattern),n._zod.parse=(r,o)=>e.innerType._zod.run(r,o)}),ir=h("$ZodNullable",(n,e)=>{S.init(n,e),y(n._zod,"optin",()=>e.innerType._zod.optin),y(n._zod,"optout",()=>e.innerType._zod.optout),y(n._zod,"pattern",()=>{const r=e.innerType._zod.pattern;return r?new RegExp(`^(${Oe(r.source)}|null)$`):void 0}),y(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),n._zod.parse=(r,o)=>r.value===null?r:e.innerType._zod.run(r,o)}),sr=h("$ZodDefault",(n,e)=>{S.init(n,e),n._zod.optin="optional",y(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(r,o)=>{if(o.direction==="backward")return e.innerType._zod.run(r,o);if(r.value===void 0)return r.value=e.defaultValue,r;const i=e.innerType._zod.run(r,o);return i instanceof Promise?i.then(a=>nn(a,e)):nn(i,e)}});function nn(n,e){return n.value===void 0&&(n.value=e.defaultValue),n}const ar=h("$ZodPrefault",(n,e)=>{S.init(n,e),n._zod.optin="optional",y(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(r,o)=>(o.direction==="backward"||r.value===void 0&&(r.value=e.defaultValue),e.innerType._zod.run(r,o))}),cr=h("$ZodNonOptional",(n,e)=>{S.init(n,e),y(n._zod,"values",()=>{const r=e.innerType._zod.values;return r?new Set([...r].filter(o=>o!==void 0)):void 0}),n._zod.parse=(r,o)=>{const i=e.innerType._zod.run(r,o);return i instanceof Promise?i.then(a=>tn(a,n)):tn(i,n)}});function tn(n,e){return!n.issues.length&&n.value===void 0&&n.issues.push({code:"invalid_type",expected:"nonoptional",input:n.value,inst:e}),n}const dr=h("$ZodCatch",(n,e)=>{S.init(n,e),n._zod.optin="optional",y(n._zod,"optout",()=>e.innerType._zod.optout),y(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(r,o)=>{if(o.direction==="backward")return e.innerType._zod.run(r,o);const i=e.innerType._zod.run(r,o);return i instanceof Promise?i.then(a=>(r.value=a.value,a.issues.length&&(r.value=e.catchValue({...r,error:{issues:a.issues.map(s=>D(s,o,E()))},input:r.value}),r.issues=[],r.fallback=!0),r)):(r.value=i.value,i.issues.length&&(r.value=e.catchValue({...r,error:{issues:i.issues.map(a=>D(a,o,E()))},input:r.value}),r.issues=[],r.fallback=!0),r)}}),lr=h("$ZodPipe",(n,e)=>{S.init(n,e),y(n._zod,"values",()=>e.in._zod.values),y(n._zod,"optin",()=>e.in._zod.optin),y(n._zod,"optout",()=>e.out._zod.optout),y(n._zod,"propValues",()=>e.in._zod.propValues),n._zod.parse=(r,o)=>{if(o.direction==="backward"){const a=e.out._zod.run(r,o);return a instanceof Promise?a.then(s=>K(s,e.in,o)):K(a,e.in,o)}const i=e.in._zod.run(r,o);return i instanceof Promise?i.then(a=>K(a,e.out,o)):K(i,e.out,o)}});function K(n,e,r){return n.issues.length?(n.aborted=!0,n):e._zod.run({value:n.value,issues:n.issues,fallback:n.fallback},r)}const ur=h("$ZodReadonly",(n,e)=>{S.init(n,e),y(n._zod,"propValues",()=>e.innerType._zod.propValues),y(n._zod,"values",()=>e.innerType._zod.values),y(n._zod,"optin",()=>e.innerType?._zod?.optin),y(n._zod,"optout",()=>e.innerType?._zod?.optout),n._zod.parse=(r,o)=>{if(o.direction==="backward")return e.innerType._zod.run(r,o);const i=e.innerType._zod.run(r,o);return i instanceof Promise?i.then(rn):rn(i)}});function rn(n){return n.value=Object.freeze(n.value),n}const hr=h("$ZodCustom",(n,e)=>{B.init(n,e),S.init(n,e),n._zod.parse=(r,o)=>r,n._zod.check=r=>{const o=r.value,i=e.fn(o);if(i instanceof Promise)return i.then(a=>on(a,r,o,n));on(i,r,o,n)}});function on(n,e,r,o){if(!n){const i={code:"custom",input:r,inst:o,path:[...o._zod.def.path??[]],continue:!o._zod.def.abort};o._zod.def.params&&(i.params=o._zod.def.params),e.issues.push(V(i))}}var sn;class pr{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...r){const o=r[0];return this._map.set(e,o),o&&typeof o=="object"&&"id"in o&&this._idmap.set(o.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const r=this._map.get(e);return r&&typeof r=="object"&&"id"in r&&this._idmap.delete(r.id),this._map.delete(e),this}get(e){const r=e._zod.parent;if(r){const o={...this.get(r)??{}};delete o.id;const i={...o,...this._map.get(e)};return Object.keys(i).length?i:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function mr(){return new pr}(sn=globalThis).__zod_globalRegistry??(sn.__zod_globalRegistry=mr());const W=globalThis.__zod_globalRegistry;function fr(n,e){return new Jt({check:"max_length",...P(e),maximum:n})}function an(n,e){return new Xt({check:"min_length",...P(e),minimum:n})}function gr(n,e){return new Yt({check:"length_equals",...P(e),length:n})}function yr(n){return new Gt({check:"overwrite",tx:n})}function br(n,e,r){return new n({type:"array",element:e,...P(r)})}function xr(n,e,r){const o=P(r);return o.abort??(o.abort=!0),new n({type:"custom",check:"custom",fn:e,...o})}function vr(n,e,r){return new n({type:"custom",check:"custom",fn:e,...P(r)})}function wr(n,e){const r=_r(o=>(o.addIssue=i=>{if(typeof i=="string")o.issues.push(V(i,o.value,r._zod.def));else{const a=i;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),a.input??(a.input=o.value),a.inst??(a.inst=r),a.continue??(a.continue=!r._zod.def.abort),o.issues.push(V(a))}},n(o.value,o)),e);return r}function _r(n,e){const r=new B({check:"custom",...P(e)});return r._zod.check=n,r}function Kn(n){let e=n?.target??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:n.processors??{},metadataRegistry:n?.metadata??W,target:e,unrepresentable:n?.unrepresentable??"throw",override:n?.override??(()=>{}),io:n?.io??"output",counter:0,seen:new Map,cycles:n?.cycles??"ref",reused:n?.reused??"inline",external:n?.external??void 0}}function z(n,e,r={path:[],schemaPath:[]}){var o;const i=n._zod.def,a=e.seen.get(n);if(a)return a.count++,r.schemaPath.includes(n)&&(a.cycle=r.path),a.schema;const s={schema:{},count:1,cycle:void 0,path:r.path};e.seen.set(n,s);const c=n._zod.toJSONSchema?.();if(c)s.schema=c;else{const u={...r,schemaPath:[...r.schemaPath,n],path:r.path};if(n._zod.processJSONSchema)n._zod.processJSONSchema(e,s.schema,u);else{const p=s.schema,m=e.processors[i.type];if(!m)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);m(n,e,p,u)}const f=n._zod.parent;f&&(s.ref||(s.ref=f),z(f,e,u),e.seen.get(f).isParent=!0)}const d=e.metadataRegistry.get(n);return d&&Object.assign(s.schema,d),e.io==="input"&&C(n)&&(delete s.schema.examples,delete s.schema.default),e.io==="input"&&"_prefault"in s.schema&&((o=s.schema).default??(o.default=s.schema._prefault)),delete s.schema._prefault,e.seen.get(n).schema}function Qn(n,e){const r=n.seen.get(e);if(!r)throw new Error("Unprocessed schema. This is a bug in Zod.");const o=new Map;for(const s of n.seen.entries()){const c=n.metadataRegistry.get(s[0])?.id;if(c){const d=o.get(c);if(d&&d!==s[0])throw new Error(`Duplicate schema id "${c}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);o.set(c,s[0])}}const i=s=>{const c=n.target==="draft-2020-12"?"$defs":"definitions";if(n.external){const f=n.external.registry.get(s[0])?.id,p=n.external.uri??(g=>g);if(f)return{ref:p(f)};const m=s[1].defId??s[1].schema.id??`schema${n.counter++}`;return s[1].defId=m,{defId:m,ref:`${p("__shared")}#/${c}/${m}`}}if(s[1]===r)return{ref:"#"};const l=`#/${c}/`,u=s[1].schema.id??`__schema${n.counter++}`;return{defId:u,ref:l+u}},a=s=>{if(s[1].schema.$ref)return;const c=s[1],{ref:d,defId:l}=i(s);c.def={...c.schema},l&&(c.defId=l);const u=c.schema;for(const f in u)delete u[f];u.$ref=d};if(n.cycles==="throw")for(const s of n.seen.entries()){const c=s[1];if(c.cycle)throw new Error(`Cycle detected: #/${c.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const s of n.seen.entries()){const c=s[1];if(e===s[0]){a(s);continue}if(n.external){const l=n.external.registry.get(s[0])?.id;if(e!==s[0]&&l){a(s);continue}}if(n.metadataRegistry.get(s[0])?.id){a(s);continue}if(c.cycle){a(s);continue}if(c.count>1&&n.reused==="ref"){a(s);continue}}}function et(n,e){const r=n.seen.get(e);if(!r)throw new Error("Unprocessed schema. This is a bug in Zod.");const o=c=>{const d=n.seen.get(c);if(d.ref===null)return;const l=d.def??d.schema,u={...l},f=d.ref;if(d.ref=null,f){o(f);const m=n.seen.get(f),g=m.schema;if(g.$ref&&(n.target==="draft-07"||n.target==="draft-04"||n.target==="openapi-3.0")?(l.allOf=l.allOf??[],l.allOf.push(g)):Object.assign(l,g),Object.assign(l,u),c._zod.parent===f)for(const x in l)x==="$ref"||x==="allOf"||x in u||delete l[x];if(g.$ref&&m.def)for(const x in l)x==="$ref"||x==="allOf"||x in m.def&&JSON.stringify(l[x])===JSON.stringify(m.def[x])&&delete l[x]}const p=c._zod.parent;if(p&&p!==f){o(p);const m=n.seen.get(p);if(m?.schema.$ref&&(l.$ref=m.schema.$ref,m.def))for(const g in l)g==="$ref"||g==="allOf"||g in m.def&&JSON.stringify(l[g])===JSON.stringify(m.def[g])&&delete l[g]}n.override({zodSchema:c,jsonSchema:l,path:d.path??[]})};for(const c of[...n.seen.entries()].reverse())o(c[0]);const i={};if(n.target==="draft-2020-12"?i.$schema="https://json-schema.org/draft/2020-12/schema":n.target==="draft-07"?i.$schema="http://json-schema.org/draft-07/schema#":n.target==="draft-04"?i.$schema="http://json-schema.org/draft-04/schema#":n.target,n.external?.uri){const c=n.external.registry.get(e)?.id;if(!c)throw new Error("Schema is missing an `id` property");i.$id=n.external.uri(c)}Object.assign(i,r.def??r.schema);const a=n.metadataRegistry.get(e)?.id;a!==void 0&&i.id===a&&delete i.id;const s=n.external?.defs??{};for(const c of n.seen.entries()){const d=c[1];d.def&&d.defId&&(d.def.id===d.defId&&delete d.def.id,s[d.defId]=d.def)}n.external||Object.keys(s).length>0&&(n.target==="draft-2020-12"?i.$defs=s:i.definitions=s);try{const c=JSON.parse(JSON.stringify(i));return Object.defineProperty(c,"~standard",{value:{...e["~standard"],jsonSchema:{input:ue(e,"input",n.processors),output:ue(e,"output",n.processors)}},enumerable:!1,writable:!1}),c}catch{throw new Error("Error converting schema to JSON.")}}function C(n,e){const r=e??{seen:new Set};if(r.seen.has(n))return!1;r.seen.add(n);const o=n._zod.def;if(o.type==="transform")return!0;if(o.type==="array")return C(o.element,r);if(o.type==="set")return C(o.valueType,r);if(o.type==="lazy")return C(o.getter(),r);if(o.type==="promise"||o.type==="optional"||o.type==="nonoptional"||o.type==="nullable"||o.type==="readonly"||o.type==="default"||o.type==="prefault")return C(o.innerType,r);if(o.type==="intersection")return C(o.left,r)||C(o.right,r);if(o.type==="record"||o.type==="map")return C(o.keyType,r)||C(o.valueType,r);if(o.type==="pipe")return n._zod.traits.has("$ZodCodec")?!0:C(o.in,r)||C(o.out,r);if(o.type==="object"){for(const i in o.shape)if(C(o.shape[i],r))return!0;return!1}if(o.type==="union"){for(const i of o.options)if(C(i,r))return!0;return!1}if(o.type==="tuple"){for(const i of o.items)if(C(i,r))return!0;return!!(o.rest&&C(o.rest,r))}return!1}const kr=(n,e={})=>r=>{const o=Kn({...r,processors:e});return z(n,o),Qn(o,n),et(o,n)},ue=(n,e,r={})=>o=>{const{libraryOptions:i,target:a}=o??{},s=Kn({...i??{},target:a,io:e,processors:r});return z(n,s),Qn(s,n),et(s,n)},Cr=(n,e,r,o)=>{const i=n._zod.def,a=Wn(i.entries);a.every(s=>typeof s=="number")&&(r.type="number"),a.every(s=>typeof s=="string")&&(r.type="string"),r.enum=a},zr=(n,e,r,o)=>{if(e.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},Sr=(n,e,r,o)=>{if(e.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},$r=(n,e,r,o)=>{const i=r,a=n._zod.def,{minimum:s,maximum:c}=n._zod.bag;typeof s=="number"&&(i.minItems=s),typeof c=="number"&&(i.maxItems=c),i.type="array",i.items=z(a.element,e,{...o,path:[...o.path,"items"]})},Pr=(n,e,r,o)=>{const i=n._zod.def,a=i.inclusive===!1,s=i.options.map((c,d)=>z(c,e,{...o,path:[...o.path,a?"oneOf":"anyOf",d]}));a?r.oneOf=s:r.anyOf=s},Nr=(n,e,r,o)=>{const i=n._zod.def,a=z(i.left,e,{...o,path:[...o.path,"allOf",0]}),s=z(i.right,e,{...o,path:[...o.path,"allOf",1]}),c=l=>"allOf"in l&&Object.keys(l).length===1,d=[...c(a)?a.allOf:[a],...c(s)?s.allOf:[s]];r.allOf=d},Tr=(n,e,r,o)=>{const i=n._zod.def,a=z(i.innerType,e,o),s=e.seen.get(n);e.target==="openapi-3.0"?(s.ref=i.innerType,r.nullable=!0):r.anyOf=[a,{type:"null"}]},Ar=(n,e,r,o)=>{const i=n._zod.def;z(i.innerType,e,o);const a=e.seen.get(n);a.ref=i.innerType},Ir=(n,e,r,o)=>{const i=n._zod.def;z(i.innerType,e,o);const a=e.seen.get(n);a.ref=i.innerType,r.default=JSON.parse(JSON.stringify(i.defaultValue))},Mr=(n,e,r,o)=>{const i=n._zod.def;z(i.innerType,e,o);const a=e.seen.get(n);a.ref=i.innerType,e.io==="input"&&(r._prefault=JSON.parse(JSON.stringify(i.defaultValue)))},Rr=(n,e,r,o)=>{const i=n._zod.def;z(i.innerType,e,o);const a=e.seen.get(n);a.ref=i.innerType;let s;try{s=i.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}r.default=s},Or=(n,e,r,o)=>{const i=n._zod.def,a=i.in._zod.traits.has("$ZodTransform"),s=e.io==="input"?a?i.out:i.in:i.out;z(s,e,o);const c=e.seen.get(n);c.ref=s},Er=(n,e,r,o)=>{const i=n._zod.def;z(i.innerType,e,o);const a=e.seen.get(n);a.ref=i.innerType,r.readOnly=!0},nt=(n,e,r,o)=>{const i=n._zod.def;z(i.innerType,e,o);const a=e.seen.get(n);a.ref=i.innerType},Dr=(n,e)=>{Xn.init(n,e),n.name="ZodError",Object.defineProperties(n,{format:{value:r=>Dt(n,r)},flatten:{value:r=>Et(n,r)},addIssue:{value:r=>{n.issues.push(r),n.message=JSON.stringify(n.issues,Te,2)}},addIssues:{value:r=>{n.issues.push(...r),n.message=JSON.stringify(n.issues,Te,2)}},isEmpty:{get(){return n.issues.length===0}}})},T=h("ZodError",Dr,{Parent:Error}),jr=De(T),qr=je(T),Zr=he(T),Br=pe(T),Lr=Zt(T),Hr=Bt(T),Fr=Lt(T),Wr=Ht(T),Vr=Ft(T),Ur=Wt(T),Jr=Vt(T),Xr=Ut(T),cn=new WeakMap;function tt(n,e,r){const o=Object.getPrototypeOf(n);let i=cn.get(o);if(i||(i=new Set,cn.set(o,i)),!i.has(e)){i.add(e);for(const a in r){const s=r[a];Object.defineProperty(o,a,{configurable:!0,enumerable:!1,get(){const c=s.bind(this);return Object.defineProperty(this,a,{configurable:!0,writable:!0,enumerable:!0,value:c}),c},set(c){Object.defineProperty(this,a,{configurable:!0,writable:!0,enumerable:!0,value:c})}})}}}const $=h("ZodType",(n,e)=>(S.init(n,e),Object.assign(n["~standard"],{jsonSchema:{input:ue(n,"input"),output:ue(n,"output")}}),n.toJSONSchema=kr(n,{}),n.def=e,n.type=e.type,Object.defineProperty(n,"_def",{value:e}),n.parse=(r,o)=>jr(n,r,o,{callee:n.parse}),n.safeParse=(r,o)=>Zr(n,r,o),n.parseAsync=async(r,o)=>qr(n,r,o,{callee:n.parseAsync}),n.safeParseAsync=async(r,o)=>Br(n,r,o),n.spa=n.safeParseAsync,n.encode=(r,o)=>Lr(n,r,o),n.decode=(r,o)=>Hr(n,r,o),n.encodeAsync=async(r,o)=>Fr(n,r,o),n.decodeAsync=async(r,o)=>Wr(n,r,o),n.safeEncode=(r,o)=>Vr(n,r,o),n.safeDecode=(r,o)=>Ur(n,r,o),n.safeEncodeAsync=async(r,o)=>Jr(n,r,o),n.safeDecodeAsync=async(r,o)=>Xr(n,r,o),tt(n,"ZodType",{check(...r){const o=this.def;return this.clone(Tt(o,{checks:[...o.checks??[],...r.map(i=>typeof i=="function"?{_zod:{check:i,def:{check:"custom"},onattach:[]}}:i)]}),{parent:!0})},with(...r){return this.check(...r)},clone(r,o){return Mt(this,r,o)},brand(){return this},register(r,o){return r.add(this,o),this},refine(r,o){return this.check(_o(r,o))},superRefine(r,o){return this.check(ko(r,o))},overwrite(r){return this.check(yr(r))},optional(){return dn(this)},exactOptional(){return ao(this)},nullable(){return ln(this)},nullish(){return dn(ln(this))},nonoptional(r){return fo(this,r)},array(){return Gr(this)},or(r){return Qr([this,r])},and(r){return no(this,r)},transform(r){return un(this,oo(r))},default(r){return uo(this,r)},prefault(r){return po(this,r)},catch(r){return yo(this,r)},pipe(r){return un(this,r)},readonly(){return vo(this)},describe(r){const o=this.clone();return W.add(o,{description:r}),o},meta(...r){if(r.length===0)return W.get(this);const o=this.clone();return W.add(o,r[0]),o},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(r){return r(this)}}),Object.defineProperty(n,"description",{get(){return W.get(n)?.description},configurable:!0}),n)),Yr=h("ZodArray",(n,e)=>{Qt.init(n,e),$.init(n,e),n._zod.processJSONSchema=(r,o,i)=>$r(n,r,o,i),n.element=e.element,tt(n,"ZodArray",{min(r,o){return this.check(an(r,o))},nonempty(r){return this.check(an(1,r))},max(r,o){return this.check(fr(r,o))},length(r,o){return this.check(gr(r,o))},unwrap(){return this.element}})});function Gr(n,e){return br(Yr,n,e)}const Kr=h("ZodUnion",(n,e)=>{er.init(n,e),$.init(n,e),n._zod.processJSONSchema=(r,o,i)=>Pr(n,r,o,i),n.options=e.options});function Qr(n,e){return new Kr({type:"union",options:n,...P(e)})}const eo=h("ZodIntersection",(n,e)=>{nr.init(n,e),$.init(n,e),n._zod.processJSONSchema=(r,o,i)=>Nr(n,r,o,i)});function no(n,e){return new eo({type:"intersection",left:n,right:e})}const Me=h("ZodEnum",(n,e)=>{tr.init(n,e),$.init(n,e),n._zod.processJSONSchema=(o,i,a)=>Cr(n,o,i),n.enum=e.entries,n.options=Object.values(e.entries);const r=new Set(Object.keys(e.entries));n.extract=(o,i)=>{const a={};for(const s of o)if(r.has(s))a[s]=e.entries[s];else throw new Error(`Key ${s} not found in enum`);return new Me({...e,checks:[],...P(i),entries:a})},n.exclude=(o,i)=>{const a={...e.entries};for(const s of o)if(r.has(s))delete a[s];else throw new Error(`Key ${s} not found in enum`);return new Me({...e,checks:[],...P(i),entries:a})}});function to(n,e){const r=Array.isArray(n)?Object.fromEntries(n.map(o=>[o,o])):n;return new Me({type:"enum",entries:r,...P(e)})}const ro=h("ZodTransform",(n,e)=>{rr.init(n,e),$.init(n,e),n._zod.processJSONSchema=(r,o,i)=>Sr(n,r),n._zod.parse=(r,o)=>{if(o.direction==="backward")throw new Fn(n.constructor.name);r.addIssue=a=>{if(typeof a=="string")r.issues.push(V(a,r.value,e));else{const s=a;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),s.input??(s.input=r.value),s.inst??(s.inst=n),r.issues.push(V(s))}};const i=e.transform(r.value,r);return i instanceof Promise?i.then(a=>(r.value=a,r.fallback=!0,r)):(r.value=i,r.fallback=!0,r)}});function oo(n){return new ro({type:"transform",transform:n})}const io=h("ZodOptional",(n,e)=>{Gn.init(n,e),$.init(n,e),n._zod.processJSONSchema=(r,o,i)=>nt(n,r,o,i),n.unwrap=()=>n._zod.def.innerType});function dn(n){return new io({type:"optional",innerType:n})}const so=h("ZodExactOptional",(n,e)=>{or.init(n,e),$.init(n,e),n._zod.processJSONSchema=(r,o,i)=>nt(n,r,o,i),n.unwrap=()=>n._zod.def.innerType});function ao(n){return new so({type:"optional",innerType:n})}const co=h("ZodNullable",(n,e)=>{ir.init(n,e),$.init(n,e),n._zod.processJSONSchema=(r,o,i)=>Tr(n,r,o,i),n.unwrap=()=>n._zod.def.innerType});function ln(n){return new co({type:"nullable",innerType:n})}const lo=h("ZodDefault",(n,e)=>{sr.init(n,e),$.init(n,e),n._zod.processJSONSchema=(r,o,i)=>Ir(n,r,o,i),n.unwrap=()=>n._zod.def.innerType,n.removeDefault=n.unwrap});function uo(n,e){return new lo({type:"default",innerType:n,get defaultValue(){return typeof e=="function"?e():Un(e)}})}const ho=h("ZodPrefault",(n,e)=>{ar.init(n,e),$.init(n,e),n._zod.processJSONSchema=(r,o,i)=>Mr(n,r,o,i),n.unwrap=()=>n._zod.def.innerType});function po(n,e){return new ho({type:"prefault",innerType:n,get defaultValue(){return typeof e=="function"?e():Un(e)}})}const mo=h("ZodNonOptional",(n,e)=>{cr.init(n,e),$.init(n,e),n._zod.processJSONSchema=(r,o,i)=>Ar(n,r,o,i),n.unwrap=()=>n._zod.def.innerType});function fo(n,e){return new mo({type:"nonoptional",innerType:n,...P(e)})}const go=h("ZodCatch",(n,e)=>{dr.init(n,e),$.init(n,e),n._zod.processJSONSchema=(r,o,i)=>Rr(n,r,o,i),n.unwrap=()=>n._zod.def.innerType,n.removeCatch=n.unwrap});function yo(n,e){return new go({type:"catch",innerType:n,catchValue:typeof e=="function"?e:()=>e})}const bo=h("ZodPipe",(n,e)=>{lr.init(n,e),$.init(n,e),n._zod.processJSONSchema=(r,o,i)=>Or(n,r,o,i),n.in=e.in,n.out=e.out});function un(n,e){return new bo({type:"pipe",in:n,out:e})}const xo=h("ZodReadonly",(n,e)=>{ur.init(n,e),$.init(n,e),n._zod.processJSONSchema=(r,o,i)=>Er(n,r,o,i),n.unwrap=()=>n._zod.def.innerType});function vo(n){return new xo({type:"readonly",innerType:n})}const rt=h("ZodCustom",(n,e)=>{hr.init(n,e),$.init(n,e),n._zod.processJSONSchema=(r,o,i)=>zr(n,r)});function wo(n,e){return xr(rt,n??(()=>!0),e)}function _o(n,e={}){return vr(rt,n,e)}function ko(n,e){return wr(n,e)}const hn={custom:"custom"},Co={"SHA-256":"sha256-","SHA-384":"sha384-","SHA-512":"sha512-"};to(Object.keys(Co)).optional().default("SHA-256");const pn=["base-uri","child-src","connect-src","default-src","fenced-frame-src","font-src","form-action","frame-ancestors","frame-src","img-src","manifest-src","media-src","object-src","referrer","report-to","report-uri","require-trusted-types-for","sandbox","trusted-types","upgrade-insecure-requests","worker-src"];wo(n=>typeof n=="string").superRefine((n,e)=>{pn.some(o=>n.startsWith(o))||(n.startsWith("script-src")||n.startsWith("style-src")?e.addIssue({code:hn.custom,message:"Directives `script-src` and `style-src` are not allowed in `security.csp.directives`. Please use `security.csp.scriptDirective` and `security.csp.styleDirective` instead.",fatal:!0}):e.addIssue({code:hn.custom,message:`Invalid directive: "${n}". Allowed directives are: ${pn.join(", ")}`,fatal:!0}))});new TextEncoder;new TextDecoder;Hn(`async function replaceServerIsland(id, r) {
	let s = document.querySelector(\`script[data-island-id="\${id}"]\`);
	// If there's no matching script, or the request fails then return
	if (!s || r.status !== 200 || r.headers.get('content-type')?.split(';')[0].trim() !== 'text/html') return;
	// Load the HTML before modifying the DOM in case of errors
	let html = await r.text();
	// Remove any placeholder content before the island script
	while (s.previousSibling && s.previousSibling.nodeType !== 8 && s.previousSibling.data !== '[if astro]>server-island-start<![endif]')
		s.previousSibling.remove();
	s.previousSibling?.remove();
	// Insert the new HTML
	s.before(document.createRange().createContextualFragment(html));
	// Remove the script. Prior to v5.4.2, this was the trick to force rerun of scripts.  Keeping it to minimize change to the existing behavior.
	s.remove();
}`.split(`
`).map(n=>n.trim()).filter(n=>n&&!n.startsWith("//")).join(" "));const A=Symbol.for("astro:fragment"),zo=Symbol.for("astro:renderer");new TextEncoder;new TextDecoder;"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("").reduce((n,e)=>(n[e.charCodeAt(0)]=e,n),[]);"-0123456789_".split("").reduce((n,e)=>(n[e.charCodeAt(0)]=e,n),[]);const ot="astro:jsx",mn=Symbol("empty"),fn=n=>n;function Ne(n){return n&&typeof n=="object"&&n[ot]}function So(n){if(typeof n.type=="string")return n;const e={};if(Ne(n.props.children)){const r=n.props.children;if(!Ne(r)||!("slot"in r.props))return;const o=fn(r.props.slot);e[o]=[r],e[o].$$slot=!0,delete r.props.slot,delete n.props.children}else Array.isArray(n.props.children)&&(n.props.children=n.props.children.map(r=>{if(!Ne(r)||!("slot"in r.props))return r;const o=fn(r.props.slot);return Array.isArray(e[o])?e[o].push(r):(e[o]=[r],e[o].$$slot=!0),delete r.props.slot,mn}).filter(r=>r!==mn));Object.assign(n.props,e)}function it(n){return typeof n=="string"?Hn(n):Array.isArray(n)?n.map(e=>it(e)):n}function $o(n){if("set:html"in n.props||"set:text"in n.props){if("set:html"in n.props){const e=it(n.props["set:html"]);delete n.props["set:html"],Object.assign(n.props,{children:e});return}if("set:text"in n.props){const e=n.props["set:text"];delete n.props["set:text"],Object.assign(n.props,{children:e});return}}}function t(n,e={},r){const o={[zo]:"astro:jsx",[ot]:!0,type:n,props:e};return $o(o),So(o),o}const Po={};function gn(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"density"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"1"})}),t(e.td,{children:"Controls the number of stars rendered in the background. Min: 0.1, Max: 10. Higher = denser sky."})]}),t(e.tr,{children:[t(e.td,{children:"spaceColor"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"rgb(0, 0, 0)"'})}),t(e.td,{children:["Sets the background color of the space. Accepts any valid CSS color value (e.g., ",t(e.code,{children:"rgb()"}),", ",t(e.code,{children:"#000"}),", ",t(e.code,{children:"black"}),", ",t(e.code,{children:"hsl()"}),")."]})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Additional CSS classes applied to the main container."})]})]})]})}function No(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(gn,{...n})}):gn(n)}const me=(n={})=>No({...n,components:{Fragment:A,...n.components}});me[Symbol.for("mdx-component")]=!0;me[Symbol.for("astro.needsHeadRendering")]=!Po.layout;me.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/backgrounds/night-sky-background/props.mdx";const k=Object.freeze({react:{key:"react",name:"React",icon:"react"},tailwind:{key:"tailwind",name:"Tailwind",icon:"tailwind"},motion:{key:"motion",name:"Motion",icon:"motion"}}),Q="night-sky-background",yn=N({id:Q,name:"Night Sky",description:"A dynamic night sky background with twinkling stars, customizable density, and content layered on top.",category:_.background.id,dependencies:[k.tailwind.key],preview:St,previewClassName:"grid place-items-center",source:[{name:`${Q}.tsx`,content:Ct,lang:"tsx"}],usage:[{name:`${Q}-preview.tsx`,content:zt,lang:"tsx"}],componentsAPI:[{name:`${Q}.tsx`,props:me}]}),To=`import { useRef, useState, useEffect, useLayoutEffect, useMemo, memo, useCallback } from "react";
import cn from "@/utils/cn";

export type StarFieldBackgroundProps = {
  speed?: number;
  spaceColor?: string;
  starColor?: string;
  starTrailColor?: string;
  className?: string;
} & React.ComponentProps<"div">;

const random = (
  n1:number = 1,
  n2?:number
) => {
  if (n1 === undefined) return Math.random();
  if (n2 === undefined) return Math.random() * n1;
  return Math.random() * (n2 - n1) + n1;
};

const map = (
  value:number,
  start1:number,
  stop1:number,
  start2:number,
  stop2:number
): number => {
  const min = Math.min(start2, stop2);
  const max = Math.max(start2, stop2);
  const newValue = start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
  return Math.min(Math.max(newValue, min), max);
};

class Star {
  ctx: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
  starColor: string;
  starTrailColor: string;
  speed: number;
  x!: number;
  y!: number;
  z!: number;
  r!: number;
  sz!: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    starColor: string,
    starTrailColor: string,
  ) {
    this.ctx = ctx;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.starColor = starColor;
    this.starTrailColor = starTrailColor;
    this.speed = 5;
    this.init();
  }

  init(){
    this.x = random(-this.canvasWidth / 2, this.canvasWidth / 2);
    this.y = random(-this.canvasHeight / 2, this.canvasHeight / 2);
    this.z = random(this.canvasWidth);
    this.sz = this.z;
    this.r = 1;
  };

  setCanvasSize(width: number, height: number){
    this.canvasWidth = width;
    this.canvasHeight = height;
  };

  setSpeed(speed: number){
    this.speed = speed;
  };

  update(){
    this.z -= this.speed;
    if (
      (this.speed >= 0 && this.z <= 0) ||
      (this.speed <= 0 && this.z >= (this.canvasWidth / 2))
    ) {
      this.init();
    }
  };

  show(){
    const x1 = map(this.x / this.z, -1, 1, -this.canvasWidth / 2, this.canvasWidth / 2);
    const y1 = map(this.y / this.z, -1, 1, -this.canvasHeight / 2, this.canvasHeight / 2);
    const x2 = map(this.x / this.sz, -1, 1, -this.canvasWidth / 2, this.canvasWidth / 2);
    const y2 = map(this.y / this.sz, -1, 1, -this.canvasHeight / 2, this.canvasHeight / 2);
    const radius = map(this.z, -this.canvasWidth / 2, this.canvasWidth / 2, 0.2, 0.8);
    this.ctx.beginPath();
    this.ctx.fillStyle = this.starColor;
    this.ctx.fill();
    this.ctx.ellipse(x1, y1, radius, radius, 0, 0, 360, false);
    this.ctx.strokeStyle = this.starTrailColor;
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
    this.ctx.closePath(); 
    this.sz = this.z;
  };
}

const StarFieldBackground = (
  props: StarFieldBackgroundProps
) => {
  const {
    speed = 5,
    spaceColor = "#000000",
    starColor = "#ffffff",
    starTrailColor = "#555555",
    className = "",
    ...restProps
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<ReturnType<typeof requestAnimationFrame>>(null);

  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const { devicePixelRatio, canvasWidth, canvasHeight } = useMemo(() => {
    const devicePixelRatio = Math.max(1, globalThis.devicePixelRatio || 1);
    return {
      devicePixelRatio,
      canvasWidth: width * devicePixelRatio,
      canvasHeight: height * devicePixelRatio,
    };
  }, [width, height]);

  const starsCount = Math.min(500, width * height * 0.001);

  const ctx: CanvasRenderingContext2D | null | undefined = useMemo(() => {
    return canvasRef.current?.getContext("2d");
  }, [canvasRef.current]);

  const stars = useMemo(() => (
    Array.from({ length: starsCount }, () => new Star(
      ctx as CanvasRenderingContext2D,
      starColor,
      starTrailColor,
    ))
  ), [ctx, starsCount, starColor, starTrailColor]);

  const render = useCallback(() => {
    if (!ctx) return;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    ctx.fillStyle = spaceColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.save();
    ctx.translate(width / 2, height / 2);
    for (let i = 0; i < stars.length; i++) {
      stars[i].setSpeed(speed);
      stars[i].setCanvasSize(width, height);
      stars[i].update();
      stars[i].show();
    }
    ctx.restore();
    rafId.current = requestAnimationFrame(render);
  }, [
    ctx,
    devicePixelRatio,
    width,
    height,
    canvasWidth,
    canvasHeight,
    stars,
    speed,
    spaceColor,
  ]);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateContainerDimensions = () => {
      if (!containerRef.current) return;
      const {
        width,
        height,
      } = containerRef.current.getBoundingClientRect();
      setWidth(width);
      setHeight(height);
    };
    const resizeObserver = new ResizeObserver(updateContainerDimensions);
    resizeObserver.observe(containerRef.current);
    updateContainerDimensions();
    setMounted(true);
    return () => {
      resizeObserver.disconnect();
    }
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;
    render();
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [mounted, render]);

  return (
    <div 
      {...restProps}
      className={cn("absolute top-[0] left-[0] right-[0] bottom-[0] overflow-hidden", className)}
      ref={containerRef}
    >
      <canvas
        aria-hidden={true}
        width={canvasWidth}
        height={canvasHeight}
        ref={canvasRef}
        className="w-full h-full scale-[1.15]"
      />
    </div>
  );
};

export default memo(StarFieldBackground);`,Ao=`import StarFieldBackground from "@/registry/backgrounds/star-field-background/star-field-background";

const StarFieldBackgroundPreview = () => {
  return (
    <div className="relative w-full h-full grid place-items-center">
      <StarFieldBackground />
      <HeroSection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="text-center relative z-[2] max-w-xl p-4">
      <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
        Big Bang, Again?
      </h1>
      <p className="mx-auto mt-6 text-balance max-w-xl text-lg leading-6 text-zinc-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem dignissimos voluptatum molestias at reprehenderit odit, dolor aspernatur corrupti aperiam ipsa facere pariatur impedit.
      </p>
      <a 
        href="#"
        className="inline-block mt-6 rounded-full border px-6 py-3 font-medium backdrop-blur-md transition hover:shadow-lg border-white/15 bg-white/1 text-white hover:bg-white/10"
      >
        Get Component
      </a>
    </div>
  );
};

export default StarFieldBackgroundPreview;`,Io={},Mo={};function bn(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"speed"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"5"})}),t(e.td,{children:"Controls the star movement speed. Positive = forward, Negative = backward."})]}),t(e.tr,{children:[t(e.td,{children:"spaceColor"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"#000000"'})}),t(e.td,{children:"Sets the background color of the space. Accepts any valid CSS color value."})]}),t(e.tr,{children:[t(e.td,{children:"starColor"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"#ffffff"'})}),t(e.td,{children:"Sets the color of the stars. Accepts any valid CSS color value."})]}),t(e.tr,{children:[t(e.td,{children:"starTrailColor"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"#555555"'})}),t(e.td,{children:"Sets the color of the star trails. Accepts any valid CSS color value."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Additional CSS classes applied to the main container."})]})]})]})}function Ro(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(bn,{...n})}):bn(n)}const fe=(n={})=>Ro({...n,components:{Fragment:A,...n.components}});fe[Symbol.for("mdx-component")]=!0;fe[Symbol.for("astro.needsHeadRendering")]=!Mo.layout;fe.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/backgrounds/star-field-background/props.mdx";const ee="star-field-background",xn=N({id:ee,name:"Star Field",description:"A dynamic star field background with adjustable speed, creating a sense of motion and depth.",category:_.background.id,dependencies:[k.tailwind.key],preview:Io,previewClassName:"grid place-items-center",source:[{name:`${ee}.tsx`,content:To,lang:"tsx"}],usage:[{name:`${ee}-preview.tsx`,content:Ao,lang:"tsx"}],componentsAPI:[{name:`${ee}.tsx`,props:fe}]}),Oo=`import { Children, memo } from "react";
import { motion } from "motion/react";

export type CircularListProps = {
  radius?: number;
  duration?: number;
  offsetDegree?: number;
  rotationLock?: boolean;
  direction?: "clockwise" | "anti-clockwise";
  children?: React.PropsWithChildren;
  className?: string;
  style?: React.CSSProperties;
} & React.ComponentProps<"div">;

const CircularList = (
  props: CircularListProps,
) => {
  const {
    radius = 100,
    duration = 10,
    offsetDegree = 0,
    rotationLock = true,
    direction = "clockwise",
    children,
    className,
    style,
    ...restProps
  } = props;

  const childrenCount = Children.count(children);
  const _radius = Math.max(0, radius);
  const _duration = Math.min(Math.max(1, duration), 10 * 60);

  const getCoordinates = (
    angle: number,
    radius: number,
  ) => {
    const radians = +((Math.PI / 180) * angle).toPrecision(4);
    return {
      x: +((Math.cos(radians) * radius).toFixed(0)),
      y: +((Math.sin(radians) * radius).toFixed(0)),
    };
  };

  const variants = {
    start: {
      rotate: 0,
    },
    end: {
      rotate: 360,
    }
  };

  const isClockwise = direction === "clockwise";

  return (
    <div
      {...restProps}
      className={className}
      style={{
        ...style,
        width: \`\${_radius * 2}px\`,
        height: \`\${_radius * 2}px\`,
      }}
    >
      <motion.div
        className="relative w-full h-full border border-neutral-200 dark:border-neutral-700/50 rounded-[50%]"
        variants={variants}
        animate={isClockwise ? "start" : "end"}
        style={variants[isClockwise ? "end" : "start"]}
        transition={{
          ease: "linear",
          duration: _duration,
          repeat: Infinity,
        }}
      >
        {Children.map(children, (item, index) => {
          const angle = (Math.abs(offsetDegree) + (360 / childrenCount * index)) % 360;
          const { x, y } = getCoordinates(angle, _radius);
          return (
            <motion.span
              key={\`circular-list-item-\${index}\`}
              className="absolute top-[50%] left-[50%]"
              animate={{
                transform: \`
                  translate(calc(-50% + \${x}px), calc(-50% + \${y}px)) 
                  rotate(\${rotationLock ? (isClockwise ? 360 : 0) : angle}deg)
                \`,
              }}
              style={{
                transform: \`
                  translate(calc(-50% + \${x}px), calc(-50% + \${y}px)) 
                  rotate(\${rotationLock ? (isClockwise ? 0 : 360) : angle}deg)
                \`,
              }}
              transition={{
                ease: "linear",
                duration: _duration,
                repeat: Infinity,
              }}
            >
              {item}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default memo(CircularList);`,Eo=`import CircularList from "@/registry/components/circular-list/circular-list";

const CircularListPreview = () => {
  return (
    <div className="relative">
      <CircularList 
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        radius={75}
      >
        {/* 
          Add any element here which you want to show on circumference. 
          Link, Button, Icon etc .
        */}
        <MetaIcon color="#0866FF" />
        <YoutubeIcon color="#FF0000" />
        <DribbleIcon color="#EA4C89" />
      </CircularList>

      <CircularList 
        radius={150}
        degreeOffset={45}
        direction="anti-clockwise"
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <MetaIcon color="#0866FF" />
        <YoutubeIcon color="#FF0000" />
        <RdioIcon color="#007DC5" />
        <DribbleIcon color="#EA4C89" />
        <PintrestIcon color="#E60023" />
      </CircularList>
    </div>
  );
};

const iconStyle = {
  width: "32px", 
  height: "32px",
  background: "#ffffff", 
  borderRadius: "50%",
};

type IconProps = { color: string; };

const YoutubeIcon = ({ color } : IconProps) => (
  <svg style={{ ...iconStyle, fill: color }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <path d="M11.603 9.833L9.357 8.785C9.161 8.694 9 8.796 9 9.013v1.974c0 .217.161.319.357.228l2.245-1.048c.197-.092.197-.242.001-.334M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m0 13.5c-4.914 0-5-.443-5-3.9s.086-3.9 5-3.9s5 .443 5 3.9s-.086 3.9-5 3.9"/>
  </svg>
);

const MetaIcon = ({ color } : IconProps) => (
  <svg style={{ ...iconStyle, fill: color }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <path d="M8.349 9.257a2.6 2.6 0 0 0-.497-.293a1.3 1.3 0 0 0-.519-.117a.9.9 0 0 0-.757.361a1.3 1.3 0 0 0-.281.812q0 .491.287.805c.287.314.455.314.791.314q.259 0 .519-.104q.26-.102.491-.259q.233-.156.437-.354q.205-.198.368-.389a12 12 0 0 0-.382-.387a5 5 0 0 0-.457-.389m4.278-.41a1.2 1.2 0 0 0-.525.117a2.3 2.3 0 0 0-.478.293q-.225.177-.43.389q-.207.212-.368.389q.177.206.382.402q.204.198.438.355q.23.156.483.252t.539.096q.505 0 .777-.328a1.2 1.2 0 0 0 .272-.805q-.001-.478-.293-.818q-.293-.342-.797-.342M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m4.835 10.562q-.163.464-.463.811q-.3.349-.743.546a2.4 2.4 0 0 1-.989.197q-.423 0-.791-.129a3 3 0 0 1-.689-.342a4 4 0 0 1-.608-.49q-.285-.281-.546-.58q-.286.3-.559.58a4 4 0 0 1-.581.49a3 3 0 0 1-.668.342q-.36.129-.812.129a2.4 2.4 0 0 1-.996-.197a2.3 2.3 0 0 1-.75-.532a2.3 2.3 0 0 1-.478-.798A3 3 0 0 1 5 9.994q0-.532.157-.989q.158-.457.457-.792q.3-.334.737-.532a2.4 2.4 0 0 1 .982-.197q.45 0 .825.137q.374.135.695.361q.322.224.602.518c.28.294.37.402.552.621q.261-.314.539-.613q.28-.301.602-.525q.32-.226.695-.361q.376-.138.81-.137q.547-.001.984.191q.436.19.736.524t.463.784q.165.45.164.982q0 .534-.165.996"/>
  </svg>
);

const RdioIcon = ({ color } : IconProps) => (
  <svg style={{ ...iconStyle, fill: color }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m3.403 9.082q.034.255.034.518c0 2.176-1.742 3.941-3.892 3.941c-2.148 0-3.891-1.766-3.891-3.941c0-2.178 1.742-3.942 3.891-3.942c.309 0 .608.039.896.107V8.41c-.454-.166-1.015-.142-1.541.111c-.952.461-1.435 1.494-1.079 2.311c.357.816 1.418 1.106 2.371.645c.656-.316 1.234-1.078 1.234-2.035V6.549q.123.07.24.146c.739.465 1.838 1.086 3.121 1.152c.501.026-.197 1.284-1.384 1.635"/>
  </svg>
);

const DribbleIcon = ({ color } : IconProps) => (
  <svg style={{ ...iconStyle, fill: color }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <path d="M10.26 9.982q.05-.017.103-.031a15 15 0 0 0-.279-.584c-1.88.557-3.68.562-4.001.557q-.004.038-.003.076c0 .945.34 1.853.958 2.566c.206-.332 1.298-1.961 3.222-2.584m-2.637 3.131a3.91 3.91 0 0 0 3.871.512a16.5 16.5 0 0 0-.822-2.922c-2.121.75-2.922 2.162-3.049 2.41m4.932-6.086a3.92 3.92 0 0 0-3.405-.853a20 20 0 0 1 1.421 2.223c1.283-.493 1.863-1.204 1.984-1.37m-2.85 1.637A24 24 0 0 0 8.29 6.473a3.94 3.94 0 0 0-2.113 2.658h.017c.406 0 1.849-.033 3.511-.467m1.809 1.832c.465 1.293.679 2.367.74 2.711a3.93 3.93 0 0 0 1.609-2.543a5.8 5.8 0 0 0-1.592-.221q-.389 0-.757.053M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m0 14.297A4.703 4.703 0 0 1 5.301 10A4.703 4.703 0 0 1 10 5.301A4.704 4.704 0 0 1 14.698 10A4.7 4.7 0 0 1 10 14.697m.922-5.623q.13.27.242.531l.071.17q.417-.05.882-.049a9.7 9.7 0 0 1 1.801.172a3.93 3.93 0 0 0-.852-2.34c-.16.206-.818.963-2.144 1.516"/>
  </svg>
);

const PintrestIcon = ({ color } : IconProps) => (
  <svg style={{ ...iconStyle, fill: color }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m.657 11.875c-.616-.047-.874-.352-1.356-.644c-.265 1.391-.589 2.725-1.549 3.422c-.297-2.104.434-3.682.774-5.359c-.579-.975.069-2.936 1.291-2.454c1.503.596-1.302 3.625.581 4.004c1.966.394 2.769-3.412 1.55-4.648c-1.762-1.787-5.127-.041-4.713 2.517c.1.625.747.815.258 1.678c-1.127-.25-1.464-1.139-1.42-2.324c.069-1.94 1.743-3.299 3.421-3.486c2.123-.236 4.115.779 4.391 2.777c.309 2.254-.959 4.693-3.228 4.517"/>
  </svg>
);

export default CircularListPreview;`,Do={},jo={};function vn(n){const e={code:"code",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"children"}),t(e.td,{children:t(e.code,{children:"ReactNode"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:"Elements that will be arranged along the circle’s circumference."})]}),t(e.tr,{children:[t(e.td,{children:"radius"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"100"})}),t(e.td,{children:["Radius of the circle in ",t(e.strong,{children:"pixels (px)"})," used to position the children around the center."]})]}),t(e.tr,{children:[t(e.td,{children:"duration"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"10"})}),t(e.td,{children:"Time (in seconds) it takes to complete one full 360° rotation."})]}),t(e.tr,{children:[t(e.td,{children:"rotationLock"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"true"})}),t(e.td,{children:"Prevents orbiting items from rotating with the path, keeping them upright."})]}),t(e.tr,{children:[t(e.td,{children:"direction"}),t(e.td,{children:t(e.code,{children:'"clockwise" | "anti-clockwise"'})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"clockwise"'})}),t(e.td,{children:"Controls the direction of rotation."})]}),t(e.tr,{children:[t(e.td,{children:"degreeOffset"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"0"})}),t(e.td,{children:"Starting angle offset (in degrees) from which the circular layout begins."})]}),t(e.tr,{children:[t(e.td,{children:"pauseOnHover"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"false"})}),t(e.td,{children:"Pauses the rotation animation when the user hovers over the component."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Additional CSS class names applied to the root container."})]}),t(e.tr,{children:[t(e.td,{children:"style"}),t(e.td,{children:t(e.code,{children:"React.CSSProperties"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Inline styles applied to the root container."})]})]})]})}function qo(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(vn,{...n})}):vn(n)}const ge=(n={})=>qo({...n,components:{Fragment:A,...n.components}});ge[Symbol.for("mdx-component")]=!0;ge[Symbol.for("astro.needsHeadRendering")]=!jo.layout;ge.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/components/circular-list/props.mdx";const ne="circular-list",wn=N({id:ne,name:"Circular List",description:"A circular orbit component that displays elements around a center and rotates them continuously, ideal for galleries, dashboards, and navigation menus.",category:_.component.id,dependencies:[k.tailwind.key,k.motion.key],preview:Do,previewClassName:"grid place-items-center",source:[{name:`${ne}.tsx`,content:Oo,lang:"tsx"}],usage:[{name:`${ne}-preview.tsx`,content:Eo,lang:"tsx"}],componentsAPI:[{name:`${ne}.tsx`,props:ge}]}),Zo=`import { memo } from "react";
import cn from "@/utils/cn";
import styles from "./marquee.module.css";

export type MarqueeProps = {
  children: React.PropsWithChildren,
  axis?: "horizontal" | "vertical",
  pauseOnHover?: boolean,
  reverse?: boolean;
  duration?: number;
  repeat?: number;
  mask?: boolean;
  className?: string;
} & React.ComponentProps<"div">;

const Marquee = (
  props: MarqueeProps
) => {
  const {
    children,
    axis = "horizontal",
    pauseOnHover = true,
    reverse = false,
    duration = 30,
    repeat = 5,
    mask = true,
    className,
    style,
    ...restProps
  } = props;

  console.log(axis);

  const _repeat = Math.max(1, repeat);
  const _duration = Math.max(1, duration);

  return (
    <div
      {...restProps}
      className={cn(
        "overflow-hidden",
        className, 
        {
          "[mask-image:linear-gradient(to_right,transparent,white_var(--mask-breakpoint),white_calc(100%-var(--mask-breakpoint)),transparent)]": mask && axis === "horizontal", 
          "[mask-image:linear-gradient(to_bottom,transparent,white_var(--mask-breakpoint),white_calc(100%-var(--mask-breakpoint)),transparent)]": mask && axis === "vertical",
        }
      )}
      style={{
        "--gap": "16px",
        "--mask-breakpoint": "20%",
        ...style,
        "--animation-duration": \`\${_duration}s\`,
      } as React.CSSProperties}
    >
      <div 
        className={cn(
          "group flex w-max-content [gap:var(--gap)]", 
          {
            "[flex-direction:row]": axis === "horizontal",
            "[flex-direction:column]": axis === "vertical",
          },
        )}
      >
        {Array.from({
          length: _repeat,
        }).map((_, index) => (
          <div
            key={\`marquee-block-\${index}\`}
            aria-hidden={index !== 0}
            className={cn(
              "flex",
              "[gap:var(--gap)]",
              "[animation-timing-function:linear]",
              "[animation-iteration-count:infinite]",
              "[animation-duration:var(--animation-duration)]",
              "group-hover:[animation-play-state:paused]",
              {
                "[flex-direction:row]": axis === "horizontal",
                "[flex-direction:column]": axis === "vertical",
                "[animation-direction:reverse]": reverse,
              }
            )}
            style={{
              animationName: styles[\`marquee-list-\${axis}-keyframes\`],
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Marquee);`,Bo=`@keyframes marquee-list-horizontal-keyframes {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@keyframes marquee-list-vertical-keyframes {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-100% - var(--gap)));
  }
}`,Lo={},Ho={};function _n(n){const e={code:"code",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"children"}),t(e.td,{children:t(e.code,{children:"React.ReactNode"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:"Items to be displayed inside the marquee. These elements will scroll continuously."})]}),t(e.tr,{children:[t(e.td,{children:"axis"}),t(e.td,{children:t(e.code,{children:'"horizontal" | "vertical"'})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"horizontal"'})}),t(e.td,{children:"Controls the scrolling direction of the marquee."})]}),t(e.tr,{children:[t(e.td,{children:"pauseOnHover"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"true"})}),t(e.td,{children:"Pauses the marquee animation when the user hovers over it."})]}),t(e.tr,{children:[t(e.td,{children:"reverse"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"false"})}),t(e.td,{children:"Reverses the scrolling direction of the marquee animation."})]}),t(e.tr,{children:[t(e.td,{children:"duration"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"30"})}),t(e.td,{children:["Duration of one animation cycle in ",t(e.strong,{children:"seconds"}),". Minimum value is ",t(e.code,{children:"1"}),"."]})]}),t(e.tr,{children:[t(e.td,{children:"repeat"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"5"})}),t(e.td,{children:"Number of times the marquee content is repeated to maintain continuous scrolling. Increase this if the marquee items are small."})]}),t(e.tr,{children:[t(e.td,{children:"mask"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"true"})}),t(e.td,{children:"Applies a fade mask at the beginning and end of the marquee."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Additional CSS class names applied to the marquee container."})]}),t(e.tr,{children:[t(e.td,{children:"style"}),t(e.td,{children:t(e.code,{children:"React.CSSProperties"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Inline styles applied to the marquee container."})]})]})]})}function Fo(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(_n,{...n})}):_n(n)}const ye=(n={})=>Fo({...n,components:{Fragment:A,...n.components}});ye[Symbol.for("mdx-component")]=!0;ye[Symbol.for("astro.needsHeadRendering")]=!Ho.layout;ye.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/components/marquee/props.mdx";const F="marquee",kn=N({id:F,name:"Marquee",description:"A flexible scrolling layout for showcasing repeating content like logos, announcements, or testimonials.",category:_.component.id,dependencies:[k.tailwind.key],preview:Lo,previews:dt,previewClassName:"grid place-items-center",source:[{name:`${F}.tsx`,content:Zo,lang:"tsx"},{name:`${F}.module.css`,content:Bo,lang:"css"}],usage:[{name:`${F}-preview.tsx`,content:ct,lang:"tsx"}],componentsAPI:[{name:`${F}.tsx`,props:ye}]}),Wo=`import { memo } from "react";
import cn from "@/utils/cn";

export type CircularTextProps = {
  text: string;
  radius: number;
  addTrailingSpace?: boolean;
  rotate?: boolean;
  pauseOnHover?: boolean;
  direction?: "clockwise" | "anti-clockwise";
  duration?: number;
  className?: string;
} & React.ComponentProps<"span">;

const CircularText = (props: CircularTextProps) => {
  const {
    text,
    radius,
    addTrailingSpace = true,
    rotate = true,
    pauseOnHover = true,
    direction = "clockwise",
    duration = 10,
    className = "",
    ...restProps
  } = props;

  const _text = text.trim() + (addTrailingSpace ? " " : "");
  const _radius = Math.max(0, radius);
  const _duration = Math.min(Math.max(0.1, duration), 60);

  const getCoordinates = (
    angle: number, 
    radius: number
  ) => {
    const radians = +((Math.PI / 180) * angle).toPrecision(4);
    return {
      x: +((Math.cos(radians) * radius).toFixed(0)),
      y: +((Math.sin(radians) * radius).toFixed(0)),
    };
  };

  return (
    <span
      {...restProps}
      className={cn(
        "relative",
        className,
        {
          "[animation:spin_2s_linear_infinite]": rotate,
          "hover:[animation-play-state:paused]": pauseOnHover,
        },
      )}
      style={{
        width: \`\${_radius * 2}px\`,
        height: \`\${_radius * 2}px\`,
        animationDuration: \`\${_duration}s\`,
        animationDirection: direction === "clockwise" ? "normal" : "reverse",
      }}
    >
      {[..._text].map((letter, letterIndex) => {
        const angle = 360 / _text.length * letterIndex;
        const { x, y } = getCoordinates(angle, _radius);
        return (
          <span
            aria-hidden={true}
            key={\`letter-\${letter}-\${letterIndex}\`}
            className="absolute top-[50%] left-[50%]"
            style={{
              transform: \`
                translate(calc(-50% + \${x}px), calc(-50% + \${y}px)) 
                rotate(\${angle}deg)
              \`,
            }}
          >
            {letter === " " ? <>&nbsp;</> : letter}
          </span>
        );
      })}
      <span className="sr-only">
        {text}
      </span>
    </span>
  );
};

export default memo(CircularText);`,Vo=`import CircularTextAnimation from "@/registry/text-effects/circular-text-animation/circular-text-animation";

const CircularTextAnimationPreview = () => {
  return (
    <CircularTextAnimation
      className="text-gray-900 dark:text-gray-100 text-xl"
      text="CODE • DESIGN • SHIP •"
      radius={80}
    />
  );
};

export default CircularTextAnimationPreview;`,Uo={},Jo={};function Cn(n){const e={code:"code",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"text"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:"The text content to render around the circle."})]}),t(e.tr,{children:[t(e.td,{children:"radius"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:["Radius of the circle in ",t(e.strong,{children:"pixels (px)"})," used to position the letters."]})]}),t(e.tr,{children:[t(e.td,{children:"addTrailingSpace"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"true"})}),t(e.td,{children:"Adds a trailing space after the text to improve spacing when looping around the circle."})]}),t(e.tr,{children:[t(e.td,{children:"rotate"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"true"})}),t(e.td,{children:"Enables continuous rotation animation of the circular text."})]}),t(e.tr,{children:[t(e.td,{children:"direction"}),t(e.td,{children:t(e.code,{children:'"clockwise" | "anti-clockwise"'})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"clockwise"'})}),t(e.td,{children:"Controls the rotation direction of the text around the circle."})]}),t(e.tr,{children:[t(e.td,{children:"duration"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"10"})}),t(e.td,{children:["Duration of one full rotation in ",t(e.strong,{children:"seconds"})," (range: ",t(e.code,{children:"0.1"})," – ",t(e.code,{children:"60"}),")."]})]}),t(e.tr,{children:[t(e.td,{children:"pauseOnHover"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"true"})}),t(e.td,{children:"Pauses the rotation animation when the user hovers over the component."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Optional class name applied to the root circular text container."})]})]})]})}function Xo(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(Cn,{...n})}):Cn(n)}const be=(n={})=>Xo({...n,components:{Fragment:A,...n.components}});be[Symbol.for("mdx-component")]=!0;be[Symbol.for("astro.needsHeadRendering")]=!Jo.layout;be.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/circular-text-animation/props.mdx";const te="circular-text-animation",zn=N({id:te,name:"Circular Text Animation",description:"A flexible component for rendering text along a circular path with customizable styling and rotation.",category:_.textEffect.id,dependencies:[k.tailwind.key],preview:Uo,previewClassName:"grid place-items-center",source:[{name:`${te}.tsx`,content:Wo,lang:"tsx"}],usage:[{name:`${te}-preview.tsx`,content:Vo,lang:"tsx"}],componentsAPI:[{name:`${te}.tsx`,props:be}]}),Yo=`import { memo, useEffect, useMemo, useState, Fragment } from "react";
import cn from "@/utils/cn";

export type DecryptingTextAnimationProps = {
  text: string;
  speed?: number;
  charset?: string;
  className?: string;
} & React.ComponentProps<"span">;

const random = (n: number = 1) => {
  return Math.floor(Math.random() * n);
};

const DecryptingTextAnimation = (
  props: DecryptingTextAnimationProps
) => {
  const {
    text,
    speed = 50,
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*-+?",
    className,
    ...restProps
  } = props;

  const getTextMappings = () => {
    return (
      text
        ?.split(" ")
        .filter(Boolean)
        .map(word => (
          word
            .split("")
            .map((letter) => ({
              letter,
              index: random(charset.length),
            }))
        ))
    );
  };

  const [currentText, setCurrentText] = useState(text);
  const [textMapping, setTextMapping] = useState(getTextMappings);

  const shuffledCharset = useMemo(() => {
    return charset.split("").sort(() => (
      random(5) - random(5)
    )).join("");
  }, [charset, text]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextMapping((prev) => {
        const areAllDone = prev.flat().every(entry => {
          return entry.letter === shuffledCharset[entry.index];
        });
        if(areAllDone) {
          clearInterval(intervalId);
        }
        return prev.map(word => (
          word.map(entry => {
            const isDone = entry.letter === shuffledCharset[entry.index];
            return {
              ...entry,
              index: isDone ? (
                entry.index
              ) : (
                (entry.index + 1) % shuffledCharset.length
              )
            };
          })
        ))
      });
    }, speed);
    return () => {
      clearInterval(intervalId);
    };
  }, [shuffledCharset, speed]);

  if (currentText !== text) {
    setCurrentText(text);
    setTextMapping(getTextMappings());
  }

  return (
    <span
      {...restProps}
      className={cn("relative", className)}
    >
      {
        textMapping.map((word, wordIndex, arr) => (
          <Fragment key={\`word-\${wordIndex}\`}>
            <span 
              aria-hidden={true}
              className="whitespace-nowrap break-keep"
            >
              {word.map((letter, letterIndex) => {
                return (
                  <span
                    key={\`letter-\${wordIndex}-\${letterIndex}\`}
                    aria-hidden={true}
                    className="inline-block font-[inherit]"
                  >
                    {shuffledCharset[letter.index]}
                  </span>
                );
              })}
            </span>
            {wordIndex !== (arr.length - 1) && (
              <span aria-hidden={true}>
                &nbsp;
              </span>
            )}
          </Fragment>
        ))
      }
      <span className="sr-only">
        {currentText}
      </span>
    </span>
  );
};

export default memo(DecryptingTextAnimation);`,Go=`import DecryptingTextAnimation from "@/registry/text-effects/decrypting-text-animation/decrypting-text-animation";

const DecryptingTextAnimationPreview = () => {
  return (
    <DecryptingTextAnimation
      className="text-gray-900 dark:text-gray-100 text-xl font-mono"
      text="Pure Awareness"
      speed={25}
    />
  );
};

export default DecryptingTextAnimationPreview;`,Ko={},Qo={};function Sn(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"text"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"-"}),t(e.td,{children:["The text content to be decrypted and displayed. All characters must exist in the specified ",t(e.code,{children:"charset"}),". If the text includes characters outside this charset, a custom ",t(e.code,{children:"charset"})," prop must be provided."]})]}),t(e.tr,{children:[t(e.td,{children:"speed"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"50"})}),t(e.td,{children:"Speed in milliseconds between each decrypting step."})]}),t(e.tr,{children:[t(e.td,{children:"charset"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*-+?"'})}),t(e.td,{children:"The character set used to generate random decrypting characters."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Optional class name applied to the root container."})]})]})]})}function ei(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(Sn,{...n})}):Sn(n)}const xe=(n={})=>ei({...n,components:{Fragment:A,...n.components}});xe[Symbol.for("mdx-component")]=!0;xe[Symbol.for("astro.needsHeadRendering")]=!Qo.layout;xe.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/decrypting-text-animation/props.mdx";const re="decrypting-text-animation",$n=N({id:re,name:"Decrypting Text",description:"Displays text with a decrypting animation effect, revealing the final content through randomized characters.",category:_.textEffect.id,dependencies:[k.tailwind.key],preview:Ko,previewClassName:"grid place-items-center",source:[{name:`${re}.tsx`,content:Yo}],usage:[{name:`${re}-preview.tsx`,content:Go}],componentsAPI:[{name:`${re}.tsx`,props:xe}]}),ni=`import { memo, useMemo } from "react";
import { motion } from "motion/react";
import cn from "@/utils/cn";

export type TextAnimationProps = {
  text: string;
  variant?:
    "fadeIn" |
    "slideUp" |
    "slideDown" |
    "slideLeft" |
    "slideRight" |
    "zoomIn" |
    "zoomOut" |
    "blurIn";
  unit?: "letter" | "word" | "text";
  stagger?: number;
  delay?: number;
  className?: string;
} & React.ComponentProps<"span">;

const TextAnimation = ({
  text = "",
  variant = "fadeIn",
  unit = "letter",
  stagger = 0.01,
  delay = 0,
  className = "",
  ...restProps
}: TextAnimationProps) => {

  const textUnits = useMemo(() => (
    unit === "text" ? (
      [text]
    ) : (
      text
        .split(" ")
        .filter(Boolean)
        .map(word => {
          if (unit === "word") {
            return [word, " "];
          } else {
            return [
              ...word
                .split("")
                .filter(Boolean),
              " "
            ];
          }
        })
        .flat()
    )
  ), [text, unit]);

  const animationVariants = {
    fadeIn: {
      start: {
        opacity: 0,
      },
      end: {
        opacity: 1,
      },
    },
    slideUp: {
      start: {
        opacity: 0,
        y: 20,
      },
      end: {
        opacity: 1,
        y: 0,
      },
    },
    slideDown: {
      start: {
        opacity: 0,
        y: -20,
      },
      end: {
        opacity: 1,
        y: 0,
      },
    },
    slideLeft: {
      start: {
        opacity: 0,
        x: -20,
      },
      end: {
        opacity: 1,
        x: 0,
      }
    },
    slideRight: {
      start: {
        opacity: 0,
        x: 20,
      },
      end: {
        opacity: 1,
        x: 0,
      }
    },
    zoomIn: {
      start: {
        scale: 0,
      },
      end: {
        scale: 1,
      }
    },
    zoomOut: {
      start: {
        opacity: 0,
        scale: 1.25,
      },
      end: {
        opacity: 1,
        scale: 1,
      }
    },
    blurIn: {
      start: {
        opacity: 0,
        filter: "blur(10px)",
      },
      end: {
        opacity: 1,
        filter: "blur(0px)",
      }
    }
  };

  return (
    <span
      {...restProps}
      className={cn("overflow-hidden inline-block", className)}
    >
      {textUnits.map((unit, unitIndex) => (
        <motion.span
          key={\`unit-\${unit}-\${unitIndex}\`}
          aria-hidden="true"
          className="inline-block"
          style={animationVariants[variant].start}
          animate={animationVariants[variant].end}
          transition={{
            type: "tween",
            duration: 0.15,
            delay: delay + (unitIndex * stagger),
          }}
        >
          {unit === " " ? <>&nbsp;</> : unit}
        </motion.span>
      ))}
      <span className="sr-only">
        {text}
      </span>
    </span>
  );
};

export default memo(TextAnimation);`,ti={},ri={};function Pn(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"text"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:"The text content to be animated."})]}),t(e.tr,{children:[t(e.td,{children:"variant"}),t(e.td,{children:[t(e.code,{children:'"fadeIn"'})," ",t("br",{})," ",t(e.code,{children:'"slideUp"'})," ",t("br",{})," ",t(e.code,{children:'"slideDown"'})," ",t("br",{})," ",t(e.code,{children:'"slideLeft"'})," ",t("br",{})," ",t(e.code,{children:'"slideRight"'})," ",t("br",{})," ",t(e.code,{children:'"zoomIn"'})," ",t("br",{})," ",t(e.code,{children:'"zoomOut"'})," ",t("br",{})," ",t(e.code,{children:'"blurIn"'})]}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"fadeIn"'})}),t(e.td,{children:"Animation style applied to the text."})]}),t(e.tr,{children:[t(e.td,{children:"unit"}),t(e.td,{children:[t(e.code,{children:'"letter"'})," | ",t(e.code,{children:'"word"'})," | ",t(e.code,{children:'"text"'})]}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"letter"'})}),t(e.td,{children:"Determines how the text is split and animated."})]}),t(e.tr,{children:[t(e.td,{children:"stagger"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"0.01"})}),t(e.td,{children:"Time delay between each animated unit (in seconds)."})]}),t(e.tr,{children:[t(e.td,{children:"delay"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"0"})}),t(e.td,{children:"Delay before the animation starts (in seconds)."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Additional CSS classes for styling."})]})]})]})}function oi(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(Pn,{...n})}):Pn(n)}const ve=(n={})=>oi({...n,components:{Fragment:A,...n.components}});ve[Symbol.for("mdx-component")]=!0;ve[Symbol.for("astro.needsHeadRendering")]=!ri.layout;ve.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/text-animation/props.mdx";const oe="text-animation",Nn=N({id:oe,name:"Text Animation",description:"Create dynamic text effects by staggering letters or words with configurable motion and timing, great for hero sections, promotional content, or onboarding screens.",category:_.textEffect.id,dependencies:[k.motion.key,k.tailwind.key],preview:ti,previewClassName:"grid place-items-center p-5",previews:ut,source:[{name:`${oe}.tsx`,content:ni,lang:"tsx"}],usage:[{name:`${oe}-preview.tsx`,content:lt,lang:"tsx"}],componentsAPI:[{name:`${oe}.tsx`,props:ve}]}),ii=`import { memo, useMemo } from "react";
import { motion } from "motion/react";

export type TextEmergeAnimationProps = {
  text: string;
  unit?: "word" | "letter",
  stagger?: number;
  delay?: number;
  className?: string;
} & React.ComponentProps<"span">;

const TextEmergeAnimation = (
  props: TextEmergeAnimationProps
) => {
  const {
    text = "",
    unit = "word",
    stagger = 0.1,
    delay = 0,
    className,
    ...restProps
  } = props;

  const textMapping = useMemo(() => (
    text
    .split(" ")
    .filter(Boolean)
    .map(word => {
      if (unit === "word") {
        return [word, " "];
      } else {
        return [
          ...word
            .split("")
            .filter(Boolean),
          " "
        ];
      }
    })
    .flat()
  ), [text, unit]);

  return (
    <span
      {...restProps}
      className={className}
    >
      {textMapping.map((entry, entryIndex) => (
        <motion.span
          key={\`text-\${entryIndex}\`}
          className="inline-block"
          aria-hidden={true}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          style={{
            opacity: 0,
            filter: "blur(20px)",
            y: 10,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: entryIndex * stagger,
          }}
        >
          {entry === " " ? <>&nbsp;</> : entry}
        </motion.span>
      ))}
      <span className="sr-only">
        {text}
      </span>
    </span>
  )
};

export default memo(TextEmergeAnimation);`,si=`import TextEmergeAnimation from "@/registry/text-effects/text-emerge-animation/text-emerge-animation";

const TextEmergeAnimationPreview = () => {
  return (
    <TextEmergeAnimation
      className="text-gray-900 dark:text-gray-100 text-xl overflow-hidden px-5 max-w-xl"
      text="A subtle motion to guide your attention. Nothing loud, nothing distracting — just a quiet transition that makes the interface feel alive. 
            Good animation isn't decoration; it's a gentle cue that helps you understand where you are and what happens next."
      stagger={0.02}
    />
  )
};

export default TextEmergeAnimationPreview;`,ai={},ci={};function Tn(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"text"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:["The text to display. Can be a word, sentence, or paragraph depending on ",t(e.code,{children:"type"}),"."]})]}),t(e.tr,{children:[t(e.td,{children:"type"}),t(e.td,{children:t(e.code,{children:'"word" | "letter"'})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"word"'})}),t(e.td,{children:["Determines the animation unit: ",t(e.code,{children:'"word"'})," animates one word at a time, ",t(e.code,{children:'"letter"'})," animates each letter individually."]})]}),t(e.tr,{children:[t(e.td,{children:"stagger"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"0.1"})}),t(e.td,{children:"Time delay between each animated unit (in seconds)."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Optional class name applied to the root container."})]})]})]})}function di(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(Tn,{...n})}):Tn(n)}const we=(n={})=>di({...n,components:{Fragment:A,...n.components}});we[Symbol.for("mdx-component")]=!0;we[Symbol.for("astro.needsHeadRendering")]=!ci.layout;we.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/text-emerge-animation/props.mdx";const ie="text-emerge-animation",An=N({id:ie,name:"Text Emerge",description:"Animates text by gradually turning blurry letters into clear ones, word or letter by letter.",category:_.textEffect.id,dependencies:[k.motion.key,k.tailwind.key],preview:ai,previewClassName:"grid place-items-center",source:[{name:`${ie}.tsx`,content:ii,lang:"tsx"}],usage:[{name:`${ie}-preview.tsx`,content:si,lang:"tsx"}],componentsAPI:[{name:`${ie}.tsx`,props:we}]}),li=`import { useEffect, useMemo, memo } from "react";
import {motion, stagger, useAnimate} from "motion/react";

type WordProp = {
  text: string;
  className?: string;
  style?: React.CSSProperties,
}

type WordToken = {
  text: string[];
  className?: string;
  style?: React.CSSProperties,
};

export type TypewriterAnimationProps = {
  text?: string;
  words?: WordProp[],
  cursor?: boolean;
  blinkCursor?: boolean;
  cursorVariant?: "line" | "block" | "underscore";
  stagger?: number;
} & React.ComponentProps<"span">;

const TypewriterAnimation = ({
  text = "",
  words,
  cursor = true,
  blinkCursor = true,
  cursorVariant = "line",
  stagger: staggerVal = 0.1,
  ...restProps
}: TypewriterAnimationProps) => {

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = animate(
      ".char", 
      {
        display: "inline-block",
        opacity: 1,
      },
      {
        ease: "easeInOut",
        duration: 0.01,
        delay: stagger(staggerVal),
      }
    );
    return () => {
      animation.stop();
    };
  }, [staggerVal]);

  const wordsArr = useMemo(() => {
    const _words = Array.isArray(words) ? (
      words 
    ) : (
      text
      .split(" ")
      .map((word, wordIndex, _wordsArr) => {
        const temp = [{ text: word }];
        if ((_wordsArr.length - 1) !== wordIndex) {
          temp.push({ text: " " })
        } 
        return temp;
      })
      .flat()
    );
    return (
      _words
      .reduce((acc: WordToken[], word) => {
        acc.push({
          ...word,
          text: word.text.split(""),
        });
        return acc;
      }, [])
    );
  }, [text, words]);

  const srOnlyText = useMemo(() => {
    if (Array.isArray(words)) {
      return words.map(word => word.text).join(" ");
    }
    return text;
  }, [text, words]);

  const cursorWidth = {
    line: "2px",
    block: "8px",
    underscore: "auto",
  };

  const isUnderscoreCursor = (
    cursorVariant === "underscore"
  );

  return (
    <span
      {...restProps}
      ref={scope}
    >
      {wordsArr.map((word, wordIndex) => (
        <span
          aria-hidden={true}
          key={\`word-\${wordIndex}\`}
          className={word.className}
          style={{
            whiteSpace: "nowrap",
            wordBreak: "keep-all",
            ...word.style
          }}
        >
          {word.text.map((char, charIndex) => (
            <motion.span
              aria-hidden={true}
              key={\`word-\${wordIndex}-char-\${charIndex}\`}
              style={{
                opacity: 0,
                display: "none",
              }}
              className="char"
            >
              {char === " " ? <>&nbsp;</> : char}
            </motion.span>
          ))}
        </span>
      ))}
      {cursor && (
        <motion.span
          aria-hidden={true}
          className="bg-[currentColor] inline-block h-[100%] ml-[1px]"
          style={{
            opacity: blinkCursor ? 0 : 1,
            width: cursorWidth[cursorVariant],
            background: isUnderscoreCursor ? "transparent" : undefined,
          }}
          {...(blinkCursor && ({
            animate: {
              opacity: 1
            },
            transition: {
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }
          }))}
        >
          {isUnderscoreCursor ? "_" : <>&nbsp;</>}
        </motion.span>
      )}
      <span className="sr-only">
        {srOnlyText}
      </span>
    </span>
  )
};

export default memo(TypewriterAnimation);
`,ui=`import TypewriterAnimation from "@/registry/text-effects/typewriter-animation/typewriter-animation";

const TypewriterAnimationPreview = () => {
  return (
    <TypewriterAnimation
      className="text-gray-900 dark:text-gray-100 text-xl overflow-hidden"
      text="Typing the future, live."
    />
  )
};

export default TypewriterAnimationPreview;`,hi={},pi={};function In(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"text"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Simple text to type."})]}),t(e.tr,{children:[t(e.td,{children:"cursor"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"true"})}),t(e.td,{children:["Hides the typing cursor when set to ",t(e.code,{children:"false"}),"."]})]}),t(e.tr,{children:[t(e.td,{children:"blinkCursor"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"true"})}),t(e.td,{children:"Enables cursor blinking animation."})]}),t(e.tr,{children:[t(e.td,{children:"cursorVariant"}),t(e.td,{children:t(e.code,{children:'"line" | "block" | "underscore"'})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"line"'})}),t(e.td,{children:"Controls the visual style of the cursor."})]}),t(e.tr,{children:[t(e.td,{children:"stagger"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"0.1"})}),t(e.td,{children:"Time delay between each animated unit (in seconds)."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Optional class name applied to the root container."})]})]})]})}function mi(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(In,{...n})}):In(n)}const _e=(n={})=>mi({...n,components:{Fragment:A,...n.components}});_e[Symbol.for("mdx-component")]=!0;_e[Symbol.for("astro.needsHeadRendering")]=!pi.layout;_e.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/typewriter-animation/props.mdx";const se="typewriter-animation",Mn=N({id:se,name:"Typewriter Effect",description:"Animates text like a typewriter, with optional speed, cursor, and styling controls.",category:_.textEffect.id,dependencies:[k.motion.key,k.tailwind.key],preview:hi,previewClassName:"grid place-items-center",source:[{name:`${se}.tsx`,content:li,lang:"tsx"}],usage:[{name:`${se}-preview.tsx`,content:ui,lang:"tsx"}],componentsAPI:[{name:`${se}.tsx`,props:_e}]}),fi=`import { memo, useEffect, useState } from "react";
import { motion, useAnimate, type AnimationPlaybackControlsWithThen } from "motion/react";
import cn from "@/utils/cn";

export type VerticalTextSliderProps = {
  texts: string[];
  direction?: "up" | "down";
  yOffset?: number;
  visibleDuration?: number;
  className?: string;
} & React.ComponentProps<"span">;

const delay = (timeMs: number) => (
  new Promise(resolve => setTimeout(resolve, timeMs * 1000))
);

const VerticalTextSlider = ({
  texts,
  direction = "up",
  yOffset = 20,
  visibleDuration = 2,
  className,
  ...restProps
}: VerticalTextSliderProps) => {
  const textsLength = texts.length;

  const [activeTextIndex, setActiveTextIndex] = useState(0);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    let inAnimation: AnimationPlaybackControlsWithThen | null  = null;
    let outAnimation: AnimationPlaybackControlsWithThen | null = null;
    let cancelled = false;
    (async () => {
      inAnimation = animate(
        ".text",
        {
          y: [
            direction === "up" ? yOffset : -yOffset,
            0
          ],
          opacity: [0, 1],
        },
        {
          ease: "easeInOut",
          duration: 0.2,
        }
      );
      if(cancelled) return;
      await inAnimation;
      if(cancelled) return;
      await delay(visibleDuration);
      if(cancelled) return;
      outAnimation = animate(
        ".text",
        {
          y: direction === "up" ? -yOffset : yOffset,
          opacity: [1, 0],
        },
        {
          ease: "easeInOut",
          duration: 0.2,
        }
      )
      await outAnimation;
      if(cancelled) return;
      setActiveTextIndex((activeTextIndex + 1) % textsLength);
    })();
    return () => {
      cancelled = true;
      inAnimation?.stop();
      outAnimation?.stop();
    };
  }, [activeTextIndex, textsLength, yOffset]);

  return (
    <span
      {...restProps}
      ref={scope}
      className={cn("inline-block overflow-y-hidden", className)}
    >
      <motion.span
        className="text inline-block"
      >
        {texts[activeTextIndex]}
      </motion.span>
    </span>
  );
};

export default memo(VerticalTextSlider);`,gi=`import VerticalTextSlider from "@/registry/text-effects/vertical-text-slider/vertical-text-slider";

const VerticalTextSliderPreview = () => {
  return (
    <VerticalTextSlider
      className="text-gray-900 dark:text-gray-100 text-xl"
      texts={[
        "Build faster",
        "Ship smarter",
        "Scale confidently",
        "Delight users"
      ]}
    />
  )
};

export default VerticalTextSliderPreview;`,yi={},bi={};function Rn(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"texts"}),t(e.td,{children:t(e.code,{children:"string[]"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:"Array of text strings to display in the vertical slider."})]}),t(e.tr,{children:[t(e.td,{children:"direction"}),t(e.td,{children:t(e.code,{children:'"up" | "down"'})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"up"'})}),t(e.td,{children:["Slide direction. ",t(e.code,{children:'"up"'})," slides text upward, ",t(e.code,{children:'"down"'})," slides text downward."]})]}),t(e.tr,{children:[t(e.td,{children:"visibleDuration"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"2000"})}),t(e.td,{children:["Time (in milliseconds) each text remains fully visible before sliding out. Minimum: ",t(e.code,{children:"1000ms"}),"."]})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Optional class name applied to the root container."})]})]})]})}function xi(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(Rn,{...n})}):Rn(n)}const ke=(n={})=>xi({...n,components:{Fragment:A,...n.components}});ke[Symbol.for("mdx-component")]=!0;ke[Symbol.for("astro.needsHeadRendering")]=!bi.layout;ke.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/vertical-text-slider/props.mdx";const ae="vertical-text-slider",On=N({id:ae,name:"Vertical Text Slider",description:"Slides through an list of text vertically, pausing briefly on each item before transitioning to the next.",category:_.textEffect.id,preview:yi,previewClassName:"grid place-items-center",source:[{name:`${ae}.tsx`,content:fi,lang:"tsx"}],usage:[{name:`${ae}-preview.tsx`,content:gi,lang:"tsx"}],componentsAPI:[{name:`${ae}.tsx`,props:ke}]}),vi=`import { memo, useLayoutEffect, useMemo, useRef, type ReactNode } from "react";
import cn from "@/utils/cn";

export type AuroraBorderProps = {
  colors?: string[];
  width?: number; 
  glowIntensity?: number;
  speed?: number;
  className?: string;
  children?: ReactNode;
} & React.ComponentProps<"div">;

const AuroraBorder = (
  props: AuroraBorderProps
) => {
  const {
    children,
    colors = ["rgba(127, 127, 127, 1)"],
    width = 1,
    speed = 0.5,
    glowIntensity = 0.5,
    className,
    style,
    ...restProps
  } = props;

  const ref = useRef<HTMLDivElement>(null);

  const _width = useMemo(() => (
    Math.max(0, width)
  ), [width]);

  const _speed = useMemo(() => (
    Math.min(1, Math.max(0, speed))
  ), [speed]);

  const _intensity = useMemo(() => (
    20 * Math.min(1, Math.max(0, glowIntensity))
  ), [glowIntensity]);

  const gradient = useMemo(() => (
    \`conic-gradient(from var(--conic-angle), \${colors.join()})\`
  ), [colors]);

  useLayoutEffect(() => {
    let rafId: ReturnType<typeof requestAnimationFrame> | null = null;
    let conicAngle = 0;
    const updateConicAngle = () => {
      conicAngle += (_speed * 2);
      conicAngle = conicAngle % 360;
      if (ref.current) {
        ref.current.style.setProperty("--conic-angle", \`\${conicAngle}deg\`);
      }
      rafId = requestAnimationFrame(updateConicAngle);
    };
    rafId = requestAnimationFrame(updateConicAngle);
    return () => {
      if (!rafId) return;
      cancelAnimationFrame(rafId);
    };
  }, [_speed]);

  return (
    <div
      {...restProps}
      className={cn(
        "relative bg-neutal-900 dark:bg-gray-900 transition-[background] duration-100 ease-linear",
        "before:rounded-[inherit] before:content-[''] before:z-[-1] before:absolute before:[inset:calc(-1_*_var(--border-width))] before:[background:var(--gradient)]",
        "after:rounded-[inherit] after:content-[''] after:z-[-1] after:absolute after:inset-0 after:[filter:blur(var(--intensity))] after:[background:var(--gradient)]",
        className,
      )}
      ref={ref}
      style={{
        ...style,
        "--conic-angle-deg": "0deg",
        "--gradient": gradient,
        "--intensity": \`\${_intensity}px\`,
        "--border-width": \`\${_width}px\`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default memo(AuroraBorder);`,wi=`import AuroraBorder from "@/registry/visual-effects/aurora-border/aurora-border";

const AuroraBorderPreview = () => {
  return (
    <div className="isolate">
      <AuroraBorder
        className="max-w-sm rounded-xl p-6 bg-neutral-50 dark:bg-neutral-900"
        width={2}
        speed={1}
        colors={[
          "#60A5FA",
          "#A78BFA",
          "#F472B6",
          "#38BDF8",
          "#60A5FA",
        ]}
      >
        <ChartIcon className="inline-block w-10 h-10 mb-6 text-gray-900 dark:text-white"/>
        <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-3">
          AI-Powered Insights
        </h2>
        <p className="text-gray-700 dark:text-gray-400">
          Instantly analyze complex datasets with advanced AI algorithms, turning raw information into actionable insights that help you make smarter, faster, and more accurate decisions every single day.
        </p>
      </AuroraBorder>
    </div>
  );
};

const ChartIcon = (props) => {
  return (  
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" d="M5 20q-.425 0-.712-.288T4 19V9q0-.425.288-.712T5 8h2q.425 0 .713.288T8 9v10q0 .425-.288.713T7 20zm5 0q-.425 0-.712-.288T9 19v-5q0-.425.288-.712T10 13h2q.425 0 .713.288T13 14v5q0 .425-.288.713T12 20zm7 0q-.425 0-.712-.288T16 19V5q0-.425.288-.712T17 4h2q.425 0 .713.288T20 5v14q0 .425-.288.713T19 20z" />
    </svg>
  )
};

export default AuroraBorderPreview;`,_i={},ki={};function En(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"children"}),t(e.td,{children:t(e.code,{children:"ReactNode"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:"The content to be wrapped inside the AuraBorder."})]}),t(e.tr,{children:[t(e.td,{children:"colors"}),t(e.td,{children:t(e.code,{children:"string[]"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'["rgba(127, 127, 127, 1)"]'})}),t(e.td,{children:"Array of colors or gradients for the border glow. Accepts any valid CSS color."})]}),t(e.tr,{children:[t(e.td,{children:"width"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"1"})}),t(e.td,{children:"Width of the border in pixels. Minimum value: 0."})]}),t(e.tr,{children:[t(e.td,{children:"speed"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"0.5"})}),t(e.td,{children:"Speed of rotation. Value between 0 (no rotation) and 1 (fastest)."})]}),t(e.tr,{children:[t(e.td,{children:"intensity"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"0.5"})}),t(e.td,{children:"Glow intensity. Value between 0 (no glow) and 1 (maximum glow)."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Additional CSS class names applied to the wrapper."})]}),t(e.tr,{children:[t(e.td,{children:"style"}),t(e.td,{children:t(e.code,{children:"React.CSSProperties"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Inline styles applied directly to the wrapper container."})]})]})]})}function Ci(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(En,{...n})}):En(n)}const Ce=(n={})=>Ci({...n,components:{Fragment:A,...n.components}});Ce[Symbol.for("mdx-component")]=!0;Ce[Symbol.for("astro.needsHeadRendering")]=!ki.layout;Ce.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/visual-effects/aurora-border/props.mdx";const ce="aurora-border",Dn=N({id:ce,name:"Aurora Border",description:"A dynamic border component with rotation, blur, and glow effects for highlighting content.",category:_.visualEffects.id,dependencies:[k.tailwind.key],preview:_i,previewClassName:"grid place-items-center p-5",source:[{name:`${ce}.tsx`,content:vi,lang:"tsx"}],usage:[{name:`${ce}-preview.tsx`,content:wi,lang:"tsx"}],componentsAPI:[{name:`${ce}.tsx`,props:Ce}]}),zi=`import { memo, useMemo } from "react";
import { motion, type Easing } from "motion/react";
import cn from "@/utils/cn";

export type BorderBeamProps = {
  size?: number;
  width?: number;
  colors?: string[];
  duration?: number;
  offset?: number;
  reverse?: boolean;
  timingFn?: Easing | Easing[];
  className?: string;
  style?: React.CSSProperties,
} & React.ComponentProps<"span">;

export const BorderBeam = (
  props: BorderBeamProps
) => {
  const {
    size = 50,
    width = 1,
    colors = [
      "rgba(0, 0, 0, 0)",
      "rgba(127, 127, 127, 1)",
      "rgba(0, 0, 0, 0)"
    ],
    duration = 5,
    offset = 0,
    reverse = false,
    timingFn = "linear",
    className,
    style,
    ...restProps
  } = props;

  const _size = useMemo(() => Math.max(0, size), []);
  const _width = useMemo(() => Math.max(0, width), []);
  const _duration = useMemo(() => Math.max(0, duration), []);
  const _offset = useMemo(() => Math.min(100, Math.max(0, offset)), []);
  const gradient = useMemo(() => (
    \`linear-gradient(to left, \${colors.join()})\`
  ), [colors]);

  const variants = {
    start: {
      offsetDistance: \`\${_offset}%\`
    },
    end: {
      offsetDistance: \`\${_offset + 100}%\`
    }
  };

  return (
    <span
      {...restProps}
      aria-hidden="true"
      className={cn(
        "absolute border border-[#0000] rounded-[inherit] pointer-events-none",
        "[inset:var(--beam-width)]",
        "[border-width:var(--beam-border-width)]",
        "[mask-clip:padding-box,border-box]",
        "[mask-composite:intersect]",
        "[mask-image:linear-gradient(#0000,#0000),linear-gradient(#000,#000)]",
        className,
      )}
      style={{
        ...style,
        "--size": \`\${_size}px\`,
        "--beam-width": \`\${_width * -1}px\`,
        "--beam-border-width": \`\${_width}px\`,
        "--gradient": gradient,
      } as React.CSSProperties}
    >
      <motion.span
        className={cn(
          "absolute inset-0 z-[2] block pointer-events-none",
          "[width:var(--size)]",
          "[height:var(--size)]",
          "[background:var(--gradient)]",
          "[offset-path:rect(0px_auto_auto_0px_round_var(--size))]",
        )}
        variants={variants}
        animate={reverse ? "start" : "end"}
        style={variants[reverse ? "end" : "start"]}
        transition={{
          ease: timingFn,
          duration: _duration,
          repeat: Infinity,
        }}
      />
    </span>
  );
};

export default memo(BorderBeam);`,Si=`import BorderBeam from "@/registry/visual-effects/border-beam/border-beam";

const BorderBeamPreview = () => {
  return (
    <div className="relative w-80 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <BorderBeam
        colors={[
          "#84fab0",
          "#8fd3f4",
          "#0000",
        ]}
        width={2}
        size={200}
      />
      <BorderBeam
        colors={[
          "#84fab0",
          "#8fd3f4",
          "#0000",
        ]}
        width={2}
        size={200}
        offset={50}
      />
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl dark:bg-blue-500/10">
        ✨
      </div>
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        Border Beam
      </h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        A smooth animated beam that continuously travels around the border,
        creating a subtle yet eye-catching highlight for cards and UI elements.
      </p>
      <div className="mt-6 flex items-center justify-between">
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
          Interactive UI
        </span>
        <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200">
          Explore
        </button>
      </div>
    </div>
  )
}

export default BorderBeamPreview;`,$i={},Pi={};function jn(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"size"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"50"})}),t(e.td,{children:"Size of the animated beam effect"})]}),t(e.tr,{children:[t(e.td,{children:"width"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"1"})}),t(e.td,{children:"Thickness of the beam"})]}),t(e.tr,{children:[t(e.td,{children:"colors"}),t(e.td,{children:t(e.code,{children:"string[]"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'["rgba(0,0,0,0)", "rgba(127,127,127,1)", "rgba(0,0,0,0)"]'})}),t(e.td,{children:"Gradient colors used to render the beam effect"})]}),t(e.tr,{children:[t(e.td,{children:"duration"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"5"})}),t(e.td,{children:"Duration of the animation in seconds"})]}),t(e.tr,{children:[t(e.td,{children:"offset"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"0"})}),t(e.td,{children:"Offset position where the animation starts"})]}),t(e.tr,{children:[t(e.td,{children:"reverse"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"false"})}),t(e.td,{children:"Reverses the direction of the beam animation"})]}),t(e.tr,{children:[t(e.td,{children:"timingFn"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"linear"'})}),t(e.td,{children:["Motion animation timing function (e.g., ",t(e.code,{children:"ease"}),", ",t(e.code,{children:"linear"}),", ",t(e.code,{children:"easeInOut"}),")"]})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Additional CSS class names applied to the component"})]})]})]})}function Ni(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(jn,{...n})}):jn(n)}const ze=(n={})=>Ni({...n,components:{Fragment:A,...n.components}});ze[Symbol.for("mdx-component")]=!0;ze[Symbol.for("astro.needsHeadRendering")]=!Pi.layout;ze.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/visual-effects/border-beam/props.mdx";const de="border-beam",qn=N({id:de,name:"Border Beam",description:"A customizable animated beam that travels along the border of a container for a dynamic visual highlight.",category:_.visualEffects.id,dependencies:[k.motion.key,k.tailwind.key],preview:$i,previewClassName:"grid place-items-center",source:[{name:`${de}.tsx`,content:zi,lang:"tsx"}],usage:[{name:`${de}-preview.tsx`,content:Si,lang:"tsx"}],componentsAPI:[{name:`${de}.tsx`,props:ze}]}),st={[_.component.key]:{[wn.id]:wn,[kn.id]:kn},[_.textEffect.key]:{[zn.id]:zn,[$n.id]:$n,[Nn.id]:Nn,[An.id]:An,[Mn.id]:Mn,[On.id]:On},[_.background.key]:{[yn.id]:yn,[xn.id]:xn},[_.visualEffects.key]:{[Dn.id]:Dn,[qn.id]:qn}};Object.values(st).reduce((n,e)=>({...n,...e}),{});const Zn=Object.freeze([{label:"Get Started",entries:[{label:"Introduction",href:"/introduction/"},{label:"Installation",href:"/installation/"},{label:"Components",href:"/components/"}]},...Object.entries(st).map(([n,e])=>({label:_[n].name,entries:Object.values(e).map(r=>({label:r.name,href:`/components/${r.id}/`}))}))]),Ti=(n,e)=>n.replace(/\/$/,"")===e.replace(/\/$/,""),Ei=({activePath:n=""})=>{const[e,r]=b.useState(!1),o=b.useCallback(()=>{r(!0)},[]);return b.useEffect(()=>(document.documentElement.addEventListener("sidebar-open",o),()=>{document.documentElement.removeEventListener("sidebar-open",o)}),[o]),v.jsx(kt,{children:e&&v.jsxs(v.Fragment,{children:[v.jsx(Ze.div,{className:"h-screen md:h-[calc(100%_-_32px)] w-[280px] top-0 left-0 md:top-[16px] md:left-[16px] bg-white dark:bg-neutral-950 fixed z-[102] rounded-md overflow-y-auto border border-zinc-300 dark:border-zinc-900",style:{x:-100,opacity:0},animate:{x:e?0:-320,opacity:e?1:0},exit:{x:-100,opacity:0},transition:{ease:"circInOut",type:"tween",duration:.3},children:Zn.map((i,a)=>v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"py-4",children:[v.jsx("span",{className:"text-gray-800 dark:text-gray-200 px-3 block mb-2 font-semibold",children:i.label}),v.jsx("ul",{children:i.entries.map(s=>v.jsx("li",{children:v.jsx("a",{href:s.href,className:`${Ti(n,s.href)?"text-blue-600 bg-blue-600/10 dark:text-blue-500 hover:text-blue-600 hover:dark:text-blue-500":"text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"}  block py-[4px] px-2 pl-4 cursor-pointer`,children:s.label})}))})]}),a!==Zn.length-1&&v.jsx("div",{className:"h-[1px] bg-zinc-200 dark:bg-zinc-900"})]}))}),v.jsx(Ze.div,{className:"fixed top-0 left-0 w-full h-full z-[101] inset-[0] backdrop-blur-[5px]",onTap:()=>r(!1)})]})})};export{Ei as default};
