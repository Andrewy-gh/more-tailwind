import { useState } from "react";
import clsx from "clsx";

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <>
      <header className="w-full h-16 bg-indigo-600 drop-shadow-lg">
        <div className="container px-4 md:px-0 h-full mx-auto flex justify-between items-center">
          {/* Logo Here */}
          <a className="text-yellow-400 text-xl font-bold italic" href="#">
            Text{" "}
          </a>

          {/* Menu links here */}
          <ul
            id="menu"
            className={clsx(
              "absolute top-0 right-0 px-10 py-16 bg-gray-800 z-50 md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6",
              { hidden: !isMenuOpen, "w-full h-screen": isMenuOpen }
            )}
          >
            <li className="md:hidden z-90 fixed top-4 right-6">
              <a
                href="javascript:void(0)"
                className="text-right text-white text-4xl"
                onClick={toggleMenu}
              >
                &times;
              </a>
            </li>

            <li>
              <a
                className="text-white opacity-70 hover:opacity-100 duration-300"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white opacity-70 hover:opacity-100 duration-300"
                href="#"
              >
                Something
              </a>
            </li>
            <li>
              <a
                className="text-white opacity-70 hover:opacity-100 duration-300"
                href="#"
              >
                Forums
              </a>
            </li>

            <li>
              <a
                className="text-white opacity-70 hover:opacity-100 duration-300"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-white opacity-70 hover:opacity-100 duration-300"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* This is used to open the menu on mobile devices */}
          <div className="flex items-center md:hidden">
            <button
              className="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
              onClick={toggleMenu}
            >
              &#9776;
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
