import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.png'
import logo1 from '../../public/logo2.jpg'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from 'next/link'

function Navbar() {
  return (
    <div className="fixed w-screen z-10 bg-[#C9A857] dark:bg-slate-700 border flex justify-between items-center py-2 px-16">
    
    <div className='flex gap-2 items-center'>
    <Image src={logo} alt='furnisphere' width={1000} height={1000} className='rounded-full w-14 h-9'/> 
    <h1 className='text-4xl font-extrabold text-white'>FurniSphere.</h1> 
    </div>



    <DropdownMenu>
    <DropdownMenuTrigger>
     <Image src={logo1} alt='logo' width={1000} height={1000} className='rounded-full w-14 h-14'/>
    </DropdownMenuTrigger>
    <DropdownMenuContent className='bg-[#E9D8A7]'>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
       <Link href={'/profile'}>Profile</Link>
      </DropdownMenuItem>
      <DropdownMenuItem className='text-red-600'>
        <Link href={'/'}>LogOut</Link>
      </DropdownMenuItem>

    </DropdownMenuContent>
   </DropdownMenu>
    
      
      
        
        
    </div>
  )
}

export default Navbar