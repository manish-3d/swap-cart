import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // fake login
    const isLoggedIn = true;

    if (isLoggedIn) {
      // 🔥 redirect to profile
      navigate("/profile", { replace: true });
    }
  };

  return (
    <div>
      <h1>🔐 Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;