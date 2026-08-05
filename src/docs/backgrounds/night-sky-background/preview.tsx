import NightSkyBackground from "@/registry/backgrounds/night-sky-background/night-sky-background";

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
    <div className="mx-auto max-w-md text-center">
      <div className="mb-5 lg:mb-6 inline-flex items-center rounded-full border border-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
        ⚛️ Background Component
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl text-balance">
        Astronomically Better Than a Plain Background.
      </h1>
      <p className="mx-auto mt-6 max-w-md text-md lg:text-lg leading-6 text-white/70 text-balance">
        Beautiful animated star backgrounds that add depth, elegance, and wonder to every interface.
      </p>
      <div className="mt-6 lg:mt-8">
        <button className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
          Get Component
        </button>
      </div>
    </div>
  </section>
);

export default NightSkyBackgroundPreview;