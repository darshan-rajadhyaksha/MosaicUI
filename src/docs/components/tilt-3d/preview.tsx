import Tilt3D, { Tilt3DElement } from "@/registry/components/tilt-3d/tilt-3d";

const Tilt3DPreview = () => {
  return (
    <Tilt3D className="relative h-96 w-72 rounded-2xl">
      <img
        src="https://picsum.photos/id/296/320/480"
        alt="Mountain"
        className="absolute inset-0 h-full w-full object-cover rounded-[inherit]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-[inherit]" />
      <Tilt3DElement z={30} className="absolute right-4 top-4">
        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
          🏔️ Adventure
        </span>
      </Tilt3DElement>
      <Tilt3DElement z={25} className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <p className="text-sm text-white/80">Switzerland</p>
        <h3 className="mt-1 text-3xl font-bold">
          Zermatt
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/75">
          Discover breathtaking alpine peaks, scenic trails, and unforgettable mountain views.
        </p>
      </Tilt3DElement>
    </Tilt3D>
  );
};

export default Tilt3DPreview;