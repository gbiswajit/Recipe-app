import React from 'react'
import Image from 'next/image'
import LogoImg from '@/assets/logo.png'
import Link from 'next/link'
import classes from '@/components/main-header/main-header.module.css'
import NavLink from './nav-link'

function MainHeader() {

  return (
    <header className={classes.header}>
        <Link href="/" className={classes.logo}>
            <Image src={LogoImg} alt='Error Loading Image' priority/>
            Foodaholic
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li><NavLink href='/meals'>Meals</NavLink></li>
                <li><NavLink href="/community">Community</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader