import "./App.css";
import React, { useState, useRef } from "react";
import Form from "./components/Form";
import CV from "./components/CV";
import CustomDropdown from "./components/CustomDropdown";
import ResetButton from "./components/ResetButton";
import EraseButton from "./components/EraseButton";

const FORM_DEFAULT_VALUES = {
  name: "John Doe",
  email: "john.doe@gmail.com",
  phoneNumber: "+12 345 6789",
  address: "123 Maple Street",
};

function App() {
  const [formData, setFormData] = useState(FORM_DEFAULT_VALUES);
  const dropdownRef = useRef();

  const formReset = () => {
    setFormData(FORM_DEFAULT_VALUES);
  };

  const formErase = () => {
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
  };

  const dropDownReset = () => {
    dropdownRef.current.resetItems();
  };

  const dropDownErase = () => {
    dropdownRef.current.eraseItems();
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
            <EraseButton
              onClickFunctions={[formErase, dropDownErase]}
            ></EraseButton>
            <a className="printButton">
              <i className="fa-solid fa-print"></i>
            </a>
            <a target="_blank" href="https://github.com/lukazashovski">
              <i className="fa-brands fa-github"></i>
            </a>
            <ResetButton
              onClickFunctions={[formReset, dropDownReset]}
            ></ResetButton>
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
            <CustomDropdown
              faClass="fa-solid fa-user-graduate"
              header="Education"
              ref={dropdownRef}
            ></CustomDropdown>
          </div>
          <CV formData={formData}></CV>
        </div>
      </div>
    </>
  );
}

export default App;
