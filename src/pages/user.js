import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import {useRef, useState} from 'react'
import Head from 'next/head'
import RegistrationForm from './createUserPage'


const fetcher = async (url) => {
    const res = await axios.post(url[0], {
        firstName: url[1],
        lastName: url[2],
        email: url[3],
        password: url[4]
    })
    console.log(res.status)
    return res.data
}


export default function User() {

    const firstName = useRef(null)
    const lastName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const [message, setMessage] = useState()
    async function clicker() {
        let body = {
            firstName: firstName.current?.value,
            lastName: lastName.current?.value,
            email: email.current?.value,
            password: password.current?.value
        }
        console.log(email)
        const resp = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ ...body })
        })
        const data = await resp.json()
        setMessage(data.message)
    }

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
                  <a class="topbar__button" href="#">
                    Log in
                  </a>
                  <a class="topbar__button" href="#">
                    Sign up
                  </a>
                </div>
              </div>
              <RegistrationForm/>
              {<h2>{message}</h2>}
            </>
          );
        }
        
        
        
        
        
        
    
