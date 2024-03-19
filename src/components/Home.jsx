import Footer from "./Footer";
import Mainpart from "./Mainpart";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Mainpart />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
