"use client";
import React, { useState } from "react";
import Image from "next/image";

const strokedTextStyle: React.CSSProperties = {
  WebkitTextStroke: "4px #FFFFFF",
  textShadow:
    "2px 0 0 #FFFFFF, -2px 0 0 #FFFFFF, 0 2px 0 #FFFFFF, 0 -2px 0 #FFFFFF, 1.5px 1.5px 0 #FFFFFF, -1.5px 1.5px 0 #FFFFFF, 1.5px -1.5px 0 #FFFFFF, -1.5px -1.5px 0 #FFFFFF",
};

function BlurredBadge({
  children,
  width = "w-[250px]",
}: {
  children: React.ReactNode;
  width?: string;
}) {
  return (
    <div className={`absolute -bottom-35 right-0 ${width} rounded-tl-2xl overflow-visible`}>
      <div className="pointer-events-none absolute px-2 inset-0 rounded-br-2xl rounded-tl-2xl bg-gradient-to-b from-[#DF3F02] to-black blur-[6px] opacity-95" />
      <div className="relative h-[194px] z-[1] px-4 text-white flex items-center">
        <p className="text-[32px] font-normal-extended leading-9 text-left">
          {children}
        </p>
      </div>
    </div>
  );
}

function NumberOverlay({
  value,
  className = "",
  bottomPx = 10,
}: {
  value: string;
  className?: string;
  bottomPx?: number;
}) {
  return (
    <span
      className={`pointer-events-none absolute right-10 z-[3] text-[120px] leading-none font-bold-extended text-[#35363B] ${className}`}
      style={{ bottom: `${bottomPx}px`, ...strokedTextStyle }}
    >
      {value}
    </span>
  );
}

export default function RiskSection() {
  const items = [
    {
      img: "/images/risk1.png",
      number: "50+",
      text: (
        <>
          โรคงูสวัดพบได้บ่อยที่สุดในผู้ที่มีอายุ 50 ปี ขึ้นไป
          <sup className="text-[18px] align-super text-[#DF3E01]">1</sup>
        </>
      ),
      width: "w-[250px]",
    },
    {
      img: "/images/risk2.png",
      number: "90%",
      text: (
        <>
          มากกว่า 90% ของผู้ที่มี อายุมากกว่า 50 ปีขึ้นไป
          มีเชื้อไวรัสที่ก่อให้เกิด โรคงูสวัดอยู่แล้ว
          <sup className="text-[18px] align-super text-[#DF3E01]">2</sup>
        </>
      ),
      width: "w-[300px]",
    },
    {
      img: "/images/risk3.png",
      number: "1/3",
      text: (
        <>
          ประมาณ 1 ใน 3 ของประชากรมีโอกาสเป็นโรคงูสวัดตลอดช่วงชีวิต
          <sup className="text-[18px] align-super text-[#DF3E01]">3</sup>
        </>
      ),
      width: "w-[250px]",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section
      className="relative h-full bg-cover bg-center py-10 text-white"
      style={{ backgroundImage: "url('/images/Banner2.png')", height: "793px" }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-[50px] md:text-[90px] font-medium-extended leading-none">
          ใครบ้างที่มีความเสี่ยงต่อโรคงูสวัด
        </h2>
        <p className="text-[40px] md:text-[60px] font-medium-extended leading-none">
          คุณอาจมีความเสี่ยง:
        </p>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-3 gap-24 mt-10">
          {items.map((item, i) => (
            <div key={i} className="relative w-[340px] h-[340px] mx-auto">
              <Image src={item.img} alt="Risk" fill className="object-cover rounded-lg" />
              <NumberOverlay value={item.number} />
              <BlurredBadge width={item.width}>{item.text}</BlurredBadge>
            </div>
          ))}
        </div>

        {/* Mobile: Custom slider */}
        <div className="md:hidden mt-10 relative w-full flex justify-center">
          <div className="relative w-[300px] h-[300px]">
            <Image
              src={items[currentIndex].img}
              alt="Risk"
              fill
              className="object-cover rounded-lg"
            />
            <NumberOverlay value={items[currentIndex].number} />
            <BlurredBadge width={items[currentIndex].width}>
              {items[currentIndex].text}
            </BlurredBadge>
          </div>

          {/* Left arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-2"
          >
            <Image
              src="/icons/chevron.png"
              alt="Previous"
              width={15}
              height={15}
              className="rotate-180"
            />
          </button>

          {/* Right arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-2"
          >
            <Image
              src="/icons/chevron.png"
              alt="Next"
              width={15}
              height={15}
            />
          </button>

        </div>
      </div>

<p
  className="
    absolute bottom-6 
    left-1/2 -translate-x-1/2 
    w-[300px] text-center 
    md:left-20 md:translate-x-0 md:w-auto md:max-w-5xl md:text-left
    text-[18px] 
    text-[#d9d9d9] 
    z-20
  "
>
  {/* Mobile*/}
  <span className="block md:hidden">
    *อาการของโรคงูสวัดในผู้ป่วยแต่ละรายอาจแตกต่างกันไป ข้อความเหล่านี้อิงตามคำอธิบายของข้อมูลบางประการเกี่ยวกับการเจ็บปวดจากโรคงูสวัดและไม่ได้แสดงถึงประสบการณ์ของผู้ป่วยทุกคน
  </span>

  {/* Desktop*/}
  <span className="hidden md:block">
    *อาการของโรคงูสวัดในผู้ป่วยแต่ละรายอาจแตกต่างกันไป ข้อความเหล่านี้
    <br />
    อิงตามคำอธิบายของข้อมูลบางประการเกี่ยวกับการเจ็บปวดจากโรคงูสวัดและไม่ได้แสดงถึงประสบการณ์ของผู้ป่วยทุกคน
  </span>
</p>




    </section>
  );
}
