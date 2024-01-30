import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/index";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../Components/LoginPage/LoginHelper";

export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { dispatch } = useAuthContext();
  const login = async ({ email, password , onWrongPassword = () => {}}, onUserBlocked = () => {}) => {
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
      if (json?.message === "success") {
        console.log(json.access_token, 'the access token in the fetch')
        setCookie("user", json.access_token, email, 3);
        dispatch({ type: "LOGIN", payload: json });
        setError(null);
      
    } else if (json.message === "no user found") {
      console.log("the user doesn't exist");
      navigate("/userNotExist");
      if (json.message === "user is blocked") {
        onUserBlocked("User is blocked you cant login");
      }
    } else if (json.message === "wrong password") {
      onWrongPassword("You have entered a wrong password");
    }
     
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
