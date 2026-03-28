import { motion } from "framer-motion";

const skills = [
  "JavaScript", "HTML", "Java", "C++", "React",
  "TypeScript", "Node.js", "Tailwind CSS",
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
              Davaasuren
              <br />
              Tserentogtokh
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                한국에서 활동하는 웹 개발자입니다. JavaScript, HTML, Java, C++ 등
                다양한 기술 스택을 활용하여 웹 애플리케이션을 개발합니다.
              </p>
              <p>
                GitHub에서 305회 이상의 기여를 기록하며, Zogsoo, my-app 등
                다양한 프로젝트를 진행하고 있습니다.
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
