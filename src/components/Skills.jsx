const Skills = () => {
  return (
    <div className="flex flex-col ml-80 mr-80 mt-20">
      <div className="flex flex-row text-7xl font-bold">
        <span>Skills</span>
        <span className="text-[#6E00F2]">.</span>
      </div>
      <div className="flex flex-col text-[#6E00F2] text-6xl font-bold mt-10 justify-center items-center gap-5">
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
