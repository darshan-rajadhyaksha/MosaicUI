import TextEmergeAnimation from "@/components/text-effects/text-emerge-animation/text-emerge-animation";

const text = (`
A subtle motion to guide your attention. Nothing loud, nothing distracting — just a quiet transition that makes the interface feel alive. 
Good animation isn't decoration; it's a gentle cue that helps you understand where you are and what happens next.
`
);


const TextEmergeAnimationPreview = () => {
  return (
    <div 
      style={{
        width: "calc(100% - 64px)",
        height: "calc(100% - 64px)",
      }}
    >
      <h2>
        <TextEmergeAnimation 
          text={text}
          speed={50}
        />
      </h2>
    </div>
  );
};

export default TextEmergeAnimationPreview;