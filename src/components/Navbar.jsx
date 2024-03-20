import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row h-full">
        <div className="h-full flex flex-row ">
          <h1 className="text-2xl font-medium mt-5 ml-10 phone:text-4xl">
            Rc0ut
          </h1>
          <div className="flex flex-row justify-center absolute top-0 right-0 mt-5 mr-10">
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
      </div>
    </>
  );
};

export default Navbar;
