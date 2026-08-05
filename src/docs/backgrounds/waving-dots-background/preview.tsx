import WavingDotsBackground from "@/registry/backgrounds/waving-dots-background/waving-dots-background";

const WavingDotsBackgroundPreview = () => {
  return (
    <div className="relative w-full h-full grid place-items-center">
      <WavingDotsBackground />
      <HeroSection />
    </div>
  );
};

const HeroSection = () => (
  <section className="relative z-10 flex items-center justify-center p-8">
    <div className="mx-auto max-w-md text-center">
      <div className="mb-5 lg:mb-6 inline-flex items-center leading-0 rounded-full border border-gray-300 dark:border-white/15 px-4 py-4 text-sm font-medium text-gray-800 dark:text-white backdrop-blur-md">
        ⚛️ Background Component
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-white lg:text-5xl text-balance">
        Physics Is Doing the Heavy Lifting
      </h1>
      <p className="mx-auto mt-6 max-w-md text-md lg:text-lg leading-6 text-gray-500 dark:text-white/70 text-balance">
        A synchronized field of oscillating particles converges toward equilibrium. It only looks effortless.
      </p>
      <div className="mt-6 lg:mt-8">
        <button className="rounded-full border border-gray-300 dark:border-white/20 border-gray-50 bg-white/10 px-8 py-3 text-sm font-semibold text-gray-800 dark:text-white backdrop-blur-md transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-white/20">
          Get Component
        </button>
      </div>
    </div>
  </section>
);

export default WavingDotsBackgroundPreview;