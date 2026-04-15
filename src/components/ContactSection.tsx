import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Start Your Journey
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Ready to explore new frontiers? We'd love to hear about your vision
            and discuss how we can help make it a reality.
          </p>
          <a
            href="mailto:hello@exploration-llc.com"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
