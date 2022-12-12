import Head from 'next/head'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router"

export default function Signin() {
    const router = useRouter()

    const submit = ()=>{
        router.push("/")
    }   
    return (
        <>
            <Head>
                <title>capture-signin</title>
            </Head>
            <div className='signin'>
                <div className="page">
                    <div className="container">
                        <div className="left">
                            <div className="login">Login</div>
                            <img src='/logo.png' />
                            {/* <div className="eula">By logging in you agree to the ridiculously long terms that you didn't bother to read</div> */}
                        </div>
                        <div className="right">
                            <div className="form">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" />
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" />
                                <input className='submit' type="submit" id="submit" value="Login" onClick={submit} />
                                <div className='switch'>
                                    <p>create new account <Link href="/auth/signup"><b>click here</b></Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}