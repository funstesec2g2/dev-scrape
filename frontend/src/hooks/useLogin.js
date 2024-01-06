import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/index";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { dispatch } = useAuthContext();
  const login = async ({ email, password }) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);

      setError(json.message);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setError(null);
    }
  };
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);

      const { email, accessToken } = result.user;
      // console.log();
      localStorage.setItem("user", JSON.stringify({ email, accessToken }));
      dispatch({ type: "LOGIN", payload: { email, accessToken } });
    } catch (error) {
      console.log("Google sign-in error:", error);
    }
  };
  const signInWithGitHub = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "LOGIN", payload: user });
    } catch (error) {
      console.log("GitHub sign-in error:", error.code, error.message);
    }
  };

  return { login, error, isLoading, signInWithGoogle, signInWithGitHub };
};
