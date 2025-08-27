import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <section className="relative h-[760px] sm:h-[500px] overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/Banner.png"
          alt="GSK"
          className="w-full h-full object-cover"
          width={1440}
          height={500}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto h-full flex items-end sm:items-center sm:justify-end">
        {/* Mobile: full width at bottom | Desktop: fixed box */}
        <div className="
          w-full sm:w-[562px] 
          rounded-none sm:rounded-l-lg sm:rounded-br-[120px] 
          bg-gradient-to-b from-[#DF3E01]/70 to-black/80 
          p-6 sm:p-10 
          h-auto sm:h-[432px]
        ">
          {/* Title */}
          <div className="text-white text-2xl sm:text-3xl md:text-5xl font-normal-extended leading-snug">
            โรคงูสวัดอาจทำให้รู้สึกเจ็บปวด
          </div>

          <span className="text-white text-2xl sm:text-3xl md:text-5xl font-bold-extended block mt-2">
            เหมือนมีไฟช็อตสั่นสะเทือน
          </span>
          <span className="text-white text-2xl sm:text-3xl md:text-5xl font-bold-extended block mb-4">
            ไปทั่วร่างกาย
            <sup className="text-[#DF3E01]">1</sup>
          </span>

          {/* Body */}
          <p className="text-white font-normal-extended text-base sm:text-xl md:text-2xl leading-relaxed">
            คุณอาจเคยได้ยินมาว่าโรคงูสวัดทำให้เกิดความเจ็บปวดร้ายแรงเพียงใด 
            เรียนรู้เพิ่มเติมเกี่ยวกับลักษณะอาการ ภาวะแทรกซ้อน 
            รวมถึงทางเลือกในการรักษาและการป้องกัน
          </p>
        </div>
      </div>
    </section>
  )
}

export default Banner
