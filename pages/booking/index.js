import { useRouter } from "next/router";
import { useState } from "react";

const packagelist = [
  {
    title: "Traditional Photography",
    price: "12K",
    list: [
      "Traditional photography involves sitting down pictures of the people. They are aware that somebody is clicking their picture. This kind of photography is more formal in its approach",
    ],
    pic: "fa fa-camera-retro",
    d: "tp",
  },
  {
    title: "Traditional Videography",
    price: "20K",
    list: [
      "A Traditional videographer has a typical video camera that is usually shot continuously. There's less creativity involved besides documenting everything that's being done.",
    ],
    pic: "fa fa-video",
    d: "tv",
  },
  {
    title: "Candid Photography",
    price: "18K",
    list: [
      "A candid photograph is a photograph captured without creating a posed appearance. The candid nature of a photograph is unrelated to the subject's knowledge",
    ],
    pic: "fa fa-camera-retro",
    d: "cp",
  },
  {
    title: "Candid Videography",
    price: "25K",
    list: [
      "A Candid Videography focuses on spontaneity rather than technique. It is un-posed a. unplanned, immediate and unobtrusive.",
    ],
    pic: "fa fa-video",
    d: "cv",
  },
  {
    title: "Drone",
    price: "10K",
    list: [
      "Drone videography is the process of capturing video from a drone in flight or on the ground. There are some pretty amazing shots that you can capture with this method!",
    ],
    pic: "fa fa-plane",
    d: "dr",
  },
  {
    title: "LED Screen",
    price: "30K",
    list: [
      "LED display is a flat panel display that uses  live the event in front of audiences and array of light-emitting diodes as pixels for a video display.",
    ],
    pic: "fa fa-desktop",
    d: "led",
  },
];
const giftlist = [
  {
    title: "T-Shirt",
    price: "500",
    link: "/tshirt.jpeg",
    d: "ts",
  },
  {
    title: "Cap",
    price: "300",
    link: "/cap.jpeg",
    d: "cap",
  },
  {
    title: "Cup",
    price: "300",
    link: "/cup.jpeg",
    d: "tea",
  },
  {
    title: "Photo Frame",
    price: "300",
    link: "/frame.jpeg",
    d: "frame",
  },
];
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
export default function Booking() {
  const router = useRouter();
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(0);
  const handlerBook = (e) => {
    if (e.target.name === "number") {
      if (e.target.value.length > 10) {
        return;
      }
    }
    setbook((a) => ({ ...a, [e.target.name]: e.target.value }));
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
    setpage(3);
  };
  const [book, setbook] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    location: "",
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
  const InvoceTotal = () => {
    let val = book.package.map((a) => a.value);
    if (val.length) {
      let bk = val.reduce((t, n) => t + n);
      return parseInt(book.sheet) * 150 + bk;
    }
    return parseInt(book.sheet) * 150;
  };
  console.log(book);
  return (
    <div className="booking-container">
      {/*page one will going to choose the package for the client */}
      {page == 0 && (
        <section>
          <div className="container-fluid">
            <div className="container">
              <h1>choose your package</h1>
              <div className="row">
                {packagelist.map((a) => (
                  <div className="col-sm-4" key={a.title}>
                    <div className="card text-center">
                      <div className="title">
                        <i class={a.pic} aria-hidden="true"></i>
                        <h2>{a.title}</h2>
                      </div>
                      <div className="price">
                        <h4>
                          <sup>₹</sup>
                          {a.price}
                        </h4>
                      </div>
                      <div className="option">
                        <ul>
                          {a.list.map((e, i) => (
                            <li key={e + i}>{e}</li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href="#"
                        onClick={() => {
                          setpack((e) => ({ ...e, [a.d]: !pack[a.d] }));
                        }}
                      >
                        {pack[a.d] ? (
                          <>
                            Added
                            <i className="fa fa-check" aria-hidden="true"></i>
                          </>
                        ) : (
                          <>
                            Add to Cart
                            <i
                              className="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>
                          </>
                        )}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button onClick={() => setpage(1)}>next</button>
        </section>
      )}
      {/*page two is to get the client details */}
      {page == 1 && (
        <div className="client">
          <div className="booking-back" onClick={() => setpage(0)}>
            {"<<back"}
          </div>
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
                <label>location</label>
                <input
                  type="text"
                  onChange={handlerBook}
                  name="location"
                  value={book.location}
                  required
                />
              </div>
              <div>
                <label>event type</label>
                <select id="event" name="event" onChange={handlerBook}>
                  {[
                    "",
                    "Portrait",
                    "engagement",
                    "Wedding(pre-post) ",
                    "ear piercing",
                    "baby shower",
                    "birthday",
                    "Newborn ",
                    "Architecture ",
                    "maternity",
                    "Model",
                    "Pets",
                    "Product ",
                    "Real-Estate ",
                    "Corporate",
                  ].map((a) => (
                    <option value={a}>{a}</option>
                  ))}
                </select>
                {/* <input
                  type="text"
                  onChange={handlerBook}
                  name="event"
                  value={book.event}
                  required
                /> */}
              </div>
            </div>
            <div className="store-inp store-st">
              <div>
                <label>(12x36) album sheets (20-60)</label>
                <input
                  type="number"
                  onChange={handlerBook}
                  name="sheet"
                  value={book.sheet}
                  required
                />
              </div>
            </div>
            <button onClick={() => setpage(2)}>next</button>
          </div>
        </div>
      )}
      {/* chooose the gift package */}
      {page == 2 && (
        <div className="booking-gift">
          <div className="booking-back" onClick={() => setpage(1)}>
            {"<<back"}
          </div>
          <header>Select your Gift</header>
          <div className="gift-card-container">
            {giftlist.map((a) => (
              <div className="gift-card" key={a.title}>
                <img src={a.link} />
                <h1>{a.title}</h1>
                <h2>
                  {" "}
                  <sup>₹</sup>
                  {a.price}
                </h2>
                <a
                  href="#"
                  onClick={() => {
                    setpack((e) => ({ ...e, [a.d]: !pack[a.d] }));
                  }}
                >
                  {pack[a.d] ? (
                    <>
                      Added
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </>
                  ) : (
                    <>
                      Add to Cart
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </>
                  )}
                </a>
              </div>
            ))}
          </div>
          <button onClick={readyInvoice}>check out</button>
        </div>
      )}
      {/* invoice area and the editing area*/}
      {page == 3 && (
        <div className="invoice">
          <span className="invoice-back" onClick={() => setpage(2)}>
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
              <span>{book.location}</span>
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
                <td>(12x36) album sheets x {book.sheet}</td>
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
              setpage(4);
            }}
          >
            confirm order
          </button>
        </div>
      )}
    </div>
  );
}
