import{j as z}from"./jsx-runtime.u17CrQMm.js";import{a as ge}from"./index.UEuQJ2Tp.js";import{p as Xn,m as Yn}from"./preview-switch.UBkuet_E.js";import{p as Gn,m as Kn}from"./preview-switch.B7Af6ae5.js";import{A as Qn}from"./index.DWouYTcC.js";import{m as Pe}from"./proxy.DMw4xDb8.js";const y=Object.freeze({background:{key:"background",id:"backgrounds",name:"Backgrounds"},component:{key:"component",id:"components",name:"Components"},textEffect:{key:"textEffect",id:"text-effects",name:"Text Effects"},visualEffects:{key:"visualEffects",id:"visual-effects",name:"Visual Effects"}}),S=n=>({...n}),et=`import { useState, useRef, useEffect, useLayoutEffect, useMemo, useCallback } from "react";
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

export default NightSkyBackground;`,nt=`import NightSkyBackground from "@/registry/backgrounds/night-sky-background/night-sky-background";

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

export default NightSkyBackgroundPreview;`,tt={};let K=globalThis.process||{},$e=K.argv||[],q=K.env||{};!(q.NO_COLOR||$e.includes("--no-color"))&&(q.FORCE_COLOR||$e.includes("--color")||K.platform==="win32"||(K.stdout||{}).isTTY&&q.TERM!=="dumb"||q.CI);const Tn=Symbol.for("astro:html-string");class rt extends String{[Tn]=!0}const Mn=n=>ot(n)?n:typeof n=="string"?new rt(n):n;function ot(n){return!!n?.[Tn]}typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]"&&(typeof navigator<"u"&&navigator.userAgent);var Te;(function(n){n[n.Include=0]="Include",n[n.None=1]="None"})(Te||(Te={}));var Me;(function(n){n[n.Required=0]="Required",n[n.Ignore=1]="Ignore"})(Me||(Me={}));var Ie;(function(n){n[n.Include=0]="Include",n[n.None=1]="None"})(Ie||(Ie={}));var Ae;(function(n){n[n.Required=0]="Required",n[n.Ignore=1]="Ignore"})(Ae||(Ae={}));var Re;function u(n,e,r){function o(c,d){if(c._zod||Object.defineProperty(c,"_zod",{value:{def:d,constr:s,traits:new Set},enumerable:!1}),c._zod.traits.has(n))return;c._zod.traits.add(n),e(c,d);const l=s.prototype,h=Object.keys(l);for(let p=0;p<h.length;p++){const g=h[p];g in c||(c[g]=l[g].bind(c))}}const i=r?.Parent??Object;class a extends i{}Object.defineProperty(a,"name",{value:n});function s(c){var d;const l=r?.Parent?new a:this;o(l,c),(d=l._zod).deferred??(d.deferred=[]);for(const h of l._zod.deferred)h();return l}return Object.defineProperty(s,"init",{value:o}),Object.defineProperty(s,Symbol.hasInstance,{value:c=>r?.Parent&&c instanceof r.Parent?!0:c?._zod?.traits?.has(n)}),Object.defineProperty(s,"name",{value:n}),s}class A extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class In extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}(Re=globalThis).__zod_globalConfig??(Re.__zod_globalConfig={});const it=globalThis.__zod_globalConfig;function T(n){return it}function An(n){const e=Object.values(n).filter(o=>typeof o=="number");return Object.entries(n).filter(([o,i])=>e.indexOf(+o)===-1).map(([o,i])=>i)}function xe(n,e){return typeof e=="bigint"?e.toString():e}function _e(n){return n==null}function Ce(n){const e=n.startsWith("^")?1:0,r=n.endsWith("$")?n.length-1:n.length;return n.slice(e,r)}const Oe=Symbol("evaluating");function m(n,e,r){let o;Object.defineProperty(n,e,{get(){if(o!==Oe)return o===void 0&&(o=Oe,o=r()),o},set(i){Object.defineProperty(n,e,{value:i})},configurable:!0})}function st(...n){const e={};for(const r of n){const o=Object.getOwnPropertyDescriptors(r);Object.assign(e,o)}return Object.defineProperties({},e)}const Rn="captureStackTrace"in Error?Error.captureStackTrace:(...n)=>{};function De(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function ve(n){if(De(n)===!1)return!1;const e=n.constructor;if(e===void 0||typeof e!="function")return!0;const r=e.prototype;return!(De(r)===!1||Object.prototype.hasOwnProperty.call(r,"isPrototypeOf")===!1)}function On(n){return ve(n)?{...n}:Array.isArray(n)?[...n]:n instanceof Map?new Map(n):n instanceof Set?new Set(n):n}const at=new Set(["string","number","symbol"]);function ct(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function dt(n,e,r){const o=new n._zod.constr(e??n._zod.def);return(!e||r?.parent)&&(o._zod.parent=n),o}function N(n){const e=n;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function I(n,e=0){if(n.aborted===!0)return!0;for(let r=e;r<n.issues.length;r++)if(n.issues[r]?.continue!==!0)return!0;return!1}function lt(n,e=0){if(n.aborted===!0)return!0;for(let r=e;r<n.issues.length;r++)if(n.issues[r]?.continue===!1)return!0;return!1}function ut(n,e){return e.map(r=>{var o;return(o=r).path??(o.path=[]),r.path.unshift(n),r})}function L(n){return typeof n=="string"?n:n?.message}function M(n,e,r){const o=n.message?n.message:L(n.inst?._zod.def?.error?.(n))??L(e?.error?.(n))??L(r.customError?.(n))??L(r.localeError?.(n))??"Invalid input",{inst:i,continue:a,input:s,...c}=n;return c.path??(c.path=[]),c.message=o,e?.reportInput&&(c.input=s),c}function ze(n){return Array.isArray(n)?"array":typeof n=="string"?"string":"unknown"}function E(...n){const[e,r,o]=n;return typeof e=="string"?{message:e,code:"custom",input:r,inst:o}:{...e}}const Dn=(n,e)=>{n.name="$ZodError",Object.defineProperty(n,"_zod",{value:n._zod,enumerable:!1}),Object.defineProperty(n,"issues",{value:e,enumerable:!1}),n.message=JSON.stringify(e,xe,2),Object.defineProperty(n,"toString",{value:()=>n.message,enumerable:!1})},En=u("$ZodError",Dn),qn=u("$ZodError",Dn,{Parent:Error});function ht(n,e=r=>r.message){const r={},o=[];for(const i of n.issues)i.path.length>0?(r[i.path[0]]=r[i.path[0]]||[],r[i.path[0]].push(e(i))):o.push(e(i));return{formErrors:o,fieldErrors:r}}function mt(n,e=r=>r.message){const r={_errors:[]},o=(i,a=[])=>{for(const s of i.issues)if(s.code==="invalid_union"&&s.errors.length)s.errors.map(c=>o({issues:c},[...a,...s.path]));else if(s.code==="invalid_key")o({issues:s.issues},[...a,...s.path]);else if(s.code==="invalid_element")o({issues:s.issues},[...a,...s.path]);else{const c=[...a,...s.path];if(c.length===0)r._errors.push(e(s));else{let d=r,l=0;for(;l<c.length;){const h=c[l];l===c.length-1?(d[h]=d[h]||{_errors:[]},d[h]._errors.push(e(s))):d[h]=d[h]||{_errors:[]},d=d[h],l++}}}};return o(n),r}const Se=n=>(e,r,o,i)=>{const a=o?{...o,async:!1}:{async:!1},s=e._zod.run({value:r,issues:[]},a);if(s instanceof Promise)throw new A;if(s.issues.length){const c=new(i?.Err??n)(s.issues.map(d=>M(d,a,T())));throw Rn(c,i?.callee),c}return s.value},Ne=n=>async(e,r,o,i)=>{const a=o?{...o,async:!0}:{async:!0};let s=e._zod.run({value:r,issues:[]},a);if(s instanceof Promise&&(s=await s),s.issues.length){const c=new(i?.Err??n)(s.issues.map(d=>M(d,a,T())));throw Rn(c,i?.callee),c}return s.value},ee=n=>(e,r,o)=>{const i=o?{...o,async:!1}:{async:!1},a=e._zod.run({value:r,issues:[]},i);if(a instanceof Promise)throw new A;return a.issues.length?{success:!1,error:new(n??En)(a.issues.map(s=>M(s,i,T())))}:{success:!0,data:a.value}},pt=ee(qn),ne=n=>async(e,r,o)=>{const i=o?{...o,async:!0}:{async:!0};let a=e._zod.run({value:r,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?{success:!1,error:new n(a.issues.map(s=>M(s,i,T())))}:{success:!0,data:a.value}},ft=ne(qn),gt=n=>(e,r,o)=>{const i=o?{...o,direction:"backward"}:{direction:"backward"};return Se(n)(e,r,i)},yt=n=>(e,r,o)=>Se(n)(e,r,o),bt=n=>async(e,r,o)=>{const i=o?{...o,direction:"backward"}:{direction:"backward"};return Ne(n)(e,r,i)},xt=n=>async(e,r,o)=>Ne(n)(e,r,o),vt=n=>(e,r,o)=>{const i=o?{...o,direction:"backward"}:{direction:"backward"};return ee(n)(e,r,i)},wt=n=>(e,r,o)=>ee(n)(e,r,o),kt=n=>async(e,r,o)=>{const i=o?{...o,direction:"backward"}:{direction:"backward"};return ne(n)(e,r,i)},_t=n=>async(e,r,o)=>ne(n)(e,r,o),R=u("$ZodCheck",(n,e)=>{var r;n._zod??(n._zod={}),n._zod.def=e,(r=n._zod).onattach??(r.onattach=[])}),Ct=u("$ZodCheckMaxLength",(n,e)=>{var r;R.init(n,e),(r=n._zod.def).when??(r.when=o=>{const i=o.value;return!_e(i)&&i.length!==void 0}),n._zod.onattach.push(o=>{const i=o._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<i&&(o._zod.bag.maximum=e.maximum)}),n._zod.check=o=>{const i=o.value;if(i.length<=e.maximum)return;const s=ze(i);o.issues.push({origin:s,code:"too_big",maximum:e.maximum,inclusive:!0,input:i,inst:n,continue:!e.abort})}}),zt=u("$ZodCheckMinLength",(n,e)=>{var r;R.init(n,e),(r=n._zod.def).when??(r.when=o=>{const i=o.value;return!_e(i)&&i.length!==void 0}),n._zod.onattach.push(o=>{const i=o._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>i&&(o._zod.bag.minimum=e.minimum)}),n._zod.check=o=>{const i=o.value;if(i.length>=e.minimum)return;const s=ze(i);o.issues.push({origin:s,code:"too_small",minimum:e.minimum,inclusive:!0,input:i,inst:n,continue:!e.abort})}}),St=u("$ZodCheckLengthEquals",(n,e)=>{var r;R.init(n,e),(r=n._zod.def).when??(r.when=o=>{const i=o.value;return!_e(i)&&i.length!==void 0}),n._zod.onattach.push(o=>{const i=o._zod.bag;i.minimum=e.length,i.maximum=e.length,i.length=e.length}),n._zod.check=o=>{const i=o.value,a=i.length;if(a===e.length)return;const s=ze(i),c=a>e.length;o.issues.push({origin:s,...c?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:o.value,inst:n,continue:!e.abort})}}),Nt=u("$ZodCheckOverwrite",(n,e)=>{R.init(n,e),n._zod.check=r=>{r.value=e.tx(r.value)}}),Pt={major:4,minor:4,patch:3},k=u("$ZodType",(n,e)=>{var r;n??(n={}),n._zod.def=e,n._zod.bag=n._zod.bag||{},n._zod.version=Pt;const o=[...n._zod.def.checks??[]];n._zod.traits.has("$ZodCheck")&&o.unshift(n);for(const i of o)for(const a of i._zod.onattach)a(n);if(o.length===0)(r=n._zod).deferred??(r.deferred=[]),n._zod.deferred?.push(()=>{n._zod.run=n._zod.parse});else{const i=(s,c,d)=>{let l=I(s),h;for(const p of c){if(p._zod.def.when){if(lt(s)||!p._zod.def.when(s))continue}else if(l)continue;const g=s.issues.length,f=p._zod.check(s);if(f instanceof Promise&&d?.async===!1)throw new A;if(h||f instanceof Promise)h=(h??Promise.resolve()).then(async()=>{await f,s.issues.length!==g&&(l||(l=I(s,g)))});else{if(s.issues.length===g)continue;l||(l=I(s,g))}}return h?h.then(()=>s):s},a=(s,c,d)=>{if(I(s))return s.aborted=!0,s;const l=i(c,o,d);if(l instanceof Promise){if(d.async===!1)throw new A;return l.then(h=>n._zod.parse(h,d))}return n._zod.parse(l,d)};n._zod.run=(s,c)=>{if(c.skipChecks)return n._zod.parse(s,c);if(c.direction==="backward"){const l=n._zod.parse({value:s.value,issues:[]},{...c,skipChecks:!0});return l instanceof Promise?l.then(h=>a(h,s,c)):a(l,s,c)}const d=n._zod.parse(s,c);if(d instanceof Promise){if(c.async===!1)throw new A;return d.then(l=>i(l,o,c))}return i(d,o,c)}}m(n,"~standard",()=>({validate:i=>{try{const a=pt(n,i);return a.success?{value:a.data}:{issues:a.error?.issues}}catch{return ft(n,i).then(s=>s.success?{value:s.data}:{issues:s.error?.issues})}},vendor:"zod",version:1}))});function Ee(n,e,r){n.issues.length&&e.issues.push(...ut(r,n.issues)),e.value[r]=n.value}const $t=u("$ZodArray",(n,e)=>{k.init(n,e),n._zod.parse=(r,o)=>{const i=r.value;if(!Array.isArray(i))return r.issues.push({expected:"array",code:"invalid_type",input:i,inst:n}),r;r.value=Array(i.length);const a=[];for(let s=0;s<i.length;s++){const c=i[s],d=e.element._zod.run({value:c,issues:[]},o);d instanceof Promise?a.push(d.then(l=>Ee(l,r,s))):Ee(d,r,s)}return a.length?Promise.all(a).then(()=>r):r}});function qe(n,e,r,o){for(const a of n)if(a.issues.length===0)return e.value=a.value,e;const i=n.filter(a=>!I(a));return i.length===1?(e.value=i[0].value,i[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:r,errors:n.map(a=>a.issues.map(s=>M(s,o,T())))}),e)}const Tt=u("$ZodUnion",(n,e)=>{k.init(n,e),m(n._zod,"optin",()=>e.options.some(o=>o._zod.optin==="optional")?"optional":void 0),m(n._zod,"optout",()=>e.options.some(o=>o._zod.optout==="optional")?"optional":void 0),m(n._zod,"values",()=>{if(e.options.every(o=>o._zod.values))return new Set(e.options.flatMap(o=>Array.from(o._zod.values)))}),m(n._zod,"pattern",()=>{if(e.options.every(o=>o._zod.pattern)){const o=e.options.map(i=>i._zod.pattern);return new RegExp(`^(${o.map(i=>Ce(i.source)).join("|")})$`)}});const r=e.options.length===1?e.options[0]._zod.run:null;n._zod.parse=(o,i)=>{if(r)return r(o,i);let a=!1;const s=[];for(const c of e.options){const d=c._zod.run({value:o.value,issues:[]},i);if(d instanceof Promise)s.push(d),a=!0;else{if(d.issues.length===0)return d;s.push(d)}}return a?Promise.all(s).then(c=>qe(c,o,n,i)):qe(s,o,n,i)}}),Mt=u("$ZodIntersection",(n,e)=>{k.init(n,e),n._zod.parse=(r,o)=>{const i=r.value,a=e.left._zod.run({value:i,issues:[]},o),s=e.right._zod.run({value:i,issues:[]},o);return a instanceof Promise||s instanceof Promise?Promise.all([a,s]).then(([d,l])=>Le(r,d,l)):Le(r,a,s)}});function we(n,e){if(n===e)return{valid:!0,data:n};if(n instanceof Date&&e instanceof Date&&+n==+e)return{valid:!0,data:n};if(ve(n)&&ve(e)){const r=Object.keys(e),o=Object.keys(n).filter(a=>r.indexOf(a)!==-1),i={...n,...e};for(const a of o){const s=we(n[a],e[a]);if(!s.valid)return{valid:!1,mergeErrorPath:[a,...s.mergeErrorPath]};i[a]=s.data}return{valid:!0,data:i}}if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return{valid:!1,mergeErrorPath:[]};const r=[];for(let o=0;o<n.length;o++){const i=n[o],a=e[o],s=we(i,a);if(!s.valid)return{valid:!1,mergeErrorPath:[o,...s.mergeErrorPath]};r.push(s.data)}return{valid:!0,data:r}}return{valid:!1,mergeErrorPath:[]}}function Le(n,e,r){const o=new Map;let i;for(const c of e.issues)if(c.code==="unrecognized_keys"){i??(i=c);for(const d of c.keys)o.has(d)||o.set(d,{}),o.get(d).l=!0}else n.issues.push(c);for(const c of r.issues)if(c.code==="unrecognized_keys")for(const d of c.keys)o.has(d)||o.set(d,{}),o.get(d).r=!0;else n.issues.push(c);const a=[...o].filter(([,c])=>c.l&&c.r).map(([c])=>c);if(a.length&&i&&n.issues.push({...i,keys:a}),I(n))return n;const s=we(e.value,r.value);if(!s.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);return n.value=s.data,n}const It=u("$ZodEnum",(n,e)=>{k.init(n,e);const r=An(e.entries),o=new Set(r);n._zod.values=o,n._zod.pattern=new RegExp(`^(${r.filter(i=>at.has(typeof i)).map(i=>typeof i=="string"?ct(i):i.toString()).join("|")})$`),n._zod.parse=(i,a)=>{const s=i.value;return o.has(s)||i.issues.push({code:"invalid_value",values:r,input:s,inst:n}),i}}),At=u("$ZodTransform",(n,e)=>{k.init(n,e),n._zod.optin="optional",n._zod.parse=(r,o)=>{if(o.direction==="backward")throw new In(n.constructor.name);const i=e.transform(r.value,r);if(o.async)return(i instanceof Promise?i:Promise.resolve(i)).then(s=>(r.value=s,r.fallback=!0,r));if(i instanceof Promise)throw new A;return r.value=i,r.fallback=!0,r}});function je(n,e){return e===void 0&&(n.issues.length||n.fallback)?{issues:[],value:void 0}:n}const Ln=u("$ZodOptional",(n,e)=>{k.init(n,e),n._zod.optin="optional",n._zod.optout="optional",m(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),m(n._zod,"pattern",()=>{const r=e.innerType._zod.pattern;return r?new RegExp(`^(${Ce(r.source)})?$`):void 0}),n._zod.parse=(r,o)=>{if(e.innerType._zod.optin==="optional"){const i=r.value,a=e.innerType._zod.run(r,o);return a instanceof Promise?a.then(s=>je(s,i)):je(a,i)}return r.value===void 0?r:e.innerType._zod.run(r,o)}}),Rt=u("$ZodExactOptional",(n,e)=>{Ln.init(n,e),m(n._zod,"values",()=>e.innerType._zod.values),m(n._zod,"pattern",()=>e.innerType._zod.pattern),n._zod.parse=(r,o)=>e.innerType._zod.run(r,o)}),Ot=u("$ZodNullable",(n,e)=>{k.init(n,e),m(n._zod,"optin",()=>e.innerType._zod.optin),m(n._zod,"optout",()=>e.innerType._zod.optout),m(n._zod,"pattern",()=>{const r=e.innerType._zod.pattern;return r?new RegExp(`^(${Ce(r.source)}|null)$`):void 0}),m(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),n._zod.parse=(r,o)=>r.value===null?r:e.innerType._zod.run(r,o)}),Dt=u("$ZodDefault",(n,e)=>{k.init(n,e),n._zod.optin="optional",m(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(r,o)=>{if(o.direction==="backward")return e.innerType._zod.run(r,o);if(r.value===void 0)return r.value=e.defaultValue,r;const i=e.innerType._zod.run(r,o);return i instanceof Promise?i.then(a=>Be(a,e)):Be(i,e)}});function Be(n,e){return n.value===void 0&&(n.value=e.defaultValue),n}const Et=u("$ZodPrefault",(n,e)=>{k.init(n,e),n._zod.optin="optional",m(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(r,o)=>(o.direction==="backward"||r.value===void 0&&(r.value=e.defaultValue),e.innerType._zod.run(r,o))}),qt=u("$ZodNonOptional",(n,e)=>{k.init(n,e),m(n._zod,"values",()=>{const r=e.innerType._zod.values;return r?new Set([...r].filter(o=>o!==void 0)):void 0}),n._zod.parse=(r,o)=>{const i=e.innerType._zod.run(r,o);return i instanceof Promise?i.then(a=>He(a,n)):He(i,n)}});function He(n,e){return!n.issues.length&&n.value===void 0&&n.issues.push({code:"invalid_type",expected:"nonoptional",input:n.value,inst:e}),n}const Lt=u("$ZodCatch",(n,e)=>{k.init(n,e),n._zod.optin="optional",m(n._zod,"optout",()=>e.innerType._zod.optout),m(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(r,o)=>{if(o.direction==="backward")return e.innerType._zod.run(r,o);const i=e.innerType._zod.run(r,o);return i instanceof Promise?i.then(a=>(r.value=a.value,a.issues.length&&(r.value=e.catchValue({...r,error:{issues:a.issues.map(s=>M(s,o,T()))},input:r.value}),r.issues=[],r.fallback=!0),r)):(r.value=i.value,i.issues.length&&(r.value=e.catchValue({...r,error:{issues:i.issues.map(a=>M(a,o,T()))},input:r.value}),r.issues=[],r.fallback=!0),r)}}),jt=u("$ZodPipe",(n,e)=>{k.init(n,e),m(n._zod,"values",()=>e.in._zod.values),m(n._zod,"optin",()=>e.in._zod.optin),m(n._zod,"optout",()=>e.out._zod.optout),m(n._zod,"propValues",()=>e.in._zod.propValues),n._zod.parse=(r,o)=>{if(o.direction==="backward"){const a=e.out._zod.run(r,o);return a instanceof Promise?a.then(s=>j(s,e.in,o)):j(a,e.in,o)}const i=e.in._zod.run(r,o);return i instanceof Promise?i.then(a=>j(a,e.out,o)):j(i,e.out,o)}});function j(n,e,r){return n.issues.length?(n.aborted=!0,n):e._zod.run({value:n.value,issues:n.issues,fallback:n.fallback},r)}const Bt=u("$ZodReadonly",(n,e)=>{k.init(n,e),m(n._zod,"propValues",()=>e.innerType._zod.propValues),m(n._zod,"values",()=>e.innerType._zod.values),m(n._zod,"optin",()=>e.innerType?._zod?.optin),m(n._zod,"optout",()=>e.innerType?._zod?.optout),n._zod.parse=(r,o)=>{if(o.direction==="backward")return e.innerType._zod.run(r,o);const i=e.innerType._zod.run(r,o);return i instanceof Promise?i.then(Ze):Ze(i)}});function Ze(n){return n.value=Object.freeze(n.value),n}const Ht=u("$ZodCustom",(n,e)=>{R.init(n,e),k.init(n,e),n._zod.parse=(r,o)=>r,n._zod.check=r=>{const o=r.value,i=e.fn(o);if(i instanceof Promise)return i.then(a=>Fe(a,r,o,n));Fe(i,r,o,n)}});function Fe(n,e,r,o){if(!n){const i={code:"custom",input:r,inst:o,path:[...o._zod.def.path??[]],continue:!o._zod.def.abort};o._zod.def.params&&(i.params=o._zod.def.params),e.issues.push(E(i))}}var Ve;class Zt{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...r){const o=r[0];return this._map.set(e,o),o&&typeof o=="object"&&"id"in o&&this._idmap.set(o.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const r=this._map.get(e);return r&&typeof r=="object"&&"id"in r&&this._idmap.delete(r.id),this._map.delete(e),this}get(e){const r=e._zod.parent;if(r){const o={...this.get(r)??{}};delete o.id;const i={...o,...this._map.get(e)};return Object.keys(i).length?i:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function Ft(){return new Zt}(Ve=globalThis).__zod_globalRegistry??(Ve.__zod_globalRegistry=Ft());const D=globalThis.__zod_globalRegistry;function Vt(n,e){return new Ct({check:"max_length",...N(e),maximum:n})}function We(n,e){return new zt({check:"min_length",...N(e),minimum:n})}function Wt(n,e){return new St({check:"length_equals",...N(e),length:n})}function Ut(n){return new Nt({check:"overwrite",tx:n})}function Jt(n,e,r){return new n({type:"array",element:e,...N(r)})}function Xt(n,e,r){const o=N(r);return o.abort??(o.abort=!0),new n({type:"custom",check:"custom",fn:e,...o})}function Yt(n,e,r){return new n({type:"custom",check:"custom",fn:e,...N(r)})}function Gt(n,e){const r=Kt(o=>(o.addIssue=i=>{if(typeof i=="string")o.issues.push(E(i,o.value,r._zod.def));else{const a=i;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),a.input??(a.input=o.value),a.inst??(a.inst=r),a.continue??(a.continue=!r._zod.def.abort),o.issues.push(E(a))}},n(o.value,o)),e);return r}function Kt(n,e){const r=new R({check:"custom",...N(e)});return r._zod.check=n,r}function jn(n){let e=n?.target??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:n.processors??{},metadataRegistry:n?.metadata??D,target:e,unrepresentable:n?.unrepresentable??"throw",override:n?.override??(()=>{}),io:n?.io??"output",counter:0,seen:new Map,cycles:n?.cycles??"ref",reused:n?.reused??"inline",external:n?.external??void 0}}function w(n,e,r={path:[],schemaPath:[]}){var o;const i=n._zod.def,a=e.seen.get(n);if(a)return a.count++,r.schemaPath.includes(n)&&(a.cycle=r.path),a.schema;const s={schema:{},count:1,cycle:void 0,path:r.path};e.seen.set(n,s);const c=n._zod.toJSONSchema?.();if(c)s.schema=c;else{const h={...r,schemaPath:[...r.schemaPath,n],path:r.path};if(n._zod.processJSONSchema)n._zod.processJSONSchema(e,s.schema,h);else{const g=s.schema,f=e.processors[i.type];if(!f)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);f(n,e,g,h)}const p=n._zod.parent;p&&(s.ref||(s.ref=p),w(p,e,h),e.seen.get(p).isParent=!0)}const d=e.metadataRegistry.get(n);return d&&Object.assign(s.schema,d),e.io==="input"&&v(n)&&(delete s.schema.examples,delete s.schema.default),e.io==="input"&&"_prefault"in s.schema&&((o=s.schema).default??(o.default=s.schema._prefault)),delete s.schema._prefault,e.seen.get(n).schema}function Bn(n,e){const r=n.seen.get(e);if(!r)throw new Error("Unprocessed schema. This is a bug in Zod.");const o=new Map;for(const s of n.seen.entries()){const c=n.metadataRegistry.get(s[0])?.id;if(c){const d=o.get(c);if(d&&d!==s[0])throw new Error(`Duplicate schema id "${c}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);o.set(c,s[0])}}const i=s=>{const c=n.target==="draft-2020-12"?"$defs":"definitions";if(n.external){const p=n.external.registry.get(s[0])?.id,g=n.external.uri??(x=>x);if(p)return{ref:g(p)};const f=s[1].defId??s[1].schema.id??`schema${n.counter++}`;return s[1].defId=f,{defId:f,ref:`${g("__shared")}#/${c}/${f}`}}if(s[1]===r)return{ref:"#"};const l=`#/${c}/`,h=s[1].schema.id??`__schema${n.counter++}`;return{defId:h,ref:l+h}},a=s=>{if(s[1].schema.$ref)return;const c=s[1],{ref:d,defId:l}=i(s);c.def={...c.schema},l&&(c.defId=l);const h=c.schema;for(const p in h)delete h[p];h.$ref=d};if(n.cycles==="throw")for(const s of n.seen.entries()){const c=s[1];if(c.cycle)throw new Error(`Cycle detected: #/${c.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const s of n.seen.entries()){const c=s[1];if(e===s[0]){a(s);continue}if(n.external){const l=n.external.registry.get(s[0])?.id;if(e!==s[0]&&l){a(s);continue}}if(n.metadataRegistry.get(s[0])?.id){a(s);continue}if(c.cycle){a(s);continue}if(c.count>1&&n.reused==="ref"){a(s);continue}}}function Hn(n,e){const r=n.seen.get(e);if(!r)throw new Error("Unprocessed schema. This is a bug in Zod.");const o=c=>{const d=n.seen.get(c);if(d.ref===null)return;const l=d.def??d.schema,h={...l},p=d.ref;if(d.ref=null,p){o(p);const f=n.seen.get(p),x=f.schema;if(x.$ref&&(n.target==="draft-07"||n.target==="draft-04"||n.target==="openapi-3.0")?(l.allOf=l.allOf??[],l.allOf.push(x)):Object.assign(l,x),Object.assign(l,h),c._zod.parent===p)for(const $ in l)$==="$ref"||$==="allOf"||$ in h||delete l[$];if(x.$ref&&f.def)for(const $ in l)$==="$ref"||$==="allOf"||$ in f.def&&JSON.stringify(l[$])===JSON.stringify(f.def[$])&&delete l[$]}const g=c._zod.parent;if(g&&g!==p){o(g);const f=n.seen.get(g);if(f?.schema.$ref&&(l.$ref=f.schema.$ref,f.def))for(const x in l)x==="$ref"||x==="allOf"||x in f.def&&JSON.stringify(l[x])===JSON.stringify(f.def[x])&&delete l[x]}n.override({zodSchema:c,jsonSchema:l,path:d.path??[]})};for(const c of[...n.seen.entries()].reverse())o(c[0]);const i={};if(n.target==="draft-2020-12"?i.$schema="https://json-schema.org/draft/2020-12/schema":n.target==="draft-07"?i.$schema="http://json-schema.org/draft-07/schema#":n.target==="draft-04"?i.$schema="http://json-schema.org/draft-04/schema#":n.target,n.external?.uri){const c=n.external.registry.get(e)?.id;if(!c)throw new Error("Schema is missing an `id` property");i.$id=n.external.uri(c)}Object.assign(i,r.def??r.schema);const a=n.metadataRegistry.get(e)?.id;a!==void 0&&i.id===a&&delete i.id;const s=n.external?.defs??{};for(const c of n.seen.entries()){const d=c[1];d.def&&d.defId&&(d.def.id===d.defId&&delete d.def.id,s[d.defId]=d.def)}n.external||Object.keys(s).length>0&&(n.target==="draft-2020-12"?i.$defs=s:i.definitions=s);try{const c=JSON.parse(JSON.stringify(i));return Object.defineProperty(c,"~standard",{value:{...e["~standard"],jsonSchema:{input:Q(e,"input",n.processors),output:Q(e,"output",n.processors)}},enumerable:!1,writable:!1}),c}catch{throw new Error("Error converting schema to JSON.")}}function v(n,e){const r=e??{seen:new Set};if(r.seen.has(n))return!1;r.seen.add(n);const o=n._zod.def;if(o.type==="transform")return!0;if(o.type==="array")return v(o.element,r);if(o.type==="set")return v(o.valueType,r);if(o.type==="lazy")return v(o.getter(),r);if(o.type==="promise"||o.type==="optional"||o.type==="nonoptional"||o.type==="nullable"||o.type==="readonly"||o.type==="default"||o.type==="prefault")return v(o.innerType,r);if(o.type==="intersection")return v(o.left,r)||v(o.right,r);if(o.type==="record"||o.type==="map")return v(o.keyType,r)||v(o.valueType,r);if(o.type==="pipe")return n._zod.traits.has("$ZodCodec")?!0:v(o.in,r)||v(o.out,r);if(o.type==="object"){for(const i in o.shape)if(v(o.shape[i],r))return!0;return!1}if(o.type==="union"){for(const i of o.options)if(v(i,r))return!0;return!1}if(o.type==="tuple"){for(const i of o.items)if(v(i,r))return!0;return!!(o.rest&&v(o.rest,r))}return!1}const Qt=(n,e={})=>r=>{const o=jn({...r,processors:e});return w(n,o),Bn(o,n),Hn(o,n)},Q=(n,e,r={})=>o=>{const{libraryOptions:i,target:a}=o??{},s=jn({...i??{},target:a,io:e,processors:r});return w(n,s),Bn(s,n),Hn(s,n)},er=(n,e,r,o)=>{const i=n._zod.def,a=An(i.entries);a.every(s=>typeof s=="number")&&(r.type="number"),a.every(s=>typeof s=="string")&&(r.type="string"),r.enum=a},nr=(n,e,r,o)=>{if(e.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},tr=(n,e,r,o)=>{if(e.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},rr=(n,e,r,o)=>{const i=r,a=n._zod.def,{minimum:s,maximum:c}=n._zod.bag;typeof s=="number"&&(i.minItems=s),typeof c=="number"&&(i.maxItems=c),i.type="array",i.items=w(a.element,e,{...o,path:[...o.path,"items"]})},or=(n,e,r,o)=>{const i=n._zod.def,a=i.inclusive===!1,s=i.options.map((c,d)=>w(c,e,{...o,path:[...o.path,a?"oneOf":"anyOf",d]}));a?r.oneOf=s:r.anyOf=s},ir=(n,e,r,o)=>{const i=n._zod.def,a=w(i.left,e,{...o,path:[...o.path,"allOf",0]}),s=w(i.right,e,{...o,path:[...o.path,"allOf",1]}),c=l=>"allOf"in l&&Object.keys(l).length===1,d=[...c(a)?a.allOf:[a],...c(s)?s.allOf:[s]];r.allOf=d},sr=(n,e,r,o)=>{const i=n._zod.def,a=w(i.innerType,e,o),s=e.seen.get(n);e.target==="openapi-3.0"?(s.ref=i.innerType,r.nullable=!0):r.anyOf=[a,{type:"null"}]},ar=(n,e,r,o)=>{const i=n._zod.def;w(i.innerType,e,o);const a=e.seen.get(n);a.ref=i.innerType},cr=(n,e,r,o)=>{const i=n._zod.def;w(i.innerType,e,o);const a=e.seen.get(n);a.ref=i.innerType,r.default=JSON.parse(JSON.stringify(i.defaultValue))},dr=(n,e,r,o)=>{const i=n._zod.def;w(i.innerType,e,o);const a=e.seen.get(n);a.ref=i.innerType,e.io==="input"&&(r._prefault=JSON.parse(JSON.stringify(i.defaultValue)))},lr=(n,e,r,o)=>{const i=n._zod.def;w(i.innerType,e,o);const a=e.seen.get(n);a.ref=i.innerType;let s;try{s=i.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}r.default=s},ur=(n,e,r,o)=>{const i=n._zod.def,a=i.in._zod.traits.has("$ZodTransform"),s=e.io==="input"?a?i.out:i.in:i.out;w(s,e,o);const c=e.seen.get(n);c.ref=s},hr=(n,e,r,o)=>{const i=n._zod.def;w(i.innerType,e,o);const a=e.seen.get(n);a.ref=i.innerType,r.readOnly=!0},Zn=(n,e,r,o)=>{const i=n._zod.def;w(i.innerType,e,o);const a=e.seen.get(n);a.ref=i.innerType},mr=(n,e)=>{En.init(n,e),n.name="ZodError",Object.defineProperties(n,{format:{value:r=>mt(n,r)},flatten:{value:r=>ht(n,r)},addIssue:{value:r=>{n.issues.push(r),n.message=JSON.stringify(n.issues,xe,2)}},addIssues:{value:r=>{n.issues.push(...r),n.message=JSON.stringify(n.issues,xe,2)}},isEmpty:{get(){return n.issues.length===0}}})},P=u("ZodError",mr,{Parent:Error}),pr=Se(P),fr=Ne(P),gr=ee(P),yr=ne(P),br=gt(P),xr=yt(P),vr=bt(P),wr=xt(P),kr=vt(P),_r=wt(P),Cr=kt(P),zr=_t(P),Ue=new WeakMap;function Fn(n,e,r){const o=Object.getPrototypeOf(n);let i=Ue.get(o);if(i||(i=new Set,Ue.set(o,i)),!i.has(e)){i.add(e);for(const a in r){const s=r[a];Object.defineProperty(o,a,{configurable:!0,enumerable:!1,get(){const c=s.bind(this);return Object.defineProperty(this,a,{configurable:!0,writable:!0,enumerable:!0,value:c}),c},set(c){Object.defineProperty(this,a,{configurable:!0,writable:!0,enumerable:!0,value:c})}})}}}const _=u("ZodType",(n,e)=>(k.init(n,e),Object.assign(n["~standard"],{jsonSchema:{input:Q(n,"input"),output:Q(n,"output")}}),n.toJSONSchema=Qt(n,{}),n.def=e,n.type=e.type,Object.defineProperty(n,"_def",{value:e}),n.parse=(r,o)=>pr(n,r,o,{callee:n.parse}),n.safeParse=(r,o)=>gr(n,r,o),n.parseAsync=async(r,o)=>fr(n,r,o,{callee:n.parseAsync}),n.safeParseAsync=async(r,o)=>yr(n,r,o),n.spa=n.safeParseAsync,n.encode=(r,o)=>br(n,r,o),n.decode=(r,o)=>xr(n,r,o),n.encodeAsync=async(r,o)=>vr(n,r,o),n.decodeAsync=async(r,o)=>wr(n,r,o),n.safeEncode=(r,o)=>kr(n,r,o),n.safeDecode=(r,o)=>_r(n,r,o),n.safeEncodeAsync=async(r,o)=>Cr(n,r,o),n.safeDecodeAsync=async(r,o)=>zr(n,r,o),Fn(n,"ZodType",{check(...r){const o=this.def;return this.clone(st(o,{checks:[...o.checks??[],...r.map(i=>typeof i=="function"?{_zod:{check:i,def:{check:"custom"},onattach:[]}}:i)]}),{parent:!0})},with(...r){return this.check(...r)},clone(r,o){return dt(this,r,o)},brand(){return this},register(r,o){return r.add(this,o),this},refine(r,o){return this.check(Gr(r,o))},superRefine(r,o){return this.check(Kr(r,o))},overwrite(r){return this.check(Ut(r))},optional(){return Je(this)},exactOptional(){return Er(this)},nullable(){return Xe(this)},nullish(){return Je(Xe(this))},nonoptional(r){return Fr(this,r)},array(){return Nr(this)},or(r){return $r([this,r])},and(r){return Mr(this,r)},transform(r){return Ye(this,Rr(r))},default(r){return jr(this,r)},prefault(r){return Hr(this,r)},catch(r){return Wr(this,r)},pipe(r){return Ye(this,r)},readonly(){return Xr(this)},describe(r){const o=this.clone();return D.add(o,{description:r}),o},meta(...r){if(r.length===0)return D.get(this);const o=this.clone();return D.add(o,r[0]),o},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(r){return r(this)}}),Object.defineProperty(n,"description",{get(){return D.get(n)?.description},configurable:!0}),n)),Sr=u("ZodArray",(n,e)=>{$t.init(n,e),_.init(n,e),n._zod.processJSONSchema=(r,o,i)=>rr(n,r,o,i),n.element=e.element,Fn(n,"ZodArray",{min(r,o){return this.check(We(r,o))},nonempty(r){return this.check(We(1,r))},max(r,o){return this.check(Vt(r,o))},length(r,o){return this.check(Wt(r,o))},unwrap(){return this.element}})});function Nr(n,e){return Jt(Sr,n,e)}const Pr=u("ZodUnion",(n,e)=>{Tt.init(n,e),_.init(n,e),n._zod.processJSONSchema=(r,o,i)=>or(n,r,o,i),n.options=e.options});function $r(n,e){return new Pr({type:"union",options:n,...N(e)})}const Tr=u("ZodIntersection",(n,e)=>{Mt.init(n,e),_.init(n,e),n._zod.processJSONSchema=(r,o,i)=>ir(n,r,o,i)});function Mr(n,e){return new Tr({type:"intersection",left:n,right:e})}const ke=u("ZodEnum",(n,e)=>{It.init(n,e),_.init(n,e),n._zod.processJSONSchema=(o,i,a)=>er(n,o,i),n.enum=e.entries,n.options=Object.values(e.entries);const r=new Set(Object.keys(e.entries));n.extract=(o,i)=>{const a={};for(const s of o)if(r.has(s))a[s]=e.entries[s];else throw new Error(`Key ${s} not found in enum`);return new ke({...e,checks:[],...N(i),entries:a})},n.exclude=(o,i)=>{const a={...e.entries};for(const s of o)if(r.has(s))delete a[s];else throw new Error(`Key ${s} not found in enum`);return new ke({...e,checks:[],...N(i),entries:a})}});function Ir(n,e){const r=Array.isArray(n)?Object.fromEntries(n.map(o=>[o,o])):n;return new ke({type:"enum",entries:r,...N(e)})}const Ar=u("ZodTransform",(n,e)=>{At.init(n,e),_.init(n,e),n._zod.processJSONSchema=(r,o,i)=>tr(n,r),n._zod.parse=(r,o)=>{if(o.direction==="backward")throw new In(n.constructor.name);r.addIssue=a=>{if(typeof a=="string")r.issues.push(E(a,r.value,e));else{const s=a;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),s.input??(s.input=r.value),s.inst??(s.inst=n),r.issues.push(E(s))}};const i=e.transform(r.value,r);return i instanceof Promise?i.then(a=>(r.value=a,r.fallback=!0,r)):(r.value=i,r.fallback=!0,r)}});function Rr(n){return new Ar({type:"transform",transform:n})}const Or=u("ZodOptional",(n,e)=>{Ln.init(n,e),_.init(n,e),n._zod.processJSONSchema=(r,o,i)=>Zn(n,r,o,i),n.unwrap=()=>n._zod.def.innerType});function Je(n){return new Or({type:"optional",innerType:n})}const Dr=u("ZodExactOptional",(n,e)=>{Rt.init(n,e),_.init(n,e),n._zod.processJSONSchema=(r,o,i)=>Zn(n,r,o,i),n.unwrap=()=>n._zod.def.innerType});function Er(n){return new Dr({type:"optional",innerType:n})}const qr=u("ZodNullable",(n,e)=>{Ot.init(n,e),_.init(n,e),n._zod.processJSONSchema=(r,o,i)=>sr(n,r,o,i),n.unwrap=()=>n._zod.def.innerType});function Xe(n){return new qr({type:"nullable",innerType:n})}const Lr=u("ZodDefault",(n,e)=>{Dt.init(n,e),_.init(n,e),n._zod.processJSONSchema=(r,o,i)=>cr(n,r,o,i),n.unwrap=()=>n._zod.def.innerType,n.removeDefault=n.unwrap});function jr(n,e){return new Lr({type:"default",innerType:n,get defaultValue(){return typeof e=="function"?e():On(e)}})}const Br=u("ZodPrefault",(n,e)=>{Et.init(n,e),_.init(n,e),n._zod.processJSONSchema=(r,o,i)=>dr(n,r,o,i),n.unwrap=()=>n._zod.def.innerType});function Hr(n,e){return new Br({type:"prefault",innerType:n,get defaultValue(){return typeof e=="function"?e():On(e)}})}const Zr=u("ZodNonOptional",(n,e)=>{qt.init(n,e),_.init(n,e),n._zod.processJSONSchema=(r,o,i)=>ar(n,r,o,i),n.unwrap=()=>n._zod.def.innerType});function Fr(n,e){return new Zr({type:"nonoptional",innerType:n,...N(e)})}const Vr=u("ZodCatch",(n,e)=>{Lt.init(n,e),_.init(n,e),n._zod.processJSONSchema=(r,o,i)=>lr(n,r,o,i),n.unwrap=()=>n._zod.def.innerType,n.removeCatch=n.unwrap});function Wr(n,e){return new Vr({type:"catch",innerType:n,catchValue:typeof e=="function"?e:()=>e})}const Ur=u("ZodPipe",(n,e)=>{jt.init(n,e),_.init(n,e),n._zod.processJSONSchema=(r,o,i)=>ur(n,r,o,i),n.in=e.in,n.out=e.out});function Ye(n,e){return new Ur({type:"pipe",in:n,out:e})}const Jr=u("ZodReadonly",(n,e)=>{Bt.init(n,e),_.init(n,e),n._zod.processJSONSchema=(r,o,i)=>hr(n,r,o,i),n.unwrap=()=>n._zod.def.innerType});function Xr(n){return new Jr({type:"readonly",innerType:n})}const Vn=u("ZodCustom",(n,e)=>{Ht.init(n,e),_.init(n,e),n._zod.processJSONSchema=(r,o,i)=>nr(n,r)});function Yr(n,e){return Xt(Vn,n??(()=>!0),e)}function Gr(n,e={}){return Yt(Vn,n,e)}function Kr(n,e){return Gt(n,e)}const Ge={custom:"custom"},Qr={"SHA-256":"sha256-","SHA-384":"sha384-","SHA-512":"sha512-"};Ir(Object.keys(Qr)).optional().default("SHA-256");const Ke=["base-uri","child-src","connect-src","default-src","fenced-frame-src","font-src","form-action","frame-ancestors","frame-src","img-src","manifest-src","media-src","object-src","referrer","report-to","report-uri","require-trusted-types-for","sandbox","trusted-types","upgrade-insecure-requests","worker-src"];Yr(n=>typeof n=="string").superRefine((n,e)=>{Ke.some(o=>n.startsWith(o))||(n.startsWith("script-src")||n.startsWith("style-src")?e.addIssue({code:Ge.custom,message:"Directives `script-src` and `style-src` are not allowed in `security.csp.directives`. Please use `security.csp.scriptDirective` and `security.csp.styleDirective` instead.",fatal:!0}):e.addIssue({code:Ge.custom,message:`Invalid directive: "${n}". Allowed directives are: ${Ke.join(", ")}`,fatal:!0}))});new TextEncoder;new TextDecoder;Mn(`async function replaceServerIsland(id, r) {
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
`).map(n=>n.trim()).filter(n=>n&&!n.startsWith("//")).join(" "));const C=Symbol.for("astro:fragment"),eo=Symbol.for("astro:renderer");new TextEncoder;new TextDecoder;"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("").reduce((n,e)=>(n[e.charCodeAt(0)]=e,n),[]);"-0123456789_".split("").reduce((n,e)=>(n[e.charCodeAt(0)]=e,n),[]);const Wn="astro:jsx",Qe=Symbol("empty"),en=n=>n;function ye(n){return n&&typeof n=="object"&&n[Wn]}function no(n){if(typeof n.type=="string")return n;const e={};if(ye(n.props.children)){const r=n.props.children;if(!ye(r)||!("slot"in r.props))return;const o=en(r.props.slot);e[o]=[r],e[o].$$slot=!0,delete r.props.slot,delete n.props.children}else Array.isArray(n.props.children)&&(n.props.children=n.props.children.map(r=>{if(!ye(r)||!("slot"in r.props))return r;const o=en(r.props.slot);return Array.isArray(e[o])?e[o].push(r):(e[o]=[r],e[o].$$slot=!0),delete r.props.slot,Qe}).filter(r=>r!==Qe));Object.assign(n.props,e)}function Un(n){return typeof n=="string"?Mn(n):Array.isArray(n)?n.map(e=>Un(e)):n}function to(n){if("set:html"in n.props||"set:text"in n.props){if("set:html"in n.props){const e=Un(n.props["set:html"]);delete n.props["set:html"],Object.assign(n.props,{children:e});return}if("set:text"in n.props){const e=n.props["set:text"];delete n.props["set:text"],Object.assign(n.props,{children:e});return}}}function t(n,e={},r){const o={[eo]:"astro:jsx",[Wn]:!0,type:n,props:e};return to(o),no(o),o}const ro={};function nn(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"density"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"1"})}),t(e.td,{children:"Controls the number of stars rendered in the background. Min: 0.1, Max: 10. Higher = denser sky."})]}),t(e.tr,{children:[t(e.td,{children:"spaceColor"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"rgb(0, 0, 0)"'})}),t(e.td,{children:["Sets the background color of the space. Accepts any valid CSS color value (e.g., ",t(e.code,{children:"rgb()"}),", ",t(e.code,{children:"#000"}),", ",t(e.code,{children:"black"}),", ",t(e.code,{children:"hsl()"}),")."]})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Additional CSS classes applied to the main container."})]})]})]})}function oo(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(nn,{...n})}):nn(n)}const te=(n={})=>oo({...n,components:{Fragment:C,...n.components}});te[Symbol.for("mdx-component")]=!0;te[Symbol.for("astro.needsHeadRendering")]=!ro.layout;te.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/backgrounds/night-sky-background/props.mdx";const b=Object.freeze({react:{key:"react",name:"React",icon:"react"},tailwind:{key:"tailwind",name:"Tailwind",icon:"tailwind"},motion:{key:"motion",name:"Motion",icon:"motion"}}),B="night-sky-background",tn=S({id:B,name:"Night Sky",description:"A dynamic night sky background with twinkling stars, customizable density, and content layered on top.",category:y.background.id,dependencies:[b.tailwind.key],preview:tt,previewClassName:"grid place-items-center",source:[{name:`${B}.tsx`,content:et,lang:"tsx"}],usage:[{name:`${B}-preview.tsx`,content:nt,lang:"tsx"}],componentsAPI:[{name:`${B}.tsx`,props:te}]}),io=`import { useRef, useState, useEffect, useLayoutEffect, useMemo, memo, useCallback } from "react";
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

export default memo(StarFieldBackground);`,so=`import StarFieldBackground from "@/registry/backgrounds/star-field-background/star-field-background";

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

export default StarFieldBackgroundPreview;`,ao={},co={};function rn(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"speed"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"5"})}),t(e.td,{children:"Controls the star movement speed. Positive = forward, Negative = backward."})]}),t(e.tr,{children:[t(e.td,{children:"spaceColor"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"#000000"'})}),t(e.td,{children:"Sets the background color of the space. Accepts any valid CSS color value."})]}),t(e.tr,{children:[t(e.td,{children:"starColor"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"#ffffff"'})}),t(e.td,{children:"Sets the color of the stars. Accepts any valid CSS color value."})]}),t(e.tr,{children:[t(e.td,{children:"starTrailColor"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"#555555"'})}),t(e.td,{children:"Sets the color of the star trails. Accepts any valid CSS color value."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Additional CSS classes applied to the main container."})]})]})]})}function lo(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(rn,{...n})}):rn(n)}const re=(n={})=>lo({...n,components:{Fragment:C,...n.components}});re[Symbol.for("mdx-component")]=!0;re[Symbol.for("astro.needsHeadRendering")]=!co.layout;re.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/backgrounds/star-field-background/props.mdx";const H="star-field-background",on=S({id:H,name:"Star Field",description:"A dynamic star field background with adjustable speed, creating a sense of motion and depth.",category:y.background.id,dependencies:[b.tailwind.key],preview:ao,previewClassName:"grid place-items-center",source:[{name:`${H}.tsx`,content:io,lang:"tsx"}],usage:[{name:`${H}-preview.tsx`,content:so,lang:"tsx"}],componentsAPI:[{name:`${H}.tsx`,props:re}]}),uo=`import { Children, memo } from "react";
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

export default memo(CircularList);`,ho=`import CircularList from "@/registry/components/circular-list/circular-list";

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

export default CircularListPreview;`,mo={},po={};function sn(n){const e={code:"code",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"children"}),t(e.td,{children:t(e.code,{children:"ReactNode"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:"Elements that will be arranged along the circle’s circumference."})]}),t(e.tr,{children:[t(e.td,{children:"radius"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"100"})}),t(e.td,{children:["Radius of the circle in ",t(e.strong,{children:"pixels (px)"})," used to position the children around the center."]})]}),t(e.tr,{children:[t(e.td,{children:"duration"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"10"})}),t(e.td,{children:"Time (in seconds) it takes to complete one full 360° rotation."})]}),t(e.tr,{children:[t(e.td,{children:"rotationLock"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"true"})}),t(e.td,{children:"Prevents orbiting items from rotating with the path, keeping them upright."})]}),t(e.tr,{children:[t(e.td,{children:"direction"}),t(e.td,{children:t(e.code,{children:'"clockwise" | "anti-clockwise"'})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"clockwise"'})}),t(e.td,{children:"Controls the direction of rotation."})]}),t(e.tr,{children:[t(e.td,{children:"degreeOffset"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"0"})}),t(e.td,{children:"Starting angle offset (in degrees) from which the circular layout begins."})]}),t(e.tr,{children:[t(e.td,{children:"pauseOnHover"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"false"})}),t(e.td,{children:"Pauses the rotation animation when the user hovers over the component."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Additional CSS class names applied to the root container."})]}),t(e.tr,{children:[t(e.td,{children:"style"}),t(e.td,{children:t(e.code,{children:"React.CSSProperties"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Inline styles applied to the root container."})]})]})]})}function fo(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(sn,{...n})}):sn(n)}const oe=(n={})=>fo({...n,components:{Fragment:C,...n.components}});oe[Symbol.for("mdx-component")]=!0;oe[Symbol.for("astro.needsHeadRendering")]=!po.layout;oe.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/components/circular-list/props.mdx";const Z="circular-list",an=S({id:Z,name:"Circular List",description:"A circular orbit component that displays elements around a center and rotates them continuously, ideal for galleries, dashboards, and navigation menus.",category:y.component.id,dependencies:[b.tailwind.key,b.motion.key],preview:mo,previewClassName:"grid place-items-center",source:[{name:`${Z}.tsx`,content:uo,lang:"tsx"}],usage:[{name:`${Z}-preview.tsx`,content:ho,lang:"tsx"}],componentsAPI:[{name:`${Z}.tsx`,props:oe}]}),go=`import { type ReactNode, type MouseEvent, memo, useState, useRef, useContext, createContext, useCallback, useMemo } from "react";
import { type HTMLMotionProps, type MotionValue, motion, AnimatePresence, useTransform, useSpring, useMotionValue} from "motion/react";
import cn from "@/utils/cn";

export type FluidDockProps = {
  children: ReactNode;
  itemSize?: number;
  magnificationScale?: number; 
  padding?: number;
} & HTMLMotionProps<"div">;

export type FluidDockItemProps = {
  tooltip?: string;
  tooltipClassName?: string;
} & HTMLMotionProps<"div">;

type DockContextValue = {
  mouseX: MotionValue<number> | null,
  itemSize: number;
  magnificationScale: number;
}

const DockContext = createContext<DockContextValue>({
  mouseX: null,
  itemSize: 40,
  magnificationScale: 1.5,
});

const FluidDock = (
  props: FluidDockProps
) => {
  const {
    children,
    className,
    itemSize = 40,
    magnificationScale = 1.5,
    padding = 8,
    style,
    ...restProps
  } = props;

  const mouseX = useMotionValue<number>(Infinity);

  const mouseMoveHandler = useCallback((e: MouseEvent) => {
    mouseX.set(e.pageX);
  }, []);

  const mouseLeaveHandler = useCallback(() => {
    mouseX.set(Infinity);
  }, []);

  const dockContextValue: DockContextValue = useMemo(() => ({
    mouseX,
    itemSize,
    magnificationScale
  }), [mouseX, itemSize, magnificationScale]);

  return (
    <DockContext
      value={dockContextValue}
    >
      <motion.div
        {...restProps}
        className={cn(
          "flex items-center gap-2 rounded-lg backdrop-blur-sm",
          "border border-zinc-200/70 dark:border-zinc-700/70",
          "bg-white/75 dark:bg-zinc-900/75",
          "shadow-sm shadow-black/5 dark:shadow-black/10",
          "[padding:var(--dock-padding)]",
          "[height:var(--dock-height)]",
          "[max-height:var(--dock-height)]",
          className,
        )}
        style={{
          ...style,
          "--dock-padding": \`\${padding}px\`,
          "--dock-height": \`\${itemSize + (padding * 2)}px\`,
        } as React.CSSProperties}
        onMouseMove={mouseMoveHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        {children}
      </motion.div>
    </DockContext>
  )
};

export const FluidDockItem = memo((
  props: FluidDockItemProps
) => {
  const {
    tooltip,
    className,
    tooltipClassName,
    style,
    children,
    ...restProps
  } = props;

  const [showTooltip, setShowTooltip] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { mouseX, itemSize, magnificationScale} = useContext(DockContext);

  const pos = useTransform(mouseX as MotionValue, (val) => {
    if (!ref.current || !Number.isFinite(val)) {
      return Infinity;
    }
    const { x, width } = ref.current.getBoundingClientRect();
    const center = (x + (width / 2));
    return val - center;
  });

  const offsetRange = [-128, 0, 128];

  const springConfig = {
    stiffness: 200,
    damping: 20,
  };

  const width = useSpring(
    useTransform(
      pos,
      offsetRange,
      [itemSize, itemSize * magnificationScale, itemSize],
    ),
    springConfig,
  );

  const y = useSpring(
    useTransform(
      pos,
      offsetRange,
      [0, itemSize * -1 , 0],
    ),
    springConfig,
  );

  const scale = useSpring(
    useTransform(
      pos,
      offsetRange,
      [1, 2, 1],
    ),
    springConfig,
  );

  const mouseEnterHandler = useCallback(() => {
    setShowTooltip(true);
  }, []);

  const mouseLeaveHandler = useCallback(() => {
    setShowTooltip(false);
  }, []);

  return (
    <motion.div
      {...restProps}
      ref={ref}
      className={cn(
        "relative [aspect-ratio:1] grid place-items-center rounded-lg cursor-pointer",
        "border border-zinc-200/70 dark:border-zinc-700/70",
        "bg-zinc-50 dark:bg-zinc-900",
        "text-zinc-700 dark:text-zinc-300",
        className,
      )}
      style={{
        ...style,
        width,
        y,
      }}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <AnimatePresence>
        {tooltip && showTooltip && (
          <motion.span
            className={cn(
              "py-1 px-2 text-xs absolute top-[0] left-[50%] rounded-sm",
              "border border-zinc-200 dark:border-zinc-700",
              "bg-white dark:bg-zinc-900",
              "text-zinc-900 dark:text-zinc-100",
              tooltipClassName,
            )}
            style={{
              x: "-50%",
              y: "-100%",
              opacity: 0,
            }}
            animate={{
              x: "-50%",
              y: "-140%",
              opacity: 1,
            }}
            exit={{
              x: "-50%",
              y: "-100%",
              opacity: 0,
            }}
          >
            {tooltip}
          </motion.span>
        )}
      </AnimatePresence>
      <motion.span
        style={{
          scale,
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  )
});

export default memo(FluidDock);`,yo=`import FluidDock, { FluidDockItem } from "@/registry/components/fluid-dock/fluid-dock";

const FluidDockPreview = () => {
  const items = [
    { icon: FilesIcon, name: "Files", },
    { icon: SearchIcon, name: "Search", },
    { icon: MessageIcon, name: "Message", },
    { icon: CalendarIcon, name: "Calendar", },
    { icon: MusicIcon, name: "Music", },
    { icon: NotesIcon, name: "Notes", },
    { icon: AppsIcon, name: "Apps", },
    { icon: SettingsIcon, name: "Settings", },
  ];
  return (
    <FluidDock>
      {items.map(item => {
        const Icon = item.icon;
        return (
          <FluidDockItem
            key={item.name}
            tooltip={item.name}
          >
            <Icon className="text-xl" />
          </FluidDockItem>
        );
      })}
    </FluidDock>
  );
};

/** ICONS */

const FilesIcon = (props: React.ComponentProps<"svg">) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M15 3v4a1 1 0 0 0 1 1h4" />
      <path d="M18 17h-7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4l5 5v7a2 2 0 0 1-2 2" />
      <path d="M16 17v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" />
    </g>
  </svg>
);

const SearchIcon = (props: React.ComponentProps<"svg">) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" fill-rule="evenodd" d="M11 2a9 9 0 1 0 5.618 16.032l3.675 3.675a1 1 0 0 0 1.414-1.414l-3.675-3.675A9 9 0 0 0 11 2m-6 9a6 6 0 1 1 12 0a6 6 0 0 1-12 0" clip-rule="evenodd" />
  </svg>
);

const MessageIcon = (props: React.ComponentProps<"svg">) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-4.724l-4.762 2.857a1 1 0 0 1-1.508-.743L7 21v-2H6a4 4 0 0 1-3.995-3.8L2 15V7a4 4 0 0 1 4-4zm-4 9H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m2-4H8a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2" />
  </svg>
);

const CalendarIcon = (props: React.ComponentProps<"svg">) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <g fill="currentColor">
      <path d="M16 2a1 1 0 0 1 .993.883L17 3v1h1a3 3 0 0 1 2.995 2.824L21 7v12a3 3 0 0 1-2.824 2.995L18 22H6a3 3 0 0 1-2.995-2.824L3 19V7a3 3 0 0 1 2.824-2.995L6 4h1V3a1 1 0 0 1 1.993-.117L9 3v1h6V3a1 1 0 0 1 1-1m3 7H5v9.625c0 .705.386 1.286.883 1.366L6 20h12c.513 0 .936-.53.993-1.215l.007-.16z" />
      <path d="M12 12a1 1 0 0 1 .993.883L13 13v3a1 1 0 0 1-1.993.117L11 16v-2a1 1 0 0 1-.117-1.993L11 12z" />
    </g>
  </svg>
);

const MusicIcon = (props: React.ComponentProps<"svg">) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0-6 0m10 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0" />
      <path d="M9 17V4h10v13M9 8h10" />
    </g>
  </svg>
);

const AppsIcon = (props: React.ComponentProps<"svg">) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0-8h6m-3-3v6" />
  </svg>
);

const NotesIcon = (props: React.ComponentProps<"svg">) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm4 2h6m-6 4h6m-6 4h4" />
  </svg>
);

const SettingsIcon = (props: React.ComponentProps<"svg">) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" fill-rule="evenodd" d="M14.208 4.83q.68.21 1.3.54l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
  </svg>
);

export default FluidDockPreview;`,bo={},xo={};function cn(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"children"}),t(e.td,{children:t(e.code,{children:"React.ReactNode"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:["The ",t(e.code,{children:"FluidDockItem"})," components rendered inside the dock."]})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Additional CSS classes applied to the dock container."})]}),t(e.tr,{children:[t(e.td,{children:"itemSize"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"40"})}),t(e.td,{children:"Base size (in pixels) of each dock item before magnification."})]}),t(e.tr,{children:[t(e.td,{children:"magnificationScale"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"1.5"})}),t(e.td,{children:"Maximum scale applied to a dock item when hovered."})]}),t(e.tr,{children:[t(e.td,{children:"padding"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"8"})}),t(e.td,{children:"Inner padding (in pixels) of the dock container."})]}),t(e.tr,{children:[t(e.td,{children:"style"}),t(e.td,{children:t(e.code,{children:"React.CSSProperties"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Inline styles applied to the dock container."})]})]})]})}function vo(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(cn,{...n})}):cn(n)}const ie=(n={})=>vo({...n,components:{Fragment:C,...n.components}});ie[Symbol.for("mdx-component")]=!0;ie[Symbol.for("astro.needsHeadRendering")]=!xo.layout;ie.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/components/fluid-dock/FluidDock-props.mdx";const wo={};function dn(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"children"}),t(e.td,{children:t(e.code,{children:"React.ReactNode"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:"The content of the dock item, typically an icon or image."})]}),t(e.tr,{children:[t(e.td,{children:"tooltip"}),t(e.td,{children:t(e.code,{children:"React.ReactNode"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Content displayed in the tooltip when the item is hovered."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Additional CSS classes applied to the dock item."})]}),t(e.tr,{children:[t(e.td,{children:"tooltipClassName"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Additional CSS classes applied to the tooltip."})]}),t(e.tr,{children:[t(e.td,{children:"style"}),t(e.td,{children:t(e.code,{children:"React.CSSProperties"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Inline styles applied to the dock item."})]})]})]})}function ko(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(dn,{...n})}):dn(n)}const se=(n={})=>ko({...n,components:{Fragment:C,...n.components}});se[Symbol.for("mdx-component")]=!0;se[Symbol.for("astro.needsHeadRendering")]=!wo.layout;se.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/components/fluid-dock/FluidDockItem-props.mdx";const be="fluid-dock",ln=S({id:be,name:"Fluid Dock",description:"A modern dock navigation with fluid hover animations and interactive tooltips.",category:y.component.id,dependencies:[b.tailwind.key,b.motion.key],preview:bo,previewClassName:"grid place-items-center",source:[{name:`${be}.tsx`,content:go,lang:"tsx"}],usage:[{name:`${be}-preview.tsx`,content:yo,lang:"tsx"}],componentsAPI:[{name:"FluidDock",props:ie},{name:"FluidDockItem",props:se}]}),_o=`import { memo } from "react";
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

export default memo(Marquee);`,Co=`@keyframes marquee-list-horizontal-keyframes {
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
}`,zo={},So={};function un(n){const e={code:"code",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"children"}),t(e.td,{children:t(e.code,{children:"React.ReactNode"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:"Items to be displayed inside the marquee. These elements will scroll continuously."})]}),t(e.tr,{children:[t(e.td,{children:"axis"}),t(e.td,{children:t(e.code,{children:'"horizontal" | "vertical"'})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"horizontal"'})}),t(e.td,{children:"Controls the scrolling direction of the marquee."})]}),t(e.tr,{children:[t(e.td,{children:"pauseOnHover"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"true"})}),t(e.td,{children:"Pauses the marquee animation when the user hovers over it."})]}),t(e.tr,{children:[t(e.td,{children:"reverse"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"false"})}),t(e.td,{children:"Reverses the scrolling direction of the marquee animation."})]}),t(e.tr,{children:[t(e.td,{children:"duration"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"30"})}),t(e.td,{children:["Duration of one animation cycle in ",t(e.strong,{children:"seconds"}),". Minimum value is ",t(e.code,{children:"1"}),"."]})]}),t(e.tr,{children:[t(e.td,{children:"repeat"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"5"})}),t(e.td,{children:"Number of times the marquee content is repeated to maintain continuous scrolling. Increase this if the marquee items are small."})]}),t(e.tr,{children:[t(e.td,{children:"mask"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"true"})}),t(e.td,{children:"Applies a fade mask at the beginning and end of the marquee."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Additional CSS class names applied to the marquee container."})]}),t(e.tr,{children:[t(e.td,{children:"style"}),t(e.td,{children:t(e.code,{children:"React.CSSProperties"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Inline styles applied to the marquee container."})]})]})]})}function No(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(un,{...n})}):un(n)}const ae=(n={})=>No({...n,components:{Fragment:C,...n.components}});ae[Symbol.for("mdx-component")]=!0;ae[Symbol.for("astro.needsHeadRendering")]=!So.layout;ae.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/components/marquee/props.mdx";const O="marquee",hn=S({id:O,name:"Marquee",description:"A flexible scrolling layout for showcasing repeating content like logos, announcements, or testimonials.",category:y.component.id,dependencies:[b.tailwind.key],preview:zo,previews:Yn,previewClassName:"grid place-items-center",source:[{name:`${O}.tsx`,content:_o,lang:"tsx"},{name:`${O}.module.css`,content:Co,lang:"css"}],usage:[{name:`${O}-preview.tsx`,content:Xn,lang:"tsx"}],componentsAPI:[{name:`${O}.tsx`,props:ae}]}),Po=`import { memo } from "react";
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

export default memo(CircularText);`,$o=`import CircularTextAnimation from "@/registry/text-effects/circular-text-animation/circular-text-animation";

const CircularTextAnimationPreview = () => {
  return (
    <CircularTextAnimation
      className="text-gray-900 dark:text-gray-100 text-xl"
      text="CODE • DESIGN • SHIP •"
      radius={80}
    />
  );
};

export default CircularTextAnimationPreview;`,To={},Mo={};function mn(n){const e={code:"code",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"text"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:"The text content to render around the circle."})]}),t(e.tr,{children:[t(e.td,{children:"radius"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:["Radius of the circle in ",t(e.strong,{children:"pixels (px)"})," used to position the letters."]})]}),t(e.tr,{children:[t(e.td,{children:"addTrailingSpace"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"true"})}),t(e.td,{children:"Adds a trailing space after the text to improve spacing when looping around the circle."})]}),t(e.tr,{children:[t(e.td,{children:"rotate"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"true"})}),t(e.td,{children:"Enables continuous rotation animation of the circular text."})]}),t(e.tr,{children:[t(e.td,{children:"direction"}),t(e.td,{children:t(e.code,{children:'"clockwise" | "anti-clockwise"'})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"clockwise"'})}),t(e.td,{children:"Controls the rotation direction of the text around the circle."})]}),t(e.tr,{children:[t(e.td,{children:"duration"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"10"})}),t(e.td,{children:["Duration of one full rotation in ",t(e.strong,{children:"seconds"})," (range: ",t(e.code,{children:"0.1"})," – ",t(e.code,{children:"60"}),")."]})]}),t(e.tr,{children:[t(e.td,{children:"pauseOnHover"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"true"})}),t(e.td,{children:"Pauses the rotation animation when the user hovers over the component."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Optional class name applied to the root circular text container."})]})]})]})}function Io(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(mn,{...n})}):mn(n)}const ce=(n={})=>Io({...n,components:{Fragment:C,...n.components}});ce[Symbol.for("mdx-component")]=!0;ce[Symbol.for("astro.needsHeadRendering")]=!Mo.layout;ce.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/circular-text-animation/props.mdx";const F="circular-text-animation",pn=S({id:F,name:"Circular Text Animation",description:"A flexible component for rendering text along a circular path with customizable styling and rotation.",category:y.textEffect.id,dependencies:[b.tailwind.key],preview:To,previewClassName:"grid place-items-center",source:[{name:`${F}.tsx`,content:Po,lang:"tsx"}],usage:[{name:`${F}-preview.tsx`,content:$o,lang:"tsx"}],componentsAPI:[{name:`${F}.tsx`,props:ce}]}),Ao=`import { memo, useEffect, useMemo, useState, Fragment } from "react";
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

export default memo(DecryptingTextAnimation);`,Ro=`import DecryptingTextAnimation from "@/registry/text-effects/decrypting-text-animation/decrypting-text-animation";

const DecryptingTextAnimationPreview = () => {
  return (
    <DecryptingTextAnimation
      className="text-gray-900 dark:text-gray-100 text-xl font-mono"
      text="Pure Awareness"
      speed={25}
    />
  );
};

export default DecryptingTextAnimationPreview;`,Oo={},Do={};function fn(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"text"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"-"}),t(e.td,{children:["The text content to be decrypted and displayed. All characters must exist in the specified ",t(e.code,{children:"charset"}),". If the text includes characters outside this charset, a custom ",t(e.code,{children:"charset"})," prop must be provided."]})]}),t(e.tr,{children:[t(e.td,{children:"speed"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"50"})}),t(e.td,{children:"Speed in milliseconds between each decrypting step."})]}),t(e.tr,{children:[t(e.td,{children:"charset"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*-+?"'})}),t(e.td,{children:"The character set used to generate random decrypting characters."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Optional class name applied to the root container."})]})]})]})}function Eo(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(fn,{...n})}):fn(n)}const de=(n={})=>Eo({...n,components:{Fragment:C,...n.components}});de[Symbol.for("mdx-component")]=!0;de[Symbol.for("astro.needsHeadRendering")]=!Do.layout;de.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/decrypting-text-animation/props.mdx";const V="decrypting-text-animation",gn=S({id:V,name:"Decrypting Text",description:"Displays text with a decrypting animation effect, revealing the final content through randomized characters.",category:y.textEffect.id,dependencies:[b.tailwind.key],preview:Oo,previewClassName:"grid place-items-center",source:[{name:`${V}.tsx`,content:Ao}],usage:[{name:`${V}-preview.tsx`,content:Ro}],componentsAPI:[{name:`${V}.tsx`,props:de}]}),qo=`import { memo, useMemo } from "react";
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

export default memo(TextAnimation);`,Lo={},jo={};function yn(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"text"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:"The text content to be animated."})]}),t(e.tr,{children:[t(e.td,{children:"variant"}),t(e.td,{children:[t(e.code,{children:'"fadeIn"'})," ",t("br",{})," ",t(e.code,{children:'"slideUp"'})," ",t("br",{})," ",t(e.code,{children:'"slideDown"'})," ",t("br",{})," ",t(e.code,{children:'"slideLeft"'})," ",t("br",{})," ",t(e.code,{children:'"slideRight"'})," ",t("br",{})," ",t(e.code,{children:'"zoomIn"'})," ",t("br",{})," ",t(e.code,{children:'"zoomOut"'})," ",t("br",{})," ",t(e.code,{children:'"blurIn"'})]}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"fadeIn"'})}),t(e.td,{children:"Animation style applied to the text."})]}),t(e.tr,{children:[t(e.td,{children:"unit"}),t(e.td,{children:[t(e.code,{children:'"letter"'})," | ",t(e.code,{children:'"word"'})," | ",t(e.code,{children:'"text"'})]}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"letter"'})}),t(e.td,{children:"Determines how the text is split and animated."})]}),t(e.tr,{children:[t(e.td,{children:"stagger"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"0.01"})}),t(e.td,{children:"Time delay between each animated unit (in seconds)."})]}),t(e.tr,{children:[t(e.td,{children:"delay"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"0"})}),t(e.td,{children:"Delay before the animation starts (in seconds)."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Additional CSS classes for styling."})]})]})]})}function Bo(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(yn,{...n})}):yn(n)}const le=(n={})=>Bo({...n,components:{Fragment:C,...n.components}});le[Symbol.for("mdx-component")]=!0;le[Symbol.for("astro.needsHeadRendering")]=!jo.layout;le.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/text-animation/props.mdx";const W="text-animation",bn=S({id:W,name:"Text Animation",description:"Create dynamic text effects by staggering letters or words with configurable motion and timing, great for hero sections, promotional content, or onboarding screens.",category:y.textEffect.id,dependencies:[b.motion.key,b.tailwind.key],preview:Lo,previewClassName:"grid place-items-center p-5",previews:Kn,source:[{name:`${W}.tsx`,content:qo,lang:"tsx"}],usage:[{name:`${W}-preview.tsx`,content:Gn,lang:"tsx"}],componentsAPI:[{name:`${W}.tsx`,props:le}]}),Ho=`import { memo, useMemo } from "react";
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

export default memo(TextEmergeAnimation);`,Zo=`import TextEmergeAnimation from "@/registry/text-effects/text-emerge-animation/text-emerge-animation";

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

export default TextEmergeAnimationPreview;`,Fo={},Vo={};function xn(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"text"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:["The text to display. Can be a word, sentence, or paragraph depending on ",t(e.code,{children:"type"}),"."]})]}),t(e.tr,{children:[t(e.td,{children:"type"}),t(e.td,{children:t(e.code,{children:'"word" | "letter"'})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"word"'})}),t(e.td,{children:["Determines the animation unit: ",t(e.code,{children:'"word"'})," animates one word at a time, ",t(e.code,{children:'"letter"'})," animates each letter individually."]})]}),t(e.tr,{children:[t(e.td,{children:"stagger"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"0.1"})}),t(e.td,{children:"Time delay between each animated unit (in seconds)."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Optional class name applied to the root container."})]})]})]})}function Wo(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(xn,{...n})}):xn(n)}const ue=(n={})=>Wo({...n,components:{Fragment:C,...n.components}});ue[Symbol.for("mdx-component")]=!0;ue[Symbol.for("astro.needsHeadRendering")]=!Vo.layout;ue.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/text-emerge-animation/props.mdx";const U="text-emerge-animation",vn=S({id:U,name:"Text Emerge",description:"Animates text by gradually turning blurry letters into clear ones, word or letter by letter.",category:y.textEffect.id,dependencies:[b.motion.key,b.tailwind.key],preview:Fo,previewClassName:"grid place-items-center",source:[{name:`${U}.tsx`,content:Ho,lang:"tsx"}],usage:[{name:`${U}-preview.tsx`,content:Zo,lang:"tsx"}],componentsAPI:[{name:`${U}.tsx`,props:ue}]}),Uo=`import { useEffect, useMemo, memo } from "react";
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
`,Jo=`import TypewriterAnimation from "@/registry/text-effects/typewriter-animation/typewriter-animation";

const TypewriterAnimationPreview = () => {
  return (
    <TypewriterAnimation
      className="text-gray-900 dark:text-gray-100 text-xl overflow-hidden"
      text="Typing the future, live."
    />
  )
};

export default TypewriterAnimationPreview;`,Xo={},Yo={};function wn(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"text"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Simple text to type."})]}),t(e.tr,{children:[t(e.td,{children:"cursor"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"true"})}),t(e.td,{children:["Hides the typing cursor when set to ",t(e.code,{children:"false"}),"."]})]}),t(e.tr,{children:[t(e.td,{children:"blinkCursor"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"true"})}),t(e.td,{children:"Enables cursor blinking animation."})]}),t(e.tr,{children:[t(e.td,{children:"cursorVariant"}),t(e.td,{children:t(e.code,{children:'"line" | "block" | "underscore"'})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"line"'})}),t(e.td,{children:"Controls the visual style of the cursor."})]}),t(e.tr,{children:[t(e.td,{children:"stagger"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"0.1"})}),t(e.td,{children:"Time delay between each animated unit (in seconds)."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Optional class name applied to the root container."})]})]})]})}function Go(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(wn,{...n})}):wn(n)}const he=(n={})=>Go({...n,components:{Fragment:C,...n.components}});he[Symbol.for("mdx-component")]=!0;he[Symbol.for("astro.needsHeadRendering")]=!Yo.layout;he.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/typewriter-animation/props.mdx";const J="typewriter-animation",kn=S({id:J,name:"Typewriter Effect",description:"Animates text like a typewriter, with optional speed, cursor, and styling controls.",category:y.textEffect.id,dependencies:[b.motion.key,b.tailwind.key],preview:Xo,previewClassName:"grid place-items-center",source:[{name:`${J}.tsx`,content:Uo,lang:"tsx"}],usage:[{name:`${J}-preview.tsx`,content:Jo,lang:"tsx"}],componentsAPI:[{name:`${J}.tsx`,props:he}]}),Ko=`import { memo, useEffect, useState } from "react";
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

export default memo(VerticalTextSlider);`,Qo=`import VerticalTextSlider from "@/registry/text-effects/vertical-text-slider/vertical-text-slider";

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

export default VerticalTextSliderPreview;`,ei={},ni={};function _n(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"texts"}),t(e.td,{children:t(e.code,{children:"string[]"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:"Array of text strings to display in the vertical slider."})]}),t(e.tr,{children:[t(e.td,{children:"direction"}),t(e.td,{children:t(e.code,{children:'"up" | "down"'})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"up"'})}),t(e.td,{children:["Slide direction. ",t(e.code,{children:'"up"'})," slides text upward, ",t(e.code,{children:'"down"'})," slides text downward."]})]}),t(e.tr,{children:[t(e.td,{children:"visibleDuration"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"2000"})}),t(e.td,{children:["Time (in milliseconds) each text remains fully visible before sliding out. Minimum: ",t(e.code,{children:"1000ms"}),"."]})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Optional class name applied to the root container."})]})]})]})}function ti(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(_n,{...n})}):_n(n)}const me=(n={})=>ti({...n,components:{Fragment:C,...n.components}});me[Symbol.for("mdx-component")]=!0;me[Symbol.for("astro.needsHeadRendering")]=!ni.layout;me.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/vertical-text-slider/props.mdx";const X="vertical-text-slider",Cn=S({id:X,name:"Vertical Text Slider",description:"Slides through an list of text vertically, pausing briefly on each item before transitioning to the next.",category:y.textEffect.id,preview:ei,previewClassName:"grid place-items-center",source:[{name:`${X}.tsx`,content:Ko,lang:"tsx"}],usage:[{name:`${X}-preview.tsx`,content:Qo,lang:"tsx"}],componentsAPI:[{name:`${X}.tsx`,props:me}]}),ri=`import { memo, useLayoutEffect, useMemo, useRef, type ReactNode } from "react";
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

export default memo(AuroraBorder);`,oi=`import AuroraBorder from "@/registry/visual-effects/aurora-border/aurora-border";

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

export default AuroraBorderPreview;`,ii={},si={};function zn(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"children"}),t(e.td,{children:t(e.code,{children:"ReactNode"})}),t(e.td,{children:"Yes"}),t(e.td,{children:"—"}),t(e.td,{children:"The content to be wrapped inside the AuraBorder."})]}),t(e.tr,{children:[t(e.td,{children:"colors"}),t(e.td,{children:t(e.code,{children:"string[]"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'["rgba(127, 127, 127, 1)"]'})}),t(e.td,{children:"Array of colors or gradients for the border glow. Accepts any valid CSS color."})]}),t(e.tr,{children:[t(e.td,{children:"width"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"1"})}),t(e.td,{children:"Width of the border in pixels. Minimum value: 0."})]}),t(e.tr,{children:[t(e.td,{children:"speed"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"0.5"})}),t(e.td,{children:"Speed of rotation. Value between 0 (no rotation) and 1 (fastest)."})]}),t(e.tr,{children:[t(e.td,{children:"intensity"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"0.5"})}),t(e.td,{children:"Glow intensity. Value between 0 (no glow) and 1 (maximum glow)."})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Additional CSS class names applied to the wrapper."})]}),t(e.tr,{children:[t(e.td,{children:"style"}),t(e.td,{children:t(e.code,{children:"React.CSSProperties"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Inline styles applied directly to the wrapper container."})]})]})]})}function ai(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(zn,{...n})}):zn(n)}const pe=(n={})=>ai({...n,components:{Fragment:C,...n.components}});pe[Symbol.for("mdx-component")]=!0;pe[Symbol.for("astro.needsHeadRendering")]=!si.layout;pe.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/visual-effects/aurora-border/props.mdx";const Y="aurora-border",Sn=S({id:Y,name:"Aurora Border",description:"A dynamic border component with rotation, blur, and glow effects for highlighting content.",category:y.visualEffects.id,dependencies:[b.tailwind.key],preview:ii,previewClassName:"grid place-items-center p-5",source:[{name:`${Y}.tsx`,content:ri,lang:"tsx"}],usage:[{name:`${Y}-preview.tsx`,content:oi,lang:"tsx"}],componentsAPI:[{name:`${Y}.tsx`,props:pe}]}),ci=`import { memo, useMemo } from "react";
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

export default memo(BorderBeam);`,di=`import BorderBeam from "@/registry/visual-effects/border-beam/border-beam";

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

export default BorderBeamPreview;`,li={},ui={};function Nn(n){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Prop"}),t(e.th,{children:"Type"}),t(e.th,{children:"Required"}),t(e.th,{children:"Default"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:"size"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"50"})}),t(e.td,{children:"Size of the animated beam effect"})]}),t(e.tr,{children:[t(e.td,{children:"width"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"1"})}),t(e.td,{children:"Thickness of the beam"})]}),t(e.tr,{children:[t(e.td,{children:"colors"}),t(e.td,{children:t(e.code,{children:"string[]"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'["rgba(0,0,0,0)", "rgba(127,127,127,1)", "rgba(0,0,0,0)"]'})}),t(e.td,{children:"Gradient colors used to render the beam effect"})]}),t(e.tr,{children:[t(e.td,{children:"duration"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"5"})}),t(e.td,{children:"Duration of the animation in seconds"})]}),t(e.tr,{children:[t(e.td,{children:"offset"}),t(e.td,{children:t(e.code,{children:"number"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"0"})}),t(e.td,{children:"Offset position where the animation starts"})]}),t(e.tr,{children:[t(e.td,{children:"reverse"}),t(e.td,{children:t(e.code,{children:"boolean"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:"false"})}),t(e.td,{children:"Reverses the direction of the beam animation"})]}),t(e.tr,{children:[t(e.td,{children:"timingFn"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:t(e.code,{children:'"linear"'})}),t(e.td,{children:["Motion animation timing function (e.g., ",t(e.code,{children:"ease"}),", ",t(e.code,{children:"linear"}),", ",t(e.code,{children:"easeInOut"}),")"]})]}),t(e.tr,{children:[t(e.td,{children:"className"}),t(e.td,{children:t(e.code,{children:"string"})}),t(e.td,{children:"No"}),t(e.td,{children:"—"}),t(e.td,{children:"Additional CSS class names applied to the component"})]})]})]})}function hi(n={}){const{wrapper:e}=n.components||{};return e?t(e,{...n,children:t(Nn,{...n})}):Nn(n)}const fe=(n={})=>hi({...n,components:{Fragment:C,...n.components}});fe[Symbol.for("mdx-component")]=!0;fe[Symbol.for("astro.needsHeadRendering")]=!ui.layout;fe.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/visual-effects/border-beam/props.mdx";const G="border-beam",Pn=S({id:G,name:"Border Beam",description:"A customizable animated beam that travels along the border of a container for a dynamic visual highlight.",category:y.visualEffects.id,dependencies:[b.motion.key,b.tailwind.key],preview:li,previewClassName:"grid place-items-center",source:[{name:`${G}.tsx`,content:ci,lang:"tsx"}],usage:[{name:`${G}-preview.tsx`,content:di,lang:"tsx"}],componentsAPI:[{name:`${G}.tsx`,props:fe}]}),Jn={[y.component.key]:{[an.id]:an,[ln.id]:ln,[hn.id]:hn},[y.textEffect.key]:{[pn.id]:pn,[gn.id]:gn,[bn.id]:bn,[vn.id]:vn,[kn.id]:kn,[Cn.id]:Cn},[y.background.key]:{[tn.id]:tn,[on.id]:on},[y.visualEffects.key]:{[Sn.id]:Sn,[Pn.id]:Pn}};Object.values(Jn).reduce((n,e)=>({...n,...e}),{});const $n=Object.freeze([{label:"Get Started",entries:[{label:"Introduction",href:"/introduction/"},{label:"Installation",href:"/installation/"},{label:"Components",href:"/components/"}]},...Object.entries(Jn).map(([n,e])=>({label:y[n].name,entries:Object.values(e).map(r=>({label:r.name,href:`/components/${r.id}/`}))}))]),mi=(n,e)=>n.replace(/\/$/,"")===e.replace(/\/$/,""),wi=({activePath:n=""})=>{const[e,r]=ge.useState(!1),o=ge.useCallback(()=>{r(!0)},[]);return ge.useEffect(()=>(document.documentElement.addEventListener("sidebar-open",o),()=>{document.documentElement.removeEventListener("sidebar-open",o)}),[o]),z.jsx(Qn,{children:e&&z.jsxs(z.Fragment,{children:[z.jsx(Pe.div,{className:"h-screen md:h-[calc(100%_-_32px)] w-[280px] top-0 left-0 md:top-[16px] md:left-[16px] bg-white dark:bg-neutral-950 fixed z-[102] rounded-md overflow-y-auto border border-zinc-300 dark:border-zinc-900",style:{x:-100,opacity:0},animate:{x:e?0:-320,opacity:e?1:0},exit:{x:-100,opacity:0},transition:{ease:"circInOut",type:"tween",duration:.3},children:$n.map((i,a)=>z.jsxs(z.Fragment,{children:[z.jsxs("div",{className:"py-4",children:[z.jsx("span",{className:"text-gray-800 dark:text-gray-200 px-3 block mb-2 font-semibold",children:i.label}),z.jsx("ul",{children:i.entries.map(s=>z.jsx("li",{children:z.jsx("a",{href:s.href,className:`${mi(n,s.href)?"text-blue-600 bg-blue-600/10 dark:text-blue-500 hover:text-blue-600 hover:dark:text-blue-500":"text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"}  block py-[4px] px-2 pl-4 cursor-pointer`,children:s.label})}))})]}),a!==$n.length-1&&z.jsx("div",{className:"h-[1px] bg-zinc-200 dark:bg-zinc-900"})]}))}),z.jsx(Pe.div,{className:"fixed top-0 left-0 w-full h-full z-[101] inset-[0] backdrop-blur-[5px]",onTap:()=>r(!1)})]})})};export{wi as default};
