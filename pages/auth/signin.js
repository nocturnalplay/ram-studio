import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const loginuser = [
  {
    email: "ram@gmail.com",
    password: "ram123",
  },
  {
    email: "raghu@gmail.com",
    password: "raghu123",
  },
];

export default function Signin() {
  const router = useRouter();
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const Handler = (e) => {
    setdata((a) => ({ ...a, [e.target.name]: e.target.value }));
  };
  const submit = () => {
    if (data.email && data.password) {
      let user = false;
      for (let i = 0; i < loginuser.length; i++) {
        if (
          loginuser[i].email === data.email &&
          loginuser[i].password === data.password
        ) {
          user = true;
          break;
        }
      }
      if (user) {
        window.localStorage.setItem("token", "active");
        router.push("/");
      } else {
        alert("username or password incorrect");
      }
    }
  };
  return (
    <>
      <Head>
        <title>capture-signin</title>
      </Head>
      <div className="signin">
        <div className="page">
          <div className="container">
            <div className="left">
              <div className="login">Login</div>
              <img src="/logo.png" />
              {/* <div className="eula">By logging in you agree to the ridiculously long terms that you didn't bother to read</div> */}
            </div>
            <div className="right">
              <div className="form">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={data.email}
                  onChange={Handler}
                  name="email"
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={data.password}
                  onChange={Handler}
                  name="password"
                />
                <input
                  className="submit"
                  type="submit"
                  id="submit"
                  value="Login"
                  onClick={submit}
                />
                <div className="switch">
                  <p>
                    create new account{" "}
                    <Link href="/auth/signup">
                      <b>click here</b>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
