import "./Projects.css";

const projects = [
  {
    emoji: "🌱",
    title: "ESG",
    badge: "GreenVision",
    description: "Sustainability Analytics Dashboard",
    link:"https://github.com/UnnatiUmesh/ESG-Major-Project",
  },
  {
    emoji: "🛒",
    title: "ShopVerse",
    badge: "Live",
    description: "Modern eCommerce Platform",
    link:"https://github.com/UnnatiUmesh/Ecommerce",
  },
  {
    emoji: "💬",
    title: "Snappy",
    badge: "Real-time",
    description: "Instant Messaging Web App",
    link:"https://github.com/UnnatiUmesh/Snappy-",
  },
  {
    emoji: "🧠",
    title: "HackerNews Server",
    badge: "Backend",
    description: "Deployed REST API for News Aggregator",
    link:"https://github.com/UnnatiUmesh/hackernews-server"
  },
];

const Projects = (): React.ReactNode => {
  return (
   
      <div className="projects-container">
        <div className="projects-title">
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a href={project.link}>
                <div className="project-card" key={index}>
              <div className="project-header">
                <span className="emoji">{project.emoji}</span>
                <span className="project-title">{project.title}</span>
                {project.badge && (
                  <span className="badge">{project.badge}</span>
                )}
              </div>
              <p className="description">{project.description}</p>
            </div>
            </a>
          ))}
        </div>
      </div>
    
  );
};

export default Projects;
