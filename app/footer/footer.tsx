"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const footerItems = [
    "เงื่อนไขข้อตกลงการใช้บริการ",
    "นโยบายความเป็นส่วนตัว",
    "นโยบายคุกกี้",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white text-gray-800 relative">
      {/* ===== Mobile ===== */}
      <div className="block md:hidden">
        {/* Top black bar */}
        <div
          className="px-4 bg-[#2B3432] h-[44px] flex items-center justify-between rounded-t-[12px] cursor-pointer"
          onClick={() => setIsOpen((v) => !v)}
        >
          <p className="text-white text-[25px] font-bold-extended">ดูทั้งหมด</p>
          <Image
            src="/icons/chevron.png"
            alt="Chevron"
            width={14}
            height={14}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : "-rotate-90"
            }`}
          />
        </div>

        {/* Reference section */}
        {isOpen && (
          <div className="bg-[#2B3432] text-white px-4 py-3 rounded-b-none">
            <p className="text-[20px] mb-2">Reference</p>
            <ol className="list-decimal pl-5 space-y-1 text-[18px] leading-[18px]">
              <li>Harpaz R; Morbidity and Mortality Weekly Report; 2008;57;1-40</li>
              <li>Kilgore PE; Journal of medical virology; 2003;70;S111-8, (KC)</li>
              <li>
                Infection Disease Association of Thailand. (2023). Recommended Adult and
                Elderly Immunization Schedule (Thailand).
              </li>
            </ol>
          </div>
        )}

        {/* Orange section */}
        <div className="relative bg-[#F26D20] px-4 py-4">
          <div className="space-y-3">
            {footerItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-[14px] h-[14px] bg-white rounded-[3px]" />
                <span className="text-white text-[25px]">{item}</span>
              </div>
            ))}
          </div>

          {/* Back to top button (Mobile) */}
          <button
            aria-label="Back to top"
            onClick={scrollToTop}
            className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md active:scale-95"
          >
            <Image
              src="/icons/chevron-black.png"
              alt="Chevron up"
              width={16}
              height={16}
            />
          </button>
        </div>

        {/* Bottom black bar */}
        <div className="w-full bg-black py-3 px-2">
          <p className="text-white text-center text-[12px] leading-4">
            กรุณาปรึกษาบุคลากรทางการแพทย์ เช่น แพทย์, เภสัชกร และ พยาบาล เป็นต้น <br />
            NP-TH-HZU-WCNT-240004 NP-TH-HZU-WCNT-240002
          </p>
        </div>
      </div>

      {/* ===== Desktop ===== */}
      <div className="hidden md:block relative">
        {/* Top Section */}
        <div
          className="px-4 sm:px-6 lg:px-8 bg-[#2B3432] h-[60px] rounded-t-[22px] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white text-[36px] font-bold-extended">ดูทั้งหมด</p>
            <div
              className={`transform transition-transform duration-300 ${
                isOpen ? "rotate-90" : "-rotate-90"
              }`}
            >
              <Image src="/icons/chevron.png" alt="Chevron" width={13} height={13} />
            </div>
          </div>
        </div>

        {/* Expandable Section */}
        {isOpen && (
          <div className="p-10 bg-[#2B3432] text-white text-[32px] font-normal-extended leading-8">
            <p className="mb-2">Reference</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Harpaz R; Morbidity and Mortality Weekly Report; 2008;57;1-40</li>
              <li>Kilgore PE; Journal of medical virology; 2003;70;S111-8, (KC)</li>
              <li>
                Infection Disease Association of Thailand. (2023). Recommended Adult and
                Elderly Immunization Schedule (Thailand).
              </li>
            </ol>
          </div>
        )}

        {/* Bottom Orange Section */}
        <div className="w-full bg-[#F26D20] h-[60px] relative">
          <div className="h-full flex flex-row justify-center items-center content-center gap-8">
            {footerItems.map((item, index) => (
              <div key={index} className="flex flex-row justify-center items-center gap-2">
                <div className="w-3 h-3 bg-white rounded-b-[4px] rounded-tl-[4px]" />
                <div className="text-lg text-white">{item}</div>
              </div>
            ))}
          </div>

          {/* Back to top button (Desktop) */}
          <button
            aria-label="Back to top"
            onClick={scrollToTop}
            className="absolute -bottom-5 right-6 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md active:scale-95"
          >
            <Image
              src="/icons/chevron-black.png"
              alt="Chevron up"
              width={20}
              height={20}
            />
          </button>
        </div>

        {/* Bottom Black Section */}
        <div className="w-full bg-black h-[60px]">
          <div className="h-full text-white text-center justify-center items-center content-center leading-4">
            กรุณาปรึกษาบุคลากรทางการแพทย์ เช่น แพทย์, เภสัชกร และ พยาบาล เป็นต้น <br />
            NP-TH-HZU-WCNT-240004 NP-TH-HZU-WCNT-240002
          </div>
        </div>
      </div>
    </footer>
  );
}
