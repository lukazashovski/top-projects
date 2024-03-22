import "../styles/Form.css";

function Form({
  faClass,
  header,
  setName,
  setEmail,
  setPhoneNumber,
  setAddress,
  name,
  email,
  phoneNumber,
  address,
}) {
  return (
    <div className="form">
      <div className="form-top">
        <i className={faClass}></i>
        <h1>{header}</h1>
      </div>
      <div className="form-main">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Form;
