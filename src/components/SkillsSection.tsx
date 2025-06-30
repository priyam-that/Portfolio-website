import { useState } from "react";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend",
      color: "neon-cyan",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5", level: 100 },
        { name: "CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 88 },
      ],
    },
    backend: {
      title: "Backend",
      color: "neon-purple",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "Flask", level: 78 },
        { name: "GraphQL", level: 80 },
      ],
    },
    ai: {
      title: "AI",
      color: "neon-green",
      skills: [
        { name: "Scikit-learn", level: 90 },
        { name: "Natural Language Processing", level: 75 },
        { name: "Reinforcement Learning", level: 70 },
        { name: "Pandas", level: 88 },
        { name: "NumPy", level: 90 },
        { name: "OpenCV", level: 75 },
        { name: "Flask", level: 80 },
      ],
    },
  };

  const colorClassMap = {
    "neon-cyan": "bg-cyan-400 text-black",
    "neon-purple": "bg-purple-500 text-black",
    "neon-green": "bg-green-400 text-black",
  };

  const gradientColorMap = {
    "neon-cyan": "from-cyan-400 to-cyan-200",
    "neon-purple": "from-purple-500 to-purple-300",
    "neon-green": "from-green-400 to-green-200",
  };

  const activeColor = skillCategories[activeCategory].color;

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Skills & Expertise
        </h2>

        <div className="flex justify-center mb-12">
          <div className="glass-card rounded-lg p-2 flex gap-2">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                  activeCategory === key
                    ? colorClassMap[category.color]
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className={`text-${activeColor}`}>
              {skillCategories[activeCategory].title}
            </span>{" "}
            Development
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${gradientColorMap[activeColor]} transition-all duration-1000 ease-out`}
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
