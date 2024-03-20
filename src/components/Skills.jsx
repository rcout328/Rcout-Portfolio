const Skills = () => {
  return (
    <div className="flex flex-col ml-10 mr-10 mt-20 phone:ml-5 phone:mr-5">
      <div className="flex flex-row text-7xl font-bold phone:text-5xl">
        <span>Skills</span>
        <span className="text-[#6E00F2]">.</span>
      </div>
      <div className="flex flex-col text-[#6E00F2] text-6xl font-bold mt-10 justify-center items-center gap-5 phone:text-4xl">
        <span className="hover:text-black">React JS</span>
        <span className="hover:text-black">Html</span>
        <span className="hover:text-black">Tailwind Css</span>
        <span className="hover:text-black">Flutter</span>
        <span className="hover:text-black">Next JS</span>
      </div>
    </div>
  );
};

export default Skills;
