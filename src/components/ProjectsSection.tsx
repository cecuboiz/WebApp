import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "React와 Node.js를 활용한 풀스택 이커머스 플랫폼. 결제 시스템과 실시간 재고 관리 기능 구현.",
    tags: ["React", "Node.js", "PostgreSQL"],
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Dashboard Analytics",
    description: "데이터 시각화 대시보드. 실시간 차트와 커스텀 위젯으로 비즈니스 인사이트를 제공.",
    tags: ["TypeScript", "D3.js", "Tailwind"],
    color: "from-foreground/10 to-foreground/5",
  },
  {
    title: "Mobile Banking App",
    description: "핀테크 모바일 뱅킹 앱 UI/UX 디자인 및 프론트엔드 개발. 생체인증과 실시간 알림 구현.",
    tags: ["React Native", "Firebase", "Figma"],
    color: "from-accent/15 to-foreground/5",
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
            선택된 프로젝트
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative rounded-2xl border border-border bg-card p-8 md:p-12 hover:border-accent/30 transition-all duration-300 cursor-pointer overflow-hidden"
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
