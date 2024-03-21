import { Link } from "react-router-dom";

const Mainpart = () => {
  return (
    <div className="content-size">
      <span className="text-3xl font-light">Hey,I'm Rc0ut</span>
      <div className="text1">
        <span className="text-purple">Front</span>
        <span>end Developer</span>
      </div>
      <div className="text2">
        <span className="text-purple">Front</span>
        <span>end</span>
      </div>
      <span className="text3">Developer</span>

      <p className="text4">
        I'm a frontend developer based in Italy, I'll help you build beautiful
        websites your users will love.
      </p>
      <div className="mt-8 phone:mt-6 mid:mt-6 mac:mt-6">
        <button className="btn1">
          <a href="https://www.linkedin.com/in/varun-israni-a21022261/?originalSubdomain=in">
            Get In Touch
          </a>
        </button>
        <button className="btn2">
          <Link to="/project">Browse Projects</Link>
        </button>
      </div>
      <div className="flex flex-row items-center justify-center mt-20 phone:mr-10 phone:ml-5 mid:mr-10 mid:ml-5">
        <img
          src="https://i.ibb.co/KXHPcF7/unnamed-modified.jpg"
          height={600}
          width={600}
          className="border-purple rounded-full border-4 mac:ml-10 mac:mr-20"
        />
      </div>
    </div>
  );
};

export default Mainpart;
