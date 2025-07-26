import { Trophy, Star, Rocket, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Trophy,
      number: "10+",
      label: "Projects Completed",
      color: "text-neon-cyan",
    },
    {
      icon: Star,
      number: "50+",
      label: "GitHub Stars",
      color: "text-neon-purple",
    },
    {
      icon: Rocket,
      number: "4",
      label: "Live Applications",
      color: "text-neon-green",
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "ML Model Accuracy",
      color: "text-neon-pink",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex justify-center mb-4">
                <stat.icon
                  size={40}
                  className={`${stat.color} group-hover:animate-pulse`}
                />
              </div>
              <h3 className="text-3xl font-bold text-gradient mb-2">
                {stat.number}
              </h3>
              <p className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
