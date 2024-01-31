import {useLocation, Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../hooks/useAuthContext";


const RequireAuth = (props) => {


    const {auth}  = useAuth();
    const location = useLocation();

    return (
        auth?.user ? <Outlet /> : <Navigate to="/" state={{from: location.pathname}} replace/>
    )

}

export default RequireAuth;

