import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import ProjectCard1 from "./ProjectCard1";

const Projectsmain = () => {
  return (
    <>
      <div className="phone:hidden">
        <Navbar />
      </div>
      <MobileNavbar />
      <div className="flex flex-col ml-10 mr-10 mt-40 phone:mt-20 phone:mr-5 phone:ml-5">
        <div className="flex flex-row text-8xl font-bold mt-3 gap-4 phone:hidden">
          <span>My</span>
          <span className="text-[#6E00F2]">Best</span>
          <span>Creations</span>
        </div>
        <div className="flex flex-col text-8xl font-bold mt-3  phone:text-6xl">
          <div className="flex flex-row gap-2 phone:text-6xl">
            <span>My</span>
            <span className="text-[#6E00F2]">Best</span>
          </div>
          <span>Creations</span>
        </div>
        <p className="text-3xl mt-5 phone:text-xl phone:text-black/80">
          Designing and Developing Robust and Stylish Web Applications for a
          Decade and Counting
        </p>
        <ProjectCard1
          image={"https://i.ibb.co/SNRwtp1/Frame-30.png"}
          title={"Netflix clone"}
          desc={
            "Task management system with drag-and-drop, real-time collaboration, and responsive layout."
          }
          link={"https://netflix-clone-puce-five-56.vercel.app/"}
        />
        <ProjectCard1
          image={"https://i.ibb.co/tDmgNK4/Frame-31.png"}
          title={"DALLE-2 clone"}
          desc={
            "Task management system with drag-and-drop, real-time collaboration, and responsive layout."
          }
          link={"https://dalle-2-clone.vercel.app/"}
        />
        <ProjectCard1
          image={"https://i.ibb.co/TLmjqhx/Frame-31.png"}
          title={"DALLE-2 clone"}
          desc={
            "Task management system with drag-and-drop, real-time collaboration, and responsive layout."
          }
          link={"https://socialai-three.vercel.app/"}
        />
      </div>
      <Footer />
    </>
  );
};

export default Projectsmain;
