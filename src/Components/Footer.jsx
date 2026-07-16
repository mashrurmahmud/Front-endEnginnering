import { Link } from "react-router-dom";
// import {
//   FaFacebook,
//   FaGithub,
//   FaLinkedin,
//   FaTwitter,
//   FaBriefcase,
// } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2 text-white">
              {/* <FaBriefcase /> */}
              JobPortal
            </h2>

            <p className="mt-4 leading-7">
              Find your dream job with thousands of trusted companies.
              We connect talented people with amazing opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/companies">Companies</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Employers
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/post-job">Post a Job</Link>
              </li>
              <li>
                <Link to="/dashboard">
                  Employer Dashboard
                </Link>
              </li>
              <li>
                <Link to="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact
            </h3>

            <p>Chattogram, Bangladesh</p>
            <p>support@jobportal.com</p>
            <p>+880 1234-567890</p>

            <div className="flex gap-4 text-2xl mt-6">
              <a href="#">
                {/* <FaFacebook /> */}
              </a>

              <a href="#">
                {/* <FaTwitter /> */}
              </a>

              <a href="#">
                {/* <FaGithub /> */}
              </a>

              <a href="#">
                {/* <FaLinkedin /> */}
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} JobPortal. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;