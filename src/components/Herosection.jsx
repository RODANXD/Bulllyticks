import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import React,{useState} from "react";
import {Link}  from "react-router-dom";
const HeroSection = () => {
  // Navigation menu items data

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-[linear-gradient(90deg,#012f4600_0%,#012f46_50%,_#012f4600_100%)] px-[28px] py-[15px] sm:px-[56px] sm:py-[30px]">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/images/img_header_logo.png"
            alt="Logo"
            className="w-[77px] h-[24px] sm:w-[154px] sm:h-[48px]"
          />
        </div>

        {/* Hamburger Menu Icon (Mobile only) */}
        <button
          className="block lg:hidden p-2"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-global-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50 lg:z-auto`}
        >
          <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[40px] justify-center items-center p-4 lg:p-0">
            <Link
              
              className=" bg-transparent font-outfit text-[14px] sm:text-[14px] font-bold lg:font-normal leading-[9px] sm:leading-[18px] text-global-12 hover:font-bold transition-all duration-200"
            >
              Home
            </Link>
            <Link
              role="menuitem"
              className="font-outfit text-[7px] sm:text-[14px] font-normal leading-[9px] sm:leading-[18px] text-global-3 hover:font-bold hover:text-global-12 transition-all duration-200"
            >
              About Us
            </Link>
            <Link
              role="menuitem"
              className="font-outfit text-[7px] sm:text-[14px] font-normal leading-[9px] sm:leading-[18px] text-global-3 hover:font-bold hover:text-global-12 transition-all duration-200"
            >
              Pricing
            </Link>
            <Link
              role="menuitem"
              className="font-outfit text-[7px] sm:text-[14px] font-normal leading-[9px] sm:leading-[18px] text-global-3 hover:font-bold hover:text-global-12 transition-all duration-200"
            >
              Services
            </Link>
          </div>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden lg:flex gap-[4px] sm:gap-[8px] justify-center items-center">
          <Button variant="primary" size="medium">
            Login
          </Button>
          <Button variant="secondary" size="medium" className="rounded-[8px]">
            Register
          </Button>
        </div>
      </div>

      {/* Mobile Auth Buttons */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } lg:hidden flex-col gap-2 mt-4 px-4`}
      >
        <Button variant="primary" size="medium" fullWidth>
          Login
        </Button>
        <Button
          variant="secondary"
          size="medium"
          fullWidth
          className="rounded-[8px]"
        >
          Register
        </Button>
      </div>
    </header>
  );
};

export default HeroSection;
