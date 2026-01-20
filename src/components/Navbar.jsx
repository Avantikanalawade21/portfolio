import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-900 shadow transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="font-bold text-lg text-gray-900 dark:text-white">Avantika</h1>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6 text-lg font-medium text-gray-700 dark:text-gray-200">
          
          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-600 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>

          <li>
            <button
              onClick={() => setDark(!dark)}
              className="border border-gray-300 dark:border-gray-600 px-3 py-1 rounded text-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            >
              {dark ? "Light 🌞" : "Dark 🌚"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}