import{j as e}from"./jsx-runtime.u17CrQMm.js";import{C as w}from"./component-switch.CB6-HSIM.js";import{a as g}from"./index.UEuQJ2Tp.js";import{c as i}from"./cn.BOX8fIfo.js";const f=`import Marquee from "@/registry/components/marquee/marquee";

const MarqueePreview = () => {
  const javaScriptLibAndFrameworks = ["Knockout", "React", "Angular", "Vue", "Svelte", "Solid", "Astro", "Marko", "Wiz", "Qwik"];
  return (
    <div className="w-full min-w-0 p-8">
      <Marquee>
        {javaScriptLibAndFrameworks.map(e => (
          <Card key={e} name={e} />
        ))}
      </Marquee>
      <br />
      <Marquee reverse>
        {javaScriptLibAndFrameworks.map(e => (
          <Card key={e} name={e} />
        ))}
      </Marquee>
    </div>
  )
};

const Card = (props) => {
  const {
    name
  } = props;

  return (
    <div className="p-5 bg-neutral-200 dark:bg-neutral-600 text-neutral-900 dark:text-white rounded-lg">
      {name}
    </div>
  )
};

export default MarqueePreview;`,j={"marquee-list-horizontal-keyframes":"_marquee-list-horizontal-keyframes_nh76i_1","marquee-list-vertical-keyframes":"_marquee-list-vertical-keyframes_nh76i_1"},q=r=>{const{children:a,axis:n="horizontal",pauseOnHover:A=!0,reverse:c=!1,duration:u=30,repeat:d=5,mask:o=!0,className:p,style:v,...x}=r;console.log(n);const k=Math.max(1,d),h=Math.max(1,u);return e.jsx("div",{...x,className:i("overflow-hidden",p,{"[mask-image:linear-gradient(to_right,transparent,white_var(--mask-breakpoint),white_calc(100%-var(--mask-breakpoint)),transparent)]":o&&n==="horizontal","[mask-image:linear-gradient(to_bottom,transparent,white_var(--mask-breakpoint),white_calc(100%-var(--mask-breakpoint)),transparent)]":o&&n==="vertical"}),style:{"--gap":"16px","--mask-breakpoint":"20%",...v,"--animation-duration":`${h}s`},children:e.jsx("div",{className:i("group flex w-max-content [gap:var(--gap)]",{"[flex-direction:row]":n==="horizontal","[flex-direction:column]":n==="vertical"}),children:Array.from({length:k}).map((_,s)=>e.jsx("div",{"aria-hidden":s!==0,className:i("flex","[gap:var(--gap)]","[animation-timing-function:linear]","[animation-iteration-count:infinite]","[animation-duration:var(--animation-duration)]","group-hover:[animation-play-state:paused]",{"[flex-direction:row]":n==="horizontal","[flex-direction:column]":n==="vertical","[animation-direction:reverse]":c}),style:{animationName:j[`marquee-list-${n}-keyframes`]},children:a},`marquee-block-${s}`))})})},t=g.memo(q),b=()=>{const r=["Knockout","React","Angular","Vue","Svelte","Solid","Astro","Marko","Wiz","Qwik"];return e.jsxs("div",{className:"w-full min-w-0 p-8",children:[e.jsx(t,{children:r.map(a=>e.jsx(m,{name:a},a))}),e.jsx("br",{}),e.jsx(t,{reverse:!0,children:r.map(a=>e.jsx(m,{name:a},a))})]})},m=r=>{const{name:a}=r;return e.jsx("div",{className:"p-5 bg-neutral-200 dark:bg-neutral-600 text-neutral-900 dark:text-white rounded-lg",children:a})},M=()=>{const r=["Knockout","React","Angular","Vue","Svelte","Solid","Astro","Marko","Wiz","Qwik"];return e.jsxs("div",{className:"flex justify-center w-full min-w-0 max-h-[320px] lg:max-h-[540px] p-8 gap-4",children:[e.jsx(t,{axis:"vertical",children:r.map(a=>e.jsx(l,{name:a},a))}),e.jsx("br",{}),e.jsx(t,{axis:"vertical",reverse:!0,children:r.map(a=>e.jsx(l,{name:a},a))})]})},l=r=>{const{name:a}=r;return e.jsx("div",{className:"p-5 bg-neutral-200 dark:bg-neutral-600 text-neutral-900 dark:text-white rounded-lg",children:a})},y=`import Marquee from "@/registry/components/marquee/marquee";

/**
 * When vertical axis is used, add max-height / height to container of Marquee.
 */
const MarqueePreview = () => {
  const javaScriptLibAndFrameworks = ["Knockout", "React", "Angular", "Vue", "Svelte", "Solid", "Astro", "Marko", "Wiz", "Qwik"];
  return (
    // maxHeight <- This is important when vertical axis is used.
    <div className="flex justify-center w-full min-w-0 max-h-[320px] lg:max-h-[540px] p-8 gap-4">
      <Marquee
        axis="vertical"
      >
        {javaScriptLibAndFrameworks.map(e => (
          <Card key={e} name={e} />
        ))}
      </Marquee>
      <br />
      <Marquee 
        axis="vertical"
        reverse
      >
        {javaScriptLibAndFrameworks.map(e => (
          <Card key={e} name={e} />
        ))}
      </Marquee>
    </div>
  )
};

const Card = (props) => {
  const {
    name
  } = props;

  return (
    <div className="p-5 bg-neutral-200 dark:bg-neutral-600 text-neutral-900 dark:text-white rounded-lg">
      {name}
    </div>
  )
};

export default MarqueePreview;`,S=[{name:"Default",component:b,code:f},{name:"Vertical",component:M,code:y}];function L(){return e.jsx(w,{mapping:S})}export{L as a,S as m,f as p};
