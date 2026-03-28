import { motion } from "framer-motion";

const skills = [
  "React", "TypeScript", "Next.js", "Node.js",
  "Figma", "Tailwind CSS", "Python", "PostgreSQL",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-display text-sm tracking-widest uppercase mb-4">About</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-8">
              문제를 해결하는
              <br />
              디자인을 합니다
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                3년 이상의 웹 개발 경험을 바탕으로, 사용자 경험을 최우선으로 생각하는
                풀스택 개발자입니다. 깔끔한 코드와 직관적인 인터페이스를 통해
                비즈니스 가치를 창출합니다.
              </p>
              <p>
                새로운 기술을 빠르게 습득하고, 팀과의 협업을 통해 더 나은 결과물을
                만들어내는 것을 즐깁니다.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-accent font-display text-sm tracking-widest uppercase mb-4">Skills</p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                  className="px-5 py-2.5 bg-card border border-border rounded-lg font-display text-sm text-foreground hover:border-accent/50 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
