function Skills() {

  const skills = [
    "Java",
    "Spring Boot",
    "React.js",
    "MySQL",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Docker",
    "Firebase",
    "AWS"
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white p-10"
    >
      <h2 className="text-4xl font-bold mb-10">
        Skills
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-800 p-6 rounded-xl text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;