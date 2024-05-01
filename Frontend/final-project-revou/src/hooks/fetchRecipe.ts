import React, { useState, useEffect } from "react";
import axios from "axios";

export const fetchRecipe = async () => {
  const authToken = localStorage.getItem("access_token");
  if (authToken) {
    try {
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
      const response = await axios.get("http://127.0.0.1:5000/recipes", {
        headers,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
};

