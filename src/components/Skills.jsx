import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each item showing up
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="px-6 py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
  Skills
</h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Animates only the first time you scroll
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }} // Scale effect on hover
            whileTap={{ scale: 0.95 }}
            className="border rounded-lg py-4 text-center font-medium cursor-pointer
                       bg-white dark:bg-slate-800 dark:border-slate-700
                       text-gray-900 dark:text-gray-300
                       hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white 
                       transition-colors duration-200 shadow-sm"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}