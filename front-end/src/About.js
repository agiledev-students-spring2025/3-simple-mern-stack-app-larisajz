import React, { useEffect, useState } from 'react';
import './About.css';

function AboutUs() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5002/api/about')
      .then((res) => res.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!aboutData) return <div>Loading...</div>;

  return (
    <div className="about-container">
      <h1>{aboutData.title}</h1>
      {aboutData.paragraphs.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
      <img src={aboutData.imageUrl} alt="About me" />
    </div>
  );
}

export default AboutUs;
