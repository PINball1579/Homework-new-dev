import React from 'react'
import Image from 'next/image'

const About = () => {

 return (
  <section className="py-16 mx-2 sm:mx-20">
   <div className="px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
     {/* Left Content */}

     <div className="leading-none">
      <p className="w-fit h-fit text-[110px] md:text-[140px] font-bold-extended text-[#DF3E01] leading-none mb-0">
       โรคงูสวัด
      </p>
      <div className="leading-none mt-2">
       <span className="text-[40px] font-medium-extended text-gray-800 mr-2">
        หรืออีกชื่อ คือ
       </span>
       <span className="text-[40px] font-bold-extended text-black mr-4">HERPES ZOSTER</span>
       <span className="text-[40px] font-medium-extended text-black mr-2">
        <span className="hidden md:inline"><br /></span>มีสาเหตุมาจาก
       </span>

       <span className="text-[40px] font-bold-extended text-black">เชื้อไวรัส</span>
      </div>


      <div className="mt-6">
       <p className="text-[26px] font-bold-extended text-black">
        โรคงูสวัดเป็นผื่นที่ก่อให้เกิดอาการเจ็บปวด
       </p>
       <p className='text-[26px] font-bold-extended text-black mb-6'>มีสาเหตุมาจากเชื้อไวรัส Varicella Zoster</p>

       <div className="text-[26px] font-normal text-black text-left">
        <p>ไวรัสชนิดเดียวกับอีสุกอีใส ซึ่งไวรัส Varicella Zoster นั้น</p>
        <p>จะแฝงอยู่ในตัวคุณตามแนวเส้นประสาท หลังจากเป็นโรคอีสุกอีใส</p>
        <p>จนกระทั่งมีการกำเริบขึ้นมาอีกครั้ง</p>
        <p>ซึ่งการกำเริบของเชื้อไวรัสเกี่ยวข้องกับปัจจัยเสี่ยงหลายประการ</p>
        <p>รวมถึงระบบภูมิคุ้มกันที่เปลี่ยนแปลงไปตามวัย<sup>1</sup></p>
        <p>มาเช็คกันว่าคุณมีความเสี่ยงหรือไม่ และรับข้อมูลเพิ่มเติมเกี่ยวกับวิธีการป้องกัน</p>
       </div>
      </div>
     </div>

     {/* Right Content - Image */}
     <Image
      src="/images/HerpesZoster1.png"
      alt="GSK"
      width={562}
      height={566}
      className='hidden md:inline'
     />
    </div>
   </div>
  </section>
 )
}

export default About