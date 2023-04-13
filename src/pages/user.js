import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import {useRef, useState} from 'react'
import Head from 'next/head'
import RegistrationForm from './createUserPage'


export default function User() {

        return (
            <>
              <Head>
                <title>Animal Training Portal</title>
              </Head>
              <div class="topbar">
                <div class="topbar__logo">
                  <Link href="/" class="open-links">
                    Animal Training Portal
                  </Link>
                </div>
                <div class="topbar__buttons">
                  <Link class="topbar__button" href = "./signUpPage">
                    Log in
                  </Link>
                </div>
              </div>
              <RegistrationForm/>
            </>
          );
        }
        
        
        
        
        
        
    
