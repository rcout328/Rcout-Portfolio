import { Link } from "react-router-dom";

const Mainpart = () => {
  return (
    <div className="flex flex-col ml-10 mt-40 phone:mt-20 min-h-screen relative phone:ml-5 mid:mt-20 mid:ml-5 mac:mt-20 mac:ml-5 mad:mt-20 mad:ml-20 mad:mr-20 ">
      <span className="text-3xl font-light">Hey,I'm Rc0ut</span>
      <div className="flex flex-row text-8xl font-bold mt-3 phone:hidden mid:hidden mac:text-6xl mal:text-7xl">
        <span className="text-[#6E00F2]">Front</span>
        <span>end Developer</span>
      </div>
      <div className="flex flex-row text-6xl font-bold mt-3 phone:mr-5 mid:mr-5 mac:hidden mal:hidden mad:hidden">
        <span className="text-[#6E00F2]">Front</span>
        <span>end</span>
      </div>
      <span className="text-6xl font-bold mt-3 phone:mr-5 phone:mt-0 mid:mr-5 mac:hidden mal:hidden mad:hidden">
        Developer
      </span>

      <p className="text-3xl mt-10 font-normal phone:text-xl phone:font-light phone:mt-8 phone:mr-5 mid:text-xl mid:font-light mid:mt-8 mid:mr-5 mac:text-xl mac:mr-5 mac:mt-5 mal:mr-5 mal:text-2xl mad:text-2xl mad:mt-5 mad:line-clamp-2 ">
        I'm a frontend developer based in Italy, I'll help you build beautiful
        websites your users will love.
      </p>
      <div className="mt-8 phone:mt-6 mid:mt-6 mac:mt-6">
        <button className="bg-[#6E00F2] text-white p-4 phone:p-3 phone:text-sm font-bold rounded-lg text-xl mid:p-3 mid:text-sm mac:p-3 mac:text-sm mal:p-3 mal:text-sm">
          <a href="https://www.linkedin.com/in/varun-israni-a21022261/?originalSubdomain=in">
            Get In Touch
          </a>
        </button>
        <button className="bg-white text-blacks border border-black ml-5 p-4 phone:p-3 phone:text-sm mid:p-3 mid:text-sm font-bold rounded-lg text-xl mac:p-3 mac:text-sm mal:p-3 mal:text-sm">
          <Link to="/project">Browse Projects</Link>
        </button>
      </div>
      <div className="flex flex-row items-center justify-center mt-20 phone:mr-10 phone:ml-5 mid:mr-10 mid:ml-5">
        <img
          src="https://i.ibb.co/KXHPcF7/unnamed-modified.jpg"
          height={600}
          width={600}
          className="border-[#6E00F2] rounded-full border-4 mac:ml-10 mac:mr-20"
        />
      </div>
    </div>
  );
};

export default Mainpart;
