import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    let token = window.localStorage.getItem("token");
    if (token) {
      setloading(false);
    } else {
      router.push("/auth/signin");
    }
  }, []);
  const [page, setpage] = useState(0);
  const [book, setbook] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    event: "",
    sheet: "20",
    package: [],
  });
  const [pack, setpack] = useState({
    tp: false,
    tv: false,
    cp: false,
    cv: false,
    dr: false,
    led: false,
    ts: false,
    cap: false,
    tea: false,
    frame: false,
  });
  const pklist = [
    { text: "Traditional Photography", value: 12000 },
    { text: "Traditional Videography", value: 20000 },
    { text: "Candid Photography", value: 18000 },
    { text: "Candid Videography", value: 25000 },
    { text: "Drone", value: 10000 },
    { text: "LED Screen", value: 30000 },
    { text: "T-Shirt", value: 500 },
    { text: "Cap", value: 300 },
    { text: "Tea Cup", value: 150 },
    { text: "Photo Frame 12x18", value: 800 },
  ];
  const handlerBook = (e) => {
    if (e.target.name === "number") {
      if (e.target.value.length > 10) {
        return;
      }
    }
    setbook((a) => ({ ...a, [e.target.name]: e.target.value }));
  };
  const handlercheck = (e) => {
    setpack((a) => ({ ...a, [e.target.name]: !pack[e.target.name] }));
  };
  const readyInvoice = (e) => {
    let pkg = Object.keys(pack);
    let totalpkg = [];
    for (let i = 0; i < pkg.length; i++) {
      if (pack[pkg[i]]) {
        totalpkg.push(pklist[i]);
      }
    }
    setbook((a) => ({ ...a, package: totalpkg }));
    setpage(1);
  };
  const InvoceTotal = () => {
    let val = book.package.map((a) => a.value);
    if (val.length) {
      let bk = val.reduce((t, n) => t + n);
      return parseInt(book.sheet) * 150 + bk;
    }
    return parseInt(book.sheet) * 150;
  };
  console.log(pack);
  if (loading) return <>loading...</>;
  return (
    <>
      <Head>
        <title>capture</title>
      </Head>
      {/* booking entry form */}
      {page == 0 && (
        <div className="home">
          <div className="store-details">
            <div className="store-title store-inp">
              <h1>book your slot!</h1>
            </div>
            <div className="store-inp store-st">
              <div>
                <label>name</label>
                <input
                  type="text"
                  onChange={handlerBook}
                  name="name"
                  value={book.name}
                  required
                />
              </div>
              <div>
                <label>email</label>
                <input
                  type="email"
                  onChange={handlerBook}
                  name="email"
                  value={book.email}
                  required
                />
              </div>
              <div>
                <label>Phone number</label>
                <input
                  type="number"
                  onChange={handlerBook}
                  name="number"
                  value={book.number}
                  required
                />
              </div>
            </div>

            <div className="store-inp store-st">
              <div>
                <label>date</label>
                <input
                  type="date"
                  onChange={handlerBook}
                  name="date"
                  value={book.date}
                  required
                />
              </div>
              <div>
                <label>event type</label>
                <input
                  type="text"
                  onChange={handlerBook}
                  name="event"
                  value={book.event}
                  required
                />
              </div>
            </div>

            <div className="package store-inp">
              <div className="pk">
                <span>choose your package</span>
                <div className="package-type">
                  <input
                    type="checkbox"
                    id="tp"
                    name="tp"
                    value="12000"
                    checked={pack.tp}
                    onChange={handlercheck}
                  />
                  <label htmlFor="tp">traditional photography - 12K</label>
                </div>
                <div className="package-type">
                  <input
                    type="checkbox"
                    id="tv"
                    name="tv"
                    value="20000"
                    checked={pack.tv}
                    onChange={handlercheck}
                  />
                  <label htmlFor="tv">traditional videography - 20K</label>
                </div>
                <div className="package-type">
                  <input
                    type="checkbox"
                    id="cp"
                    name="cp"
                    value="18000"
                    checked={pack.cp}
                    onChange={handlercheck}
                  />
                  <label htmlFor="cp">candid photography - 18K</label>
                </div>
                <div className="package-type">
                  <input
                    type="checkbox"
                    id="cv"
                    name="cv"
                    value="25000"
                    checked={pack.cv}
                    onChange={handlercheck}
                  />
                  <label htmlFor="cv">candid videography - 25K</label>
                </div>
                <div className="package-type">
                  <input
                    type="checkbox"
                    id="dr"
                    name="dr"
                    value="10000"
                    checked={pack.dr}
                    onChange={handlercheck}
                  />
                  <label htmlFor="dr">drone - 10K{"(1hr)"}</label>
                </div>
                <div className="package-type">
                  <input
                    type="checkbox"
                    id="led"
                    name="led"
                    value="30000"
                    checked={pack.led}
                    onChange={handlercheck}
                  />
                  <label htmlFor="led">LED Screen - 30K{"(4hr)"}</label>
                </div>
              </div>
            </div>

            <div className="store-inp store-st">
              <div>
                <label>album sheets (20-60)</label>
                <input
                  type="number"
                  onChange={handlerBook}
                  name="sheet"
                  value={book.sheet}
                  required
                />
              </div>
            </div>

            <div className="gift store-inp">
              <div className="pk">
                <span>Additional gifts</span>
                <div className="gift-type">
                  <input
                    type="checkbox"
                    id="ts"
                    name="ts"
                    value="500"
                    checked={pack.ts}
                    onChange={handlercheck}
                  />
                  <label htmlFor="ts">T-shirt - 500</label>
                </div>
                <div className="gift-type">
                  <input
                    type="checkbox"
                    id="cap"
                    name="cap"
                    value="300"
                    checked={pack.cap}
                    onChange={handlercheck}
                  />
                  <label htmlFor="cap">cap - 300</label>
                </div>
                <div className="gift-type">
                  <input
                    type="checkbox"
                    id="tea"
                    name="tea"
                    value="150"
                    checked={pack.tea}
                    onChange={handlercheck}
                  />
                  <label htmlFor="tea">Tea cup - 150</label>
                </div>
                <div className="gift-type">
                  <input
                    type="checkbox"
                    id="frame"
                    name="frame"
                    value="800"
                    checked={pack.frame}
                    onChange={handlercheck}
                  />
                  <label htmlFor="frame">photo frame 12x18 - 800</label>
                </div>
              </div>
            </div>
            <input type="button" value="check out" onClick={readyInvoice} />
          </div>
        </div>
      )}
      {/* invoice area and the editing area*/}
      {page == 1 && (
        <div className="invoice">
          <span className="invoice-back" onClick={() => setpage(0)}>
            {"<<"}back
          </span>
          <div className="invoice-container">
            <div className="invoice-header">
              <img src="/logo.png" alt="capture the moment" />
              <h1>Invoice</h1>
              <span className="invoice-date">{book.date}</span>
            </div>
            <div className="invoice-client">
              <h3>client</h3>
              <span>{book.name}</span>
              <span>{book.email}</span>
              <span>{book.number}</span>
            </div>
            <div className="invoice-event">
              <div>{book.event}</div>
            </div>
            <table>
              <tr>
                <th>S.no</th>
                <th>package</th>
                <th>total</th>
              </tr>
              {book.package.map((a, i) => (
                <tr key={a.text}>
                  <td>{i + 1}</td>
                  <td>{a.text}</td>
                  <td>{a.value}/-</td>
                </tr>
              ))}
              <tr>
                <td>{book.package.length + 1}</td>
                <td>album sheets x {book.sheet}</td>
                <td>{parseInt(book.sheet) * 150}/-</td>
              </tr>
              <tr>
                <td colSpan={2}>total</td>
                <td>
                  <InvoceTotal />
                  /-
                </td>
              </tr>
            </table>
          </div>
          <button
            onClick={async () => {
              let ma = await fetch("/api/mailer", {
                method: "POST",
                body: JSON.stringify(book),
              }).then((res) => res.json());
              console.log(ma);
              setpage(2);
            }}
          >
            confirm order
          </button>
        </div>
      )}
      {/*thanking for the order conformation */}
      {page == 2 && (
        <div className="order-confirm">
          <span className="order-back" onClick={() => setpage(0)}>
            {"<<"}back
          </span>
          <div className="order-container">
            <h1>thank you</h1>
            <h3>for confirm order</h3>
            <img src="thank.png" />
            <p>
              order conformation invoice sended to your mail verify once We
              really appreciate you giving us a moment of your time today.
              Thanks for choosing us.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
