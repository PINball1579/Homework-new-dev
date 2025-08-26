import React from 'react'
import Image from 'next/image'
import Banner from './banner/page'
import About from './about/page'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-db-helvethaica">

      {/* Hero Section */}
      <Banner />

      {/* Main Content */}
      <About />
    </div>
  )
}

export default HomePage