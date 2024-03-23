import "../styles/Form.css";

function Form({ faClass, header, formData, setFormData }) {
  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

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
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={(e) => handleChange("phoneNumber", e.target.value)}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={(e) => handleChange("address", e.target.value)}
        />
      </div>
    </div>
  );
}

export default Form;
