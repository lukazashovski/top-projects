import { useState } from "react";

function CustomDropdown({ defaultValues, faClass, header }) {
  const [dropDownData, setDropDownData] = useState(defaultValues);

  return (
    <div className="dropdown">
      <div className="dropdown-top">
        <i className={faClass}></i>
        <h1>{header}</h1>
      </div>
      <div className="dropdown-main">
        <div className="dropdown-item">
          <p>{defaultValues.name}</p>
          <a></a>
        </div>
      </div>
      <div className="dropdown-bottom">
        <a>+ {header}</a>
      </div>
    </div>
  );
}

export default CustomDropdown;
