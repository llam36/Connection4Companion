import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import RegistrationForm from './loginUserForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    return (
        <div>
        <center>
          <h1> Log in to your account: </h1>
          <RegistrationForm />
          <div>
            <h2> Don't have an account? </h2>
            <a href="./signUpPage" class="card__button"> Login </a>
            <h2> Back to Home</h2>
            <a href="./" class="card__button"> Back to Home </a>
          </div>
          </center>
          
        </div>
      )

}