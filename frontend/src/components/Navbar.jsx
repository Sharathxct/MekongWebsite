import React, { useEffect } from 'react'
import logo from '../assets/icons/MekongLogo.png'
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6'
import { Link as RLink } from 'react-router-dom';

export default function Navbar({ nItem }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);

  //toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // navigation array
  const navItem = [
    
    { link: "Services", path: "service" },
    { link: "About", path: "About" },
    { link: "Read", path: "faq" },
  ];
  return (
    <header className="w-full bg-white md:bd-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        } `}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <RLink
            to="/MekongWebsite/"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-10 inline-block items-center"
            />
            <span className="text-[#263238]">MEKONG</span>
          </RLink>
          {/* Nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
          <RLink to="/MekongWebsite/product">Products</RLink>
            {nItem !== undefined
              ? nItem.map((item, index) => (
                  <RLink
                    to={item.path}
                    key={index}
                    className="block text-base text-gray900 hover:text-brandPrimary first:font-medium cursor-pointer"
                  >
                    {item.link}
                  </RLink>
                ))
              : navItem.map((item, index) => (
                  <Link
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    key={index}
                    className="block text-base text-gray900 hover:text-brandPrimary first:font-medium cursor-pointer"
                  >
                    {item.link}
                  </Link>
                ))}
            
          </ul>
          {/* Btn for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey ">
              Contact
            </button>
          </div>
          {/* Menu for only small devices */}
          <div className="md:hidden ">
            <button
              className="text-neutralDGrey focus:outline-none focus:text-gray-500 "
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 " />
              ) : (
                <FaBars className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>
        {/* Menu for only small devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0  left-0" : "hidden"
          } `}
        >
            <RLink to='/product' className="block text-base text-white hover:text-brandPrimary first:font-medium " >Producst</RLink>
          {navItem.map((item, index) => (
            <Link
              to={item.path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              key={index}
              className="block text-base text-white hover:text-brandPrimary first:font-medium "
            >
              {item.link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
