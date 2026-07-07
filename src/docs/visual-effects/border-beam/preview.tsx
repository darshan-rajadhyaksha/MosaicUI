import BorderBeam from "@/registry/visual-effects/border-beam/border-beam";

const BorderBeamPreview = () => {
  return (
    <div className="relative w-80 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <BorderBeam
        colors={[
          "#84fab0",
          "#8fd3f4",
          "#0000",
        ]}
        width={2}
        size={200}
      />
      <BorderBeam
        colors={[
          "#84fab0",
          "#8fd3f4",
          "#0000",
        ]}
        width={2}
        size={200}
        offset={50}
      />
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl dark:bg-blue-500/10">
        ✨
      </div>
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        Border Beam
      </h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        A smooth animated beam that continuously travels around the border,
        creating a subtle yet eye-catching highlight for cards and UI elements.
      </p>
      <div className="mt-6 flex items-center justify-between">
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
          Interactive UI
        </span>
        <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200">
          Explore
        </button>
      </div>
    </div>
  )
}

export default BorderBeamPreview;