import Head from 'next/head'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Signin() {

    return (
        <>
            <Head>
                <title>capture-signin</title>
            </Head>
            <div className='signup'>
                <div className="page">
                    <div className="container">
                        <div className="left">
                            <div className="login">Signup</div>
                            <img src='/logo.png' />
                            {/* <div className="eula">By logging in you agree to the ridiculously long terms that you didn't bother to read</div> */}
                        </div>
                        <div className="right">
                            <div className="form">
                                <label htmlFor="username">Name</label>
                                <input type="text" id="username" />
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" />
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" />
                                <input className='submit' type="submit" id="submit" value="Create" />
                                <div className='switch'>
                                    <p>already have an account <Link href="/auth/signin"><b>click here</b></Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}