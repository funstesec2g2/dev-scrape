import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getUserRole } from "../Components/LoginPage/LoginHelper";

// import {Navigate, Outlet} from "react-router-dom";


// const useAuth = () => {
//   const _user = localStorage.getItem("user");
//   let user = null;

//   if (_user) {
//     user =  JSON.parse(_user);
//     console.log(user);
//   }
  
//   if (user){
//     return {
//       auth: true,
//       role : user.roles
//     }
//   }

//   else{
//     return {
//       auth: false,
//       role : null
//     }
//   }
// }


// const ProtectedRoutes = (props) => {
//   const {auth, role} = useAuth();
//   console.log(auth);
//   console.log(role);
//   if (auth && role === "admin") {
//     return <Outlet />;
//   } else if (auth && role === "user") {
//     return <Navigate to="/" />;
//   } else {
//     return <Navigate to="/login" />;
//   }
// }


export const AdminPrivateRoute = ({props}) => {

 return (getUserRole() === 'admin' ? props : <Navigate to="/login" />) 

}