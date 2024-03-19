import Footer from "./Footer";
import Navbar from "./Navbar";
import ProjectCard1 from "./ProjectCard1";

const Projectsmain = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col ml-80 mr-80 mt-40">
        <div className="flex flex-row text-8xl font-bold mt-3 gap-4">
          <span>My</span>
          <span className="text-[#6E00F2]">Best</span>
          <span>Creations</span>
        </div>
        <h1 className="text-3xl mt-5">
          Designing and Developing Robust and Stylish Web Applications for a
          Decade and Counting
        </h1>
        <ProjectCard1
          image={"https://i.ibb.co/SNRwtp1/Frame-30.png"}
          title={"Netflix clone"}
          desc={
            "Task management system with drag-and-drop, real-time collaboration, and responsive layout."
          }
        />
        <ProjectCard1
          image={"https://i.ibb.co/tDmgNK4/Frame-31.png"}
          title={"DALLE-2 clone"}
          desc={
            "Task management system with drag-and-drop, real-time collaboration, and responsive layout."
          }
        />
        <ProjectCard1
          image={"https://i.ibb.co/TLmjqhx/Frame-31.png"}
          title={"DALLE-2 clone"}
          desc={
            "Task management system with drag-and-drop, real-time collaboration, and responsive layout."
          }
        />
      </div>
      <Footer />
    </>
  );
};

export default Projectsmain;
