const features = [
  {
    title: "Collect ideas",
    description:
      "Give users a simple place to share feature requests, improvements, and product ideas.",
    icon: "💡",
  },
  {
    title: "Prioritize together",
    description:
      "Let the community upvote ideas so your team can quickly understand what matters most.",
    icon: "📊",
  },
  {
    title: "Build with confidence",
    description:
      "Focus your development efforts on improvements that users actually want and value.",
    icon: "🚀",
  },
];

export default function Features() {
  return (
    <section
      id="how-it-works"
      className="bg-white px-6 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-blue-600">
            How Shortlist works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Turn feedback into action
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Shortlist makes it easier to collect feedback, understand user
            priorities, and decide what to build next.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}