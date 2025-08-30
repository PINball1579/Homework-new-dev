import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/Banner.png"
          alt="GSK"
          className="w-full h-full object-cover"
          fill
          priority
        />

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative mx-4 md:mx-30 h-full flex justify-end items-center">
        <div className="
          w-full sm:w-[562px] 
          rounded-l-lg rounded-br-[120px] 
          bg-gradient-to-b from-[#DF3E01]/70 to-black/80 
          p-6 sm:p-10 
          h-[400px] sm:h-[432px]
        ">
          {/* Title */}
          <p className="text-white text-4xl md:text-5xl mb-4">
            <span className="font-normal-extended">
              โรคงูสวัดอาจทำให้รู้สึกเจ็บปวด{" "}
            </span>
            <span className="font-bold-extended">
              เหมือนมีไฟช็อตสั่นสะเทือนไปทั่วร่างกาย
              <sup className="text-[#DF3E01]">1</sup>
            </span>
          </p>

          {/* Body */}
          <p className="text-white font-normal-extended text-2xl leading-8">
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
