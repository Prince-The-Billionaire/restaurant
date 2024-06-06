import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from './ui/navigation-menu'
import {navitems} from '@/constants/nav_const'
import { Separator } from '@/components/ui/separator'
import { GiHamburgerMenu } from "react-icons/gi";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { buttonVariants } from './ui/button'
  
const Navbar = () => {
  return (
    <section className='sticky top-0 z-50'>
        <nav className=' p-2  bg-transparent backdrop-blur-sm flex flex-row justify-between'>
            <Image 
                src={'/Regals.png'}
                alt='logo'
                width={150}
                height={20}
            />
            <div className='flex max-md:hidden pt-2 flex-row gap-3 '>
                {
                    navitems.map((link,index) => (
                        <Link key={index} className='hover:text-slate-400' href={`/${link}`}>{link}</Link>
                    ))
                }      
            </div>
            <div className='flex flex-row gap-3 max-md:hidden'>
                <Link className={buttonVariants({ variant: "default" })} href={'/'}>Book table</Link>
            </div>
                <div className="max-sm:block hidden" >
                    <DropdownMenu >
                        <DropdownMenuTrigger><GiHamburgerMenu className='mt-1.5' size={30}/></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Regals</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {navitems.map((link,index) => (
                                <DropdownMenuItem key={index}>
                                    <Link  href={'/'}>
                                        {link}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                

        </nav>
    </section>
  )
}

export default Navbar