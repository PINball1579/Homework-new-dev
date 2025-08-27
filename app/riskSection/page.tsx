// components/RiskSection.tsx
import React from "react";
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
  return (
    <section
      className="relative h-full bg-cover bg-center py-10 text-white"
      style={{ backgroundImage: "url('/images/Banner2.png')", height: "793px" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-[90px] font-medium-extended leading-none">
          ใครบ้างที่มีความเสี่ยงต่อโรคงูสวัด
        </h2>
        <p className="text-[60px] font-medium-extended leading-none">
          คุณอาจมีความเสี่ยงหาก:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mt-10">
          {/* Item 1 */}
          <div className="relative w-[340px] h-[340px] mx-auto">
            <Image
              src="/images/risk1.png"
              alt="Risk 50+"
              fill
              className="object-cover rounded-lg"
              priority
            />
            <NumberOverlay value="50+" />
            <BlurredBadge width="w-[250px]">
              โรคงูสวัดพบได้บ่อยที่สุดในผู้ที่มีอายุ 50 ปี ขึ้นไป
              <sup className="text-[18px] align-super text-[#DF3E01]">1</sup>
            </BlurredBadge>
          </div>

          {/* Item 2 */}
          <div className="relative w-[340px] h-[340px] mx-auto">
            <Image
              src="/images/risk2.png"
              alt="Risk 90%"
              fill
              className="object-cover rounded-lg"
            />
            <NumberOverlay value="90%" />
            <BlurredBadge width="w-[300px]">
              มากกว่า 90% ของผู้ที่มี อายุมากกว่า 50 ปีขึ้นไป
              มีเชื้อไวรัสที่ก่อให้เกิด โรคงูสวัดอยู่แล้ว
              <sup className="text-[18px] align-super text-[#DF3E01]">2</sup>
            </BlurredBadge>
          </div>

          {/* Item 3 */}
          <div className="relative w-[340px] h-[340px] mx-auto">
            <Image
              src="/images/risk3.png"
              alt="Risk 1/3"
              fill
              className="object-cover rounded-lg"
            />
            <NumberOverlay value="1/3" />
            <BlurredBadge width="w-[250px]">
              ประมาณ 1 ใน 3 ของประชากรมีโอกาสเป็นโรคงูสวัดตลอดช่วงชีวิต
              <sup className="text-[18px] align-super text-[#DF3E01]">3</sup>
            </BlurredBadge>
          </div>
        </div>
      </div>

      {/* Bottom-left disclaimer text (sticks to end of section) */}
      <p className="absolute bottom-10 left-30 max-w-4xl text-[20px] text-white/90 text-left z-20">
        *อาการของโรคงูสวัดในผู้ป่วยแต่ละรายอาจแตกต่างกันไป ข้อความเหล่านี้
      </p>
      <p className="absolute bottom-4 left-30 max-w-4xl text-[20px] text-white/90 text-left z-20">
        อิงตามคำอธิบายของข้อมูลบางประการเกี่ยวกับการเจ็บปวดจากโรคงูสวัดและไม่ได้แสดงถึงประสบการณ์ของผู้ป่วยทุกคน
      </p>
    </section>
  );
}
