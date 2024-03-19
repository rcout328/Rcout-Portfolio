import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-20 ml-80">
        <div className="flex flex-row text-8xl font-bold mt-3">
          <span>About me</span>
          <span className="text-[#6E00F2]">.</span>
        </div>
        <div className="flex flex-row mt-10">
          <div className="w-3 h-20 bg-[#6E00F2]"></div>
          <p className="text-3xl ml-5 mt-1">
            Developing beautiful and functional websites is what I love doing,
            and that's why I give my all in every new challenge.
          </p>
        </div>
        <div className="flex flex-row text-7xl font-bold mt-20 mr-80">
          <span>My Stack</span>
          <span className="text-[#6E00F2]">.</span>
        </div>
        <div className="flex flex-col text-[#6E00F2] text-6xl font-bold mt-10 justify-center items-center gap-5">
          <span className="hover:text-black">React JS</span>
          <span className="hover:text-black">Html</span>
          <span className="hover:text-black">Tailwind Css</span>
          <span className="hover:text-black">Flutter</span>
          <span className="hover:text-black">Next JS</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
