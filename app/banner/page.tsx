import React from 'react'
import Image from 'next/image'

const Banner = () => {

 return (
  <section className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-black bg-opacity-50">
              <Image
                src="/images/Banner.png"
                alt="GSK"
                className='w-full h-full object-cover'
                width={1440}
                height={500}
              />
            </div>
          </div>
  
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-end">
            {/* Fixed box with exact dimensions from image: 344px x 100px */}
            <div className="bg-gradient-to-b from-[#DF3E01]/50 from-10% to-black/50 to-30% rounded-l-lg rounded-br-[120px] p-10 w-[562px] h-[432px]">
              <div className="text-white text-5xl font-normal-extended">
                โรคงูสวัดอาจทำให้รู้สึกเจ็บปวด
              </div>
              <span className='text-white text-5xl font-bold-extended'>เหมือนมีไฟช็อตสั่นสะเทือน</span>
              <span className='text-white text-5xl font-bold-extended mb-4 block'>ไปทั่วร่างกาย<sup className='text-[#DF3E01]'>1</sup></span>
              <p className="w-full text-white font-normal-extended text-3xl leading-none">
                คุณอาจเคยได้ยินมาว่าโรคงูสวัดทำให้เกิดความเจ็บปวดร้ายแรงเพียงใด เรียนรู้เพิ่มเติมเกี่ยวกับ ลักษณะอาการ ภาวะแทรกซ้อน รวมถึงทางเลือกในการรักษาและการป้องกัน
              </p>
            </div>
          </div>
        </section>
 )
}

export default Banner