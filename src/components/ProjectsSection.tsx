import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Employee Directory - Secure Admin Portal",
      description:
        "A complete Employee Directory application built with FastAPI, featuring admin authentication, MySQL database integration, and a modern web interface for managing employee records.",
      image: "employee-directory.png",
      tech: ["FastAPI", "Python", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/priyam-that/employee-directory.git",
      live: "https://employee-directory-tjjd.onrender.com/",
      gradient: "from-neon-cyan to-neon-purple",
    },
    {
      title: "Content Based Movie Recommendation System",
      description:
        "AI-driven movie recommendation system using content-based filtering and collaborative filtering techniques.",
      image: "movie-recommender.png",
      tech: ["Python", "Flask", "Scikit-learn", "Pandas", "React"],
      github:
        "https://github.com/priyam-that/FInal-Year-Project-Movie-Recommender.git",
      live:"https://cinevamovies.netlify.app/",
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
    },{
      title: "Laptop Monitor Dashboard",
      description:
        "A real-time laptop monitoring system built with Flask and Redis that provides comprehensive system metrics through an intuitive web dashboard.",
      image: "placeholder.svg",
      tech: ["Flask", "Redis", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/priyam-that/laptop-monitor.git",
      live: "#",
      gradient: "from-neon-yellow to-neon-blue",
    }
    
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card rounded-lg overflow-hidden group hover:scale-105 transition-all duration-500 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                ></div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gradient line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-white/10 rounded-md border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-xs hover:text-neon-cyan transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs hover:text-neon-green transition-colors duration-300"
                  >
                    <ExternalLink size={14} />
                    Demo
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
