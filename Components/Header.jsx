import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="navbar flex justify-between container mx-auto  p-4 items-center max-w-7xl  px-4">

        {/* Logo */}
        <div className="">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-blue-600"
          >
           
            JobPortal
          </Link>
        </div>

        {/* Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu flex  menu-horizontal gap-2 font-medium">
            <li className="p-3"><Link to="/">Home</Link></li>
            <li className="p-3"><Link to="/jobs">Find Jobs</Link></li>
            <li className="p-3"><Link to="/companies">Companies</Link></li>
            <li className="p-3"><Link to="/about">About</Link></li>
            <li className="p-3"><Link to="/contact">Contact</Link></li>
            <li className="p-3"><Link to="/job/create-job">Create-Jobs</Link></li>
            <li className="p-3"><Link to="/dashboard/basic-info">Dashboard</Link></li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end flex gap-3">

         <button className="bg-sky-700 w-[150px] h-auto px-3 py-2 rounded-xl">
             <Link
            to="/auth/login"
            className="btn btn-outline"
          >
            Login
          </Link>
         </button>

        <button className="bg-black w-[150px] h-auto px-3 py-2 rounded-xl">
              <Link
            to="/auth/register"
            className="btn text-white btn-primary"
          >
            Sign Up
          </Link>
        </button>

        </div>

      </div>
    </header>
  );
};

export default Header;