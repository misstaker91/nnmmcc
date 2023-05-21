import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const SignOutComponent = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
        <h1>SignOut</h1>
        <button onClick={handleLogout}>Log Out</button>

    </>
  );
};

export default SignOutComponent;