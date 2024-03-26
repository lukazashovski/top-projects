function EraseButton({ onClickFunctions }) {
  const handleClick = () => {
    onClickFunctions.forEach((func) => func()); // Iterate through the array of functions and call each one
  };

  return (
    <a className="eraseButton" onClick={handleClick}>
      <i className="fa-solid fa-eraser"></i>
    </a>
  );
}

export default EraseButton;
