import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 rounded-lg text-white'>Coder's</span>
        Blog
      </Link>
      <form>
        <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill >
        <AiOutlineSearch />
      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline ' color='gray' pill > 
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='greenToBlue' outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
          <Navbar.Link as={'div'} active={path==="/"}>
            <Link to='/'>
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link as={'div'} active={path==="/about"}>
            <Link to='/about'>
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link as={'div'} active={path==="/projects"}>
            <Link to='/projects'>
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>

    </Navbar>
  )
}
