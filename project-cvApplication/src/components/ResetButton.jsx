function ResetButton({ onClickFunctions }) {
  const handleClick = () => {
    onClickFunctions.forEach((func) => func());
  };

  return (
    <a className="resetButton" onClick={handleClick}>
      Load Example
    </a>
  );
}

export default ResetButton;
