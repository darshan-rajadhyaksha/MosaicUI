import{j as N}from"./jsx-runtime.u17CrQMm.js";import{a as Ce}from"./index.UEuQJ2Tp.js";import{p as ht,m as ut}from"./preview-switch.C7drxiXe.js";import{p as mt,m as pt}from"./preview-switch.B7Af6ae5.js";import{A as ft}from"./index.DWouYTcC.js";import{m as Oe}from"./proxy.DMw4xDb8.js";const y=Object.freeze({background:{key:"background",id:"backgrounds",name:"Backgrounds"},component:{key:"component",id:"components",name:"Components"},textEffect:{key:"textEffect",id:"text-effects",name:"Text Effects"},visualEffects:{key:"visualEffects",id:"visual-effects",name:"Visual Effects"}}),w=t=>({...t}),gt=`import { useState, useRef, useEffect, useLayoutEffect, useMemo, useCallback } from "react";
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

export default NightSkyBackground;`,yt=`import NightSkyBackground from "@/registry/backgrounds/night-sky-background/night-sky-background";

const NightSkyBackgroundPreview = () => {
  return (
    <div className="relative w-full h-full grid place-items-center">
      <NightSkyBackground density={2} />
      <HeroSection />
    </div>
  );
};

const HeroSection = () => (
  <section className="relative z-10 flex items-center justify-center p-8">
    <div className="mx-auto max-w-xl text-center">
      <div className="mb-6 inline-flex items-center rounded-full border border-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
        ⚛️ Background Component
      </div>
      <h1 className="text-5xl font-bold tracking-tight text-white lg:text-6xl text-balance">
        Astronomically Better Than a Plain Background.
      </h1>
      <p className="mx-auto mt-6 max-w-lg text-lg leading-7 text-white/70">
        Beautiful animated star backgrounds that add depth, elegance, and wonder to every interface.
      </p>
      <div className="mt-8">
        <button className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
          Get Component
        </button>
      </div>
    </div>
  </section>
);

export default NightSkyBackgroundPreview;`,vt={};let Q=globalThis.process||{},Ee=Q.argv||[],L=Q.env||{};!(L.NO_COLOR||Ee.includes("--no-color"))&&(L.FORCE_COLOR||Ee.includes("--color")||Q.platform==="win32"||(Q.stdout||{}).isTTY&&L.TERM!=="dumb"||L.CI);const Wn=Symbol.for("astro:html-string");class bt extends String{[Wn]=!0}const Un=t=>xt(t)?t:typeof t=="string"?new bt(t):t;function xt(t){return!!t?.[Wn]}typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]"&&(typeof navigator<"u"&&navigator.userAgent);var Le;(function(t){t[t.Include=0]="Include",t[t.None=1]="None"})(Le||(Le={}));var He;(function(t){t[t.Required=0]="Required",t[t.Ignore=1]="Ignore"})(He||(He={}));var Be;(function(t){t[t.Include=0]="Include",t[t.None=1]="None"})(Be||(Be={}));var Fe;(function(t){t[t.Required=0]="Required",t[t.Ignore=1]="Ignore"})(Fe||(Fe={}));var qe;function h(t,e,r){function o(c,d){if(c._zod||Object.defineProperty(c,"_zod",{value:{def:d,constr:s,traits:new Set},enumerable:!1}),c._zod.traits.has(t))return;c._zod.traits.add(t),e(c,d);const l=s.prototype,u=Object.keys(l);for(let p=0;p<u.length;p++){const b=u[p];b in c||(c[b]=l[b].bind(c))}}const i=r?.Parent??Object;class a extends i{}Object.defineProperty(a,"name",{value:t});function s(c){var d;const l=r?.Parent?new a:this;o(l,c),(d=l._zod).deferred??(d.deferred=[]);for(const u of l._zod.deferred)u();return l}return Object.defineProperty(s,"init",{value:o}),Object.defineProperty(s,Symbol.hasInstance,{value:c=>r?.Parent&&c instanceof r.Parent?!0:c?._zod?.traits?.has(t)}),Object.defineProperty(s,"name",{value:t}),s}class A extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class Xn extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}(qe=globalThis).__zod_globalConfig??(qe.__zod_globalConfig={});const wt=globalThis.__zod_globalConfig;function I(t){return wt}function Jn(t){const e=Object.values(t).filter(o=>typeof o=="number");return Object.entries(t).filter(([o,i])=>e.indexOf(+o)===-1).map(([o,i])=>i)}function ze(t,e){return typeof e=="bigint"?e.toString():e}function $e(t){return t==null}function Te(t){const e=t.startsWith("^")?1:0,r=t.endsWith("$")?t.length-1:t.length;return t.slice(e,r)}const je=Symbol("evaluating");function m(t,e,r){let o;Object.defineProperty(t,e,{get(){if(o!==je)return o===void 0&&(o=je,o=r()),o},set(i){Object.defineProperty(t,e,{value:i})},configurable:!0})}function Ct(...t){const e={};for(const r of t){const o=Object.getOwnPropertyDescriptors(r);Object.assign(e,o)}return Object.defineProperties({},e)}const Yn="captureStackTrace"in Error?Error.captureStackTrace:(...t)=>{};function Ze(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function Me(t){if(Ze(t)===!1)return!1;const e=t.constructor;if(e===void 0||typeof e!="function")return!0;const r=e.prototype;return!(Ze(r)===!1||Object.prototype.hasOwnProperty.call(r,"isPrototypeOf")===!1)}function Gn(t){return Me(t)?{...t}:Array.isArray(t)?[...t]:t instanceof Map?new Map(t):t instanceof Set?new Set(t):t}const kt=new Set(["string","number","symbol"]);function St(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function _t(t,e,r){const o=new t._zod.constr(e??t._zod.def);return(!e||r?.parent)&&(o._zod.parent=t),o}function z(t){const e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function T(t,e=0){if(t.aborted===!0)return!0;for(let r=e;r<t.issues.length;r++)if(t.issues[r]?.continue!==!0)return!0;return!1}function Nt(t,e=0){if(t.aborted===!0)return!0;for(let r=e;r<t.issues.length;r++)if(t.issues[r]?.continue===!1)return!0;return!1}function zt(t,e){return e.map(r=>{var o;return(o=r).path??(o.path=[]),r.path.unshift(t),r})}function H(t){return typeof t=="string"?t:t?.message}function $(t,e,r){const o=t.message?t.message:H(t.inst?._zod.def?.error?.(t))??H(e?.error?.(t))??H(r.customError?.(t))??H(r.localeError?.(t))??"Invalid input",{inst:i,continue:a,input:s,...c}=t;return c.path??(c.path=[]),c.message=o,e?.reportInput&&(c.input=s),c}function Ae(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function E(...t){const[e,r,o]=t;return typeof e=="string"?{message:e,code:"custom",input:r,inst:o}:{...e}}const Kn=(t,e)=>{t.name="$ZodError",Object.defineProperty(t,"_zod",{value:t._zod,enumerable:!1}),Object.defineProperty(t,"issues",{value:e,enumerable:!1}),t.message=JSON.stringify(e,ze,2),Object.defineProperty(t,"toString",{value:()=>t.message,enumerable:!1})},Qn=h("$ZodError",Kn),et=h("$ZodError",Kn,{Parent:Error});function Mt(t,e=r=>r.message){const r={},o=[];for(const i of t.issues)i.path.length>0?(r[i.path[0]]=r[i.path[0]]||[],r[i.path[0]].push(e(i))):o.push(e(i));return{formErrors:o,fieldErrors:r}}function Pt(t,e=r=>r.message){const r={_errors:[]},o=(i,a=[])=>{for(const s of i.issues)if(s.code==="invalid_union"&&s.errors.length)s.errors.map(c=>o({issues:c},[...a,...s.path]));else if(s.code==="invalid_key")o({issues:s.issues},[...a,...s.path]);else if(s.code==="invalid_element")o({issues:s.issues},[...a,...s.path]);else{const c=[...a,...s.path];if(c.length===0)r._errors.push(e(s));else{let d=r,l=0;for(;l<c.length;){const u=c[l];l===c.length-1?(d[u]=d[u]||{_errors:[]},d[u]._errors.push(e(s))):d[u]=d[u]||{_errors:[]},d=d[u],l++}}}};return o(t),r}const Re=t=>(e,r,o,i)=>{const a=o?{...o,async:!1}:{async:!1},s=e._zod.run({value:r,issues:[]},a);if(s instanceof Promise)throw new A;if(s.issues.length){const c=new(i?.Err??t)(s.issues.map(d=>$(d,a,I())));throw Yn(c,i?.callee),c}return s.value},De=t=>async(e,r,o,i)=>{const a=o?{...o,async:!0}:{async:!0};let s=e._zod.run({value:r,issues:[]},a);if(s instanceof Promise&&(s=await s),s.issues.length){const c=new(i?.Err??t)(s.issues.map(d=>$(d,a,I())));throw Yn(c,i?.callee),c}return s.value},ne=t=>(e,r,o)=>{const i=o?{...o,async:!1}:{async:!1},a=e._zod.run({value:r,issues:[]},i);if(a instanceof Promise)throw new A;return a.issues.length?{success:!1,error:new(t??Qn)(a.issues.map(s=>$(s,i,I())))}:{success:!0,data:a.value}},It=ne(et),te=t=>async(e,r,o)=>{const i=o?{...o,async:!0}:{async:!0};let a=e._zod.run({value:r,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?{success:!1,error:new t(a.issues.map(s=>$(s,i,I())))}:{success:!0,data:a.value}},$t=te(et),Tt=t=>(e,r,o)=>{const i=o?{...o,direction:"backward"}:{direction:"backward"};return Re(t)(e,r,i)},At=t=>(e,r,o)=>Re(t)(e,r,o),Rt=t=>async(e,r,o)=>{const i=o?{...o,direction:"backward"}:{direction:"backward"};return De(t)(e,r,i)},Dt=t=>async(e,r,o)=>De(t)(e,r,o),Ot=t=>(e,r,o)=>{const i=o?{...o,direction:"backward"}:{direction:"backward"};return ne(t)(e,r,i)},Et=t=>(e,r,o)=>ne(t)(e,r,o),Lt=t=>async(e,r,o)=>{const i=o?{...o,direction:"backward"}:{direction:"backward"};return te(t)(e,r,i)},Ht=t=>async(e,r,o)=>te(t)(e,r,o),R=h("$ZodCheck",(t,e)=>{var r;t._zod??(t._zod={}),t._zod.def=e,(r=t._zod).onattach??(r.onattach=[])}),Bt=h("$ZodCheckMaxLength",(t,e)=>{var r;R.init(t,e),(r=t._zod.def).when??(r.when=o=>{const i=o.value;return!$e(i)&&i.length!==void 0}),t._zod.onattach.push(o=>{const i=o._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<i&&(o._zod.bag.maximum=e.maximum)}),t._zod.check=o=>{const i=o.value;if(i.length<=e.maximum)return;const s=Ae(i);o.issues.push({origin:s,code:"too_big",maximum:e.maximum,inclusive:!0,input:i,inst:t,continue:!e.abort})}}),Ft=h("$ZodCheckMinLength",(t,e)=>{var r;R.init(t,e),(r=t._zod.def).when??(r.when=o=>{const i=o.value;return!$e(i)&&i.length!==void 0}),t._zod.onattach.push(o=>{const i=o._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>i&&(o._zod.bag.minimum=e.minimum)}),t._zod.check=o=>{const i=o.value;if(i.length>=e.minimum)return;const s=Ae(i);o.issues.push({origin:s,code:"too_small",minimum:e.minimum,inclusive:!0,input:i,inst:t,continue:!e.abort})}}),qt=h("$ZodCheckLengthEquals",(t,e)=>{var r;R.init(t,e),(r=t._zod.def).when??(r.when=o=>{const i=o.value;return!$e(i)&&i.length!==void 0}),t._zod.onattach.push(o=>{const i=o._zod.bag;i.minimum=e.length,i.maximum=e.length,i.length=e.length}),t._zod.check=o=>{const i=o.value,a=i.length;if(a===e.length)return;const s=Ae(i),c=a>e.length;o.issues.push({origin:s,...c?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:o.value,inst:t,continue:!e.abort})}}),jt=h("$ZodCheckOverwrite",(t,e)=>{R.init(t,e),t._zod.check=r=>{r.value=e.tx(r.value)}}),Zt={major:4,minor:4,patch:3},S=h("$ZodType",(t,e)=>{var r;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=Zt;const o=[...t._zod.def.checks??[]];t._zod.traits.has("$ZodCheck")&&o.unshift(t);for(const i of o)for(const a of i._zod.onattach)a(t);if(o.length===0)(r=t._zod).deferred??(r.deferred=[]),t._zod.deferred?.push(()=>{t._zod.run=t._zod.parse});else{const i=(s,c,d)=>{let l=T(s),u;for(const p of c){if(p._zod.def.when){if(Nt(s)||!p._zod.def.when(s))continue}else if(l)continue;const b=s.issues.length,g=p._zod.check(s);if(g instanceof Promise&&d?.async===!1)throw new A;if(u||g instanceof Promise)u=(u??Promise.resolve()).then(async()=>{await g,s.issues.length!==b&&(l||(l=T(s,b)))});else{if(s.issues.length===b)continue;l||(l=T(s,b))}}return u?u.then(()=>s):s},a=(s,c,d)=>{if(T(s))return s.aborted=!0,s;const l=i(c,o,d);if(l instanceof Promise){if(d.async===!1)throw new A;return l.then(u=>t._zod.parse(u,d))}return t._zod.parse(l,d)};t._zod.run=(s,c)=>{if(c.skipChecks)return t._zod.parse(s,c);if(c.direction==="backward"){const l=t._zod.parse({value:s.value,issues:[]},{...c,skipChecks:!0});return l instanceof Promise?l.then(u=>a(u,s,c)):a(l,s,c)}const d=t._zod.parse(s,c);if(d instanceof Promise){if(c.async===!1)throw new A;return d.then(l=>i(l,o,c))}return i(d,o,c)}}m(t,"~standard",()=>({validate:i=>{try{const a=It(t,i);return a.success?{value:a.data}:{issues:a.error?.issues}}catch{return $t(t,i).then(s=>s.success?{value:s.data}:{issues:s.error?.issues})}},vendor:"zod",version:1}))});function Ve(t,e,r){t.issues.length&&e.issues.push(...zt(r,t.issues)),e.value[r]=t.value}const Vt=h("$ZodArray",(t,e)=>{S.init(t,e),t._zod.parse=(r,o)=>{const i=r.value;if(!Array.isArray(i))return r.issues.push({expected:"array",code:"invalid_type",input:i,inst:t}),r;r.value=Array(i.length);const a=[];for(let s=0;s<i.length;s++){const c=i[s],d=e.element._zod.run({value:c,issues:[]},o);d instanceof Promise?a.push(d.then(l=>Ve(l,r,s))):Ve(d,r,s)}return a.length?Promise.all(a).then(()=>r):r}});function We(t,e,r,o){for(const a of t)if(a.issues.length===0)return e.value=a.value,e;const i=t.filter(a=>!T(a));return i.length===1?(e.value=i[0].value,i[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:r,errors:t.map(a=>a.issues.map(s=>$(s,o,I())))}),e)}const Wt=h("$ZodUnion",(t,e)=>{S.init(t,e),m(t._zod,"optin",()=>e.options.some(o=>o._zod.optin==="optional")?"optional":void 0),m(t._zod,"optout",()=>e.options.some(o=>o._zod.optout==="optional")?"optional":void 0),m(t._zod,"values",()=>{if(e.options.every(o=>o._zod.values))return new Set(e.options.flatMap(o=>Array.from(o._zod.values)))}),m(t._zod,"pattern",()=>{if(e.options.every(o=>o._zod.pattern)){const o=e.options.map(i=>i._zod.pattern);return new RegExp(`^(${o.map(i=>Te(i.source)).join("|")})$`)}});const r=e.options.length===1?e.options[0]._zod.run:null;t._zod.parse=(o,i)=>{if(r)return r(o,i);let a=!1;const s=[];for(const c of e.options){const d=c._zod.run({value:o.value,issues:[]},i);if(d instanceof Promise)s.push(d),a=!0;else{if(d.issues.length===0)return d;s.push(d)}}return a?Promise.all(s).then(c=>We(c,o,t,i)):We(s,o,t,i)}}),Ut=h("$ZodIntersection",(t,e)=>{S.init(t,e),t._zod.parse=(r,o)=>{const i=r.value,a=e.left._zod.run({value:i,issues:[]},o),s=e.right._zod.run({value:i,issues:[]},o);return a instanceof Promise||s instanceof Promise?Promise.all([a,s]).then(([d,l])=>Ue(r,d,l)):Ue(r,a,s)}});function Pe(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(Me(t)&&Me(e)){const r=Object.keys(e),o=Object.keys(t).filter(a=>r.indexOf(a)!==-1),i={...t,...e};for(const a of o){const s=Pe(t[a],e[a]);if(!s.valid)return{valid:!1,mergeErrorPath:[a,...s.mergeErrorPath]};i[a]=s.data}return{valid:!0,data:i}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};const r=[];for(let o=0;o<t.length;o++){const i=t[o],a=e[o],s=Pe(i,a);if(!s.valid)return{valid:!1,mergeErrorPath:[o,...s.mergeErrorPath]};r.push(s.data)}return{valid:!0,data:r}}return{valid:!1,mergeErrorPath:[]}}function Ue(t,e,r){const o=new Map;let i;for(const c of e.issues)if(c.code==="unrecognized_keys"){i??(i=c);for(const d of c.keys)o.has(d)||o.set(d,{}),o.get(d).l=!0}else t.issues.push(c);for(const c of r.issues)if(c.code==="unrecognized_keys")for(const d of c.keys)o.has(d)||o.set(d,{}),o.get(d).r=!0;else t.issues.push(c);const a=[...o].filter(([,c])=>c.l&&c.r).map(([c])=>c);if(a.length&&i&&t.issues.push({...i,keys:a}),T(t))return t;const s=Pe(e.value,r.value);if(!s.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);return t.value=s.data,t}const Xt=h("$ZodEnum",(t,e)=>{S.init(t,e);const r=Jn(e.entries),o=new Set(r);t._zod.values=o,t._zod.pattern=new RegExp(`^(${r.filter(i=>kt.has(typeof i)).map(i=>typeof i=="string"?St(i):i.toString()).join("|")})$`),t._zod.parse=(i,a)=>{const s=i.value;return o.has(s)||i.issues.push({code:"invalid_value",values:r,input:s,inst:t}),i}}),Jt=h("$ZodTransform",(t,e)=>{S.init(t,e),t._zod.optin="optional",t._zod.parse=(r,o)=>{if(o.direction==="backward")throw new Xn(t.constructor.name);const i=e.transform(r.value,r);if(o.async)return(i instanceof Promise?i:Promise.resolve(i)).then(s=>(r.value=s,r.fallback=!0,r));if(i instanceof Promise)throw new A;return r.value=i,r.fallback=!0,r}});function Xe(t,e){return e===void 0&&(t.issues.length||t.fallback)?{issues:[],value:void 0}:t}const nt=h("$ZodOptional",(t,e)=>{S.init(t,e),t._zod.optin="optional",t._zod.optout="optional",m(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),m(t._zod,"pattern",()=>{const r=e.innerType._zod.pattern;return r?new RegExp(`^(${Te(r.source)})?$`):void 0}),t._zod.parse=(r,o)=>{if(e.innerType._zod.optin==="optional"){const i=r.value,a=e.innerType._zod.run(r,o);return a instanceof Promise?a.then(s=>Xe(s,i)):Xe(a,i)}return r.value===void 0?r:e.innerType._zod.run(r,o)}}),Yt=h("$ZodExactOptional",(t,e)=>{nt.init(t,e),m(t._zod,"values",()=>e.innerType._zod.values),m(t._zod,"pattern",()=>e.innerType._zod.pattern),t._zod.parse=(r,o)=>e.innerType._zod.run(r,o)}),Gt=h("$ZodNullable",(t,e)=>{S.init(t,e),m(t._zod,"optin",()=>e.innerType._zod.optin),m(t._zod,"optout",()=>e.innerType._zod.optout),m(t._zod,"pattern",()=>{const r=e.innerType._zod.pattern;return r?new RegExp(`^(${Te(r.source)}|null)$`):void 0}),m(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),t._zod.parse=(r,o)=>r.value===null?r:e.innerType._zod.run(r,o)}),Kt=h("$ZodDefault",(t,e)=>{S.init(t,e),t._zod.optin="optional",m(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(r,o)=>{if(o.direction==="backward")return e.innerType._zod.run(r,o);if(r.value===void 0)return r.value=e.defaultValue,r;const i=e.innerType._zod.run(r,o);return i instanceof Promise?i.then(a=>Je(a,e)):Je(i,e)}});function Je(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}const Qt=h("$ZodPrefault",(t,e)=>{S.init(t,e),t._zod.optin="optional",m(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(r,o)=>(o.direction==="backward"||r.value===void 0&&(r.value=e.defaultValue),e.innerType._zod.run(r,o))}),er=h("$ZodNonOptional",(t,e)=>{S.init(t,e),m(t._zod,"values",()=>{const r=e.innerType._zod.values;return r?new Set([...r].filter(o=>o!==void 0)):void 0}),t._zod.parse=(r,o)=>{const i=e.innerType._zod.run(r,o);return i instanceof Promise?i.then(a=>Ye(a,t)):Ye(i,t)}});function Ye(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}const nr=h("$ZodCatch",(t,e)=>{S.init(t,e),t._zod.optin="optional",m(t._zod,"optout",()=>e.innerType._zod.optout),m(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(r,o)=>{if(o.direction==="backward")return e.innerType._zod.run(r,o);const i=e.innerType._zod.run(r,o);return i instanceof Promise?i.then(a=>(r.value=a.value,a.issues.length&&(r.value=e.catchValue({...r,error:{issues:a.issues.map(s=>$(s,o,I()))},input:r.value}),r.issues=[],r.fallback=!0),r)):(r.value=i.value,i.issues.length&&(r.value=e.catchValue({...r,error:{issues:i.issues.map(a=>$(a,o,I()))},input:r.value}),r.issues=[],r.fallback=!0),r)}}),tr=h("$ZodPipe",(t,e)=>{S.init(t,e),m(t._zod,"values",()=>e.in._zod.values),m(t._zod,"optin",()=>e.in._zod.optin),m(t._zod,"optout",()=>e.out._zod.optout),m(t._zod,"propValues",()=>e.in._zod.propValues),t._zod.parse=(r,o)=>{if(o.direction==="backward"){const a=e.out._zod.run(r,o);return a instanceof Promise?a.then(s=>B(s,e.in,o)):B(a,e.in,o)}const i=e.in._zod.run(r,o);return i instanceof Promise?i.then(a=>B(a,e.out,o)):B(i,e.out,o)}});function B(t,e,r){return t.issues.length?(t.aborted=!0,t):e._zod.run({value:t.value,issues:t.issues,fallback:t.fallback},r)}const rr=h("$ZodReadonly",(t,e)=>{S.init(t,e),m(t._zod,"propValues",()=>e.innerType._zod.propValues),m(t._zod,"values",()=>e.innerType._zod.values),m(t._zod,"optin",()=>e.innerType?._zod?.optin),m(t._zod,"optout",()=>e.innerType?._zod?.optout),t._zod.parse=(r,o)=>{if(o.direction==="backward")return e.innerType._zod.run(r,o);const i=e.innerType._zod.run(r,o);return i instanceof Promise?i.then(Ge):Ge(i)}});function Ge(t){return t.value=Object.freeze(t.value),t}const or=h("$ZodCustom",(t,e)=>{R.init(t,e),S.init(t,e),t._zod.parse=(r,o)=>r,t._zod.check=r=>{const o=r.value,i=e.fn(o);if(i instanceof Promise)return i.then(a=>Ke(a,r,o,t));Ke(i,r,o,t)}});function Ke(t,e,r,o){if(!t){const i={code:"custom",input:r,inst:o,path:[...o._zod.def.path??[]],continue:!o._zod.def.abort};o._zod.def.params&&(i.params=o._zod.def.params),e.issues.push(E(i))}}var Qe;class ir{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...r){const o=r[0];return this._map.set(e,o),o&&typeof o=="object"&&"id"in o&&this._idmap.set(o.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const r=this._map.get(e);return r&&typeof r=="object"&&"id"in r&&this._idmap.delete(r.id),this._map.delete(e),this}get(e){const r=e._zod.parent;if(r){const o={...this.get(r)??{}};delete o.id;const i={...o,...this._map.get(e)};return Object.keys(i).length?i:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function sr(){return new ir}(Qe=globalThis).__zod_globalRegistry??(Qe.__zod_globalRegistry=sr());const O=globalThis.__zod_globalRegistry;function ar(t,e){return new Bt({check:"max_length",...z(e),maximum:t})}function en(t,e){return new Ft({check:"min_length",...z(e),minimum:t})}function cr(t,e){return new qt({check:"length_equals",...z(e),length:t})}function dr(t){return new jt({check:"overwrite",tx:t})}function lr(t,e,r){return new t({type:"array",element:e,...z(r)})}function hr(t,e,r){const o=z(r);return o.abort??(o.abort=!0),new t({type:"custom",check:"custom",fn:e,...o})}function ur(t,e,r){return new t({type:"custom",check:"custom",fn:e,...z(r)})}function mr(t,e){const r=pr(o=>(o.addIssue=i=>{if(typeof i=="string")o.issues.push(E(i,o.value,r._zod.def));else{const a=i;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),a.input??(a.input=o.value),a.inst??(a.inst=r),a.continue??(a.continue=!r._zod.def.abort),o.issues.push(E(a))}},t(o.value,o)),e);return r}function pr(t,e){const r=new R({check:"custom",...z(e)});return r._zod.check=t,r}function tt(t){let e=t?.target??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:t.processors??{},metadataRegistry:t?.metadata??O,target:e,unrepresentable:t?.unrepresentable??"throw",override:t?.override??(()=>{}),io:t?.io??"output",counter:0,seen:new Map,cycles:t?.cycles??"ref",reused:t?.reused??"inline",external:t?.external??void 0}}function k(t,e,r={path:[],schemaPath:[]}){var o;const i=t._zod.def,a=e.seen.get(t);if(a)return a.count++,r.schemaPath.includes(t)&&(a.cycle=r.path),a.schema;const s={schema:{},count:1,cycle:void 0,path:r.path};e.seen.set(t,s);const c=t._zod.toJSONSchema?.();if(c)s.schema=c;else{const u={...r,schemaPath:[...r.schemaPath,t],path:r.path};if(t._zod.processJSONSchema)t._zod.processJSONSchema(e,s.schema,u);else{const b=s.schema,g=e.processors[i.type];if(!g)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);g(t,e,b,u)}const p=t._zod.parent;p&&(s.ref||(s.ref=p),k(p,e,u),e.seen.get(p).isParent=!0)}const d=e.metadataRegistry.get(t);return d&&Object.assign(s.schema,d),e.io==="input"&&C(t)&&(delete s.schema.examples,delete s.schema.default),e.io==="input"&&"_prefault"in s.schema&&((o=s.schema).default??(o.default=s.schema._prefault)),delete s.schema._prefault,e.seen.get(t).schema}function rt(t,e){const r=t.seen.get(e);if(!r)throw new Error("Unprocessed schema. This is a bug in Zod.");const o=new Map;for(const s of t.seen.entries()){const c=t.metadataRegistry.get(s[0])?.id;if(c){const d=o.get(c);if(d&&d!==s[0])throw new Error(`Duplicate schema id "${c}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);o.set(c,s[0])}}const i=s=>{const c=t.target==="draft-2020-12"?"$defs":"definitions";if(t.external){const p=t.external.registry.get(s[0])?.id,b=t.external.uri??(x=>x);if(p)return{ref:b(p)};const g=s[1].defId??s[1].schema.id??`schema${t.counter++}`;return s[1].defId=g,{defId:g,ref:`${b("__shared")}#/${c}/${g}`}}if(s[1]===r)return{ref:"#"};const l=`#/${c}/`,u=s[1].schema.id??`__schema${t.counter++}`;return{defId:u,ref:l+u}},a=s=>{if(s[1].schema.$ref)return;const c=s[1],{ref:d,defId:l}=i(s);c.def={...c.schema},l&&(c.defId=l);const u=c.schema;for(const p in u)delete u[p];u.$ref=d};if(t.cycles==="throw")for(const s of t.seen.entries()){const c=s[1];if(c.cycle)throw new Error(`Cycle detected: #/${c.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const s of t.seen.entries()){const c=s[1];if(e===s[0]){a(s);continue}if(t.external){const l=t.external.registry.get(s[0])?.id;if(e!==s[0]&&l){a(s);continue}}if(t.metadataRegistry.get(s[0])?.id){a(s);continue}if(c.cycle){a(s);continue}if(c.count>1&&t.reused==="ref"){a(s);continue}}}function ot(t,e){const r=t.seen.get(e);if(!r)throw new Error("Unprocessed schema. This is a bug in Zod.");const o=c=>{const d=t.seen.get(c);if(d.ref===null)return;const l=d.def??d.schema,u={...l},p=d.ref;if(d.ref=null,p){o(p);const g=t.seen.get(p),x=g.schema;if(x.$ref&&(t.target==="draft-07"||t.target==="draft-04"||t.target==="openapi-3.0")?(l.allOf=l.allOf??[],l.allOf.push(x)):Object.assign(l,x),Object.assign(l,u),c._zod.parent===p)for(const P in l)P==="$ref"||P==="allOf"||P in u||delete l[P];if(x.$ref&&g.def)for(const P in l)P==="$ref"||P==="allOf"||P in g.def&&JSON.stringify(l[P])===JSON.stringify(g.def[P])&&delete l[P]}const b=c._zod.parent;if(b&&b!==p){o(b);const g=t.seen.get(b);if(g?.schema.$ref&&(l.$ref=g.schema.$ref,g.def))for(const x in l)x==="$ref"||x==="allOf"||x in g.def&&JSON.stringify(l[x])===JSON.stringify(g.def[x])&&delete l[x]}t.override({zodSchema:c,jsonSchema:l,path:d.path??[]})};for(const c of[...t.seen.entries()].reverse())o(c[0]);const i={};if(t.target==="draft-2020-12"?i.$schema="https://json-schema.org/draft/2020-12/schema":t.target==="draft-07"?i.$schema="http://json-schema.org/draft-07/schema#":t.target==="draft-04"?i.$schema="http://json-schema.org/draft-04/schema#":t.target,t.external?.uri){const c=t.external.registry.get(e)?.id;if(!c)throw new Error("Schema is missing an `id` property");i.$id=t.external.uri(c)}Object.assign(i,r.def??r.schema);const a=t.metadataRegistry.get(e)?.id;a!==void 0&&i.id===a&&delete i.id;const s=t.external?.defs??{};for(const c of t.seen.entries()){const d=c[1];d.def&&d.defId&&(d.def.id===d.defId&&delete d.def.id,s[d.defId]=d.def)}t.external||Object.keys(s).length>0&&(t.target==="draft-2020-12"?i.$defs=s:i.definitions=s);try{const c=JSON.parse(JSON.stringify(i));return Object.defineProperty(c,"~standard",{value:{...e["~standard"],jsonSchema:{input:ee(e,"input",t.processors),output:ee(e,"output",t.processors)}},enumerable:!1,writable:!1}),c}catch{throw new Error("Error converting schema to JSON.")}}function C(t,e){const r=e??{seen:new Set};if(r.seen.has(t))return!1;r.seen.add(t);const o=t._zod.def;if(o.type==="transform")return!0;if(o.type==="array")return C(o.element,r);if(o.type==="set")return C(o.valueType,r);if(o.type==="lazy")return C(o.getter(),r);if(o.type==="promise"||o.type==="optional"||o.type==="nonoptional"||o.type==="nullable"||o.type==="readonly"||o.type==="default"||o.type==="prefault")return C(o.innerType,r);if(o.type==="intersection")return C(o.left,r)||C(o.right,r);if(o.type==="record"||o.type==="map")return C(o.keyType,r)||C(o.valueType,r);if(o.type==="pipe")return t._zod.traits.has("$ZodCodec")?!0:C(o.in,r)||C(o.out,r);if(o.type==="object"){for(const i in o.shape)if(C(o.shape[i],r))return!0;return!1}if(o.type==="union"){for(const i of o.options)if(C(i,r))return!0;return!1}if(o.type==="tuple"){for(const i of o.items)if(C(i,r))return!0;return!!(o.rest&&C(o.rest,r))}return!1}const fr=(t,e={})=>r=>{const o=tt({...r,processors:e});return k(t,o),rt(o,t),ot(o,t)},ee=(t,e,r={})=>o=>{const{libraryOptions:i,target:a}=o??{},s=tt({...i??{},target:a,io:e,processors:r});return k(t,s),rt(s,t),ot(s,t)},gr=(t,e,r,o)=>{const i=t._zod.def,a=Jn(i.entries);a.every(s=>typeof s=="number")&&(r.type="number"),a.every(s=>typeof s=="string")&&(r.type="string"),r.enum=a},yr=(t,e,r,o)=>{if(e.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},vr=(t,e,r,o)=>{if(e.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},br=(t,e,r,o)=>{const i=r,a=t._zod.def,{minimum:s,maximum:c}=t._zod.bag;typeof s=="number"&&(i.minItems=s),typeof c=="number"&&(i.maxItems=c),i.type="array",i.items=k(a.element,e,{...o,path:[...o.path,"items"]})},xr=(t,e,r,o)=>{const i=t._zod.def,a=i.inclusive===!1,s=i.options.map((c,d)=>k(c,e,{...o,path:[...o.path,a?"oneOf":"anyOf",d]}));a?r.oneOf=s:r.anyOf=s},wr=(t,e,r,o)=>{const i=t._zod.def,a=k(i.left,e,{...o,path:[...o.path,"allOf",0]}),s=k(i.right,e,{...o,path:[...o.path,"allOf",1]}),c=l=>"allOf"in l&&Object.keys(l).length===1,d=[...c(a)?a.allOf:[a],...c(s)?s.allOf:[s]];r.allOf=d},Cr=(t,e,r,o)=>{const i=t._zod.def,a=k(i.innerType,e,o),s=e.seen.get(t);e.target==="openapi-3.0"?(s.ref=i.innerType,r.nullable=!0):r.anyOf=[a,{type:"null"}]},kr=(t,e,r,o)=>{const i=t._zod.def;k(i.innerType,e,o);const a=e.seen.get(t);a.ref=i.innerType},Sr=(t,e,r,o)=>{const i=t._zod.def;k(i.innerType,e,o);const a=e.seen.get(t);a.ref=i.innerType,r.default=JSON.parse(JSON.stringify(i.defaultValue))},_r=(t,e,r,o)=>{const i=t._zod.def;k(i.innerType,e,o);const a=e.seen.get(t);a.ref=i.innerType,e.io==="input"&&(r._prefault=JSON.parse(JSON.stringify(i.defaultValue)))},Nr=(t,e,r,o)=>{const i=t._zod.def;k(i.innerType,e,o);const a=e.seen.get(t);a.ref=i.innerType;let s;try{s=i.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}r.default=s},zr=(t,e,r,o)=>{const i=t._zod.def,a=i.in._zod.traits.has("$ZodTransform"),s=e.io==="input"?a?i.out:i.in:i.out;k(s,e,o);const c=e.seen.get(t);c.ref=s},Mr=(t,e,r,o)=>{const i=t._zod.def;k(i.innerType,e,o);const a=e.seen.get(t);a.ref=i.innerType,r.readOnly=!0},it=(t,e,r,o)=>{const i=t._zod.def;k(i.innerType,e,o);const a=e.seen.get(t);a.ref=i.innerType},Pr=(t,e)=>{Qn.init(t,e),t.name="ZodError",Object.defineProperties(t,{format:{value:r=>Pt(t,r)},flatten:{value:r=>Mt(t,r)},addIssue:{value:r=>{t.issues.push(r),t.message=JSON.stringify(t.issues,ze,2)}},addIssues:{value:r=>{t.issues.push(...r),t.message=JSON.stringify(t.issues,ze,2)}},isEmpty:{get(){return t.issues.length===0}}})},M=h("ZodError",Pr,{Parent:Error}),Ir=Re(M),$r=De(M),Tr=ne(M),Ar=te(M),Rr=Tt(M),Dr=At(M),Or=Rt(M),Er=Dt(M),Lr=Ot(M),Hr=Et(M),Br=Lt(M),Fr=Ht(M),nn=new WeakMap;function st(t,e,r){const o=Object.getPrototypeOf(t);let i=nn.get(o);if(i||(i=new Set,nn.set(o,i)),!i.has(e)){i.add(e);for(const a in r){const s=r[a];Object.defineProperty(o,a,{configurable:!0,enumerable:!1,get(){const c=s.bind(this);return Object.defineProperty(this,a,{configurable:!0,writable:!0,enumerable:!0,value:c}),c},set(c){Object.defineProperty(this,a,{configurable:!0,writable:!0,enumerable:!0,value:c})}})}}}const _=h("ZodType",(t,e)=>(S.init(t,e),Object.assign(t["~standard"],{jsonSchema:{input:ee(t,"input"),output:ee(t,"output")}}),t.toJSONSchema=fr(t,{}),t.def=e,t.type=e.type,Object.defineProperty(t,"_def",{value:e}),t.parse=(r,o)=>Ir(t,r,o,{callee:t.parse}),t.safeParse=(r,o)=>Tr(t,r,o),t.parseAsync=async(r,o)=>$r(t,r,o,{callee:t.parseAsync}),t.safeParseAsync=async(r,o)=>Ar(t,r,o),t.spa=t.safeParseAsync,t.encode=(r,o)=>Rr(t,r,o),t.decode=(r,o)=>Dr(t,r,o),t.encodeAsync=async(r,o)=>Or(t,r,o),t.decodeAsync=async(r,o)=>Er(t,r,o),t.safeEncode=(r,o)=>Lr(t,r,o),t.safeDecode=(r,o)=>Hr(t,r,o),t.safeEncodeAsync=async(r,o)=>Br(t,r,o),t.safeDecodeAsync=async(r,o)=>Fr(t,r,o),st(t,"ZodType",{check(...r){const o=this.def;return this.clone(Ct(o,{checks:[...o.checks??[],...r.map(i=>typeof i=="function"?{_zod:{check:i,def:{check:"custom"},onattach:[]}}:i)]}),{parent:!0})},with(...r){return this.check(...r)},clone(r,o){return _t(this,r,o)},brand(){return this},register(r,o){return r.add(this,o),this},refine(r,o){return this.check(po(r,o))},superRefine(r,o){return this.check(fo(r,o))},overwrite(r){return this.check(dr(r))},optional(){return tn(this)},exactOptional(){return Qr(this)},nullable(){return rn(this)},nullish(){return tn(rn(this))},nonoptional(r){return so(this,r)},array(){return jr(this)},or(r){return Vr([this,r])},and(r){return Ur(this,r)},transform(r){return on(this,Yr(r))},default(r){return to(this,r)},prefault(r){return oo(this,r)},catch(r){return co(this,r)},pipe(r){return on(this,r)},readonly(){return uo(this)},describe(r){const o=this.clone();return O.add(o,{description:r}),o},meta(...r){if(r.length===0)return O.get(this);const o=this.clone();return O.add(o,r[0]),o},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(r){return r(this)}}),Object.defineProperty(t,"description",{get(){return O.get(t)?.description},configurable:!0}),t)),qr=h("ZodArray",(t,e)=>{Vt.init(t,e),_.init(t,e),t._zod.processJSONSchema=(r,o,i)=>br(t,r,o,i),t.element=e.element,st(t,"ZodArray",{min(r,o){return this.check(en(r,o))},nonempty(r){return this.check(en(1,r))},max(r,o){return this.check(ar(r,o))},length(r,o){return this.check(cr(r,o))},unwrap(){return this.element}})});function jr(t,e){return lr(qr,t,e)}const Zr=h("ZodUnion",(t,e)=>{Wt.init(t,e),_.init(t,e),t._zod.processJSONSchema=(r,o,i)=>xr(t,r,o,i),t.options=e.options});function Vr(t,e){return new Zr({type:"union",options:t,...z(e)})}const Wr=h("ZodIntersection",(t,e)=>{Ut.init(t,e),_.init(t,e),t._zod.processJSONSchema=(r,o,i)=>wr(t,r,o,i)});function Ur(t,e){return new Wr({type:"intersection",left:t,right:e})}const Ie=h("ZodEnum",(t,e)=>{Xt.init(t,e),_.init(t,e),t._zod.processJSONSchema=(o,i,a)=>gr(t,o,i),t.enum=e.entries,t.options=Object.values(e.entries);const r=new Set(Object.keys(e.entries));t.extract=(o,i)=>{const a={};for(const s of o)if(r.has(s))a[s]=e.entries[s];else throw new Error(`Key ${s} not found in enum`);return new Ie({...e,checks:[],...z(i),entries:a})},t.exclude=(o,i)=>{const a={...e.entries};for(const s of o)if(r.has(s))delete a[s];else throw new Error(`Key ${s} not found in enum`);return new Ie({...e,checks:[],...z(i),entries:a})}});function Xr(t,e){const r=Array.isArray(t)?Object.fromEntries(t.map(o=>[o,o])):t;return new Ie({type:"enum",entries:r,...z(e)})}const Jr=h("ZodTransform",(t,e)=>{Jt.init(t,e),_.init(t,e),t._zod.processJSONSchema=(r,o,i)=>vr(t,r),t._zod.parse=(r,o)=>{if(o.direction==="backward")throw new Xn(t.constructor.name);r.addIssue=a=>{if(typeof a=="string")r.issues.push(E(a,r.value,e));else{const s=a;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),s.input??(s.input=r.value),s.inst??(s.inst=t),r.issues.push(E(s))}};const i=e.transform(r.value,r);return i instanceof Promise?i.then(a=>(r.value=a,r.fallback=!0,r)):(r.value=i,r.fallback=!0,r)}});function Yr(t){return new Jr({type:"transform",transform:t})}const Gr=h("ZodOptional",(t,e)=>{nt.init(t,e),_.init(t,e),t._zod.processJSONSchema=(r,o,i)=>it(t,r,o,i),t.unwrap=()=>t._zod.def.innerType});function tn(t){return new Gr({type:"optional",innerType:t})}const Kr=h("ZodExactOptional",(t,e)=>{Yt.init(t,e),_.init(t,e),t._zod.processJSONSchema=(r,o,i)=>it(t,r,o,i),t.unwrap=()=>t._zod.def.innerType});function Qr(t){return new Kr({type:"optional",innerType:t})}const eo=h("ZodNullable",(t,e)=>{Gt.init(t,e),_.init(t,e),t._zod.processJSONSchema=(r,o,i)=>Cr(t,r,o,i),t.unwrap=()=>t._zod.def.innerType});function rn(t){return new eo({type:"nullable",innerType:t})}const no=h("ZodDefault",(t,e)=>{Kt.init(t,e),_.init(t,e),t._zod.processJSONSchema=(r,o,i)=>Sr(t,r,o,i),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function to(t,e){return new no({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():Gn(e)}})}const ro=h("ZodPrefault",(t,e)=>{Qt.init(t,e),_.init(t,e),t._zod.processJSONSchema=(r,o,i)=>_r(t,r,o,i),t.unwrap=()=>t._zod.def.innerType});function oo(t,e){return new ro({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():Gn(e)}})}const io=h("ZodNonOptional",(t,e)=>{er.init(t,e),_.init(t,e),t._zod.processJSONSchema=(r,o,i)=>kr(t,r,o,i),t.unwrap=()=>t._zod.def.innerType});function so(t,e){return new io({type:"nonoptional",innerType:t,...z(e)})}const ao=h("ZodCatch",(t,e)=>{nr.init(t,e),_.init(t,e),t._zod.processJSONSchema=(r,o,i)=>Nr(t,r,o,i),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function co(t,e){return new ao({type:"catch",innerType:t,catchValue:typeof e=="function"?e:()=>e})}const lo=h("ZodPipe",(t,e)=>{tr.init(t,e),_.init(t,e),t._zod.processJSONSchema=(r,o,i)=>zr(t,r,o,i),t.in=e.in,t.out=e.out});function on(t,e){return new lo({type:"pipe",in:t,out:e})}const ho=h("ZodReadonly",(t,e)=>{rr.init(t,e),_.init(t,e),t._zod.processJSONSchema=(r,o,i)=>Mr(t,r,o,i),t.unwrap=()=>t._zod.def.innerType});function uo(t){return new ho({type:"readonly",innerType:t})}const at=h("ZodCustom",(t,e)=>{or.init(t,e),_.init(t,e),t._zod.processJSONSchema=(r,o,i)=>yr(t,r)});function mo(t,e){return hr(at,t??(()=>!0),e)}function po(t,e={}){return ur(at,t,e)}function fo(t,e){return mr(t,e)}const sn={custom:"custom"},go={"SHA-256":"sha256-","SHA-384":"sha384-","SHA-512":"sha512-"};Xr(Object.keys(go)).optional().default("SHA-256");const an=["base-uri","child-src","connect-src","default-src","fenced-frame-src","font-src","form-action","frame-ancestors","frame-src","img-src","manifest-src","media-src","object-src","referrer","report-to","report-uri","require-trusted-types-for","sandbox","trusted-types","upgrade-insecure-requests","worker-src"];mo(t=>typeof t=="string").superRefine((t,e)=>{an.some(o=>t.startsWith(o))||(t.startsWith("script-src")||t.startsWith("style-src")?e.addIssue({code:sn.custom,message:"Directives `script-src` and `style-src` are not allowed in `security.csp.directives`. Please use `security.csp.scriptDirective` and `security.csp.styleDirective` instead.",fatal:!0}):e.addIssue({code:sn.custom,message:`Invalid directive: "${t}". Allowed directives are: ${an.join(", ")}`,fatal:!0}))});new TextEncoder;new TextDecoder;Un(`async function replaceServerIsland(id, r) {
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
`).map(t=>t.trim()).filter(t=>t&&!t.startsWith("//")).join(" "));const v=Symbol.for("astro:fragment"),yo=Symbol.for("astro:renderer");new TextEncoder;new TextDecoder;"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("").reduce((t,e)=>(t[e.charCodeAt(0)]=e,t),[]);"-0123456789_".split("").reduce((t,e)=>(t[e.charCodeAt(0)]=e,t),[]);const ct="astro:jsx",cn=Symbol("empty"),dn=t=>t;function ke(t){return t&&typeof t=="object"&&t[ct]}function vo(t){if(typeof t.type=="string")return t;const e={};if(ke(t.props.children)){const r=t.props.children;if(!ke(r)||!("slot"in r.props))return;const o=dn(r.props.slot);e[o]=[r],e[o].$$slot=!0,delete r.props.slot,delete t.props.children}else Array.isArray(t.props.children)&&(t.props.children=t.props.children.map(r=>{if(!ke(r)||!("slot"in r.props))return r;const o=dn(r.props.slot);return Array.isArray(e[o])?e[o].push(r):(e[o]=[r],e[o].$$slot=!0),delete r.props.slot,cn}).filter(r=>r!==cn));Object.assign(t.props,e)}function dt(t){return typeof t=="string"?Un(t):Array.isArray(t)?t.map(e=>dt(e)):t}function bo(t){if("set:html"in t.props||"set:text"in t.props){if("set:html"in t.props){const e=dt(t.props["set:html"]);delete t.props["set:html"],Object.assign(t.props,{children:e});return}if("set:text"in t.props){const e=t.props["set:text"];delete t.props["set:text"],Object.assign(t.props,{children:e});return}}}function n(t,e={},r){const o={[yo]:"astro:jsx",[ct]:!0,type:t,props:e};return bo(o),vo(o),o}const xo={};function ln(t){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"density"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"1"})}),n(e.td,{children:"Controls the number of stars rendered in the background. Min: 0.1, Max: 10. Higher = denser sky."})]}),n(e.tr,{children:[n(e.td,{children:"spaceColor"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'"rgb(0, 0, 0)"'})}),n(e.td,{children:["Sets the background color of the space. Accepts any valid CSS color value (e.g., ",n(e.code,{children:"rgb()"}),", ",n(e.code,{children:"#000"}),", ",n(e.code,{children:"black"}),", ",n(e.code,{children:"hsl()"}),")."]})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Additional CSS classes applied to the main container."})]})]})]})}function wo(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(ln,{...t})}):ln(t)}const re=(t={})=>wo({...t,components:{Fragment:v,...t.components}});re[Symbol.for("mdx-component")]=!0;re[Symbol.for("astro.needsHeadRendering")]=!xo.layout;re.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/backgrounds/night-sky-background/props.mdx";const f=Object.freeze({react:{key:"react",name:"React",icon:"react"},tailwind:{key:"tailwind",name:"Tailwind",icon:"tailwind"},motion:{key:"motion",name:"Motion",icon:"motion"}}),F="night-sky-background",hn=w({id:F,name:"Night Sky",description:"A dynamic night sky background with twinkling stars, customizable density, and content layered on top.",category:y.background.id,dependencies:[f.tailwind.key],preview:vt,previewClassName:"grid place-items-center",source:[{name:`${F}.tsx`,content:gt,lang:"tsx"}],usage:[{name:`${F}-preview.tsx`,content:yt,lang:"tsx"}],componentsAPI:[{name:`${F}.tsx`,props:re}]}),Co=`import { useRef, useState, useEffect, useLayoutEffect, useMemo, memo, useCallback } from "react";
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

export default memo(StarFieldBackground);`,ko=`import StarFieldBackground from "@/registry/backgrounds/star-field-background/star-field-background";

const StarFieldBackgroundPreview = () => {
  return (
    <div className="relative w-full h-full grid place-items-center">
      <StarFieldBackground />
      <HeroSection />
    </div>
  );
};

const HeroSection = () => (
  <section className="relative z-10 flex items-center justify-center p-8">
    <div className="mx-auto max-w-xl text-center">
      <div className="mb-6 inline-flex items-center rounded-full border border-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
        ⚛️ Background Component
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl text-balance">
        Space Is Mostly Empty. Your Background Doesn't Have to Be.
      </h1>
      <p className="mx-auto mt-6 max-w-lg text-lg leading-7 text-white/70">
        Elegant animated starfields that transform simple layouts into captivating digital experiences.
      </p>
      <div className="mt-8">
        <button className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
          Get Component
        </button>
      </div>
    </div>
  </section>
);

export default StarFieldBackgroundPreview;`,So={},_o={};function un(t){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"speed"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"5"})}),n(e.td,{children:"Controls the star movement speed. Positive = forward, Negative = backward."})]}),n(e.tr,{children:[n(e.td,{children:"spaceColor"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'"#000000"'})}),n(e.td,{children:"Sets the background color of the space. Accepts any valid CSS color value."})]}),n(e.tr,{children:[n(e.td,{children:"starColor"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'"#ffffff"'})}),n(e.td,{children:"Sets the color of the stars. Accepts any valid CSS color value."})]}),n(e.tr,{children:[n(e.td,{children:"starTrailColor"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'"#555555"'})}),n(e.td,{children:"Sets the color of the star trails. Accepts any valid CSS color value."})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Additional CSS classes applied to the main container."})]})]})]})}function No(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(un,{...t})}):un(t)}const oe=(t={})=>No({...t,components:{Fragment:v,...t.components}});oe[Symbol.for("mdx-component")]=!0;oe[Symbol.for("astro.needsHeadRendering")]=!_o.layout;oe.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/backgrounds/star-field-background/props.mdx";const q="star-field-background",mn=w({id:q,name:"Star Field",description:"A dynamic star field background with adjustable speed, creating a sense of motion and depth.",category:y.background.id,dependencies:[f.tailwind.key],preview:So,previewClassName:"grid place-items-center",source:[{name:`${q}.tsx`,content:Co,lang:"tsx"}],usage:[{name:`${q}-preview.tsx`,content:ko,lang:"tsx"}],componentsAPI:[{name:`${q}.tsx`,props:oe}]}),zo=`import { Children, memo } from "react";
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

export default memo(CircularList);`,Mo=`import CircularList from "@/registry/components/circular-list/circular-list";

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

export default CircularListPreview;`,Po={},Io={};function pn(t){const e={code:"code",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"children"}),n(e.td,{children:n(e.code,{children:"ReactNode"})}),n(e.td,{children:"Yes"}),n(e.td,{children:"—"}),n(e.td,{children:"Elements that will be arranged along the circle’s circumference."})]}),n(e.tr,{children:[n(e.td,{children:"radius"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"100"})}),n(e.td,{children:["Radius of the circle in ",n(e.strong,{children:"pixels (px)"})," used to position the children around the center."]})]}),n(e.tr,{children:[n(e.td,{children:"duration"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"10"})}),n(e.td,{children:"Time (in seconds) it takes to complete one full 360° rotation."})]}),n(e.tr,{children:[n(e.td,{children:"rotationLock"}),n(e.td,{children:n(e.code,{children:"boolean"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"true"})}),n(e.td,{children:"Prevents orbiting items from rotating with the path, keeping them upright."})]}),n(e.tr,{children:[n(e.td,{children:"direction"}),n(e.td,{children:n(e.code,{children:'"clockwise" | "anti-clockwise"'})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'"clockwise"'})}),n(e.td,{children:"Controls the direction of rotation."})]}),n(e.tr,{children:[n(e.td,{children:"degreeOffset"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"0"})}),n(e.td,{children:"Starting angle offset (in degrees) from which the circular layout begins."})]}),n(e.tr,{children:[n(e.td,{children:"pauseOnHover"}),n(e.td,{children:n(e.code,{children:"boolean"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"false"})}),n(e.td,{children:"Pauses the rotation animation when the user hovers over the component."})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Additional CSS class names applied to the root container."})]}),n(e.tr,{children:[n(e.td,{children:"style"}),n(e.td,{children:n(e.code,{children:"React.CSSProperties"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Inline styles applied to the root container."})]})]})]})}function $o(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(pn,{...t})}):pn(t)}const ie=(t={})=>$o({...t,components:{Fragment:v,...t.components}});ie[Symbol.for("mdx-component")]=!0;ie[Symbol.for("astro.needsHeadRendering")]=!Io.layout;ie.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/components/circular-list/props.mdx";const j="circular-list",fn=w({id:j,name:"Circular List",description:"A circular orbit component that displays elements around a center and rotates them continuously, ideal for galleries, dashboards, and navigation menus.",category:y.component.id,dependencies:[f.tailwind.key,f.motion.key],preview:Po,previewClassName:"grid place-items-center",source:[{name:`${j}.tsx`,content:zo,lang:"tsx"}],usage:[{name:`${j}-preview.tsx`,content:Mo,lang:"tsx"}],componentsAPI:[{name:`${j}.tsx`,props:ie}]}),To=`import { type ReactNode, type MouseEvent, memo, useState, useRef, useContext, createContext, useCallback, useMemo } from "react";
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
    <DockContext.Provider
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
    </DockContext.Provider>
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

export default memo(FluidDock);`,Ao=`import FluidDock, { FluidDockItem } from "@/registry/components/fluid-dock/fluid-dock";

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

export default FluidDockPreview;`,Ro={},Do={};function gn(t){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"children"}),n(e.td,{children:n(e.code,{children:"React.ReactNode"})}),n(e.td,{children:"Yes"}),n(e.td,{children:"—"}),n(e.td,{children:["The ",n(e.code,{children:"FluidDockItem"})," components rendered inside the dock."]})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Additional CSS classes applied to the dock container."})]}),n(e.tr,{children:[n(e.td,{children:"itemSize"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"40"})}),n(e.td,{children:"Base size (in pixels) of each dock item before magnification."})]}),n(e.tr,{children:[n(e.td,{children:"magnificationScale"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"1.5"})}),n(e.td,{children:"Maximum scale applied to a dock item when hovered."})]}),n(e.tr,{children:[n(e.td,{children:"padding"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"8"})}),n(e.td,{children:"Inner padding (in pixels) of the dock container."})]}),n(e.tr,{children:[n(e.td,{children:"style"}),n(e.td,{children:n(e.code,{children:"React.CSSProperties"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Inline styles applied to the dock container."})]})]})]})}function Oo(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(gn,{...t})}):gn(t)}const se=(t={})=>Oo({...t,components:{Fragment:v,...t.components}});se[Symbol.for("mdx-component")]=!0;se[Symbol.for("astro.needsHeadRendering")]=!Do.layout;se.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/components/fluid-dock/FluidDock-props.mdx";const Eo={};function yn(t){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"children"}),n(e.td,{children:n(e.code,{children:"React.ReactNode"})}),n(e.td,{children:"Yes"}),n(e.td,{children:"—"}),n(e.td,{children:"The content of the dock item, typically an icon or image."})]}),n(e.tr,{children:[n(e.td,{children:"tooltip"}),n(e.td,{children:n(e.code,{children:"React.ReactNode"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Content displayed in the tooltip when the item is hovered."})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Additional CSS classes applied to the dock item."})]}),n(e.tr,{children:[n(e.td,{children:"tooltipClassName"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Additional CSS classes applied to the tooltip."})]}),n(e.tr,{children:[n(e.td,{children:"style"}),n(e.td,{children:n(e.code,{children:"React.CSSProperties"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Inline styles applied to the dock item."})]})]})]})}function Lo(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(yn,{...t})}):yn(t)}const ae=(t={})=>Lo({...t,components:{Fragment:v,...t.components}});ae[Symbol.for("mdx-component")]=!0;ae[Symbol.for("astro.needsHeadRendering")]=!Eo.layout;ae.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/components/fluid-dock/FluidDockItem-props.mdx";const Se="fluid-dock",vn=w({id:Se,name:"Fluid Dock",description:"A modern dock navigation with fluid hover animations and interactive tooltips.",category:y.component.id,dependencies:[f.tailwind.key,f.motion.key],preview:Ro,previewClassName:"grid place-items-center",source:[{name:`${Se}.tsx`,content:To,lang:"tsx"}],usage:[{name:`${Se}-preview.tsx`,content:Ao,lang:"tsx"}],componentsAPI:[{name:"FluidDock",props:se},{name:"FluidDockItem",props:ae}]}),Ho=`import { type ReactNode, type ReactElement, Children, cloneElement, isValidElement, createContext, memo, useCallback, useContext, useMemo, useState } from "react";
import { AnimatePresence, motion, type HTMLMotionProps } from "motion/react";
import cn from "@/utils/cn";

export type FloatingActionMenuProps = {
  children?: ReactNode;
  radius?: number;
  gap?: number;
  actionButtonClassName?: string;
} & React.ComponentProps<"div">;

export type FloatingActionMenuItemProps = {
  icon: ReactNode;
  name: string;
  index?: number;
} & HTMLMotionProps<"button">;

type FloatingActionMenuContextValue = {
  showMenuItems: boolean;
  radius: number;
  gap: number;
};

const FloatingActionMenuContext  = (
  createContext<FloatingActionMenuContextValue>({
    showMenuItems: false,
    radius: 540,
    gap: 4.5,
  })
);

const degreeToRadian = (
  degree: number,
) => (
  (Math.PI / 180) * degree
);

const FloatingActionMenu = (
  props: FloatingActionMenuProps
) => {
  const {
    children,
    radius = 540,
    gap = 4.5,
    actionButtonClassName = "",
    ...restProps
  } = props;

  const [showMenuItems, setShowMenuItems] = useState(false);

  const handleToggleClick = useCallback(() => {
    setShowMenuItems(prev => !prev);
  }, []);

  const floatingActionMenuContextValue = (
    useMemo<FloatingActionMenuContextValue>(() => ({
      showMenuItems,
      radius,
      gap,
    }), [showMenuItems, radius, gap])
  );

  return (
    <div {...restProps}>
      <FloatingActionMenuContext.Provider 
        value={floatingActionMenuContextValue}
      >
        {Children.map(children, (child, childIndex) => {
          if (!isValidElement(child)) {
            return child;
          }
          return cloneElement(
            child as ReactElement<FloatingActionMenuItemProps>, { 
              index: childIndex
            },
          );
        })}
      </FloatingActionMenuContext.Provider>
      <motion.button
        className={cn(
          "w-[48px] h-[48px] grid place-items-center rounded-[50%]",
          "bg-gray-100 dark:bg-neutral-800",
          "shadow shadow-md cursor-pointer",
          actionButtonClassName,
        )}
        onTap={handleToggleClick}
        whileTap={{
          scale: 1.25
        }}
        animate={{
          rotate: showMenuItems ? 45 : 0,
        }}
      >
        <PlusIcon className="text-2xl text-neutral-900 dark:text-white" />
      </motion.button>
    </div>
  );
};

export const FloatingActionMenuItem = memo((
  props: FloatingActionMenuItemProps
) => {
  const {
    icon,
    name,
    index = 0,
    className,
    style,
    ...restProps
  } = props;

  const { showMenuItems, radius, gap } = useContext(FloatingActionMenuContext);

  const getMenuItemPosAndDeg = (index: number) => {
    const deg = index * gap;
    const angle = degreeToRadian(deg);
    const x = (radius * Math.cos(angle)) - radius;
    const y = (-radius * Math.sin(angle)) - 50;
    return {
      x,
      y,
      deg,
    };
  };

  const menuItemStyle = {
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 0,
    filter: "blur(5px)",
  };

  const menuItemAnimate = (index: number) => {
    const { x, y, deg } = getMenuItemPosAndDeg(index);
    return {
      x,
      y,
      rotate: -deg,
      opacity: 1,
      filter: "blur(0px)",
    }
  };

  const menuItemExit = {
    ...menuItemStyle,
    transition: {
      duration: 0.15,
    },
  };

  return (
    <AnimatePresence>
      {showMenuItems && (
        <motion.button
          {...restProps}
          className={cn(
            "absolute flex items-center gap-2 py-1 px-4 rounded-2xl",
            "origin-left whitespace-nowrap cursor-pointer",
            "bg-neutral-50 dark:bg-zinc-900",
            "border border-neutral-200 dark:border-neutral-800",
            "text-neutral-900 dark:text-neutral-50",
            "shadow shadow-md",
            className,
          )}
          style={{
            ...style,
            ...menuItemStyle,
          }}
          animate={menuItemAnimate(index)}
          exit={menuItemExit}
          transition={{
            type: "tween",
            duration: 0.3,
            delay: 0.01 * index,
          }}
        >
          {icon}
          {name && (
            <span>{name}</span>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
});

const PlusIcon = (
  props: React.ComponentProps<"svg">
) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14" />
  </svg>
);

export default memo(FloatingActionMenu);`,Bo=`import FloatingActionMenu, { FloatingActionMenuItem } from "@/registry/components/floating-action-menu/floating-action-menu";

const FloatingActionMenuPreview = () => {
  const items=[
    { icon: <DocumentIcon />, name: "Document"},
    { icon: <ProjectIcon />, name: "Project"},
    { icon: <TaskIcon />, name: "Task"},
    { icon: <CalendarIcon />, name: "Calendar"},
    { icon: <TeamIcon />, name: "Team"},
    { icon: <DiscussionIcon />, name: "Discussion"},
  ];

  return (
    <FloatingActionMenu className="absolute bottom-[16px] lg:bottom-[48px]">
      {items.map(item => (
        <FloatingActionMenuItem
          key={item.name}
          icon={item.icon}
          name={item.name}
        />
      ))}
    </FloatingActionMenu>
  );
};

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M15 4H6v16h12V7h-3zM6 2h10l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m2 9h8v2H8zm0 4h8v2H8z" />
  </svg>
);

const ProjectIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
    <path d="M0 0h16v16H0z" fill="none" />
    <path fill="currentColor" d="M4 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zM2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zm0 1h12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
  </svg>
);

const TaskIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M4 19V5h16v14z" />
    <path fill="currentColor" d="M13 8h5v2h-5zm-5 .59L6.96 7.54L5.54 8.96L8 11.41l3.46-3.45l-1.42-1.42zM13 14h5v2h-5zm-5 .59l-1.04-1.05l-1.42 1.42L8 17.41l3.46-3.45l-1.42-1.42z" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <g fill="currentColor">
      <path d="M16 2a1 1 0 0 1 .993.883L17 3v1h1a3 3 0 0 1 2.995 2.824L21 7v12a3 3 0 0 1-2.824 2.995L18 22H6a3 3 0 0 1-2.995-2.824L3 19V7a3 3 0 0 1 2.824-2.995L6 4h1V3a1 1 0 0 1 1.993-.117L9 3v1h6V3a1 1 0 0 1 1-1m3 7H5v9.625c0 .705.386 1.286.883 1.366L6 20h12c.513 0 .936-.53.993-1.215l.007-.16z" />
      <path d="M12 12a1 1 0 0 1 .993.883L13 13v3a1 1 0 0 1-1.993.117L11 16v-2a1 1 0 0 1-.117-1.993L11 12z" />
    </g>
  </svg>
);

const TeamIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5m-6.5 3q.42.001.81.094a6 6 0 0 0-.301 1.575L6 16v.086a1.5 1.5 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.355L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14m13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.355-1.493L18.5 16q-.264.001-.5.085V16c0-.666-.108-1.306-.308-1.904c.258-.063.53-.096.808-.096m-13-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m13 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M12 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4" />
  </svg>
);

const DiscussionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M20 8h-3V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h1v2c0 .38.21.72.55.89c.14.07.29.11.45.11c.21 0 .42-.07.6-.2L9 15v2c0 1.1.9 2 2 2h3.67l3.73 2.8c.18.13.39.2.6.2c.15 0 .31-.04.45-.11A1 1 0 0 0 20 21v-2c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2M6 12H4V4h11v8h-5c-.12 0-.24.03-.35.07c-.04.02-.07.04-.11.06c-.05.02-.09.04-.14.07L7 14v-1c0-.55-.45-1-1-1m14 5h-1c-.55 0-1 .45-1 1v1l-2.4-1.8a1 1 0 0 0-.6-.2h-4v-3h4c1.1 0 2-.9 2-2v-2h3z" />
  </svg>
);

export default FloatingActionMenuPreview;`,Fo={},qo={};function bn(t){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"children"}),n(e.td,{children:n(e.code,{children:"React.ReactNode"})}),n(e.td,{children:"Yes"}),n(e.td,{children:"—"}),n(e.td,{children:["One or more ",n(e.code,{children:"FloatingActionMenuItem"})," components to display in the menu."]})]}),n(e.tr,{children:[n(e.td,{children:"radius"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"640"})}),n(e.td,{children:"Radius of the imaginary circle used to position menu items. A larger radius creates a flatter arc, while a smaller radius creates a more curved layout. Adjust this based on the number of menu items and the desired curvature."})]}),n(e.tr,{children:[n(e.td,{children:"gap"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"4"})}),n(e.td,{children:"Angular gap (in degrees) between adjacent menu items. Increase the gap to spread items farther apart or decrease it to make the menu more compact. Tune this according to the number of menu items."})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Additional CSS classes applied to the menu container."})]}),n(e.tr,{children:[n(e.td,{children:"actionButtonClassName"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Additional CSS classes applied to the floating action button."})]})]})]})}function jo(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(bn,{...t})}):bn(t)}const ce=(t={})=>jo({...t,components:{Fragment:v,...t.components}});ce[Symbol.for("mdx-component")]=!0;ce[Symbol.for("astro.needsHeadRendering")]=!qo.layout;ce.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/components/floating-action-menu/FloatingActionMenu-props.mdx";const Zo={};function xn(t){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"icon"}),n(e.td,{children:n(e.code,{children:"React.ReactNode"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Content displayed as the menu item’s icon."})]}),n(e.tr,{children:[n(e.td,{children:"name"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Text label displayed for the menu item."})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Additional CSS classes applied to the menu item."})]})]})]})}function Vo(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(xn,{...t})}):xn(t)}const de=(t={})=>Vo({...t,components:{Fragment:v,...t.components}});de[Symbol.for("mdx-component")]=!0;de[Symbol.for("astro.needsHeadRendering")]=!Zo.layout;de.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/components/floating-action-menu/FloatingActionMenuItem-props.mdx";const _e="floating-action-menu",wn=w({id:_e,name:"Floating Action Menu",description:"A customizable floating action menu that arranges items along a curved arc with configurable radius and spacing.",category:y.component.id,dependencies:[f.tailwind.key,f.motion.key],preview:Fo,previewClassName:"grid place-items-center",source:[{name:`${_e}.tsx`,content:Ho,lang:"tsx"}],usage:[{name:`${_e}-preview.tsx`,content:Bo,lang:"tsx"}],componentsAPI:[{name:"FloatingActionMenu",props:ce},{name:"FloatingActionMenuItem",props:de}]}),Wo=`import { memo } from "react";
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

export default memo(Marquee);`,Uo=`@keyframes marquee-list-horizontal-keyframes {
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
}`,Xo={},Jo={};function Cn(t){const e={code:"code",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"children"}),n(e.td,{children:n(e.code,{children:"React.ReactNode"})}),n(e.td,{children:"Yes"}),n(e.td,{children:"—"}),n(e.td,{children:"Items to be displayed inside the marquee. These elements will scroll continuously."})]}),n(e.tr,{children:[n(e.td,{children:"axis"}),n(e.td,{children:n(e.code,{children:'"horizontal" | "vertical"'})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'"horizontal"'})}),n(e.td,{children:"Controls the scrolling direction of the marquee."})]}),n(e.tr,{children:[n(e.td,{children:"pauseOnHover"}),n(e.td,{children:n(e.code,{children:"boolean"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"true"})}),n(e.td,{children:"Pauses the marquee animation when the user hovers over it."})]}),n(e.tr,{children:[n(e.td,{children:"reverse"}),n(e.td,{children:n(e.code,{children:"boolean"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"false"})}),n(e.td,{children:"Reverses the scrolling direction of the marquee animation."})]}),n(e.tr,{children:[n(e.td,{children:"duration"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"30"})}),n(e.td,{children:["Duration of one animation cycle in ",n(e.strong,{children:"seconds"}),". Minimum value is ",n(e.code,{children:"1"}),"."]})]}),n(e.tr,{children:[n(e.td,{children:"repeat"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"5"})}),n(e.td,{children:"Number of times the marquee content is repeated to maintain continuous scrolling. Increase this if the marquee items are small."})]}),n(e.tr,{children:[n(e.td,{children:"mask"}),n(e.td,{children:n(e.code,{children:"boolean"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"true"})}),n(e.td,{children:"Applies a fade mask at the beginning and end of the marquee."})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Additional CSS class names applied to the marquee container."})]}),n(e.tr,{children:[n(e.td,{children:"style"}),n(e.td,{children:n(e.code,{children:"React.CSSProperties"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Inline styles applied to the marquee container."})]})]})]})}function Yo(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(Cn,{...t})}):Cn(t)}const le=(t={})=>Yo({...t,components:{Fragment:v,...t.components}});le[Symbol.for("mdx-component")]=!0;le[Symbol.for("astro.needsHeadRendering")]=!Jo.layout;le.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/components/marquee/props.mdx";const D="marquee",kn=w({id:D,name:"Marquee",description:"A flexible scrolling layout for showcasing repeating content like logos, announcements, or testimonials.",category:y.component.id,dependencies:[f.tailwind.key],preview:Xo,previews:ut,previewClassName:"grid place-items-center",source:[{name:`${D}.tsx`,content:Wo,lang:"tsx"},{name:`${D}.module.css`,content:Uo,lang:"css"}],usage:[{name:`${D}-preview.tsx`,content:ht,lang:"tsx"}],componentsAPI:[{name:`${D}.tsx`,props:le}]}),Go=`import cn from "@/utils/cn";
import { memo, useCallback, useState, type MouseEventHandler } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";

export type SectionEntry = {
  id: string,
  name: string,
  className?: string;
};

export type SectionNavigatorProps = {
  sections: SectionEntry[],
  position?: "left" | "right" | "top" | "bottom",
  activeSectionId?: SectionEntry["id"],
  onSectionClick?: Function,
  className?: string;
  triggerButtonClassName?: string;
  sectionListClassName?: string;
  sectionListItemClassName?: string;
} & React.ComponentProps<"div">;

type SectionListProps = {
  onSectionEntryClick: Function,
  onClose: MouseEventHandler<HTMLDivElement | HTMLUListElement>,
} & Pick<SectionNavigatorProps, (
  "sections" | 
  "position" |
  "activeSectionId" |
  "sectionListClassName" |
  "sectionListItemClassName"
)>;

const positionClassConfig = {
  "right": "right-[16px] top-[50%] translate-y-[-50%]",
  "left": "left-[16px] top-[50%] translate-y-[-50%]",
  "top": "top-[16px] left-[50%] translate-x-[-50%]",
  "bottom": "bottom-[16px] left-[50%] translate-x-[-50%]",
};

const SectionNavigator = (
  props: SectionNavigatorProps,
) => {
  const {
    sections,
    position = "right",
    activeSectionId,
    onSectionClick,
    className,
    triggerButtonClassName,
    sectionListClassName,
    sectionListItemClassName,
    ...restProps
  } = props;

  const [showNavigator, setShowNavigator] = useState(false);

  const navigatorOpenHandler = useCallback(() => {
    setShowNavigator(true);
  }, []);

  const navigatorCloseHandler = useCallback(() => {
    setShowNavigator(false);
  }, []);

  const handleSectionEntryClick = (
    section: SectionEntry,
  ) => {
    setShowNavigator(false);
    onSectionClick?.(section);
  };

  return (
    <div
      {...restProps}
      className={cn(
        "fixed z-[10]",
        positionClassConfig[position],
        className,
      )}
    >
      {
        showNavigator ? (
          <SectionList 
            sections={sections}
            position={position}
            activeSectionId={activeSectionId}
            onSectionEntryClick={handleSectionEntryClick}
            onClose={navigatorCloseHandler}
            sectionListClassName={sectionListClassName}
          />
        ) : (
          <motion.button
            className={cn(
              "p-2 flex gap-[6px] rounded-md",
              {
                "flex-col": ["left", "right"].includes(position),
              },
              triggerButtonClassName,
            )}
            onMouseOver={navigatorOpenHandler}
            onFocus={navigatorOpenHandler}
            onTap={navigatorOpenHandler}
          >
            {sections.map((sectionEntry) => (
              <span
                key={sectionEntry.id}
                className={cn(
                  "bg-gray-900/25 dark:bg-gray-100/25 rounded-md",
                  {
                    "w-4 h-[2px]": ["left", "right"].includes(position),
                    "w-[2px] h-4": ["top", "bottom"].includes(position),
                    "bg-gray-900 dark:bg-gray-100": sectionEntry.id === activeSectionId,
                  }
                )}
              />
            ))}
          </motion.button>
        )
      }
    </div>
  );
};

const SectionList = memo((
  props: SectionListProps,
) => {
  const {
    sections,
    position = "right",
    sectionListClassName,
    sectionListItemClassName,
    activeSectionId,
    onSectionEntryClick,
    onClose,
  } = props;

  return createPortal(
    <>
      <div
        aria-hidden={true}
        className="fixed inset-0 z-9"
        onClick={onClose}
      />
      <motion.ul
        className={cn(
          "fixed z-10",
          "w-xs max-h-[400px]",
          "p-2 grid gap-1 overflow-y-auto rounded-xl",
          "bg-white dark:bg-neutral-700",
          "shadow shadow-md",
          positionClassConfig[position],
          sectionListClassName,
        )}
        onMouseLeave={onClose}
        style={{
          scale: 0.25,
          opacity: 0,
          transformOrigin: ({
            "left": "0% 50%",
            "right": "100% 50%",
            "top": "50% 0%",
            "bottom": "50% 100%",
          })[position]
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          mass: 0.8,
        }}
      >
        {sections.map((sectionEntry, sectionEntryIndex) => (
          <li 
            key={sectionEntry.id}
            className="truncate"
          >
            <motion.button
              className={cn(
                "py-[6px] px-2 w-full rounded-md",
                "text-neutral-800 dark:text-neutral-200 text-sm text-left truncate",
                "hover:bg-neutral-300/50 dark:hover:bg-neutral-800/50",
                "cursor-pointer",
                {
                  "bg-neutral-300 dark:bg-neutral-800": (
                    sectionEntry.id === activeSectionId
                  ),
                },
                sectionListItemClassName,
                sectionEntry.className,
              )}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              style={{
                opacity: 0,
                y: 20,
                filter: "blur(2px)",
              }}
              transition={{
                delay: 0.05 + (0.025 * (sectionEntryIndex)),
              }}
              title={sectionEntry.name}
              onTap={() => onSectionEntryClick(sectionEntry)}
            >
              {sectionEntry.name}
            </motion.button>
          </li>
        ))}
      </motion.ul>
    </>,
    document.body
  );
});

export default memo(SectionNavigator);`,Ko=`import SectionNavigator from "@/registry/components/section-navigator/section-navigator";

const SectionNavigatorPreview = () => {
  /** Dynamically update this with the active section based on scroll position */
  const activeSectionId = sections[2].id;

  return (
    <>
      <SectionNavigator 
        sections={sections}
        activeSectionId={activeSectionId}
        triggerButtonClassName="backdrop-blur-md"
      />
      <p className="p-5 text-zinc-500">
        Discover sections from the menu on the right.
      </p>
    </>
  );
};

const sections = [
  { id: "id-0", name: "What should I cook with these ingredients?" },
  { id: "id-1", name: "Help me plan a birthday party." },
  { id: "id-2", name: "Can you recommend movies based on my favorites?" },
  { id: "id-3", name: "Can you summarize this long article/document and highlight the important parts?" },
  { id: "id-4", name: "Can you create a step-by-step plan for learning a new skill?" },
  { id: "id-5", name: "I want to buy a new phone. What should I consider first?" },
  { id: "id-6", name: "Should I prioritize RAM, processor, camera, or storage?", },
  { id: "id-7", name: "Is camera quality or performance more important for my usage?" },
  { id: "id-8", name: "Help me choose between these two phones." },
  { id: "id-9", name: "Will this phone receive updates for long enough?" },
  { id: "id-10", name: "What accessories should I get?" },
  { id: "id-11", name: "Should I buy now or wait for a new release?" },
  { id: "id-12", name: "Which one would you personally recommend for my needs?" },
];

export default SectionNavigatorPreview;`,Qo={},ei={};function Sn(t){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"sections"}),n(e.td,{children:n(e.code,{children:"Array<{ id: string; name: string; className?: string }>"})}),n(e.td,{children:"Yes"}),n(e.td,{children:"—"}),n(e.td,{children:["List of sections displayed in the navigator. Each section requires a unique ",n(e.code,{children:"id"})," and display ",n(e.code,{children:"name"}),", with an optional ",n(e.code,{children:"className"})," for custom styling."]})]}),n(e.tr,{children:[n(e.td,{children:"position"}),n(e.td,{children:n(e.code,{children:'"left" | "right" | "top" | "bottom"'})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'"right"'})}),n(e.td,{children:"Defines the position/orientation of the section navigator."})]}),n(e.tr,{children:[n(e.td,{children:"activeSectionId"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"ID of the currently visible section."})]}),n(e.tr,{children:[n(e.td,{children:"onSectionClick"}),n(e.td,{children:n(e.code,{children:"(section: { id: string; name: string; className?: string }) => void"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Callback fired when a section is clicked. Returns the selected section object."})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Custom CSS classes applied to the root navigator container."})]}),n(e.tr,{children:[n(e.td,{children:"triggerButtonClassName"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Custom CSS classes applied to the main trigger button that opens the section list."})]}),n(e.tr,{children:[n(e.td,{children:"sectionListClassName"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Custom CSS classes applied to the section list wrapper."})]}),n(e.tr,{children:[n(e.td,{children:"sectionListItemClassName"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Custom CSS classes applied to individual section list items."})]})]})]})}function ni(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(Sn,{...t})}):Sn(t)}const he=(t={})=>ni({...t,components:{Fragment:v,...t.components}});he[Symbol.for("mdx-component")]=!0;he[Symbol.for("astro.needsHeadRendering")]=!ei.layout;he.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/components/section-navigator/props.mdx";const Z="section-navigator",_n=w({id:Z,name:"Section Navigator",description:"A customizable section picker for navigating between content sections.",category:y.component.id,dependencies:[f.tailwind.key,f.motion.key],preview:Qo,previewClassName:"grid place-items-center",source:[{name:`${Z}.tsx`,content:Go,lang:"tsx"}],usage:[{name:`${Z}-preview.tsx`,content:Ko,lang:"tsx"}],componentsAPI:[{name:`${Z}.tsx`,props:he}]}),ti=`import { memo } from "react";
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

export default memo(CircularText);`,ri=`import CircularTextAnimation from "@/registry/text-effects/circular-text-animation/circular-text-animation";

const CircularTextAnimationPreview = () => {
  return (
    <CircularTextAnimation
      className="text-gray-900 dark:text-gray-100 text-xl"
      text="CODE • DESIGN • SHIP •"
      radius={80}
    />
  );
};

export default CircularTextAnimationPreview;`,oi={},ii={};function Nn(t){const e={code:"code",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"text"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"Yes"}),n(e.td,{children:"—"}),n(e.td,{children:"The text content to render around the circle."})]}),n(e.tr,{children:[n(e.td,{children:"radius"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"Yes"}),n(e.td,{children:"—"}),n(e.td,{children:["Radius of the circle in ",n(e.strong,{children:"pixels (px)"})," used to position the letters."]})]}),n(e.tr,{children:[n(e.td,{children:"addTrailingSpace"}),n(e.td,{children:n(e.code,{children:"boolean"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"true"})}),n(e.td,{children:"Adds a trailing space after the text to improve spacing when looping around the circle."})]}),n(e.tr,{children:[n(e.td,{children:"rotate"}),n(e.td,{children:n(e.code,{children:"boolean"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"true"})}),n(e.td,{children:"Enables continuous rotation animation of the circular text."})]}),n(e.tr,{children:[n(e.td,{children:"direction"}),n(e.td,{children:n(e.code,{children:'"clockwise" | "anti-clockwise"'})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'"clockwise"'})}),n(e.td,{children:"Controls the rotation direction of the text around the circle."})]}),n(e.tr,{children:[n(e.td,{children:"duration"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"10"})}),n(e.td,{children:["Duration of one full rotation in ",n(e.strong,{children:"seconds"})," (range: ",n(e.code,{children:"0.1"})," – ",n(e.code,{children:"60"}),")."]})]}),n(e.tr,{children:[n(e.td,{children:"pauseOnHover"}),n(e.td,{children:n(e.code,{children:"boolean"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"true"})}),n(e.td,{children:"Pauses the rotation animation when the user hovers over the component."})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Optional class name applied to the root circular text container."})]})]})]})}function si(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(Nn,{...t})}):Nn(t)}const ue=(t={})=>si({...t,components:{Fragment:v,...t.components}});ue[Symbol.for("mdx-component")]=!0;ue[Symbol.for("astro.needsHeadRendering")]=!ii.layout;ue.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/circular-text-animation/props.mdx";const V="circular-text-animation",zn=w({id:V,name:"Circular Text Animation",description:"A flexible component for rendering text along a circular path with customizable styling and rotation.",category:y.textEffect.id,dependencies:[f.tailwind.key],preview:oi,previewClassName:"grid place-items-center",source:[{name:`${V}.tsx`,content:ti,lang:"tsx"}],usage:[{name:`${V}-preview.tsx`,content:ri,lang:"tsx"}],componentsAPI:[{name:`${V}.tsx`,props:ue}]}),ai=`import { memo, useEffect, useMemo, useState, Fragment } from "react";
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

export default memo(DecryptingTextAnimation);`,ci=`import DecryptingTextAnimation from "@/registry/text-effects/decrypting-text-animation/decrypting-text-animation";

const DecryptingTextAnimationPreview = () => {
  return (
    <DecryptingTextAnimation
      className="text-gray-900 dark:text-gray-100 text-xl font-mono"
      text="Pure Awareness"
      speed={25}
    />
  );
};

export default DecryptingTextAnimationPreview;`,di={},li={};function Mn(t){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"text"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"Yes"}),n(e.td,{children:"-"}),n(e.td,{children:["The text content to be decrypted and displayed. All characters must exist in the specified ",n(e.code,{children:"charset"}),". If the text includes characters outside this charset, a custom ",n(e.code,{children:"charset"})," prop must be provided."]})]}),n(e.tr,{children:[n(e.td,{children:"speed"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"50"})}),n(e.td,{children:"Speed in milliseconds between each decrypting step."})]}),n(e.tr,{children:[n(e.td,{children:"charset"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*-+?"'})}),n(e.td,{children:"The character set used to generate random decrypting characters."})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Optional class name applied to the root container."})]})]})]})}function hi(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(Mn,{...t})}):Mn(t)}const me=(t={})=>hi({...t,components:{Fragment:v,...t.components}});me[Symbol.for("mdx-component")]=!0;me[Symbol.for("astro.needsHeadRendering")]=!li.layout;me.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/decrypting-text-animation/props.mdx";const W="decrypting-text-animation",Pn=w({id:W,name:"Decrypting Text",description:"Displays text with a decrypting animation effect, revealing the final content through randomized characters.",category:y.textEffect.id,dependencies:[f.tailwind.key],preview:di,previewClassName:"grid place-items-center",source:[{name:`${W}.tsx`,content:ai}],usage:[{name:`${W}-preview.tsx`,content:ci}],componentsAPI:[{name:`${W}.tsx`,props:me}]}),ui=`import { memo, useMemo } from "react";
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

export default memo(TextAnimation);`,mi={},pi={};function In(t){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"text"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"Yes"}),n(e.td,{children:"—"}),n(e.td,{children:"The text content to be animated."})]}),n(e.tr,{children:[n(e.td,{children:"variant"}),n(e.td,{children:[n(e.code,{children:'"fadeIn"'})," ",n("br",{})," ",n(e.code,{children:'"slideUp"'})," ",n("br",{})," ",n(e.code,{children:'"slideDown"'})," ",n("br",{})," ",n(e.code,{children:'"slideLeft"'})," ",n("br",{})," ",n(e.code,{children:'"slideRight"'})," ",n("br",{})," ",n(e.code,{children:'"zoomIn"'})," ",n("br",{})," ",n(e.code,{children:'"zoomOut"'})," ",n("br",{})," ",n(e.code,{children:'"blurIn"'})]}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'"fadeIn"'})}),n(e.td,{children:"Animation style applied to the text."})]}),n(e.tr,{children:[n(e.td,{children:"unit"}),n(e.td,{children:[n(e.code,{children:'"letter"'})," | ",n(e.code,{children:'"word"'})," | ",n(e.code,{children:'"text"'})]}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'"letter"'})}),n(e.td,{children:"Determines how the text is split and animated."})]}),n(e.tr,{children:[n(e.td,{children:"stagger"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"0.01"})}),n(e.td,{children:"Time delay between each animated unit (in seconds)."})]}),n(e.tr,{children:[n(e.td,{children:"delay"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"0"})}),n(e.td,{children:"Delay before the animation starts (in seconds)."})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Additional CSS classes for styling."})]})]})]})}function fi(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(In,{...t})}):In(t)}const pe=(t={})=>fi({...t,components:{Fragment:v,...t.components}});pe[Symbol.for("mdx-component")]=!0;pe[Symbol.for("astro.needsHeadRendering")]=!pi.layout;pe.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/text-animation/props.mdx";const U="text-animation",$n=w({id:U,name:"Text Animation",description:"Create dynamic text effects by staggering letters or words with configurable motion and timing, great for hero sections, promotional content, or onboarding screens.",category:y.textEffect.id,dependencies:[f.motion.key,f.tailwind.key],preview:mi,previewClassName:"grid place-items-center p-5",previews:pt,source:[{name:`${U}.tsx`,content:ui,lang:"tsx"}],usage:[{name:`${U}-preview.tsx`,content:mt,lang:"tsx"}],componentsAPI:[{name:`${U}.tsx`,props:pe}]}),gi=`import { memo, useMemo } from "react";
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

export default memo(TextEmergeAnimation);`,yi=`import TextEmergeAnimation from "@/registry/text-effects/text-emerge-animation/text-emerge-animation";

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

export default TextEmergeAnimationPreview;`,vi={},bi={};function Tn(t){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"text"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"Yes"}),n(e.td,{children:"—"}),n(e.td,{children:["The text to display. Can be a word, sentence, or paragraph depending on ",n(e.code,{children:"type"}),"."]})]}),n(e.tr,{children:[n(e.td,{children:"type"}),n(e.td,{children:n(e.code,{children:'"word" | "letter"'})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'"word"'})}),n(e.td,{children:["Determines the animation unit: ",n(e.code,{children:'"word"'})," animates one word at a time, ",n(e.code,{children:'"letter"'})," animates each letter individually."]})]}),n(e.tr,{children:[n(e.td,{children:"stagger"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"0.1"})}),n(e.td,{children:"Time delay between each animated unit (in seconds)."})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Optional class name applied to the root container."})]})]})]})}function xi(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(Tn,{...t})}):Tn(t)}const fe=(t={})=>xi({...t,components:{Fragment:v,...t.components}});fe[Symbol.for("mdx-component")]=!0;fe[Symbol.for("astro.needsHeadRendering")]=!bi.layout;fe.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/text-emerge-animation/props.mdx";const X="text-emerge-animation",An=w({id:X,name:"Text Emerge",description:"Animates text by gradually turning blurry letters into clear ones, word or letter by letter.",category:y.textEffect.id,dependencies:[f.motion.key,f.tailwind.key],preview:vi,previewClassName:"grid place-items-center",source:[{name:`${X}.tsx`,content:gi,lang:"tsx"}],usage:[{name:`${X}-preview.tsx`,content:yi,lang:"tsx"}],componentsAPI:[{name:`${X}.tsx`,props:fe}]}),wi=`import { useEffect, useMemo, memo } from "react";
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
`,Ci=`import TypewriterAnimation from "@/registry/text-effects/typewriter-animation/typewriter-animation";

const TypewriterAnimationPreview = () => {
  return (
    <TypewriterAnimation
      className="text-gray-900 dark:text-gray-100 text-xl overflow-hidden"
      text="Typing the future, live."
    />
  )
};

export default TypewriterAnimationPreview;`,ki={},Si={};function Rn(t){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"text"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Simple text to type."})]}),n(e.tr,{children:[n(e.td,{children:"cursor"}),n(e.td,{children:n(e.code,{children:"boolean"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"true"})}),n(e.td,{children:["Hides the typing cursor when set to ",n(e.code,{children:"false"}),"."]})]}),n(e.tr,{children:[n(e.td,{children:"blinkCursor"}),n(e.td,{children:n(e.code,{children:"boolean"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"true"})}),n(e.td,{children:"Enables cursor blinking animation."})]}),n(e.tr,{children:[n(e.td,{children:"cursorVariant"}),n(e.td,{children:n(e.code,{children:'"line" | "block" | "underscore"'})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'"line"'})}),n(e.td,{children:"Controls the visual style of the cursor."})]}),n(e.tr,{children:[n(e.td,{children:"stagger"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"0.1"})}),n(e.td,{children:"Time delay between each animated unit (in seconds)."})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Optional class name applied to the root container."})]})]})]})}function _i(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(Rn,{...t})}):Rn(t)}const ge=(t={})=>_i({...t,components:{Fragment:v,...t.components}});ge[Symbol.for("mdx-component")]=!0;ge[Symbol.for("astro.needsHeadRendering")]=!Si.layout;ge.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/typewriter-animation/props.mdx";const J="typewriter-animation",Dn=w({id:J,name:"Typewriter Effect",description:"Animates text like a typewriter, with optional speed, cursor, and styling controls.",category:y.textEffect.id,dependencies:[f.motion.key,f.tailwind.key],preview:ki,previewClassName:"grid place-items-center",source:[{name:`${J}.tsx`,content:wi,lang:"tsx"}],usage:[{name:`${J}-preview.tsx`,content:Ci,lang:"tsx"}],componentsAPI:[{name:`${J}.tsx`,props:ge}]}),Ni=`import { memo, useEffect, useState } from "react";
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

export default memo(VerticalTextSlider);`,zi=`import VerticalTextSlider from "@/registry/text-effects/vertical-text-slider/vertical-text-slider";

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

export default VerticalTextSliderPreview;`,Mi={},Pi={};function On(t){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"texts"}),n(e.td,{children:n(e.code,{children:"string[]"})}),n(e.td,{children:"Yes"}),n(e.td,{children:"—"}),n(e.td,{children:"Array of text strings to display in the vertical slider."})]}),n(e.tr,{children:[n(e.td,{children:"direction"}),n(e.td,{children:n(e.code,{children:'"up" | "down"'})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'"up"'})}),n(e.td,{children:["Slide direction. ",n(e.code,{children:'"up"'})," slides text upward, ",n(e.code,{children:'"down"'})," slides text downward."]})]}),n(e.tr,{children:[n(e.td,{children:"visibleDuration"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"2000"})}),n(e.td,{children:["Time (in milliseconds) each text remains fully visible before sliding out. Minimum: ",n(e.code,{children:"1000ms"}),"."]})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Optional class name applied to the root container."})]})]})]})}function Ii(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(On,{...t})}):On(t)}const ye=(t={})=>Ii({...t,components:{Fragment:v,...t.components}});ye[Symbol.for("mdx-component")]=!0;ye[Symbol.for("astro.needsHeadRendering")]=!Pi.layout;ye.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/text-effects/vertical-text-slider/props.mdx";const Y="vertical-text-slider",En=w({id:Y,name:"Vertical Text Slider",description:"Slides through an list of text vertically, pausing briefly on each item before transitioning to the next.",category:y.textEffect.id,preview:Mi,previewClassName:"grid place-items-center",source:[{name:`${Y}.tsx`,content:Ni,lang:"tsx"}],usage:[{name:`${Y}-preview.tsx`,content:zi,lang:"tsx"}],componentsAPI:[{name:`${Y}.tsx`,props:ye}]}),$i=`import { memo, useLayoutEffect, useMemo, useRef, type ReactNode } from "react";
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

export default memo(AuroraBorder);`,Ti=`import AuroraBorder from "@/registry/visual-effects/aurora-border/aurora-border";

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

export default AuroraBorderPreview;`,Ai={},Ri={};function Ln(t){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"children"}),n(e.td,{children:n(e.code,{children:"ReactNode"})}),n(e.td,{children:"Yes"}),n(e.td,{children:"—"}),n(e.td,{children:"The content to be wrapped inside the AuraBorder."})]}),n(e.tr,{children:[n(e.td,{children:"colors"}),n(e.td,{children:n(e.code,{children:"string[]"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'["rgba(127, 127, 127, 1)"]'})}),n(e.td,{children:"Array of colors or gradients for the border glow. Accepts any valid CSS color."})]}),n(e.tr,{children:[n(e.td,{children:"width"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"1"})}),n(e.td,{children:"Width of the border in pixels. Minimum value: 0."})]}),n(e.tr,{children:[n(e.td,{children:"speed"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"0.5"})}),n(e.td,{children:"Speed of rotation. Value between 0 (no rotation) and 1 (fastest)."})]}),n(e.tr,{children:[n(e.td,{children:"intensity"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"0.5"})}),n(e.td,{children:"Glow intensity. Value between 0 (no glow) and 1 (maximum glow)."})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Additional CSS class names applied to the wrapper."})]}),n(e.tr,{children:[n(e.td,{children:"style"}),n(e.td,{children:n(e.code,{children:"React.CSSProperties"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Inline styles applied directly to the wrapper container."})]})]})]})}function Di(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(Ln,{...t})}):Ln(t)}const ve=(t={})=>Di({...t,components:{Fragment:v,...t.components}});ve[Symbol.for("mdx-component")]=!0;ve[Symbol.for("astro.needsHeadRendering")]=!Ri.layout;ve.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/visual-effects/aurora-border/props.mdx";const G="aurora-border",Hn=w({id:G,name:"Aurora Border",description:"A dynamic border component with rotation, blur, and glow effects for highlighting content.",category:y.visualEffects.id,dependencies:[f.tailwind.key],preview:Ai,previewClassName:"grid place-items-center p-5",source:[{name:`${G}.tsx`,content:$i,lang:"tsx"}],usage:[{name:`${G}-preview.tsx`,content:Ti,lang:"tsx"}],componentsAPI:[{name:`${G}.tsx`,props:ve}]}),Oi=`import { memo, useMemo } from "react";
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

export default memo(BorderBeam);`,Ei=`import BorderBeam from "@/registry/visual-effects/border-beam/border-beam";

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

export default BorderBeamPreview;`,Li={},Hi={};function Bn(t){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"size"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"50"})}),n(e.td,{children:"Size of the animated beam effect"})]}),n(e.tr,{children:[n(e.td,{children:"width"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"1"})}),n(e.td,{children:"Thickness of the beam"})]}),n(e.tr,{children:[n(e.td,{children:"colors"}),n(e.td,{children:n(e.code,{children:"string[]"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'["rgba(0,0,0,0)", "rgba(127,127,127,1)", "rgba(0,0,0,0)"]'})}),n(e.td,{children:"Gradient colors used to render the beam effect"})]}),n(e.tr,{children:[n(e.td,{children:"duration"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"5"})}),n(e.td,{children:"Duration of the animation in seconds"})]}),n(e.tr,{children:[n(e.td,{children:"offset"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"0"})}),n(e.td,{children:"Offset position where the animation starts"})]}),n(e.tr,{children:[n(e.td,{children:"reverse"}),n(e.td,{children:n(e.code,{children:"boolean"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"false"})}),n(e.td,{children:"Reverses the direction of the beam animation"})]}),n(e.tr,{children:[n(e.td,{children:"timingFn"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'"linear"'})}),n(e.td,{children:["Motion animation timing function (e.g., ",n(e.code,{children:"ease"}),", ",n(e.code,{children:"linear"}),", ",n(e.code,{children:"easeInOut"}),")"]})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Additional CSS class names applied to the component"})]})]})]})}function Bi(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(Bn,{...t})}):Bn(t)}const be=(t={})=>Bi({...t,components:{Fragment:v,...t.components}});be[Symbol.for("mdx-component")]=!0;be[Symbol.for("astro.needsHeadRendering")]=!Hi.layout;be.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/visual-effects/border-beam/props.mdx";const K="border-beam",Fn=w({id:K,name:"Border Beam",description:"A customizable animated beam that travels along the border of a container for a dynamic visual highlight.",category:y.visualEffects.id,dependencies:[f.motion.key,f.tailwind.key],preview:Li,previewClassName:"grid place-items-center",source:[{name:`${K}.tsx`,content:Oi,lang:"tsx"}],usage:[{name:`${K}-preview.tsx`,content:Ei,lang:"tsx"}],componentsAPI:[{name:`${K}.tsx`,props:be}]}),Fi=`import { memo, useMemo } from "react";
import cn from "@/utils/cn";

export type SpotlightCardsContainerProps = (
  React.ComponentProps<"div">
);

export type SpotlightCardProps = {
  spotlightColor: string;
  spotlightSize?: number;
  spotlightBorderWidth?: number,
  wrapperProps: React.ComponentProps<"div">,
} & React.ComponentProps<"div">;

const spotlightCardClass = "spotlight-card";

const SpotlightCardsContainer = (
  props: SpotlightCardsContainerProps,
) => {
  const {
    children,
    className,
    ...restProps
  } = props;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const cards = currentTarget.querySelectorAll<HTMLDivElement>(\`.\${spotlightCardClass}\`);
    cards.forEach((card) => {
      const { x, y } = card.getBoundingClientRect();
      card.style.setProperty("--mx", \`\${clientX - x}px\`);
      card.style.setProperty("--my", \`\${clientY - y}px\`);
    });
  };

  return (
    <div
      {...restProps}
      className={cn(
        "group",
        className,
      )}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export const SpotlightCard = memo((
  props: SpotlightCardProps
) => {
  const {
    children,
    spotlightColor = "rgb(127, 127, 127)",
    spotlightSize = 100,
    spotlightBorderWidth = 1,
    className,
    style,
    wrapperProps = {},
    ...restProps
  } = props;

  const {
    className: wrapperClassName = "",
    ...restWrapperProps
  } = wrapperProps;

  const _spotlightBorderWidth = useMemo(() => (
    Math.max(0, spotlightBorderWidth)
  ), [spotlightBorderWidth]);

  const _spotlightColor = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.fillStyle = spotlightColor;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
    canvas.remove();
    return (alpha: number) => {
      return \`rgba(\${r}, \${g}, \${b}, \${alpha})\`;
    };
  }, [spotlightColor]);

  return (
    <div
      {...restProps}
      className={cn(
        "relative",
        "[padding:var(--spotlight-border-width)]",
        "before:content-[''] before:absolute before:inset-0 before:z-[1] before:pointer-events-none before:opacity-[0] before:rounded-[inherit] before:transition-all before:duration-150 before:ease-in-out",
        "after:content-[''] after:absolute after:inset-0 after:z-[3] after:pointer-events-none after:opacity-[0] after:rounded-[inherit] after:transition-all before:duration-150 before:ease-in-out",
        "before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--mx)_var(--my),var(--spotlight-before-color),rgba(0,0,0,0))]",
        "after:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--mx)_var(--my),var(--spotlight-after-color),rgba(0,0,0,0))]",
        "group-hover:before:opacity-[1]",
        "hover:after:opacity-100",
        className,
        spotlightCardClass,
      )}
      style={{
        ...style,
        "--spotlight-size": \`\${spotlightSize}px\`,
        "--spotlight-before-color": _spotlightColor(0.8),
        "--spotlight-after-color": _spotlightColor(0.2),
        "--spotlight-border-width": \`\${_spotlightBorderWidth}px\`,
      } as React.CSSProperties}
    >
      <div
        {...restWrapperProps}
        className={cn(
          "relative rounded-[inherit] z-[2] h-full",
          wrapperClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
});

export default memo(SpotlightCardsContainer);`,qi=`import SpotlightCardsContainer, { SpotlightCard }  from "@/registry/visual-effects/spotlight-card/spotlight-card";
import cn from "@/utils/cn";

const SpotlightCardPreview = () => {
  return (
    <SpotlightCardsContainer className="my-5 mx-8 grid sm:grid-cols-2 gap-4 flex-wrap justify-center">
      {cards.map((card, cardIndex) => (
        <SpotlightCard
          spotlightColor="rgb(42, 250, 175)"
          spotlightBorderWidth={2}
          className={cn(
            "rounded-md", 
            {
              "max-sm:hidden": cardIndex >= 2,
            },
          )}
          wrapperProps={{
            className: "bg-neutral-50 dark:bg-neutral-800 p-4 shadow shadow-sm",
          }}
        >
          <span className="inline-block mb-3 text-xl">
            {card.icon}
          </span>
          <h2 className="text-md font-bold text-neutral-900 dark:text-white mb-1">
            {card.title}
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {card.description}
          </p>
        </SpotlightCard>
      ))}
    </SpotlightCardsContainer>
  );
};

const cards = [
  {
    icon: "🎨",
    title: "Customizable UI",
    description: "Easily adapt components to match your brand and design system.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Optimized layouts that look great on mobile, tablet, and desktop screens.",
  },
  {
    icon: "🧑‍💻",
    title: "Developer Friendly",
    description: "Simple APIs and flexible props make development fast and enjoyable.",
  },
  {
    icon: "📈",
    title: "Scalable Architecture",
    description: "Designed to grow with your application from small projects to large systems.",
  },
];

export default SpotlightCardPreview;`,ji={},Zi={};function qn(t){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"children"}),n(e.td,{children:n(e.code,{children:"React.ReactNode"})}),n(e.td,{children:"Yes"}),n(e.td,{children:"—"}),n(e.td,{children:["One or more ",n(e.code,{children:"SpotlightCard"})," components to be rendered inside the container."]})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Additional CSS classes applied to the container."})]}),n(e.tr,{children:[n(e.td,{children:"style"}),n(e.td,{children:n(e.code,{children:"React.CSSProperties"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Inline styles applied to the container element."})]})]})]})}function Vi(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(qn,{...t})}):qn(t)}const xe=(t={})=>Vi({...t,components:{Fragment:v,...t.components}});xe[Symbol.for("mdx-component")]=!0;xe[Symbol.for("astro.needsHeadRendering")]=!Zi.layout;xe.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/visual-effects/spotlight-card/SpotlightCardsContainer-props.mdx";const Wi={};function jn(t){const e={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"Type"}),n(e.th,{children:"Required"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"children"}),n(e.td,{children:n(e.code,{children:"React.ReactNode"})}),n(e.td,{children:"Yes"}),n(e.td,{children:"—"}),n(e.td,{children:"Content to be rendered inside the card."})]}),n(e.tr,{children:[n(e.td,{children:"spotlightColor"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:'"rgb(127, 127, 127)"'})}),n(e.td,{children:"Spotlight color. Accepts RGB or HEX; alpha channel is used to control spotlight intensity."})]}),n(e.tr,{children:[n(e.td,{children:"spotlightSize"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"100"})}),n(e.td,{children:"Size of the spotlight effect in pixels."})]}),n(e.tr,{children:[n(e.td,{children:"spotlightBorderWidth"}),n(e.td,{children:n(e.code,{children:"number"})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"1"})}),n(e.td,{children:"Width of the card border in pixels; adopts spotlight color on hover proximity."})]}),n(e.tr,{children:[n(e.td,{children:"className"}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Additional CSS classes applied to the card."})]}),n(e.tr,{children:[n(e.td,{children:"style"}),n(e.td,{children:n(e.code,{children:"React.CSSProperties"})}),n(e.td,{children:"No"}),n(e.td,{children:"—"}),n(e.td,{children:"Inline styles applied to the card."})]}),n(e.tr,{children:[n(e.td,{children:"wrapperProps"}),n(e.td,{children:n(e.code,{children:'React.ComponentProps<"div">'})}),n(e.td,{children:"No"}),n(e.td,{children:n(e.code,{children:"{}"})}),n(e.td,{children:["Props passed to the wrapper element (e.g., ",n(e.code,{children:"className"}),", ",n(e.code,{children:"style"}),", etc.)."]})]})]})]})}function Ui(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(jn,{...t})}):jn(t)}const we=(t={})=>Ui({...t,components:{Fragment:v,...t.components}});we[Symbol.for("mdx-component")]=!0;we[Symbol.for("astro.needsHeadRendering")]=!Wi.layout;we.moduleId="/home/runner/work/MosaicUI/MosaicUI/src/docs/visual-effects/spotlight-card/SpotlightCard-props.mdx";const Ne="spotlight-card",Zn=w({id:Ne,name:"Spotlight Card",description:"A container for interactive cards with a hover spotlight effect, ideal for showcasing features or highlights.",category:y.visualEffects.id,dependencies:[f.tailwind.key],preview:ji,previewClassName:"grid place-items-center",source:[{name:`${Ne}.tsx`,content:Fi,lang:"tsx"}],usage:[{name:`${Ne}-preview.tsx`,content:qi,lang:"tsx"}],componentsAPI:[{name:"SpotlightCardsContainer",props:xe},{name:"SpotlightCard",props:we}]}),lt={[y.component.key]:{[fn.id]:fn,[vn.id]:vn,[wn.id]:wn,[kn.id]:kn,[_n.id]:_n},[y.textEffect.key]:{[zn.id]:zn,[Pn.id]:Pn,[$n.id]:$n,[An.id]:An,[Dn.id]:Dn,[En.id]:En},[y.background.key]:{[hn.id]:hn,[mn.id]:mn},[y.visualEffects.key]:{[Hn.id]:Hn,[Fn.id]:Fn,[Zn.id]:Zn}};Object.values(lt).reduce((t,e)=>({...t,...e}),{});const Vn=Object.freeze([{label:"Get Started",entries:[{label:"Introduction",href:"/introduction/"},{label:"Installation",href:"/installation/"},{label:"Components",href:"/components/"}]},...Object.entries(lt).map(([t,e])=>({label:y[t].name,entries:Object.values(e).map(r=>({label:r.name,href:`/components/${r.id}/`}))}))]),Xi=(t,e)=>t.replace(/\/$/,"")===e.replace(/\/$/,""),ts=({activePath:t=""})=>{const[e,r]=Ce.useState(!1),o=Ce.useCallback(()=>{r(!0)},[]);return Ce.useEffect(()=>(document.documentElement.addEventListener("sidebar-open",o),()=>{document.documentElement.removeEventListener("sidebar-open",o)}),[o]),N.jsx(ft,{children:e&&N.jsxs(N.Fragment,{children:[N.jsx(Oe.div,{className:"h-screen md:h-[calc(100%_-_32px)] w-[280px] top-0 left-0 md:top-[16px] md:left-[16px] bg-white dark:bg-neutral-950 fixed z-[102] rounded-md overflow-y-auto border border-zinc-300 dark:border-zinc-900",style:{x:-100,opacity:0},animate:{x:e?0:-320,opacity:e?1:0},exit:{x:-100,opacity:0},transition:{ease:"circInOut",type:"tween",duration:.3},children:Vn.map((i,a)=>N.jsxs(N.Fragment,{children:[N.jsxs("div",{className:"py-4",children:[N.jsx("span",{className:"text-gray-800 dark:text-gray-200 px-3 block mb-2 font-semibold",children:i.label}),N.jsx("ul",{children:i.entries.map(s=>N.jsx("li",{children:N.jsx("a",{href:s.href,className:`${Xi(t,s.href)?"text-blue-600 bg-blue-600/10 dark:text-blue-500 hover:text-blue-600 hover:dark:text-blue-500":"text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"}  block py-[4px] px-2 pl-4 cursor-pointer`,children:s.label})}))})]}),a!==Vn.length-1&&N.jsx("div",{className:"h-[1px] bg-zinc-200 dark:bg-zinc-900"})]}))}),N.jsx(Oe.div,{className:"fixed top-0 left-0 w-full h-full z-[101] inset-[0] backdrop-blur-[5px]",onTap:()=>r(!1)})]})})};export{ts as default};
