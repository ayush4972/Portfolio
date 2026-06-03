export function Experience() {
  return (
    <section id="experience" className="section-shell scroll-mt-16">
      <p className="section-kicker">Experience</p>
      <h2 className="section-title">Selected Work</h2>
      <article className="glass-card mt-8 p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Junior Web Developer
            </h3>
            <p className="mt-1 text-gray-400">Nepal Payment Solution</p>
          </div>
          <p className="text-sm font-medium text-accent">
            Jun 2024 - Jul 2024 | Gairidhara, Kathmandu
          </p>
        </div>
        <ul className="mt-6 space-y-3 text-gray-400">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Delivered 99% bug-free releases through careful development,
            testing, and release practices.
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Helped boost user engagement by 30% through frontend improvements
            and user experience refinements.
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Built and maintained application features using modern JavaScript
            frameworks.
          </li>
        </ul>
      </article>
    </section>
  );
}
