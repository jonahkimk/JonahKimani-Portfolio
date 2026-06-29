import { useState } from "react";
import { cn } from "@/lib/utils";


const skills=[
  //Frontend
    {name: "HTML/CSS", level: "70", category: "Frontend"},
    {name: "JavaScript", level: "50", category: "Frontend"},
    {name: "React", level: "50", category: "Frontend"},
    {name: "Tailwind CSS", level: "30", category: "Frontend"},
    {name: "PHP", level: "70", category: "Frontend"},

    //Mobile Programming
    {name: "React Native", level: "40", category: "Mobile Programming"},
    {name: "Flutter", level: "30", category: "Mobile Programming"},
    {name: "Dart", level: "30", category: "Mobile Programming"},

    //Backend
    {name: "Node.js", level: "40", category: "Backend"},
    {name: "Python", level: "50", category: "Backend"},
    /* {name: "Django", level: "40", category: "Backend"},
      {name: "Laravel", level: "30", category: "Backend"}, */
    {name: "Java", level: "70", category: "Backend"},
    {name: "C++", level: "70", category: "Backend"},

    //Database and Tools
    {name: "Git/GitHub", level: "40", category: "Tools and Database"},
    /* {name: "Docker", level: "40", category: "Tools and Database"}, */
    {name: "SQL", level: "90", category: "Tools and Database"},
    {name: "MongoDB", level: "30", category: "Tools and Database"},
    {name: "PostgreSQL", level: "30", category: "Tools and Database"},
    {name :"VsCode", level: "90", category: "Tools and Database"},
    {name :"Cursor", level: "90", category: "Tools and Database"},

];

const categories = ["all", "Frontend", "Backend", "Tools and Database", "Mobile Programming"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-5 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-sm"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              {/* <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};