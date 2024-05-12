import React from "react";
import Mine from "../../public/images/mine-foto.jpg";
import Burger from "../../public/images/navbar-menu.svg";
import "../App.css";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Adjust the duration as needed

      let start = null;
      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(
          0,
          easeInOutCubic(progress, startPosition, distance, duration)
        );
        if (progress < duration) window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }
  };

  // Easing function
  function easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
    return (c / 2) * ((t -= 2) * t * t + 2) + b;
  }

  return (
    <div>
      <nav className="flex justify-between items-center">
        <div className="left flex items-center gap-[10%]">
          <img src={Mine} className="w-[4%] rounded-full" alt="" />

          <ul className="flex items-center gap-[20%]">
            <li>
              <a
                href="#contact"
                className="font-[barlow] font-medium text-lg text-[#21232D] px-5 py-3"
                onClick={() => scrollToSection("contact")}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="font-[barlow] font-medium text-lg text-gray-400 hover:text-[#21232D] transition-all duration-400 px-5 py-3"
                href="#service"
                onClick={() => scrollToSection("service")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="font-[barlow] font-medium text-lg text-gray-400 hover:text-[#21232D] transition-all duration-400 px-5 py-3"
                href="#"
              >
                Works
              </a>
            </li>
            <li>
              <a
                className="font-[barlow] font-medium text-lg text-gray-400 hover:text-[#21232D] transition-all duration-400 px-5 py-3"
                href="#"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="right">
          <a href="#">
            <img
              className="p-4 w-16 rounded-full bg-slate-200"
              src={Burger}
              alt=""
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
