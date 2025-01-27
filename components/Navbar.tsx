'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './ui/button'
import { HiUser } from "react-icons/hi";
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex justify-between items-center  max-w-7xl'>
        <div className='text-white text-lg font-bold'>Brand</div>
        <div className='hidden md:flex space-x-4 items-center'>
          <Link href='/' className='text-white'>Home</Link>
          <div className='relative'>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className='text-white focus:outline-none'
            >
              Categories
            </button>
            {isDropdownOpen && (
              <div className='absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
                <Link href='/categories/river' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>River</Link>
                <Link href='/categories/lake' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Lake</Link>
              </div>
            )}
          </div>
          <Link href='/contact' className='text-white'>Contact</Link>
          <Link href='/'>
            <ShoppingCart size={25} color='white' />
          </Link>
          <Link href='/profile' className='block px-4 py-2 text-w'>

            <HiUser size={25} color='white' />

          </Link>
        </div>
        <div className="md:hidden flex justify-end flex-1 mx-4">
          <Link href='/'>
            <ShoppingCart size={25} color='white' />
          </Link>
        </div>
        <div className='md:hidden'>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className='bg-transparent text-white'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent className='bg-slate-50  border-none' side="right">
              <SheetTitle>
                Menu
              </SheetTitle>

              <div className='mt-4 '>
                <Link href='/' className='block px-4 py-2 text-black hover:bg-gray-300' onClick={() => setIsOpen(false)}>Home</Link>
                <div className='relative'>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className='block w-full text-left px-4 py-2 text-black focus:outline-none  hover:bg-gray-300'
                  >
                    Products
                  </button>
                  {isDropdownOpen && (
                    <div className='mt-2 w-full bg-white rounded-md shadow-lg'>
                      <Link href='/products/bear' className='block px-4 py-2 text-gray-800 hover:bg-gray-300' onClick={() => setIsOpen(false)}>Bear</Link>
                      <Link href='/products/dog' className='block px-4 py-2 text-gray-800 hover:bg-gray-300' onClick={() => setIsOpen(false)}>Dog</Link>
                    </div>
                  )}
                </div>
                <Link href='/contact' className='block px-4 py-2 text-black hover:bg-gray-300' onClick={() => setIsOpen(false)}>Contact</Link>
                <Link href='/profile' className='block px-4 py-2 text-center'>

                  <HiUser size={25} />
                </Link>
              </div>
            </SheetContent>

          </Sheet>

        </div>
      </div>

    </nav >
  )
}

export default Navbar