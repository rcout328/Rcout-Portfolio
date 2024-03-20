import { Link } from "react-router-dom";

const Mainpart = () => {
  return (
    <section className="flex flex-col ml-10 mt-40 phone:mt-20 min-h-screen relative phone:ml-5">
      <span className="text-3xl font-light">Hey,I'm Rc0ut</span>
      <section className="flex flex-row text-8xl font-bold mt-3 phone:hidden">
        <span className="text-[#6E00F2]">Front</span>
        <span>end Developer</span>
      </section>
      <section className="flex flex-row text-6xl font-bold mt-3 phone:mr-5">
        <span className="text-[#6E00F2]">Front</span>
        <span>end</span>
      </section>
      <span className="text-6xl font-bold mt-3 phone:mr-5 phone:mt-0">
        Developer
      </span>

      <p className="text-3xl mt-10 font-normal phone:text-xl phone:font-light phone:mt-8 phone:mr-5">
        I'm a frontend developer based in Italy, I'll help you build beautiful
        websites your users will love.
      </p>
      <section className="mt-8 phone:mt-6">
        <button className="bg-[#6E00F2] text-white p-4 phone:p-3 phone:text-sm font-bold rounded-lg text-xl ">
          <a href="https://www.linkedin.com/in/varun-israni-a21022261/?originalSubdomain=in">
            Get In Touch
          </a>
        </button>
        <button className="bg-white text-blacks border border-black ml-5 p-4 phone:p-3 phone:text-sm font-bold rounded-lg text-xl">
          <Link to="/project">Browse Projects</Link>
        </button>
      </section>
      <section className="flex flex-row items-center justify-center mt-20 phone:mr-10 phone:ml-5">
        <img
          src="https://i.ibb.co/KXHPcF7/unnamed-modified.jpg"
          height={600}
          width={600}
          className="border-[#6E00F2] rounded-full border-4 "
        />
      </section>
    </section>
  );
};

export default Mainpart;
