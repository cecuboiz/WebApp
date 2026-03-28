import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

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

          <motion.a
            href="mailto:hello@example.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-accent-foreground font-display font-medium text-lg rounded-xl hover:opacity-90 transition-opacity mb-12"
          >
            <Mail className="w-5 h-5" />
            이메일 보내기
          </motion.a>

          <div className="flex justify-center gap-6">
            {[
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
