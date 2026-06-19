function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-black text-white p-10"
    >
      <h2 className="text-4xl font-bold mb-10">
        Education
      </h2>

      <div className="space-y-8">

        <div className="border-l-4 border-white pl-6">
          <h3 className="text-2xl font-semibold">
            Sri Krishna College of Technology
          </h3>

          <p>B.Tech Information Technology</p>

          <p>CGPA: 8.0</p>

          <p>2023 - 2027</p>
        </div>

        <div className="border-l-4 border-white pl-6">
          <h3 className="text-2xl font-semibold">
            Mahatma Montessori HSS
          </h3>

          <p>HSC - 83%</p>

          <p>2021 - 2023</p>
        </div>

        <div className="border-l-4 border-white pl-6">
          <h3 className="text-2xl font-semibold">
            Mahatma Montessori HSS
          </h3>

          <p>SSLC - 85%</p>

          <p>2020 - 2021</p>
        </div>

      </div>
    </section>
  );
}

export default Education;
