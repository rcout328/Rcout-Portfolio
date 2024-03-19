import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="h-full flex flex-row">
        <Link to="/">
          {" "}
          <h1 className="text-3xl font-medium mt-5 ml-80">Rc0ut</h1>
        </Link>
        <div className="flex flex-row justify-center absolute top-0 right-0 mt-5 mr-80">
          <ul className="text-2xl flex flex-row font-medium gap-5 ">
            <Link className="hover:text-[#6E00F2]" to="/">
              Home
            </Link>
            <Link className="hover:text-[#6E00F2]" to="/project">
              Projects
            </Link>
            <Link className="hover:text-[#6E00F2]" to="/about">
              About
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
