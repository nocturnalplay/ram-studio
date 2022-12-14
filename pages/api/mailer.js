import nodemailer from "nodemailer";

export default async function handler(req, res) {
  let book = JSON.parse(req.body);
  console.log(book);
  await mailer(book);
  res.status(200).json({ message: "welcome to the mail service" });
}

const mailer = async (book) => {
  let tot = InvoceTotal(book);
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: "youngstorage@outlook.com",
      pass: "dotmail123",
    },
  });
  let pkg = "";
  book.package.map((a, i) => {
    pkg += `<tr>
    <td style=" text-align: center;
        font-size: 18px;
        border: 1px solid rgba(128, 128, 128, 0.302);
        padding: 3px 5px;">${i + 1}</td>
    <td style=" text-align: center;
        font-size: 18px;
        border: 1px solid rgba(128, 128, 128, 0.302);
        padding: 3px 5px;">${a.text}</td>
    <td style=" text-align: center;
        font-size: 18px;
        border: 1px solid rgba(128, 128, 128, 0.302);
        padding: 3px 5px;text-align: right;">${a.value}/-</td>
  </tr>`;
  });
  let mailOptions = {
    from: "youngstorage@outlook.com",
    to: book.email,
    subject: "order confirm mail",
    text: "checkout order invoice",
    html: `
    <body style="width:100%;display:flex;flex-direction:column;">
    <div class="invoice-container" style="background-color: #f8f2e9;">
    <div class="invoice-header" style="
    align-items: center;
    position: relative;
    padding: 5px 0;
    border-bottom: 2px solid gray;
    margin: 0 0 10px 0;">
      <img style=" width: 150px;" src="/logo.png" alt="capture the moment" />
      <h1 style=" font-weight: 900;
      background-image: linear-gradient(70deg, rgba(255, 0, 183, 0.569), rgba(81, 0, 128, 0.9));
      padding: 5px 10px;
      border-radius: 5px;">Invoice</h1>
      <br>
      <span style=" position: absolute;
      bottom: 0;
      right: 0;
      font-size: 18px;
      font-weight: 500;" class="invoice-date">${book.date}</span>
    </div>
    <div class="invoice-client" style="
    padding: 5px 0;
    border-bottom: 2px solid gray;
    margin: 0 0 10px 0;">
      <h3 style="font-weight: 600;
      text-transform: capitalize;
      border-bottom: 1px solid gray;
      width: fit-content;">client</h3>
      <span style=" font-size: 16px; font-size: 25px;
      font-weight: 900;">${book.name}</span>
      <br>
      <span  style=" font-size: 16px;">${book.email}</span>
      <br>
      <span  style=" font-size: 16px;">${book.number}</span>
      <br>
      <span  style=" font-size: 16px;">${book.location}</span>
      <br>
    </div>
    <div class="invoice-event" style=" padding: 5px 0;">
      <div style="font-weight: 900;
      font-size: 30px;
      text-transform: capitalize;
      text-align: center;">${book.event}</div>
    </div>
    <table style=" border-collapse: collapse;
    text-transform: capitalize;">
      <tr style=" background-image: linear-gradient(70deg, rgba(255, 0, 183, 0.569), rgba(81, 0, 128, 0.9));">
        <th style="padding: 5px 10px;
        font-size: 20px;
        text-transform: capitalize;
        color: aliceblue;
        text-align: center;">S.no</th>
        <th style="padding: 5px 10px;
        font-size: 20px;
        text-transform: capitalize;
        color: aliceblue;
        text-align: center;">package</th>
        <th style="padding: 5px 10px;
        font-size: 20px;
        text-transform: capitalize;
        color: aliceblue;
        text-align: center;text-align: right;">total</th>
      </tr>
     ${pkg}
      <tr>
        <td style=" text-align: center;
        font-size: 18px;
        border: 1px solid rgba(128, 128, 128, 0.302);
        padding: 3px 5px;">${book.package.length + 1}</td>
        <td style=" text-align: center;
        font-size: 18px;
        border: 1px solid rgba(128, 128, 128, 0.302);
        padding: 3px 5px;">album sheets x ${book.sheet}</td>
        <td style=" text-align: center;text-align: right;
        font-size: 18px;
        border: 1px solid rgba(128, 128, 128, 0.302);
        padding: 3px 5px;">${parseInt(book.sheet) * 150}/-</td>
      </tr>
      <tr>
        <td style=" text-align: center;
        font-size: 18px;
        border: 1px solid rgba(128, 128, 128, 0.302);
        padding: 3px 5px;text-align: right;" colspan="2">total</td>
        <td style=" text-align: center;
        font-size: 18px;
        border: 1px solid rgba(128, 128, 128, 0.302);
        padding: 3px 5px;text-align: right; color: #80f;
        font-weight: 900;">
          ${tot}/-
        </td>
      </tr><html>
    </table>
  </div>
  </body>
  `,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error.message);
      return false;
    } else {
      console.log("Email sent: " + info.response);
      return true;
    }
  });
};

const InvoceTotal = (book) => {
  let val = book.package.map((a) => a.value);
  if (val.length) {
    let bk = val.reduce((t, n) => t + n);
    return parseInt(book.sheet) * 150 + bk;
  }
  return parseInt(book.sheet) * 150;
};
