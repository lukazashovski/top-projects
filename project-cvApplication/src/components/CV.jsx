import "../styles/CV.css";

function CV({ formData, educationData }) {
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
      <div className="cv-main">
        {educationData && educationData.length > 0 && (
          <div className="education">
            <h1>Education</h1>
            {educationData
              .filter((education) => education.isVisible)
              .map((education, index) => (
                <div key={index} className="education-item">
                  <p>{education.input1}</p>
                  <p>{education.input2}</p>
                  <p>
                    {education.input3} - {education.input4}
                  </p>
                  <p>{education.input5}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CV;
