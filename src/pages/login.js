import {useRef, useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function logIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);

        const body = {
          email: email,
          password: password,
        };
    
    
        try{
            const res = axios.post("/api/user/verify", body);
            console.log(res);
            setSignedIn(true);
        } catch (e) {
            console.log(e);
        }

    };

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
        <Link href="/user" class="topbar__button">Sign up</Link>
      </div>
    </div>
        <div className="login">
          <center>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      </center>
    </div>
    </>
  );
}