import "../styles/CV.css";

function CV({ formData, itemData }) {
  return (
    <div className="cv-result">
      <div className="cv-top">
        <h1>{formData.name}</h1>
        <div>
          <p>
            <i className="fa-solid fa-envelope"></i>
            {formData.email}
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>
            {formData.phoneNumber}
          </p>
          <p>
            <i className="fa-solid fa-location-dot"></i>
            {formData.address}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CV;
