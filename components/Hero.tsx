import { Github } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="section-shell flex min-h-screen items-center pt-28">
      <div className="max-w-4xl">
        <p className="section-kicker">Portfolio</p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-normal text-white sm:text-5xl">
          Ayush Chaudhary
        </h1>
        <p className="mt-5 text-xl font-medium text-accent sm:text-2xl">
          Software Engineer | AI & Data Science
        </p>
        <p className="mt-7 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
          Recent B.Tech CS graduate from VIT with strong foundation in software
          engineering, AI, and data science. Built and deployed production-grade
          systems ranging from web apps and REST APIs to ML pipelines and
          intelligent dashboards.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-accent hover:text-accent"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/ayush4972"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Ayush Chaudhary GitHub profile"
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-accent/40 text-accent transition duration-300 hover:bg-accent/10"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
