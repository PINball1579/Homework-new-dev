import React from 'react'
import Banner from './banner/banner'
import About from './about/about'
import RiskSection from './riskSection/riskSection'
import VaccineSection from './vaccineSection/vaccineSection'
import Footer from './footer/footer'
import Image from 'next/image'

const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-white font-db-helvethaica">
      <Banner />
      <About />
      <RiskSection />
      <VaccineSection />
      <Footer />

      <Image
        src="/images/floatImage.png"
        alt="float-mobile"
        className="fixed bottom-20 right-2 z-50 cursor-pointer block md:hidden"
        width={220}
        height={220}
        sizes="100vw"
      />

      <Image
        src="/images/floatImage.png"
        alt="float-desktop"
        className="fixed bottom-80 right-4 z-50 cursor-pointer hidden md:block"
        width={220}
        height={220}
      />


    </div>
  )
}

export default HomePage
