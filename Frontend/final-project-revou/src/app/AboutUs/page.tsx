import React from 'react';

// Company component
const Company: React.FC = () => {
  return (
    <div>
      <h2>Our Company</h2>
      <p>RevoU Foods is a company that is establish in 2024 to promoting healthy food around the world</p>
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
      <p>Amanda Satya</p>
      <p>Iman Finuaz</p>
      <p>Muhammad Haikal Bintang</p>
      <p>Fachrezi Ramadhani</p>
    </div>
  );
};

// Mission component
const Mission: React.FC = () => {
  return (
    <div>
      <h2>Our Mission</h2>
      <p>It is not just to promote food as a culture, but to measure the nutrients and to change the perspective of healthy foods from boring to be super fun!</p>
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
