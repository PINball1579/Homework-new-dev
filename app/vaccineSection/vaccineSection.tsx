import React from "react";
import Image from "next/image";

const vaccines = [
  {
    title: "ชนิดที่ 1 Recombinant Zoster Vaccine",
    who: "ผู้ที่มีอายุ 50 ปีขึ้นไป หรือผู้ที่มีอายุ 18 ปีขึ้นไป \nที่มีภาวะภูมิคุ้มกันบกพร่องและมีความเสี่ยงต่อการเป็นงูสวัด",
    dose: "2 เข็ม ห่างกัน 2–6 เดือน",
    whoDesktop: "ผู้ที่มีอายุ 50 ปีขึ้นไป หรือผู้ที่มีอายุ 18 ปีขึ้นไป \nที่มีภาวะภูมิคุ้มกันบกพร่องและมีความเสี่ยงต่อการเป็นงูสวัด",
    doseDesktop: "2 เข็ม ห่างกัน 2-6 เดือน",
  },
  {
    title: "ชนิดที่ 2 Zoster Vaccine Live",
    who: "ผู้ที่มีอายุ 60 ปีขึ้นไป",
    dose: "1 เข็ม",
    whoDesktop: "ผู้ที่มีอายุ 60 ปีขึ้นไป",
    doseDesktop: "1 เข็ม",
  },
];

const Dot = ({ size = "w-2 h-2", mt = "mt-2" }) => (
  <span className={`${size} bg-[#DF3E01] rounded-full ${mt}`} />
);

const MobileVaccine = ({ v }: { v: (typeof vaccines)[0] }) => (
  <div className="mt-4">
    <h3 className="text-[40px] leading-12 font-medium-extended text-black">{v.title}</h3>
    <div className="flex items-start gap-2 mt-2">
      <span className="text-[18px] font-medium-extended text-black">ใครควรฉีด</span>
      <Dot />
      <p className="text-[17px] leading-6 text-black whitespace-pre-line font-extended">{v.who}</p>
    </div>
    <div className="flex items-start gap-2 mt-3">
      <span className="text-[18px] font-medium-extended text-black">จำนวนเข็ม</span>
      <Dot />
      <p className="text-[17px] text-black">{v.dose}</p>
    </div>
  </div>
);

const DesktopVaccine = ({ v }: { v: (typeof vaccines)[0] }) => (
  <div className="mb-8">
    <h3 className="text-[48px] font-medium-extended text-black">{v.title}</h3>
    <div className="flex items-start gap-4 mt-1">
      <p className="text-[32px] font-medium-extended text-black leading-8">ใครควรฉีด</p>
      <Dot size="w-3 h-3" mt="mt-3" />
      <p className="text-[32px] text-black leading-8 whitespace-pre-line">{v.whoDesktop}</p>
    </div>
    <div className="flex items-start gap-6 mt-8">
      <p className="text-[32px] font-medium-extended text-black leading-8">จำนวนเข็ม</p>
      <Dot size="w-3 h-3" mt="mt-3" />
      <p className="text-[32px] text-black leading-8">{v.doseDesktop}</p>
    </div>
  </div>
);

const VaccinePage = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* Top Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Mobile */}
          <div className="block md:hidden">
            <Image
              src="/images/Couple.png"
              alt="Couple"
              width={500}
              height={400}
              className="w-full h-auto rounded-br-[60px]"
            />
            <p className="mt-4 text-[25px] leading-7 text-gray-700">
              {"วิธีลดความเสี่ยง และห่างไกลโรคงูสวัด ป้องกันตัวเองด้วยการ ดูแลสุขภาพร่างกายให้แข็งแรง, รับประทานอาหารครบ 5 หมู่, พักผ่อนให้เพียงพอ, ออกกำลังกายสม่ำเสมอ, หลีกเลี่ยงการดื่มแอลกอฮอล์ และการสูบบุหรี่, อีกทั้งควรเข้ารับการฉีดวัคซีน เพื่อเสริมความแข็งแรงและความคุ้มกันของร่างกาย"
                .split(",")
                .map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line.trim()}
                    {i < arr.length - 1 && ","}
                    <br />
                  </React.Fragment>
                ))}
            </p>


            <h2 className="mt-6 text-[#DF3E01] font-medium-extended text-[50px] ">
              ปัจจุบันวัคซีนป้องกันงูสวัดมี 2 ชนิด ได้แก่
              <sup className="text-[#DF3E01] text-[20px] align-super">4</sup>
            </h2>
            {vaccines.map((v, i) => (
              <MobileVaccine key={i} v={v} />
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <div className="flex justify-center items-start gap-20">
              <Image
                src="/images/Couple.png"
                alt="Couple"
                width={500}
                height={400}
                className="rounded-br-[120px]"
              />
              <div>
                <h2 className="text-[#DF3E01] font-medium-extended text-[48px]">
                  ปัจจุบัน วัคซีนป้องกันงูสวัดมีอยู่ 2 ชนิด ได้แก่
                </h2>
                {vaccines.map((v, i) => (
                  <DesktopVaccine key={i} v={v} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Middle Section - Doctor Banner */}
      <section className="mx-2 md:mx-20 pb-10 md:my-10">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* ===== Mobile Layout ===== */}
          <div className="block md:hidden">
            <div className="relative w-full h-[650px] md:h-[760px] overflow-hidden rounded-2xl shadow-lg">
              {/* Background */}
              <Image
                src="/images/Banner3.png"
                alt="Banner background"
                fill
                priority
                className="object-cover"
              />

              {/* Text above the doctor's head */}
              <div className="absolute top-17 left-6 right-6 z-10 text-center">
                <p className="text-[38px] leading-tight font-bold-extended text-[#2B3432]">
                  งูสวัดอย่าคิดว่าเรื่องเล็ก!
                </p>
                <p className="mt-2 text-[38px] leading-9 font-normal-extended text-[#2B3432]">
                  ปรึกษาแพทย์เพื่อลดความเสี่ยงตั้งแต่วันนี้
                </p>
              </div>

              {/* Doctor at the bottom center */}
              <div className="absolute -bottom-1 left-0 right-0 z-20 flex justify-center">
                <Image
                  src="/images/Doctor.png"
                  alt="Doctor"
                  width={280}
                  height={280}
                  className="drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Footnote (mobile) */}
            <div className="mt-3 text-[20px] font-normal-extended text-gray-700 text-left">
              <p>* รูปภาพแพทย์ถูกสร้างขึ้นด้วยความช่วยเหลือจาก</p>
              <p>Artificial Intelligence</p>
            </div>
          </div>

          {/* ===== Desktop Layout ===== */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="relative h-[380px] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/Banner3.png"
                  alt="Banner background"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center px-8">
                  <div className="w-full text-center pl-[350px] leading-19">
                    <p className="text-[64px] font-bold-extended text-[#2B3432]">
                      งูสวัดอย่าคิดว่าเรื่องเล็ก!
                    </p>
                    <p className="text-[53px] font-normal-extended text-[#2B3432]">
                      ปรึกษาแพทย์เพื่อลดความเสี่ยงตั้งแต่วันนี้
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute left-15 -bottom-28 -translate-y-24 md:-translate-y-28 z-10 pointer-events-none select-none">
                <Image
                  src="/images/Doctor.png"
                  alt="Doctor"
                  width={320}
                  height={320}
                  className="drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
            <div className="mt-2 absolute left-50 text-[16px] font-normal-extended text-black">
              <p>* รูปภาพแพทย์ถูกสร้างขึ้นด้วยความช่วยเหลือจาก</p>
              <p>Artificial Intelligence</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default VaccinePage;
