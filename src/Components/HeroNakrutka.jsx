import React from "react";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HeroNakrutka = () => {
  return (
    <div>
      <div className="hero pt-24">
        <h1 className="text-center tracking-widest font-bold text-xl text-blue-900">
          Ijtimoiy Tarmoqlardan birini tanlang!
          <div className="flex gap-[5%] mx-auto mt-8 items-start justify-center">
            <div className="left w-1/3 flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <FaTelegram />
                <h1>Telegram</h1>
              </div>

              <div className="prices w-full flex flex-col gap-4">
                <div className="item flex justify-between border-b-2 border-blue-950 border-solid">
                  <h1>Arzon Obunachi</h1>
                  <h2>5 000 so'm</h2>
                </div>
                <div className="item flex justify-between border-b-2 border-blue-950 border-solid">
                  <h1>Kafolali Obunachi</h1>
                  <h2>20 000 so'm</h2>
                </div>
                <div className="item flex justify-between border-b-2 border-blue-950 border-solid">
                  <h1>Obunachi</h1>
                  <h2>20 000 so'm</h2>
                </div>
                <div className="item flex justify-between border-b-2 border-blue-950 border-solid">
                  <h1>Obunachi</h1>
                  <h2>20 000 so'm</h2>
                </div>
                <div className="item flex justify-between border-b-2 border-blue-950 border-solid">
                  <h1>Obunachi</h1>
                  <h2>20 000 so'm</h2>
                </div>
                <div className="item flex justify-between border-b-2 border-blue-950 border-solid">
                  <h1>Obunachi</h1>
                  <h2>20 000 so'm</h2>
                </div>
                <div className="item flex justify-between border-b-2 border-blue-950 border-solid">
                  <h1>Obunachi</h1>
                  <h2>20 000 so'm</h2>
                </div>
              </div>
            </div>
            <div className="line h-screen w-1 bg-blue-950"></div>
            <div className="left w-1/3 flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <FaInstagram />
                <h1>Instagram</h1>
              </div>

              <div className="prices w-full flex flex-col gap-4">
                <div className="item flex justify-between border-b-2 border-blue-950 border-solid">
                  <h1>Arzon Obunachi</h1>
                  <h2>5 000 so'm</h2>
                </div>
                <div className="item flex justify-between border-b-2 border-blue-950 border-solid">
                  <h1>Kafolali Obunachi</h1>
                  <h2>20 000 so'm</h2>
                </div>
                <div className="item flex justify-between border-b-2 border-blue-950 border-solid">
                  <h1>Obunachi</h1>
                  <h2>20 000 so'm</h2>
                </div>
                <div className="item flex justify-between border-b-2 border-blue-950 border-solid">
                  <h1>Obunachi</h1>
                  <h2>20 000 so'm</h2>
                </div>
                <div className="item flex justify-between border-b-2 border-blue-950 border-solid">
                  <h1>Obunachi</h1>
                  <h2>20 000 so'm</h2>
                </div>
                <div className="item flex justify-between border-b-2 border-blue-950 border-solid">
                  <h1>Obunachi</h1>
                  <h2>20 000 so'm</h2>
                </div>
                <div className="item flex justify-between border-b-2 border-blue-950 border-solid">
                  <h1>Obunachi</h1>
                  <h2>20 000 so'm</h2>
                </div>
              </div>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default HeroNakrutka;
