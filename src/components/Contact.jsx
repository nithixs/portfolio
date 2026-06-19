function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold mb-10">
        Contact Me
      </h2>

      <div className="space-y-4 text-center text-lg">

        <p>
          📧 nithies22@gmail.com
        </p>

        <p>
          📱 +91 79049 59723
        </p>

        <a
          href="https://github.com/YOUR_GITHUB"
          target="_blank"
          rel="noreferrer"
          className="block text-blue-400"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/YOUR_LINKEDIN"
          target="_blank"
          rel="noreferrer"
          className="block text-blue-400"
        >
          LinkedIn
        </a>

      </div>
    </section>
  );
}

export default Contact;