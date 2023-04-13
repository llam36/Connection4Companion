import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import RegistrationForm from './createTrainingSession'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    return (
        <div>
            <Head>
                <title>Add a Training Session</title>
            </Head>
            <center>
                <h1>Add a Training Session</h1>
                <RegistrationForm />
                <div>
                    <h2> Back to Home</h2>
                    <a href="./" class="card__button"> Back to Home </a>

                </div>
            </center>

        </div>
    )

}