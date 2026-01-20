import { motion } from "framer-motion";
import Profile from "../assets/profile.png"; 

export default function Hero() {
  const primaryBtnStyle = "bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition transform shadow-lg text-center";
  const secondaryBtnStyle = "px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition transform hover:scale-105 shadow-md text-center";

  return (
    <section 
      id="about" 
      className="relative w-full pt-40 pb-10 flex flex-col md:flex-row items-center justify-center px-6 gap-10 bg-white dark:bg-slate-900 transition-colors duration-300"
    >{/*padding above and below*/}
      
      {/* Profile Image Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20"></div>
        <img
          src={Profile}
          alt="Profile"
          className="relative w-56 h-56 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl z-10"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
          Hi, I’m <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Avantika Nalawade
          </span>
        </h1>

        <p className="text-xl font-medium mb-4 text-blue-600 dark:text-blue-400">
          Frontend Developer | React | Tailwind CSS | JavaScript 
        </p>

        <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
          I am an MCA student with a strong interest in web development and modern software technologies. I enjoy building clean, responsive, and user-friendly web pages with a focus on simplicity and good design practices.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a href="/Resume.pdf" target="_blank" className={primaryBtnStyle}>
            View Resume
          </a>
          <a href="#contact" className={secondaryBtnStyle}>
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}