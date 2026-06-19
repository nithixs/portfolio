function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white p-5 flex justify-between">
      <h1 className="font-bold text-xl">Nithieswar</h1>

      <div className="space-x-6">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;