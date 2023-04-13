import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import useSWR from 'swr'
import {useRef, useState} from 'react'


const fetcher = async (url) => {
    const res = await axios.get(url)
    return res.data
}

export default function viewUser() {
    const [page, setPage] = useState(1)
    const clicker1 = () => {
        if (page < data.length - 1) {
            setPage(page + 1)
        }
        
    }
    const clicker2 = () => {
        if (page > 1) {
            setPage(page - 1)
        }
        
    }
    const { data, error, isLoading, isValidating } = useSWR(`/api/admin/animals?page=${page}`, fetcher)
    if (isLoading) return <div>Loading</div>
    if (!data) return (
        <>
             <div class="topbar">
                <div class="topbar__logo">
                  <Link href="/" class="open-links">
                    Animal Training Portal
                  </Link>
                </div>
              </div>
              <h3>Invalid page number.</h3>
        </>
    )

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
              </div>
              <center>
                <h5>Page: {page}</h5>
              <div>{data.map(animal => 
              <div class = "user-card">
                <span class = "card-title">{animal.name}</span><br></br>
                DOB: {animal.dateOfBirth} <br></br>
                Hours Trained: {animal.hoursTrained}<br></br>
                Owner: {animal.owner.firstName + " " + animal.owner.lastName} <br></br>
                Owner Email: {animal.owner.email} <br></br>
            </div>)}</div>
              <div class="pagination">
                <button class="prev" onClick={clicker2}>Prev Page</button>
                <button class="next" onClick = {clicker1}>Next Page</button>
                </div>
              </center>
        </>

    )
}