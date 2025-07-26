const SkillsSection = () => {
  const skillCategories = {
    frontend: {
      title: "Frontend",
      color: "neon-cyan",
      skills: [
        { name: "React.js", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "JavaScript", icon: "js" },
        { name: "TypeScript", icon: "ts" },
        { name: "HTML5", icon: "html" },
        { name: "CSS3", icon: "css" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Framer Motion", icon: "react" },
        { name: "RESTful APIs", icon: "postman" },
        { name: "WebSockets", icon: "nodejs" },
      ],
    },
    backend: {
      title: "Backend",
      color: "neon-purple",
      skills: [
        { name: "Python", icon: "py" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "express" },
        { name: "Flask", icon: "flask" },
        { name: "FastAPI", icon: "fastapi" },
        { name: "Django", icon: "django" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MySQL", icon: "mysql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Redis", icon: "redis" },
        { name: "GraphQL", icon: "graphql" },
        { name: "SQLAlchemy", icon: "py" },
        { name: "JWT", icon: "nodejs" },
        { name: "OAuth2", icon: "nodejs" },
        { name: "HTTPS", icon: "nodejs" },
        { name: "Session Management", icon: "nodejs" },
        { name: "PyTest", icon: "py" },
        { name: "SQL", icon: "mysql" },
      ],
    },
    tools: {
      title: "Tools & DevOps",
      color: "neon-green",
      skills: [
        { name: "Linux", icon: "linux" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Docker", icon: "docker" },
        { name: "AWS", icon: "aws" },
        { name: "GCP", icon: "gcp" },
        { name: "CI/CD", icon: "github" },
        { name: "Postman", icon: "postman" },
        { name: "Jira", icon: "nodejs" },
        { name: "Scikit-learn", icon: "sklearn" },
        { name: "Pandas", icon: "py" },
        { name: "NumPy", icon: "py" },
        { name: "OpenCV", icon: "opencv" },
        { name: "Natural Language Processing", icon: "py" },
        { name: "Reinforcement Learning", icon: "py" },
      ],
    },
  };

  const colorClassMap = {
    "neon-cyan": "bg-cyan-400 text-black",
    "neon-purple": "bg-purple-500 text-black",
    "neon-green": "bg-green-400 text-black",
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Skills & Expertise
        </h2>

        <div className="space-y-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <div key={key} className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className={`text-${category.color}`}>
                  {category.title}
                </span>{" "}
                Development
              </h3>

              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`px-3 py-2 rounded-lg ${colorClassMap[category.color]} font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <img 
                      src={`https://skillicons.dev/icons?i=${skill.icon}`} 
                      alt={skill.name}
                      className="w-5 h-5"
                    />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
