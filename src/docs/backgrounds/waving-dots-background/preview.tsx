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
    <div className="mx-auto max-w-xl text-center">
      <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 dark:border-white/15 px-4 py-1.5 text-sm font-medium text-gray-900 dark:text-white backdrop-blur-md">
        ⚛️ Background Component
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-5xl text-balance">
        Physics Is Doing the Heavy Lifting
      </h1>
      <p className="mx-auto mt-6 max-w-md text-lg leading-7 text-gray-600/80 dark:text-white/70">
        A synchronized field of oscillating particles converges toward equilibrium. It only looks effortless.
      </p>
      <div className="mt-8">
        <button className="rounded-full border border-gray-400/50 dark:border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-gray-900 dark:text-white backdrop-blur-md transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/20">
          Get Component
        </button>
      </div>
    </div>
  </section>
);

export default WavingDotsBackgroundPreview;