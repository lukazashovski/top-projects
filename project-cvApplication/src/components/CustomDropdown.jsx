import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

import "../styles/CustomDropdown.css";

function DropDownItem({ defaultValues }) {
  const [dropDownData, setDropDownData] = useState(
    defaultValues || {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input1Name: "School",
      input2Name: "Degree",
      input3Name: "Start Date",
      input4Name: "End Date",
      input5Name: "Location",
    }
  );
  const handleChange = (field, value) => {
    setDropDownData({
      ...dropDownData,
      [field]: value,
    });
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [visible, setVisible] = useState(defaultValues.isVisible ?? true);
  const [deleted, setDeleted] = useState(false);

  return (
    <>
      {!deleted && (
        <div className={"dropdown-item"}>
          <div onClick={toggleDropdown}>
            <p>{dropDownData.input1}</p>
            <div>
              <a
                onClick={(e) => {
                  setVisible(!visible);
                  e.stopPropagation();
                }}
              >
                {visible ? (
                  <i className="fa-solid fa-eye"></i>
                ) : (
                  <i className="fa-solid fa-eye-slash"></i>
                )}
              </a>
              <a onClick={() => setDeleted(!deleted)}>
                <i className="fa-solid fa-trash"></i>
              </a>
            </div>
          </div>
          <div className={"dropdown-form " + (isDropdownOpen ? "open" : "")}>
            <div className="dropdown-input">
              <label>{dropDownData.input1Name}</label>
              <input
                type="text"
                value={dropDownData.input1}
                onChange={(e) => handleChange("input1", e.target.value)}
              />
            </div>
            <div className="dropdown-input">
              <label>{dropDownData.input2Name}</label>
              <input
                type="text"
                value={dropDownData.input2}
                onChange={(e) => handleChange("input2", e.target.value)}
              />
            </div>
            <div className="dropdown-input">
              <label>{dropDownData.input3Name}</label>
              <input
                type="text"
                value={dropDownData.input3}
                onChange={(e) => handleChange("input3", e.target.value)}
              />
            </div>
            <div className="dropdown-input">
              <label>{dropDownData.input4Name}</label>
              <input
                type="text"
                value={dropDownData.input4}
                onChange={(e) => handleChange("input4", e.target.value)}
              />
            </div>
            <div className="dropdown-input">
              <label>{dropDownData.input5Name}</label>
              <input
                type="text"
                value={dropDownData.input5}
                onChange={(e) => handleChange("input5", e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const CustomDropdown = React.forwardRef(({ faClass, header }, ref) => {
  const itemListRef = useRef(null);

  const [itemList, setItemList] = useState([
    <DropDownItem
      key="default1"
      defaultValues={{
        input1: "Default University",
        input2: "Bachelor in Computer Science",
        input3: "03/2024",
        input4: "03/2027",
        input5: "Mont Olympus",
        input1Name: "School",
        input2Name: "Degree",
        input3Name: "Start Date",
        input4Name: "End Date",
        input5Name: "Location",
      }}
    />,
    <DropDownItem
      key="default2"
      defaultValues={{
        input1: "Hidden University",
        input2: "Bachelor in Nothingness",
        input3: "00/00",
        input4: "00/-03",
        input5: "Black Hole",
        input1Name: "School",
        input2Name: "Degree",
        input3Name: "Start Date",
        input4Name: "End Date",
        input5Name: "Location",
        isVisible: false,
      }}
    />,
  ]);

  const addItem = () => {
    setItemList(
      itemList.concat(
        <DropDownItem
          key={itemList.length}
          defaultValues={{
            input1: "",
            input2: "",
            input3: "",
            input4: "",
            input5: "",
            input1Name: "School",
            input2Name: "Degree",
            input3Name: "Start Date",
            input4Name: "End Date",
            input5Name: "Location",
          }}
        />
      )
    );
  };

  const resetItems = () => {
    setItemList([
      <DropDownItem
        key="default1"
        defaultValues={{
          input1: "Default University",
          input2: "Bachelor in Computer Science",
          input3: "03/2024",
          input4: "03/2027",
          input5: "Mont Olympus",
          input1Name: "School",
          input2Name: "Degree",
          input3Name: "Start Date",
          input4Name: "End Date",
          input5Name: "Location",
        }}
      />,
      <DropDownItem
        key="default2"
        defaultValues={{
          input1: "Hidden University",
          input2: "Bachelor in Nothingness",
          input3: "00/00",
          input4: "00/-03",
          input5: "Black Hole",
          input1Name: "School",
          input2Name: "Degree",
          input3Name: "Start Date",
          input4Name: "End Date",
          input5Name: "Location",
          isVisible: false,
        }}
      />,
    ]);
  };

  const eraseItems = () => {
    setItemList([]);
  };

  useImperativeHandle(ref, () => ({
    resetItems,
    eraseItems,
  }));

  return (
    <div className="dropdown" ref={itemListRef}>
      <div className="dropdown-top">
        <div>
          <i className={faClass}></i>
          <h1>{header}</h1>
        </div>
        <a>
          <i className="fa-solid fa-angle-down"></i>
        </a>
      </div>
      <div className="dropdown-main">{itemList}</div>
      <div className="dropdown-bottom">
        <a onClick={addItem}>+ {header}</a>
      </div>
    </div>
  );
});

export default CustomDropdown;
