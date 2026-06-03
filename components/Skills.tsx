const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "FastAPI",
      "Streamlit",
      "Dash",
      "PyTorch",
      "XGBoost",
      "LightGBM",
      "Scikit-learn",
      "HuggingFace",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: ["Docker", "Google Cloud Run", "Git", "GitHub"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-16">
      <p className="section-kicker">Skills</p>
      <h2 className="section-title">Technical Toolkit</h2>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="glass-card p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/70 hover:shadow-glow"
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-gray-200 ring-1 ring-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
