import { Link, useNavigate} from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";

const SignInComponent = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {/* create form with email and password and submit button */}
        <form onSubmit={handleSubmit}>
            <input  type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
            <input  type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">Sign Up</button>
        </form>
        
        <div>
        Already have an account? <Link to="/">Log In</Link>
      </div>
      <Outlet />
    </>
  );
};
export default SignInComponent;
