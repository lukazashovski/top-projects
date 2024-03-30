import "../styles/CustomDropdown.css";

function CustomDropdown({ faClass, header, addDropdownItem, children }) {
  return (
    <div className="dropdown">
      <div className="dropdown-top">
        <div>
          <i className={faClass}></i>
          <h1>{header}</h1>
        </div>
        <a>
          <i className="fa-solid fa-angle-down"></i>
        </a>
      </div>
      <div className="dropdown-main">{children}</div>
      <div className="dropdown-bottom">
        <a onClick={addDropdownItem}>+ {header}</a>
      </div>
    </div>
  );
}

export default CustomDropdown;
