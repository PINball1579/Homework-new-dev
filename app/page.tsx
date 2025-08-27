import React from 'react'
import Banner from './banner/page'
import About from './about/page'
import RiskSection from './riskSection/page'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-db-helvethaica">

      {/* Hero Section */}
      <Banner />

      {/* Main Content */}
      <About />

      <RiskSection />
      
    </div>
  )
}

export default HomePage