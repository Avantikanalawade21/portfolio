const Contact = () => {

  const btnStyle = "px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition transform hover:scale-105 shadow-md";

  return (
    <section id="contact" className="py-20 transition-colors duration-300 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Contact Me
        </h2>

        <p className="mb-10 text-gray-700 dark:text-gray-300 text-lg">
          Connect with me on LinkedIn or Mail
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="https://www.linkedin.com/in/avantika-nalawade-bb7538255"
            target="_blank"
            rel="noopener noreferrer"
            className={btnStyle}
          >
            Connect on LinkedIn
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nalawadeavantika2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={btnStyle}
          >
            Mail Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;