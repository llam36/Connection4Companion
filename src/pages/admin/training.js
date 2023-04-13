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
    const { data, error, isLoading, isValidating } = useSWR(`/api/admin/training?page=${page}`, fetcher)
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
              <div>{data.map(log => 
              <div class = "user-card">
                <span class = "card-title">{log.description}</span><br></br>
                Date: {log.date.substring(0,10)} <br></br>
                Hours: {log.hours}<br></br>
                Animal: {log.animal.name} (DOB: {log.animal.dateOfBirth.substring(0,10)})<br></br>
                {log.animal.name} has totally trained for {log.animal.hoursTrained} hours<br></br>
                Owned by {log.user.firstName +' '+log.user.lastName}<br></br>
                Contact: {log.user.email}
            </div>)}</div>
              <div class="pagination">
                <button class="prev" onClick={clicker2}>Prev Page</button>
                <button class="next" onClick = {clicker1}>Next Page</button>
                </div>
              </center>
        </>

    )
}