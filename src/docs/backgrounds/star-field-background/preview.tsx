import StarFieldBackground from "@/registry/backgrounds/star-field-background/star-field-background";

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

export default StarFieldBackgroundPreview;