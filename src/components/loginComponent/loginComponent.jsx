import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth, signInWithGooglePopup } from "../../context/UserAuthContext";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input  type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
            <input  type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">Log In</button>
        </form>
        <div>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      <button  type='button' onClick={signInWithGoogle}>
            Sign In With Google
      </button>
    </>
  );
};

export default LoginComponent;