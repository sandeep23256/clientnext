'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import LogoutButton from './LogoutButton' // ✅ Importing logout button

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/user/about' },
    { name: 'SERVICE', href: '/user/service' },
    { name: 'TRAINING', href: '/user/training' },
    {
      name: 'WORKSHOP',
      dropdown: [
        { label: 'PRESTIGE COLLEGE', href: '/user/prestiageCollege' },
        { label: 'XIAOMI MI COMPANY', href: '/user/miCompany' },
        { label: 'BENTCHAIR COMPANY', href: '/user/bentChair' },
        { label: 'RJIT COLLEGE', href: '/user/rajitCollege' },
        { label: 'MPCT COLLEGE', href: '/user/mpctCollege' },
      ],
    },
    {
      name: 'PLACEMENT',
      dropdown: [
        { label: 'PLACEMENT DESK', href: '/user/placementDesk' },
        { label: 'PLACEMENT GALLERY', href: '/user/placementGallery' },
      ],
    },
    {
      name: 'EVENTS',
      dropdown: [
        { label: "STUDENTS' BIRTHDAY", href: '/user/studentBirthday' },
        { label: 'ANNIVERSARY CELEBRATION', href: '/user/aniversaryCelebration' },
        { label: 'TOURS', href: '/user/companyTours' },
      ],
    },
    { name: 'CONTACT', href: '/user/contact' },
    { name: 'INTERNSHIP', href: '/user/apply', button: true },
  ]

  return (
    <header className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/">
          <img
            src="https://pninfosys.com/assets/colorlogo-BagIKm6w.png"
            alt="Logo"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
          />
        </Link>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 text-sm font-semibold text-gray-800 items-center">
          {menuItems.map((item, idx) => (
            <div key={idx} className="relative group">
              {item.dropdown ? (
                <>
                  <button className="flex items-center space-x-1 hover:text-blue-600">
                    <span>{item.name}</span>
                    <span className="text-xs">▼</span>
                  </button>
                  <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-56 z-30">
                    {item.dropdown.map((subItem, i) => (
                      <li key={i}>
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-blue-100 text-gray-700"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : item.button ? (
                <Link
                  href={item.href}
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-all"
                >
                  {item.name}
                </Link>
              ) : (
                <Link href={item.href} className="hover:text-blue-600">
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          {/* ✅ Logout Button in desktop */}
          <LogoutButton />
        </nav>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden bg-white px-4 pb-4 shadow-md">
          <nav className="space-y-2 pt-2 text-sm font-medium text-gray-800">
            {menuItems.map((item, idx) => (
              <div key={idx}>
                {item.dropdown ? (
                  <details className="group">
                    <summary className="cursor-pointer py-2 flex justify-between items-center hover:text-blue-600">
                      <span>{item.name}</span>
                      <span className="text-xs">▼</span>
                    </summary>
                    <ul className="pl-4 mt-1 space-y-1">
                      {item.dropdown.map((subItem, i) => (
                        <li key={i}>
                          <Link
                            href={subItem.href}
                            className="block py-1 text-gray-700 hover:text-blue-600"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : item.button ? (
                  <Link
                    href={item.href}
                    className="block text-center border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-all"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* ✅ Logout Button in mobile */}
            <div className="pt-2">
              <LogoutButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
