function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6"
    >
      <h1 className="text-6xl md:text-7xl font-bold">
        NITHIESWAR S
      </h1>

      <p className="text-2xl mt-4">
        Full Stack Developer
      </p>

      <p className="mt-4 text-gray-400 max-w-2xl">
        Final Year B.Tech Information Technology Student |
        Java Developer | Spring Boot Developer | React Developer |
        AI Enthusiast
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-8 justify-center">

        <a
          href="/Resume_Nithies.pdf"
          download
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
        >
          Download Resume
        </a>

        <a
          href="https://github.com/nithixs"
          target="_blank"
          rel="noreferrer"
          className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/nithieswar-s-bb97ab2b4"
          target="_blank"
          rel="noreferrer"
          className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
        >
          LinkedIn
        </a>

      </div>

      <div className="mt-10 text-gray-500">
        <p>Coimbatore, Tamil Nadu</p>
      </div>
    </section>
  );
}

export default Hero;