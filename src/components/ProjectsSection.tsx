import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "WebApp",
    description: "HTML 기반 웹 애플리케이션 프로젝트. 57개의 커밋으로 활발하게 개발 중.",
    tags: ["HTML"],
    color: "from-accent/20 to-accent/5",
    href: "https://github.com/cecuboiz/WebApp",
  },
  {
    title: "my-app",
    description: "HTML 기반 앱 프로젝트. 86개의 커밋으로 가장 활발한 프로젝트.",
    tags: ["HTML"],
    color: "from-foreground/10 to-foreground/5",
    href: "https://github.com/cecuboiz/my-app",
  },
  {
    title: "Zogsoo",
    description: "JavaScript 기반 프로젝트. 웹 기술을 활용한 애플리케이션 개발.",
    tags: ["JavaScript"],
    color: "from-accent/15 to-foreground/5",
    href: "https://github.com/cecuboiz/Zogsoo",
  },
  {
    title: "JavaPro",
    description: "Java 프로그래밍 프로젝트. 백엔드 및 애플리케이션 개발.",
    tags: ["Java"],
    color: "from-foreground/10 to-accent/5",
    href: "https://github.com/cecuboiz/JavaPro",
  },
  {
    title: "Assembly",
    description: "어셈블리 언어 프로젝트. 저수준 프로그래밍 학습 및 구현.",
    tags: ["Assembly"],
    color: "from-accent/10 to-foreground/10",
    href: "https://github.com/cecuboiz/assembly",
  },
  {
    title: "Web Programming",
    description: "웹 프로그래밍 학습 및 실습 프로젝트. JavaScript 기반 템플릿.",
    tags: ["JavaScript"],
    color: "from-foreground/15 to-accent/5",
    href: "https://github.com/cecuboiz/webprogramming",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent font-display text-sm tracking-widest uppercase mb-4">Work</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            GitHub 프로젝트
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative block rounded-2xl border border-border bg-card p-8 md:p-12 hover:border-accent/30 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3 flex items-center gap-3">
                    {project.title}
                    <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground max-w-xl leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-display tracking-wide text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
