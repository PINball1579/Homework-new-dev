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

 return (
  <footer className="w-full bg-white text-gray-800">
   {/* Top Section */}
   <div
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#2B3432] h-[60px] rounded-t-[22px] cursor-pointer"
    onClick={() => setIsOpen(!isOpen)}
   >
    <div className="flex flex-row justify-between items-center p-2">
     <p className="text-white text-[36px] font-bold-extended">ดูทั้งหมด</p>
     <div
      className={`transform transition-transform duration-300 ${isOpen ? "rotate-90" : "-rotate-90"
       }`}
     >
      <Image src="/icons/chevron.png" alt="Chevron" width={13} height={13} />
     </div>
    </div>
   </div>

   {/* Expandable Section */}
   {isOpen && (
    <div className="max-w-7xl mx-auto p-10 bg-[#2B3432] text-white text-[32px] font-normal-extended leading-8">
     <p className="mb-2">Reference</p>
     <ol className="list-decimal list-inside space-y-1">
      <li>
       Harpaz R; Morbidity and Mortality Weekly Report; 2008;57;1-40
      </li>
      <li>
       Kilgore PE; Journal of medical virology; 2003;70;S111-8, (KC)
      </li>
      <li>
       Infection Disease Association of Thailand. (2023). Recommended
       Adult and Elderly Immunization Schedule (Thailand).
      </li>
     </ol>
    </div>
   )}

   {/* Bottom Orange Section */}
   <div className="w-full bg-[#F26D20] h-[60px]">
    <div className="h-full flex flex-row justify-center items-center content-center gap-8">
     {footerItems.map((item, index) => (
      <div key={index} className="flex flex-row justify-center items-center gap-2">
       <div className="w-3 h-3 bg-white rounded-b-[4px] rounded-tl-[4px]" />
       <div className="text-lg text-white">{item}</div>
      </div>
     ))}
    </div>
   </div>
   <div className="w-full bg-black h-[60px]">
    <div className="h-full text-white text-center justify-center items-center content-center leading-4">
     กรุณาปรึกษาบุคลากรทางการแพทย์ เช่น แพทย์, เภสัชกร และ พยาบาล เป็นต้น <br />
     NP-TH-HZU-WCNT-240004 NP-TH-HZU-WCNT-240002
    </div>
   </div>
  </footer>
 );
}
