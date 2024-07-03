"use server";

import { AuthFormInputs } from "@/schemas/authSchema";

export const signUpAction = async (formData: AuthFormInputs) => {
  const response = await fetch(`http://localhost:3001/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  return result;
};

export const signInAction = async (formData: AuthFormInputs) => {
  const response = await fetch(`http://localhost:3001/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  return result;
};