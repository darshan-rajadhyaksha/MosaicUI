import WavyThreadsBackground from "@/registry/backgrounds/wavy-threads-background/wavy-threads-background";

const WavyThreadsBackgroundPreview = () => {
  return (
    <div className="relative w-full h-full grid place-items-center">
      <WavyThreadsBackground
        threadColor="#EAB30898"
        amplitude={125}
      />
      <HeroSection />
    </div>
  );
};

const HeroSection = () => (
  <section className="relative z-10 flex items-center justify-center p-8">
    <div className="mx-auto max-w-xl text-center">
      <div className="mb-6 inline-flex items-center leading-0 rounded-full border border-gray-300 dark:border-white/15 px-4 py-4 text-sm font-medium text-gray-800 dark:text-white backdrop-blur-md">
        ⚛️ Background Component
      </div>
      <h1 className="text-5xl font-bold tracking-tight text-gray-800 dark:text-white lg:text-6xl text-balance">
        Patterns Born From Equations
      </h1>
      <p className="mx-auto mt-6 max-w-lg text-lg leading-6 text-gray-500 dark:text-white/70">
        Every flowing thread echoes mathematical order hidden beneath apparent randomness.
      </p>
      <div className="mt-8">
        <button className="rounded-full border border-gray-300 dark:border-white/20 border-gray-50 bg-white/10 px-8 py-3 text-sm font-semibold text-gray-800 dark:text-white backdrop-blur-md transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-white/20">
          Get Component
        </button>
      </div>
    </div>
  </section>
);

export default WavyThreadsBackgroundPreview;