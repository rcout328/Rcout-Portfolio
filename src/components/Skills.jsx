const Skills = () => {
  return (
    <div className="flex flex-col ml-10 mr-10 mt-20 phone:ml-5 phone:mr-5 mid:ml-5 mid:mr-5 mac:ml-5 mac:mr-5 mal:mr-5 mal:ml-5">
      <div className="flex flex-row text-7xl font-bold phone:text-5xl mid:text-5xl mac:text-5xl mal:text-6xl">
        <span>Skills</span>
        <span className="text-[#6E00F2]">.</span>
      </div>
      <div className="flex flex-col text-[#6E00F2] text-6xl font-bold mt-10 justify-center items-center gap-5 phone:text-4xl mid:text-4xl mac:text-4xl mal:text-5xl">
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
