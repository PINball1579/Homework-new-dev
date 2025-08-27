import React from 'react'
import Image from 'next/image'

const VaccinePage = () => {
 return (
  <div className="w-full min-h-screen bg-white text-gray-800">
   {/* Top Section */}
   <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="flex justify-between items-start">
      {/* Left Image */}
      <Image
       src="/images/Couple.png"
       alt="Couple"
       width={500}
       height={400}
       className="rounded-br-[120px]"
      />

      {/* Right Content */}
      <div>
       <h2 className="text-[#DF3E01] font-medium-extended text-[48px]">
        ปัจจุบัน วัคซีนป้องกันงูสวัดมีอยู่ 2 ชนิด ได้แก่
       </h2>

       {/* Vaccine 1 */}
       <div className="mb-8">
        <h3 className="text-[48px] font-medium-extended text-black">
         ชนิดที่ 1 Recombinant Zoster Vaccine
        </h3>
        <div className="flex flex-row items-start gap-4 mt-1">
         <p className="text-[32px] text-black font-medium-extended leading-8">
          ใครควรฉีด <br />
         </p>
         <p className="w-3 h-3 bg-[#DF3E01] rounded-full mt-3"></p>
         <p className="text-[32px] text-black leading-8">
          ผู้ที่มีอายุ 50 ปีขึ้นไป หรือผู้ที่มีอายุ 18 ปีขึ้นไป <br />
          ที่มีภาวะภูมิคุ้มกันบกพร่องและมีความเสี่ยงต่อการเป็นงูสวัด
         </p>
        </div>
        <div className="flex flex-row items-start gap-6 mt-8">
         <p className="text-[32px] text-black font-medium-extended leading-8">
          จำนวนเข็ม <br />
         </p>
         <p className="w-3 h-3 bg-[#DF3E01] rounded-full mt-3"></p>
         <p className="text-[32px] text-black leading-8">
          2 เข็ม ห่างกัน 2-6 เดือน
         </p>
        </div>
       </div>

       {/* Vaccine 2 */}
       <div className="mb-8">
        <h3 className="text-[48px] font-medium-extended text-black">
         ชนิดที่ 2  Zoster Vaccine Live
        </h3>
        <div className="flex flex-row items-start gap-4 mt-1">
         <p className="text-[32px] text-black font-medium-extended leading-8">
          ใครควรฉีด <br />
         </p>
         <p className="w-3 h-3 bg-[#DF3E01] rounded-full mt-3"></p>
         <p className="text-[32px] text-black leading-8">
          ผู้ที่มีอายุ 60 ปีขึ้นไป
         </p>
        </div>
        <div className="flex flex-row items-start gap-6 mt-3">
         <p className="text-[32px] text-black font-medium-extended leading-8">
          จำนวนเข็ม <br />
         </p>
         <p className="w-3 h-3 bg-[#DF3E01] rounded-full mt-3"></p>
         <p className="text-[32px] text-black leading-8">
          1 เข็ม
         </p>
        </div>
       </div>
       
      </div>
     </div>
    </div>
   </section>

   {/* Middle Section - Doctor Banner */}
   <section className="py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Wrapper keeps the doctor free to overflow above the banner */}
    <div className="relative">
      {/* Banner box */}
      <div className="relative h-[380px] overflow-hidden rounded-2xl shadow-lg">
        <Image
          src="/images/Banner3.png"
          alt="Banner background"
          fill
          priority
          className="object-cover"
        />

        {/* Text overlay (reserved space on the left for the doctor) */}
        <div className="absolute inset-0 flex items-center px-8">
          <div className="w-full text-center pl-[350px] leading-19">
            <p className="text-[64px] font-bold-extended tracking-tight text-[#2B3432]">
              งูสวัดอย่าคิดว่าเรื่องเล็ก!
            </p>
            <p className="text-[53px] font-normal-extended text-[#2B3432]">
              ปรึกษาแพทย์เพื่อลดความเสี่ยงตั้งแต่วันนี้
            </p>
          </div>
        </div>
      </div>

      {/* Doctor image - sits ABOVE the banner */}
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

    {/* Footnote under banner */}
    <div className="mt-2 absolute left-50 text-[16px] font-normal-extended text-black">
      <p>* รูปภาพแพทย์ถูกสร้างขึ้นด้วยความช่วยเหลือจาก</p>
      <p>Artificial Intelligence</p>
    </div>
  </div>
</section>

  </div>
 )
}

export default VaccinePage
