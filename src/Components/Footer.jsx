import React from 'react'
import my from "../../public/images/photo_2024-05-13_01-27-40.jpg"
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../App.css"

const Footer = () => {
  return (
    <div>
      <footer id="contact" className="flex px-4 py-6 gap-[4%]">
        <div className="line w-2/5 gap-10 flex flex-col">
          <div className="top flex items-center gap-6 ">
            <img src={my} className="rounded-full w-[15%]" alt="" />
            <h1 className="text-3xl font-[Red Hat Display] font-bold text-blue-950">
              RegoDev
            </h1>
          </div>

          <h2 className="text-xl font-[barlow] font-medium">
            Bizni ijtimoiy tarmoqlarda kuzatib boring!
          </h2>

          <div className="icons flex gap-6">
            <a href="https://www.facebook.com/profile.php?id=100092169798551&mibextid=LQQJ4d">
              <FaFacebook className="w-8 h-8" />
            </a>
            <a href="https://instagram.com/regodev_">
              <BsInstagram className="w-8 h-8" />
            </a>
            <a href="https://t.me/regodev">
              <FaTelegram className="w-8 h-8" />
            </a>
            <a href="www.linkedin.com/in/regodev">
              <FaLinkedin className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="line flex flex-col gap-5 w-[1/3]">
          <h1 className="text-2xl text-[#08546C] font-bold tracking-wider font-[Red Hat Display] ">
            Sahifalar
          </h1>

          <ul className="flex axa flex-col gap-3">
            <li>
              <a href="#">Bosh sahifa</a>
            </li>
            <li>
              <a href="#contact">Biz haqimizda</a>
            </li>
            <li>
              <a href="#services">Xizmatlar</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>

        <div className="line flex flex-col gap-5 w-[1/3]">
          <h1 className="text-2xl text-[#08546C] font-bold tracking-wider font-[Red Hat Display] ">
            Nakrutka xizmatlari
          </h1>

          <ul className="flex axa flex-col gap-3">
            <li>
              <a href="https://t.me/Salimov_T" target="_blank">
                Instagram uchun
              </a>
            </li>
            <li>
              <a href="https://t.me/Salimov_T" target="_blank">
                Telegram uchun
              </a>
            </li>
            <li>
              <a href="https://t.me/Salimov_T" target="_blank">
                Web-site yaratish
              </a>
            </li>
            <li>
              <a href="https://t.me/Salimov_T" target="_blank">
                SMM
              </a>
            </li>
            <li>
              <a href="https://t.me/Salimov_T" target="_blank">
                Kanal yuritish
              </a>
            </li>
          </ul>
        </div>

        <div className="line flex flex-col gap-5 w-[1/3]">
          <h1 className="text-2xl text-[#08546C] font-bold tracking-wider font-[Red Hat Display] ">
            Bog'lanish
          </h1>

          <ul className="flex axa flex-col gap-3">
            <li>
              <a href="#">+998 (33) 433 37 33</a>
            </li>
            <li>
              <a href="salimovtolqin5@gmail.com" target='_blank'>salimovtolqin5@gmail.com</a>
            </li>
            <li>
              <a href="#">Tashkent, Uzbekistan</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer