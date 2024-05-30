"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'


const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="https://beije.co/" className='flex gap-2 flex-center head_text'>
        beije.
      </Link>


      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-2 md:gap-10'>
            <Link href="/create-prompt" className="black_btn">
              Pa
            </Link>
            <button type='button' onClick={signOut} className="outline_btn">
              Sign Out
            </button>
          </div>  
        ):(<div></div>)}

      </div>

    </nav>
  )
}

export default Nav
