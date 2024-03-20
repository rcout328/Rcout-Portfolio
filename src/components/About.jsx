import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <div className="phone:hidden mid:hidden mac:hidden ">
        <Navbar />
      </div>
      <div className="mal:hidden mad:hidden">
        <MobileNavbar />
      </div>
      <div className="flex flex-col mt-20 ml-10 phone:ml-5 phone:mr-5 mid:mr-5 mid:ml-5 mac:mr-5 mac:ml-5 mad:mr-20 mad:ml-20">
        <div className="flex flex-row text-8xl font-bold mt-3 phone:text-6xl mid:text-6xl mac:text-6xl mal:text-7xl mad:text-7xl">
          <span>About me</span>
          <span className="text-[#6E00F2]">.</span>
        </div>
        <div className="flex flex-row mt-10 ">
          <div className="w-3 h-20 bg-[#6E00F2] phone:w-10 mid:w-3"></div>
          <p className="text-3xl ml-5 mt-1 phone:text-xl mid:text-xl mac:text-xl mal:text-2xl">
            Developing beautiful and functional websites is what I love doing,
            and that's why I give my all in every new challenge.
          </p>
        </div>
        <div className="flex flex-row text-7xl font-bold mt-20 phone:text-6xl mid:text-6xl mac:text-6xl mal:text-7xl">
          <span>My Stack</span>
          <span className="text-[#6E00F2]">.</span>
        </div>
        <div className="flex flex-col ml-10 mr-10 mt-20 phone:ml-5 phone:mr-5 phone:mt-5 mid:ml-5 mid:mr-5 mid:mt-5 mac:mt-5 mac:mr-5 mac:ml-5">
          <div className="flex flex-col text-[#6E00F2] text-6xl font-bold mt-10 justify-center items-center gap-5 phone:text-4xl mid:text-4xl mac:text-4xl mal:text-5xl mad:text-5xl">
            <span className="hover:text-black">React JS</span>
            <span className="hover:text-black">Html</span>
            <span className="hover:text-black">Tailwind Css</span>
            <span className="hover:text-black">Flutter</span>
            <span className="hover:text-black">Next JS</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
