// GoogleSignInButton.jsx

import React from "react";
import axios from "axios";

const GoogleSignInButton = () => {
  const handleSignIn = async () => {
    try {
      const authResponse = await window.gapi.auth2.getAuthInstance().signIn();
      const token = authResponse.getAuthResponse().id_token;
      const response = await axios.post("/users/google_login", { token });
      console.log(response.data);
      // Handle successful sign-in (e.g., store tokens in localStorage)
    } catch (error) {
      console.error("Google Sign-In failed:", error);
      // Handle sign-in failure
    }
  };

  return <button onClick={handleSignIn}>Sign in with Google</button>;
};

export default GoogleSignInButton;
