import{j as t}from"./jsx-runtime.u17CrQMm.js";import{C as p}from"./component-switch.CB6-HSIM.js";import{a as s}from"./index.UEuQJ2Tp.js";import{c as v}from"./cn.BOX8fIfo.js";import{m as y}from"./proxy.C7iNHNTD.js";const T=`import TextAnimation from "@/registry/text-effects/text-animation/text-animation";

const TextAnimationPreview = () => {
  return (
    <TextAnimation 
      className="text-gray-900 dark:text-gray-100 text-xl overflow-hidden"
      text="Transform static text into fluid animation"
      variant="slideDown"
    />
  )
};

export default TextAnimationPreview;`,u=({text:i="",variant:o="fadeIn",unit:a="letter",stagger:m=.01,delay:d=0,className:l="",...c})=>{const f=s.useMemo(()=>a==="text"?[i]:i.split(" ").filter(Boolean).map(e=>a==="word"?[e," "]:[...e.split("").filter(Boolean)," "]).flat(),[i,a]),r={fadeIn:{start:{opacity:0},end:{opacity:1}},slideUp:{start:{opacity:0,y:20},end:{opacity:1,y:0}},slideDown:{start:{opacity:0,y:-20},end:{opacity:1,y:0}},slideLeft:{start:{opacity:0,x:-20},end:{opacity:1,x:0}},slideRight:{start:{opacity:0,x:20},end:{opacity:1,x:0}},zoomIn:{start:{scale:0},end:{scale:1}},zoomOut:{start:{opacity:0,scale:1.25},end:{opacity:1,scale:1}},blurIn:{start:{opacity:0,filter:"blur(10px)"},end:{opacity:1,filter:"blur(0px)"}}};return t.jsxs("span",{...c,className:v("overflow-hidden inline-block",l),children:[f.map((e,x)=>t.jsx(y.span,{"aria-hidden":"true",className:"inline-block",style:r[o].start,animate:r[o].end,transition:{type:"tween",duration:.15,delay:d+x*m},children:e===" "?t.jsx(t.Fragment,{children:" "}):e},`unit-${e}-${x}`)),t.jsx("span",{className:"sr-only",children:i})]})},n=s.memo(u),w=()=>t.jsx(n,{className:"text-gray-900 dark:text-gray-100 text-xl overflow-hidden",text:"Transform static text into fluid animation",variant:"slideDown"}),g=()=>t.jsx(n,{className:"text-gray-900 dark:text-gray-100 text-xl overflow-hidden",text:"Transform static text into fluid animation",variant:"slideUp"}),A=`import TextAnimation from "@/registry/text-effects/text-animation/text-animation";

const TextAnimationPreview = () => {
  return (
    <TextAnimation 
      className="text-gray-900 dark:text-gray-100 text-xl overflow-hidden"
      text="Transform static text into fluid animation"
      variant="slideUp"
    />
  )
};

export default TextAnimationPreview;`,P=()=>t.jsx(n,{className:"text-gray-900 dark:text-gray-100 text-xl overflow-hidden",text:"Transform static text into fluid animation",variant:"slideLeft"}),h=`import TextAnimation from "@/registry/text-effects/text-animation/text-animation";

const TextAnimationPreview = () => {
  return (
    <TextAnimation 
      className="text-gray-900 dark:text-gray-100 text-xl overflow-hidden"
      text="Transform static text into fluid animation"
      variant="slideLeft"
    />
  )
};

export default TextAnimationPreview;`,N=()=>t.jsx(n,{className:"text-gray-900 dark:text-gray-100 text-xl overflow-hidden",text:"Transform static text into fluid animation",variant:"slideRight"}),k=`import TextAnimation from "@/registry/text-effects/text-animation/text-animation";

const TextAnimationPreview = () => {
  return (
    <TextAnimation 
      className="text-gray-900 dark:text-gray-100 text-xl overflow-hidden"
      text="Transform static text into fluid animation"
      variant="slideRight"
    />
  )
};

export default TextAnimationPreview;`,j=()=>t.jsx(n,{className:"text-gray-900 dark:text-gray-100 text-xl overflow-hidden",text:"Transform static text into fluid animation",variant:"fadeIn"}),I=`import TextAnimation from "@/registry/text-effects/text-animation/text-animation";

const TextAnimationPreview = () => {
  return (
    <TextAnimation 
      className="text-gray-900 dark:text-gray-100 text-xl overflow-hidden"
      text="Transform static text into fluid animation"
      variant="fadeIn"
    />
  )
};

export default TextAnimationPreview;`,C=()=>t.jsx(n,{className:"text-gray-900 dark:text-gray-100 text-xl overflow-hidden",text:"Transform static text into fluid animation",variant:"zoomIn"}),$=`import TextAnimation from "@/registry/text-effects/text-animation/text-animation";

const TextAnimationPreview = () => {
  return (
    <TextAnimation 
      className="text-gray-900 dark:text-gray-100 text-xl overflow-hidden"
      text="Transform static text into fluid animation"
      variant="zoomIn"
    />
  )
};

export default TextAnimationPreview;`,S=()=>t.jsx(n,{className:"text-gray-900 dark:text-gray-100 text-xl overflow-hidden",text:"Transform static text into fluid animation",variant:"zoomOut"}),b=`import TextAnimation from "@/registry/text-effects/text-animation/text-animation";

const TextAnimationPreview = () => {
  return (
    <TextAnimation 
      className="text-gray-900 dark:text-gray-100 text-xl overflow-hidden"
      text="Transform static text into fluid animation"
      variant="zoomOut"
    />
  )
};

export default TextAnimationPreview;`,z=()=>t.jsx(n,{className:"text-gray-900 dark:text-gray-100 text-xl overflow-hidden",text:"Transform static text into fluid animation",variant:"blurIn"}),R=`import TextAnimation from "@/registry/text-effects/text-animation/text-animation";

const TextAnimationPreview = () => {
  return (
    <TextAnimation 
      className="text-gray-900 dark:text-gray-100 text-xl overflow-hidden"
      text="Transform static text into fluid animation"
      variant="blurIn"
    />
  )
};

export default TextAnimationPreview;`,U=[{name:"SlideDown",component:w,code:T},{name:"SlideUp",component:g,code:A},{name:"SlideLeft",component:P,code:h},{name:"SlideRight",component:N,code:k},{name:"FadeIn",component:j,code:I},{name:"ZoomIn",component:C,code:$},{name:"ZoomOut",component:S,code:b},{name:"BlurIn",component:z,code:R}];function F(){return t.jsx(p,{mapping:U})}export{F as a,U as m,T as p};
