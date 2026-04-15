import { motion } from "framer-motion";

const services = [
  {
    title: "Strategic Ventures",
    description:
      "Identifying and evaluating high-potential opportunities in emerging markets and unexplored sectors.",
  },
  {
    title: "Resource Exploration",
    description:
      "Comprehensive discovery and assessment of natural and technological resources across diverse geographies.",
  },
  {
    title: "Risk Navigation",
    description:
      "Turning uncertainty into calculated advantage through rigorous analysis and adaptive planning.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-secondary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-8 border border-border rounded-sm hover:border-secondary/50 transition-colors"
            >
              <div className="w-10 h-px bg-secondary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
