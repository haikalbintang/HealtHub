import React from 'react';

// Company component
const Company: React.FC = () => {
  return (
    <div>
      <h2>Our Company</h2>
      <p>We are a dynamic team passionate about...</p>
      {/* Add more details about your company */}
    </div>
  );
};

// Team component
const Team: React.FC = () => {
  return (
    <div>
      <h2>Our Team</h2>
      <p>Meet the people who drive our company forward:</p>
      {/* Add team members */}
    </div>
  );
};

// Mission component
const Mission: React.FC = () => {
  return (
    <div>
      <h2>Our Mission</h2>
      <p>Describe your company's mission...</p>
    </div>
  );
};

// AboutUs page component
const AboutUs: React.FC = () => {
  return (
    <div>
      <h1>About Us</h1>
      <Company />
      <Team />
      <Mission />
    </div>
  );
};

export default AboutUs;
