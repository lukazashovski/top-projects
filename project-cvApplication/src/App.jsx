import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("123456789");
  const [address, setAddress] = useState("123 Maple Street");

  return (
    <>
      <div className="cv-application">
        <div className="header">
          <div className="info">
            <div>
              <img src="./public/vite.svg" alt="An image of Vite" />
              <img src="./src/assets/react.svg" alt="An image of React" />
            </div>
            <h1>CV Application</h1>
            <p>
              A CV Application generator made using React + Vite. First React
              Project of The Odin Project.
            </p>
          </div>
          <div className="buttons">
            <a
              className="eraseButton"
              onClick={() => {
                setName("");
                setEmail("");
                setPhoneNumber("");
                setAddress("");
              }}
            >
              <i className="fa-solid fa-eraser"></i>
            </a>
            <a className="printButton">
              <i className="fa-solid fa-print"></i>
            </a>
            <a target="_blank" href="https://github.com/lukazashovski">
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className="resetButton"
              onClick={() => {
                setName("John Doe");
                setEmail("john.doe@gmail.com");
                setPhoneNumber("123456789");
                setAddress("123 Maple Street");
              }}
            >
              Reset
            </a>
          </div>
        </div>
        <div className="main">
          <div className="forms">
            <Form
              faClass="fa-solid fa-file-invoice"
              header="Personal Details"
              setName={setName}
              setEmail={setEmail}
              setPhoneNumber={setPhoneNumber}
              setAddress={setAddress}
              name={name}
              email={email}
              phoneNumber={phoneNumber}
              address={address}
            ></Form>
          </div>
          <div className="result"></div>
        </div>
      </div>
    </>
  );
}

export default App;
