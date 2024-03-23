import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import CV from "./components/CV";

const DEFAULT_VALUES = {
  name: "John Doe",
  email: "john.doe@gmail.com",
  phoneNumber: "123456789",
  address: "123 Maple Street",
};

function App() {
  const [formData, setFormData] = useState(DEFAULT_VALUES);

  const handleReset = () => {
    setFormData(DEFAULT_VALUES);
  };

  const handleErase = () => {
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
  };

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
            <a className="eraseButton" onClick={handleErase}>
              <i className="fa-solid fa-eraser"></i>
            </a>
            <a className="printButton">
              <i className="fa-solid fa-print"></i>
            </a>
            <a target="_blank" href="https://github.com/lukazashovski">
              <i className="fa-brands fa-github"></i>
            </a>
            <a className="resetButton" onClick={handleReset}>
              Reset
            </a>
          </div>
        </div>
        <div className="main">
          <div className="forms">
            <Form
              faClass="fa-solid fa-file-invoice"
              header="Personal Details"
              formData={formData}
              setFormData={setFormData}
            ></Form>
          </div>
          <div className="result">
            <CV formData={formData}></CV>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
