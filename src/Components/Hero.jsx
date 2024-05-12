import React from 'react'
import "../App.css"
import user from "../../public/images/user-image.svg"

const Hero = () => {
  return (
    <div>
      <div className="hero flex items-center pt-16 mx-auto justify-center gap-[20%]">
        <div className="left">
          <h1 className="text-4xl font-semibold text-[#023e8a] leading-medium tracking-wider">Hi!</h1>
          <h1 className="text-5xl font-bold font-[Red Hat Display] leading-normal text-[#023e8a] tracking-wider">
            Salimov To'lqin
          </h1>
          <h2 className="text-2xl font-semibold font-[Red Hat Display] text-[#006d77] tracking-wider">
            I'm Front End Developer and <br /> SMM manager
          </h2>
        </div>

        <div className="right">
          <img className="w-3/4" src={user} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero