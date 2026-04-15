import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="text-secondary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
              About Us
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Charting New Paths Forward
            </h2>
          </div>
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Exploration, LLC was founded on a simple principle: the greatest
              opportunities exist where others see only uncertainty. We bring
              disciplined strategy to bold ventures.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From resource discovery to market expansion, our team combines deep
              expertise with an explorer's mindset — methodical, resilient, and
              always moving forward.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-8 mt-20"
        >
          {[
            { number: "15+", label: "Years of Experience" },
            { number: "40+", label: "Projects Completed" },
            { number: "12", label: "Countries Reached" },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-8 border-t border-border">
              <p className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                {stat.number}
              </p>
              <p className="text-muted-foreground tracking-wide text-sm uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
