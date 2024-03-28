import "./App.css";
import React, { useState } from "react";

import ResetButton from "./components/ResetButton";
import EraseButton from "./components/EraseButton";

import CV from "./components/CV";

import Form from "./components/Form";
import CustomDropdown from "./components/CustomDropdown";
import DropDownItem from "./components/DropDownItem";

const FORM_DEFAULT_VALUES = {
  name: "John Doe",
  email: "john.doe@gmail.com",
  phoneNumber: "+12 345 6789",
  address: "123 Maple Street",
};

const DROPDOWN_DEFAULT_VALUES = [
  {
    input1: "Default University",
    input2: "Bachelor in CSE",
    input3: "28/03/2024",
    input4: "28/03/2027",
    input5: "TU Delft, Delft, The Netherlands",
  },
  {
    isVisible: false,
    input1: "Unknown University",
    input2: "Bachelor in Unknown",
    input3: "01/01/0001",
    input4: "10/10/1000",
    input5: "Unknown, Unknown",
  },
];

function App() {
  const [formData, setFormData] = useState(FORM_DEFAULT_VALUES);
  const [dropdownItems, setDropdownItems] = useState(DROPDOWN_DEFAULT_VALUES);

  const ResetButtonAction = () => {
    setFormData(FORM_DEFAULT_VALUES);
  };

  const EraseButtonAction = () => {
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
    setDropdownItems([]);
  };

  const addDropdownItem = () => {
    setDropdownItems([...dropdownItems, {}]);
  };

  const handleDropDownChange = (index, field, value) => {
    const updatedItems = [...dropdownItems];
    updatedItems[index][field] = value;
    setDropdownItems(updatedItems);
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
            <EraseButton onClickFunctions={[EraseButtonAction]}></EraseButton>
            <a className="printButton">
              <i className="fa-solid fa-print"></i>
            </a>
            <a target="_blank" href="https://github.com/lukazashovski">
              <i className="fa-brands fa-github"></i>
            </a>
            <ResetButton onClickFunctions={[ResetButtonAction]}></ResetButton>
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
              addDropdownItem={addDropdownItem}
            >
              {dropdownItems.map((item, index) => (
                <DropDownItem
                  key={index}
                  index={index}
                  handleDropDownChange={handleDropDownChange}
                  dropDownData={item}
                  defaultInputNames={{
                    input1Name: "School",
                    input2Name: "Graduate",
                    input3Name: "Start Date",
                    input4Name: "End Date",
                    input5Name: "Location",
                  }}
                />
              ))}
            </CustomDropdown>
          </div>
          <CV formData={formData}></CV>
        </div>
      </div>
    </>
  );
}

export default App;
