import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col ml-10 mr-10 mt-20 phone:mr-5 phone:ml-5 mid:ml-5 mid:mr-5">
      <div className="flex flex-row text-7xl font-bold phone:text-5xl mid:text-5xl">
        <span>Projects</span>
        <span className="text-[#6E00F2]">.</span>
      </div>
      <div>
        <ProjectCard
          image={"https://i.ibb.co/SNRwtp1/Frame-30.png"}
          title={"Netflix clone"}
          desc={
            "Task management system with drag-and-drop, real-time collaboration, and responsive layout."
          }
          link={"https://netflix-clone-puce-five-56.vercel.app/"}
        />
        <ProjectCard
          image={"https://i.ibb.co/tDmgNK4/Frame-31.png"}
          title={"DALLE-2 clone"}
          desc={
            "Task management system with drag-and-drop, real-time collaboration, and responsive layout."
          }
          link={"https://dalle-2-clone.vercel.app/"}
        />
        <ProjectCard
          image={"https://i.ibb.co/TLmjqhx/Frame-31.png"}
          title={"Social AI"}
          desc={
            "Task management system with drag-and-drop, real-time collaboration, and responsive layout."
          }
          link={"https://socialai-three.vercel.app/"}
        />
      </div>
    </div>
  );
};

export default Projects;
