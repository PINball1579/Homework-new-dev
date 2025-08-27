import React from 'react'
import Banner from './banner/page'
import About from './about/page'
import RiskSection from './riskSection/page'
import VaccineSection from './vaccineSection/page'
import Footer from './footer/page'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-db-helvethaica">
      <Banner />
      <About />
      <RiskSection />
      <VaccineSection />
      <Footer />
      
    </div>
  )
}

export default HomePage