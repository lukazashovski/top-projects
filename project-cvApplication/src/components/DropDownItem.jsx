import React, { useState } from "react";

function DropDownItem({
  index,
  handleDropDownChange,
  deleteDropDownItem,
  visibleDropDownItem,
  dropDownData,
  defaultInputNames,
}) {
  const handleChange = (field, value) => {
    handleDropDownChange(index, field, value);
  };

  const handleDelete = () => {
    deleteDropDownItem(index);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  let visible = dropDownData.isVisible;
  const handleVisible = () => {
    visible = !dropDownData.isVisible;
    visibleDropDownItem(index, visible);
  };

  const {
    input1 = "",
    input2 = "",
    input3 = "",
    input4 = "",
    input5 = "",
  } = dropDownData;

  const {
    input1Name = "Input 1 Name",
    input2Name = "Input 2 Name",
    input3Name = "Input 3 Name",
    input4Name = "Input 4 Name",
    input5Name = "Input 5 Name",
  } = defaultInputNames;

  return (
    <>
      <div className={"dropdown-item"}>
        <div onClick={toggleDropdown}>
          <p>{dropDownData.input1}</p>
          <div>
            <a
              onClick={(e) => {
                handleVisible();
                e.stopPropagation();
              }}
            >
              {visible ? (
                <i className="fa-solid fa-eye"></i>
              ) : (
                <i className="fa-solid fa-eye-slash"></i>
              )}
            </a>
            <a
              onClick={(e) => {
                handleDelete();
                e.stopPropagation();
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </a>
          </div>
        </div>
        <div className={"dropdown-form " + (isDropdownOpen ? "open" : "")}>
          <div className="dropdown-input">
            <label>{input1Name}</label>
            <input
              type="text"
              value={input1}
              onChange={(e) => handleChange("input1", e.target.value)}
            />
          </div>
          <div className="dropdown-input">
            <label>{input2Name}</label>
            <input
              type="text"
              value={input2}
              onChange={(e) => handleChange("input2", e.target.value)}
            />
          </div>
          <div className="dropdown-input">
            <label>{input3Name}</label>
            <input
              type="text"
              value={input3}
              onChange={(e) => handleChange("input3", e.target.value)}
            />
          </div>
          <div className="dropdown-input">
            <label>{input4Name}</label>
            <input
              type="text"
              value={input4}
              onChange={(e) => handleChange("input4", e.target.value)}
            />
          </div>
          <div className="dropdown-input">
            <label>{input5Name}</label>
            <input
              type="text"
              value={input5}
              onChange={(e) => handleChange("input5", e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DropDownItem;
