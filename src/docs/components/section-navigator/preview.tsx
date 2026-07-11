import SectionNavigator from "@/registry/components/section-navigator/section-navigator";

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

export default SectionNavigatorPreview;