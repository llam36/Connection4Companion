import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import RegistrationForm from './loginUserForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    return (
        <div>
        <Head>
      <title>Login</title>
    </Head>
    <div class="topbar">
      <div class="topbar__logo">Animal Training Portal</div>
      <div class="topbar__buttons">
        <a class="topbar__button" href="./loginPage">Log in</a>
        <a class="topbar__button" href="./signUpPage">Sign up</a>
      </div>
    </div>
        <center>
          <RegistrationForm />
          <div>
            <h5> Don't have an account? <a href="./signUpPage" > Sign Up </a></h5>
          </div>
          </center>
          
        </div>
      )

}