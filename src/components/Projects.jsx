import { motion } from "framer-motion";


import portfolioImg from "../assets/portfolio.png";
import tictactoeImg from "../assets/tictactoe.png";

export default function Projects() {
  
  const primaryBtnStyle = "inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition transform shadow-lg";
  const projectImgStyle = "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110";

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* Project Card 1 */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="group flex flex-col sm:flex-row items-center gap-6 border rounded-lg p-6 bg-white dark:bg-slate-800 dark:border-slate-700 shadow-sm overflow-hidden"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-gray-100 dark:bg-slate-700 rounded-md overflow-hidden border dark:border-slate-600">
             {/* 2. USE the imported variable here */}
             <img 
               src={portfolioImg} 
               alt="Portfolio Preview" 
               className={projectImgStyle} 
             />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Portfolio Website</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A responsive personal portfolio built using React and CSS and with some basic section like about, skill, certificates, project, contact.
            </p>
          </div>
        </motion.div>

        {/* Project Card 2 */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="group flex flex-col sm:flex-row items-center gap-6 border rounded-lg p-6 bg-white dark:bg-slate-800 dark:border-slate-700 shadow-sm overflow-hidden"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-gray-100 dark:bg-slate-700 rounded-md overflow-hidden border dark:border-slate-600">
             {/* 3. USE the imported variable here */}
             <img 
               src={tictactoeImg} 
               alt="Tic Tac Toe Preview" 
               className={projectImgStyle} 
             />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Tic Tac Toe Game</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A logic-based game biuld using React and JavaScript.
            </p>
          </div>
        </motion.div>

      </div>

      <div className="text-center mt-12">
        <a
          href="https://github.com/Avantikanalawade21"
          target="_blank"
          rel="noopener noreferrer"
          className={primaryBtnStyle}
        >
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}