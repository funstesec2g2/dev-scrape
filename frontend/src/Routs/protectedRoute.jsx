import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getUserRole } from "../Components/LoginPage/LoginHelper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

export const useAuth = () => {
  const role = getUserRole();

  if (role) {
    return {
      auth: true,
      role,
    };
  }
  return {
    auth: false,
    role: null,
  };
};

export const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const { auth, role } = useAuth();

  if (!auth || (props?.role && props.role !== role)) {
    toast.error("You are not authorized to view this page", {
      autoClose: 3000, 
    });
    navigate("/");
    return null; 
  }

  return <Outlet />;
};
