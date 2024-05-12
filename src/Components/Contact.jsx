import React from "react";
import LinkProp from "./LinkProp";

const Contact = () => {
  return (
    <div>
      <div className="contact mt-[12%] py-20">
        <LinkProp text="Bog'lanish" />

        <div className="titles flex justify-between items-center mt-[3%]">
          <h1 className="w-1/3 font-[barlow] text-3xl font-semibold">
            Men bilan hamkorlik qilishni istasangiz, quyidagilarni to'ldiring va menga o'z murojaatingizni qoldiring
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

          <button className="px-8 py-2 border-2 rounded-lg border-blue-950 text-lg font-[Red Hat Display] font-semibold hover:bg-blue-900 transition-all duration-500 mx-auto hover:text-white border-solid">Yuborish</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
