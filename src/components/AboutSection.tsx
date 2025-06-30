import { Code, Palette, Coffee, Music } from "lucide-react";

const AboutSection = () => {
  const interests = [
    { icon: Code, label: "Clean Code", color: "text-neon-cyan" },
    { icon: Palette, label: "Design", color: "text-neon-purple" },
    { icon: Coffee, label: "Coffee", color: "text-neon-green" },
    { icon: Music, label: "Music", color: "text-neon-pink" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a final-year B.Tech student in Computer Science and
              Engineering with a strong foundation in full-stack web development
              and a growing interest in machine learning and DevOps practices.
              My core strength lies in using Python (Flask) for backend
              development and React.js for crafting responsive and dynamic
              frontends. I am skilled in building robust web applications with
              modern tools and frameworks, ensuring clean code and optimized
              performance.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring the latest design
              trends, experimenting with new technologies, or enjoying a
              perfectly brewed coffee while listening to ambient music.
            </p>

            <p>
              My Resume →
              <a
                href="https://drive.google.com/file/d/1PzLFcj1RuM6jjm9mWoe8Kdq4TjOwTi0g/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block ml-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-all duration-300"
                title="View Resume"
              >
                Click here
              </a>
            </p>

            {/* Interests */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 justify-center">
              {interests.map((interest) => (
                <div
                  key={interest.label}
                  className="glass-card p-4 rounded-lg hover:scale-105 transition-transform duration-300 group text-center"
                >
                  <interest.icon
                    className={`${interest.color} mb-2 group-hover:animate-pulse mx-auto`}
                    size={24}
                  />
                  <p className="text-sm font-medium">{interest.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="relative mx-auto">
            <div className="w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 mx-auto rounded-full glass-card p-2 animate-float">
              <img
                src="profile-git.png"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
