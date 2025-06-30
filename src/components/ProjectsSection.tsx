import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      
      title: "Content Based Movie Recommendation System",
      description:
        "AI-driven movie recommendation system using content-based filtering and collaborative filtering techniques.",
      image: "movie-recommender.png",

      tech: ["Python", "Flask", "Scikit-learn", "Pandas"],
      github:
        "https://github.com/priyam-that/FInal-Year-Project-Movie-Recommender.git",
      live:"https://movierecomsite.netlify.app/",
      gradient: "from-neon-cyan to-neon-purple",
    },
    {
      title: "Stock Market Prediction",
      description:
        "Predictive analytics platform for stock market trends using machine learning and time series analysis.",
      image: "stock-file.png",

      tech: ["Python", "TensorFlow", "Keras", "NumPy"],
      github: "#",
      live: "#",
      gradient: "from-neon-purple to-neon-green",
    },
    {
      title: "Dropify",
      description:
        "AI-powered file sharing platform with end-to-end encryption, real-time collaboration, and smart organization features.",
      image: "file-dropbox.png",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      live: "#",
      gradient: "from-neon-pink to-neon-cyan",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-xl overflow-hidden group hover:scale-105 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                ></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gradient">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-white/10 rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm hover:text-neon-cyan transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-neon-green transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
