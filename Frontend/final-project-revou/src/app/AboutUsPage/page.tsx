"use client"
import React from 'react';
import Team from '@/components/AboutUs/Team';
import Company from '@/components/AboutUs/Company';
import Mission from '@/components/AboutUs/Mission';
const AboutUsPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <Company />
      <Team />
      <Mission />
    </div>
  );
};

export default AboutUsPage;