function Projects() {
  const projects = [
    {
      title: "AI Interview Platform",
      description:
        "AI-powered interview preparation platform with resume parsing and question generation.",
      tech: "Spring Boot, React, MySQL",
      github: "#",
    },
    {
      title: "EcoRoute AI",
      description:
        "Sustainable tourism platform with route optimization and carbon footprint analysis.",
      tech: "React, Google Maps API",
      github: "#",
    },
    {
      title: "Library Management System",
      description:
        "Complete library automation system with authentication and role-based access.",
      tech: "Spring Boot, MySQL",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white p-10"
    >
      <h2 className="text-4xl font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-black p-6 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <p className="mb-4">
              <strong>Tech Stack:</strong> {project.tech}
            </p>

            <a
              href="https://github.com/nithixs/EcoRoute"
              className="bg-white text-black px-4 py-2 rounded"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;