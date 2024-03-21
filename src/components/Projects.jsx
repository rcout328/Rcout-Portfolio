import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="projmain">
      <div className="maintext">
        <span>Projects</span>
        <span className="text-purple">.</span>
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
