import React from 'react'
import Banner from './banner/page'
import About from './about/page'
import RiskSection from './riskSection/page'
import VaccineSection from './vaccineSection/page'
import Footer from './footer/page'
import Image from 'next/image'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-db-helvethaica">
      <Banner />
      <About />
      <RiskSection />
      <VaccineSection />
      <Footer />

      {/* Floating Image */}
      <Image src="/images/floatImage.png" alt="float" className='fixed bottom-4 right-4 z-50' width={290} height={250} />
    </div>
  )
}

export default HomePage
