import Footer from "./Footer";
import Mainpart from "./Mainpart";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <div className="phone:hidden mid:hidden mac:hidden overflow-scroll">
        <Navbar />
      </div>
      <div className="mal:hidden mad:hidden">
        <MobileNavbar />
      </div>

      <div></div>
      <Mainpart />
      <Projects />
      <Skills />
      <Footer />
      <div className="phone:hidden"></div>
    </div>
  );
};

export default Home;
