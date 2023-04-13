import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Animal Training Portal</title>
    </Head>
    <div class="topbar">
      <div class="topbar__logo">Animal Training Portal</div>
      <div class="topbar__buttons">

        <a class="topbar__button" href="./loginPage">Log in</a>
        <a class="topbar__button" href="./signUpPage">Sign up</a>

      </div>
    </div>
    <div class="home">
      <div class="home__cards">
        <div class="card">
          <h2 class="card__title">Register a Trainer</h2>
          <p class="card__description">
            Add a new animal trainer to the database.
          </p>
          <Link href="/user" class="card__button">Learn More</Link>
        </div>
        <div class="card">
          <h2 class="card__title">Register an Animal</h2>
          <p class="card__description">
            Add a new animal to the database.
          </p>
          <a href="./registerAnimal" class="card__button">Learn More</a>
        </div>
        
        <div class="card">
          <h2 class="card__title">Add Training Session</h2>
          <p class="card__description">
            Add a log for a training session between a trainer and an animal.
          </p>
          <a href="./newTrainingSession" class="card__button">Learn More</a>
        </div>
        <div class="card">
          <h2 class="card__title">View All Users*</h2>
          <p class="card__description">
            Look through all users in training database. (Admin Only)
          </p>
          <Link href="/admin/users" class="card__button">Learn More</Link>
        </div>
        <div class="card">
          <h2 class="card__title">View All Animals*</h2>
          <p class="card__description">
          Look through all animals in training database. (Admin Only)
          </p>
          <Link href="/admin/animals" class="card__button">Learn More</Link>
        </div>
        <div class="card">
          <h2 class="card__title">View All Logs*</h2>
          <p class="card__description">
            Look through all training logs in training database. (Admin Only)
          </p>
          <Link href="/admin/training" class="card__button">Learn More</Link>
        </div>
      </div>
    </div>
    {/*<RegistrationForm />*/}
    </>
  )
}
