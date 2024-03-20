import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-full px-10">
      <h1 className="text-2xl font-medium mt-5">
        <Link to="/" className="hover:text-[#6E00F2] phone:text-4xl">
          Rc0ut
        </Link>
      </h1>
      <ul className="text-xl font-medium flex flex-row gap-5">
        <li>
          <Link to="/" className="hover:text-[#6E00F2]">
            Home
          </Link>
        </li>
        <li>
          <Link to="/project" className="hover:text-[#6E00F2]">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-[#6E00F2]">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
