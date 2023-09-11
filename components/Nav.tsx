"use client";

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {signIn,signOut,useSession,getProviders } from 'next-auth/react';


export default function Nav() {
    const isUserLoggedIn = true;
    const [providers, setProviders] = useState(null);
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        (async () => {
          const res = await getProviders();
          { /*setProviders(res) */}
        })();
      }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image src='/assets/images/logo.svg' 
            alt='logo' 
            width={30} 
            height={30} 
            className='object-contain' />
            <p className='logo_text'>Promptopia</p>
        </Link>

        { /* desktop nav */}
        <div className='sm:flex hidden'>
            {isUserLoggedIn ? 
            <div className='flex gap-3 md:gap-5'>
                <Link href='/create-prompt'
                className='black_btn'>
                    Create Post
                </Link>
                <button onClick={() => signOut} className='outline_btn'>
                    Sign Out
                </button>
                <Link href='/profile'>
                    <Image 
                    src='/assets/images/logo.svg'
                    alt='profile'
                    className='rounded-full'
                    width={37}
                    height={37}
                    />
                </Link>
            </div> : <>
            {providers && 
            Object.values(providers).map((provider: any) => (
               <button
               type='button'
               onClick={() => signIn(provider.id)}
               className='black_btn'
               key={provider.name}>
                Sign in
               </button>
            ))}
            </>}
        </div>

        {/* mobile nav */}
        <div className='sm:hidden flex relative'>
            {isUserLoggedIn ? 
            <div className='flex'>
                 <Image 
                    src='/assets/images/logo.svg'
                    alt='profile'
                    className='rounded-full'
                    width={37}
                    height={37}
                    onClick={() => setToggle((p) => !p)}
                    />
                    {toggle && (
                        <div className='dropdown'>
                            <Link
                            href='/profile'
                            className='dropdown_link'
                            onClick={() => setToggle(false)}>
                                My Profile
                            </Link>
                            <Link
                            href='/create-prompt'
                            className='dropdown_link'
                            onClick={() => setToggle(false)}>
                                Create Prompt
                            </Link>
                            <button 
                            type='button'
                            className='mt-5 w-full black_btn'
                            onClick={() => {setToggle(false);
                            signOut()}}>
                                Sign Out
                            </button>
                        </div>
                    )}
            </div> :  <>
            {providers && 
            Object.values(providers).map((provider: any) => (
               <button
               type='button'
               onClick={() => signIn(provider.id)}
               className='black_btn'
               key={provider.name}>
                Sign in
               </button>
            ))}
            </>}

        </div>
    </nav>
  )
}
