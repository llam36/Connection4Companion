import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import RegistrationForm from './createUserPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    return (
        <div>
          <Head>
            <title>Sign Up</title>
          </Head>
          <center>
          <div class="topbar">
                <div class="topbar__logo">
                  <Link href="/" class="open-links">
                    Animal Training Portal
                  </Link>
                </div>
                <div class="topbar__buttons">
              <a class="topbar__button" href="./loginPage">Log in</a>
              </div>
              </div>
          <RegistrationForm />
          <div>
            <h5> Already have an account? <a href="./login"> Login </a></h5>

          </div>
          </center>
          
        </div>
      )

}