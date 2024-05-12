import React from "react";
import LinkProp from "./LinkProp";
import Nak from "../../public/images/nakrutkabot.jpg";

const Services = () => {
  return (
    <div id="service">
      <div className="services pt-[10%]">
        <LinkProp text="Xizmatlar" />

        <h1 className="font-bold mt-[2%] w-[25%] text-4xl leading-[47.63px] text-true-gray-800">
          Men aslida nima qilishni yaxshi ko'raman
        </h1>

        <div className="services w-full gap-[5%] flex mt-[3%]">
          <div className="service w-1/3 flex flex-col gap-5">
            <div className="top flex gap-[5%] items-center">
              <img className="rounded-full w-[10%]" src={Nak} alt="" />
              <h1 className="font-medium text-2xl">Nakrutka xizmati</h1>
            </div>

            <p className="text-[#47444E] font-normal text-lg mt-[2%]">
              Biz Eng Tezkor Arzon va Sifatli Nakrutka xizmatlarini taklif
              qilamiz! Xizmatlarimizdan foydalanish uchun telegramdan
              @NakFreeUzBot ga kiring yoki @RegoDev ga murojaat qiling.
            </p>
            <a
              href="https://t.me/NakFreeUzBot?start=1560958335"
              target="_blank"
              className="px-3 py-1 border border-solid bg-slate-200 rounded-md text-green-700 font-semibold border-blue-950 hover:bg-green-600 hover:text-white transition-all duration-500 text-center"
            >
              Ko'proq ma'lumot
            </a>
          </div>

          <div className="service w-1/3 flex flex-col gap-5">
            <div className="top flex gap-[5%] items-center">
              <img className="rounded-full w-[10%]" src={Nak} alt="" />
              <h1 className="font-medium text-2xl">
                Web-site yaratish xizmati
              </h1>
            </div>

            <p className="text-[#47444E] font-normal text-lg mt-[2%]">
              Agar sizda o'z biznes yoki brendingiz bo'lsa bizga sizga site
              yaratib beramiz! Site ideal va qulay bo'ladi. Ko'proq ma'lumotga
              ega bo'lishni istasangiz quyidagi tugmani bosing.
            </p>
            <a
              href="https://t.me/salimov_t"
              target="_blank"
              className="px-3 py-1 border border-solid bg-slate-200 rounded-md text-green-700 font-semibold border-blue-950 hover:bg-green-600 hover:text-white transition-all duration-500 text-center"
            >
              Ko'proq ma'lumot
            </a>
          </div>

          <div className="service w-1/3 flex flex-col gap-5">
            <div className="top flex gap-[5%] items-center">
              <img className="rounded-full w-[10%]" src={Nak} alt="" />
              <h1 className="font-medium text-2xl">Boshqalar</h1>
            </div>

            <p className="text-[#47444E] font-normal text-lg mt-[2%]">
              Bizda boshqa xizmatlar ham mavjud, to'liqroq ma'lumot olish uchun
              telegram dan yoki telefon orqali murojaat qilishingiz mumkin,
              bizda ish faoliyati 24/7.
            </p>

            <a
              href="https://t.me/salimov_t"
              target="_blank"
              className="px-3 py-1 border border-solid bg-slate-200 rounded-md text-green-700 font-semibold border-blue-950 hover:bg-green-600 hover:text-white transition-all duration-500 text-center"
            >
              Ko'proq ma'lumot
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
