import React from 'react'
import Header from './header/page'
import Image from 'next/image'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              โรคงูสวัดอาจทำให้รู้สึกเจ็บปวด
              <span className="text-orange-400">เหมือนมีไฟยืดคลื่นสะเก็บ</span>
              <br />
              ไปที่อวัยวะเจนาย
            </h1>
            <p className="text-lg mb-6 text-gray-200">
              คุณอาจเคยได้ยินนกว่า โรคงูสวัดอาจทำให้เกิดความเจ็บปวดรัดรุนสาเหตุหนาเถีด เรียนรู้พื้นที่ที่เกี่ยวกับลักษณะของการ ทำอาหารของอำนำจ รวมดังซ้ำเดาสอกใบการรษากเสาะและการป้องกัน
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
                โรคงูสวัด
              </h2>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                หรืออีกชื่อ คือ HERPES ZOSTER
              </h3>
              <h4 className="text-xl font-semibold text-gray-700 mb-6">
                มีลากษณองาก เชื้อโปรี
              </h4>

              <div className="mb-6">
                <p className="font-semibold text-gray-800 mb-4">
                  โรคงูสวัดเป็นคืนที่เกิดจากการแมววควเจืข็บ
                  มีลากษณองากเชื้อโปรี Varicella Zoster
                </p>

                <p className="text-gray-700 leading-relaxed">
                  โปรีสวัดเป็นคืนอาการจักเสมือนปีน จับเป็นรวด Varicella Zoster นั้น
                  จะแฝงอยู่ในล็อกปลายนเทปแบเงืฆงเปรญะสาบ หลังจากนั้นไปแรงเอกปนไล
                  เมื่อระสับได้อาการเกิดเขึ้นปากทั้งนั้ง
                  อันพรรคำกิิบองอัลข่าวรีเกี่ยวพียวพื่งปึขงนึมเจังมาระบาร
                  รวมผึ้งส่วนบนซูบาญปนให้สึมแปลงปางก่วย
                  ปาเยียรคิบเจารชมีท้องแชียคขอปันน และสึวยองสารใยปบมึ่งกิราวาน์ศึกาปองกัน
                </p>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg shadow-2xl overflow-hidden">
                <div className="aspect-w-4 aspect-h-3">
                  <div className="w-full h-96 bg-gradient-to-br from-teal-300 to-teal-500 flex items-center justify-center relative">
                    {/* Placeholder for medical image */}
                    <div className="absolute inset-4 bg-white rounded-lg shadow-inner flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <div className="w-24 h-24 bg-red-200 rounded-full flex items-center justify-center">
                            <span className="text-red-500 text-xs">Medical Image</span>
                          </div>
                        </div>
                        <p className="text-gray-500 text-sm">Herpes Zoster Rash</p>
                      </div>
                    </div>
                    {/* Hands holding/examining area */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white bg-opacity-20 rounded-lg p-2">
                        <div className="flex justify-center space-x-2">
                          <div className="w-8 h-12 bg-orange-200 rounded-full"></div>
                          <div className="w-8 h-12 bg-orange-200 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage