import "../styles/CV.css";

function CV({ formData, educationData, experienceData }) {
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
          <div className="dropdown-element">
            <h1>Education</h1>
            {educationData
              .filter((education) => education.isVisible)
              .map((education, index) => (
                <div key={index} className="dropdown-child">
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
        {experienceData && experienceData.length > 0 && (
          <div className="dropdown-element">
            <h1>Experience</h1>
            {experienceData
              .filter((experience) => experience.isVisible)
              .map((experience, index) => (
                <div key={index} className="dropdown-child">
                  <p>{experience.input1}</p>
                  <p>{experience.input2}</p>
                  <p>
                    {experience.input3} - {experience.input4}
                  </p>
                  <p>{experience.input5}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CV;
