import { Github } from "lucide-react";

const projects = [
  {
    title: "Agri-Sense — IoT & AI Agricultural Platform",
    description:
      "End-to-end smart agriculture platform with IoT sensors, farm mapping backend, AI-powered crop disease predictor, microservices including model server, pub/sub event handler, and frontend dashboard.",
    tags: ["Python", "FastAPI", "IoT", "AI"],
    githubUrl: "https://github.com/Agri-Sense",
  },
  {
    title: "Smart Contract Vulnerability Detection (GNN)",
    description:
      "AI security auditor for Ethereum smart contracts using Graph Neural Networks and code property graphs. Deployed on Google Cloud Run.",
    tags: ["Python", "PyTorch", "GNN", "Google Cloud"],
    githubUrl:
      "https://github.com/ayush4972/smart-contract-vulnerability-gnn",
  },
  {
    title: "Hotel Analytics Dashboard with Deep Reinforcement Learning",
    description:
      "Dashboard with MADDPG multi-agent RL for financial strategy, XGBoost 30-day booking forecasting, AI sentiment analysis on 3,000 records.",
    tags: ["Python", "XGBoost", "RL", "Dash"],
    githubUrl: "https://github.com/ayush4972/hotel-analytics-drl",
  },
  {
    title: "NBA Player Performance Prediction System",
    description:
      "Automated ML pipeline using stacked XGBoost + LightGBM ensemble, 41 engineered features, injury-aware predictions, SHAP explainability, Streamlit dashboard with auto-retraining.",
    tags: ["Python", "XGBoost", "LightGBM", "Streamlit"],
    githubUrl: "https://github.com/ayush4972/NBA_point_prediction-SGA",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-shell scroll-mt-16">
      <p className="section-kicker">Projects</p>
      <h2 className="section-title">Production-Minded Builds</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="glass-card flex min-h-80 flex-col p-6"
          >
            <h3 className="text-xl font-semibold leading-snug text-white">
              {project.title}
            </h3>
            <p className="mt-4 flex-1 leading-7 text-gray-400">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-github mt-6 w-fit"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
