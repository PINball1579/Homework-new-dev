'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { href: "", text: "โรคงูสวัดคืออะไร" },
    { href: "", text: "อาการ" },
    { href: "", text: "ใครบ้างที่มีความเสี่ยง" },
    { href: "", text: "ภาวะแทรกซ้อน" },
    { href: "", text: "โรคร่วมและความเสี่ยงต่อการเป็นงูสวัด" }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm h-20 font-db-helvethaica">
      <div className="w-full h-full">
        <div className="flex flex-row items-center justify-between mx-auto w-full h-full p-4 mobile-lg:px-8 md:px-16 lg:px-12 laptop:px-[200px] lg:min-w-[1112px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/icons/GSK.png"
              alt="GSK"
              width={134}
              height={40}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button className="px-3 py-2 bg-[#DF3E01] rounded-3xl flex items-center justify-center cursor-pointer" style={{ boxShadow: '0 4px 8px rgba(223, 62, 1, 0.3)' }}>
              <Image
              src="/icons/HomeIcon.svg"
              alt="Home Icon"
              width={18}
              height={18}
            />
            </button>

            {menuItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href} 
                className="text-black text-[26px] font-medium-extended hover:text-[#DF3E01]"
              >
                {item.text}
              </Link>
            ))}
          </nav>

          {/* Mobile Burger Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className="px-4 py-4 space-y-4">
            <div className="flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🏠</span>
              </div>
            </div>
            
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block text-black hover:text-orange-500 text-lg font-medium py-2 text-center border-b border-gray-100 last:border-b-0 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header