import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import ProjectCard1 from "./ProjectCard1";

const Projectsmain = () => {
  return (
    <>
      <div className="phone:hidden mid:hidden mac:hidden">
        <Navbar />
      </div>
      <div className="mal:hidden mad:hidden">
        <MobileNavbar />
      </div>
      <div className="flex flex-col ml-10 mr-10 mt-40 phone:mt-20 phone:mr-5 phone:ml-5 mid:mt-20 mid:mr-5 mid:ml-5 mac:mt-20 mac:mr-5 mac:ml-5 mal:mt-20 mal:ml-5 mal:mr-5 mad:ml-20 mad:mr-20">
        <div className="flex flex-row text-8xl font-bold mt-3 gap-4 phone:hidden mid:hidden mac:text-6xl mal:text-7xl mad:text-7xl">
          <span>My</span>
          <span className="text-[#6E00F2]">Best</span>
          <span>Creations</span>
        </div>
        <div className="flex flex-col text-8xl font-bold mt-3  phone:text-6xl mid:text-6xl mac:hidden mal:hidden mad:hidden">
          <div className="flex flex-row gap-2 phone:text-6xl">
            <span>My</span>
            <span className="text-[#6E00F2]">Best</span>
            <span className="phone:hidden">Creations</span>
          </div>
          <span className="mid:hidden">Creations</span>
        </div>
        <h1 className="text-3xl mt-5 phone:text-xl phone:text-black/80 mid:text-xl mac:text-xl mal:text-2xl mad:text-3xl">
          Designing and Developing Robust and Stylish Web Applications for a
          Decade and Counting
        </h1>
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
