import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/koinLogo.png';

const navLinks = [
  {
    path: '/crypto-taxes',
    display: 'Crypto Taxes',
  },
  {
    path: '/free-tools',
    display: 'Free Tools',
  },
  {
    path: '/resource-center',
    display: 'Resource Center',
  },
];

const Header = () => {
  // const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const handleStickyHeader = () => {
  //   window.addEventListener('scroll', () => {
  //     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  //       headerRef.current.classList.add('sticky__header');
  //     } else {
  //       headerRef.current.classList.remove('sticky__header');
  //     }
  //   });
  // };

  // useEffect(() => {
  //   handleStickyHeader();
  //   return () => window.removeEventListener('scroll', handleStickyHeader);
  // }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header sticky z-50 top-0 flex items-center bg-white shadow-md" >
      <div className="container ">
        <div className="flex items-center justify-between px-2 lg:px-5">
          {/* ============logo============ */}
          <div>
            <img src={logo} alt="company logo" className="h-[50px] m-3 p-2 ml-8" />
          </div>

          {/* ============hamburger-button============ */}
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-[#4040e0]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </div>

          {/* ============right-menu============ */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } lg:flex navigation m-5 p-2`}
            ref={menuRef}
          >
            <ul className="lg:flex lg:items-center lg:gap-[2.7rem] font-semibold">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={navClass =>
                      navClass.isActive
                        ? 'text-primaryColor text-[16px] leading-7 font-600'
                        : 'text-Color text-[16px] leading-7 font-500'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
              <li>
                <button className="bg-[#4040e0] rounded-md p-2 text-white font-semibold pr-4 pl-4">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
