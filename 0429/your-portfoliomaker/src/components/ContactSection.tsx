import { motion } from "framer-motion";
import { Mail, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-accent font-display text-sm tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            함께 일해요
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면
            언제든 연락주세요.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <motion.a
              href="mailto:tsekutsek45@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-accent-foreground font-display font-medium text-lg rounded-xl hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              이메일 보내기
            </motion.a>
            <motion.a
              href="https://github.com/cecuboiz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-border text-foreground font-display font-medium text-lg rounded-xl hover:bg-foreground/5 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
