import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // set the user
    navigate("/rrd/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login Now</button>
    </div>
  );
};

export default Login;
