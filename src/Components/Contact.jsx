import React from "react";
import LinkProp from "./LinkProp";

const Contact = () => {
  return (
    <div>
      <div id="contact" className="contact mt-[12%] py-20">
        <LinkProp text="Bog'lanish" />

        <div className="titles flex justify-between items-center mt-[3%]">
          <h1 className="w-1/3 font-[barlow] text-3xl font-semibold">
            Agar gaplashmoqchi bo'lsangiz, menga xabar bering potentsial
            hamkorlik haqida. Men mustaqil ish uchun tayyorman.
          </h1>

          <a
            className="font-normal text-2xl font-[barlow] text-[#8643DC]"
            href="Salimovtolqin5@gmail.com"
          >
            Salimovtolqin5@gmail.com
          </a>
        </div>
        <form className="mt-[3%] flex flex-col gap-7" action="">
          <input
            className="w-full text-2xl outline-none border-b-2 pb-4"
            type="text"
            placeholder="Ismingizni kiriting?"
          />
          <input
            className="w-full text-2xl outline-none border-b-2 pb-4"
            type="email"
            placeholder="Email kiriting?"
          />
          <input
            className="w-full text-2xl outline-none border-b-2 pb-4"
            type="text"
            placeholder="Qanday savol bermoqchisiz?"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
