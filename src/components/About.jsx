import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <div className="nav-hide">
        <Navbar />
      </div>
      <div className="mob-hide">
        <MobileNavbar />
      </div>
      <div className="content-size">
        <div className="maintext">
          <span>About me</span>
          <span className="text-purple">.</span>
        </div>
        <div className="flex flex-row mt-10 ">
          <div className="w-3 h-20 bg-purple phone:w-10 mid:w-3"></div>
          <p className="text-3xl ml-5 mt-1 phone:text-xl mid:text-xl mac:text-xl mal:text-2xl mr-5">
            Developing beautiful and functional websites is what I love doing,
            and that's why I give my all in every new challenge.
          </p>
        </div>
        <div className="maintext">
          <span>My Stack</span>
          <span className="text-purple">.</span>
        </div>
        <div className="flex flex-col ml-10 mr-10 mt-20 phone:ml-5 phone:mr-5 phone:mt-5 mid:ml-5 mid:mr-5 mid:mt-5 mac:mt-5 mac:mr-5 mac:ml-5">
          <div className="skil">
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
