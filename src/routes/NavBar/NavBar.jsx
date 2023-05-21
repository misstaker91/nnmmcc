
import { Outlet } from "react-router-dom";
import LoginComponent from "../../components/loginComponent/loginComponent";
import SignInComponent from "../../components/singinComponent/signinComponent"
import { useUserAuth } from "../../context/UserAuthContext";

import './NavBar.css';
const NavBar = () => {
  const { user } = useUserAuth();
  
  return (
    <>
      <h1>Ahoj {user.displayName}</h1>
      <Outlet />
    </>
  );
};
export default NavBar;
