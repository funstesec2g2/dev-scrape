import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwiOu5IsSGhyfBij2qcNaHfMZhGWvYfkw",
  authDomain: "devscrape.firebaseapp.com",
  projectId: "devscrape",
  storageBucket: "devscrape.appspot.com",
  messagingSenderId: "277270399452",
  appId: "1:277270399452:web:644723248e3ef4946e6719",
  measurementId: "G-43YP9PE291"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);