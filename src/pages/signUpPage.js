import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import RegistrationForm from './createUserPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    return (
        <div>
          <Head>
            <title>Sign Up Page</title>
          </Head>
          <center>
          <h1> Create your account: </h1>
          <RegistrationForm />
          <div>
            <h2> Already have an account? </h2>
            <a href="./login" class="card__button"> Login </a>
            <h2> Back to Home</h2>
            <a href="./" class="card__button"> Back to Home </a>

          </div>
          </center>
          
        </div>
      )

}