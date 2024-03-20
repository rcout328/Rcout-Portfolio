import Footer from "./Footer";
import Mainpart from "./Mainpart";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <div className="phone:hidden overflow-scroll">
        <Navbar />
      </div>
      <MobileNavbar />

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
