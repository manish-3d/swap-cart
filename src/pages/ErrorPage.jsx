import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <h1>❌ Page Not Found</h1>
      <p>This page doesn't exist</p>

      <Link to="/">Go back Home</Link>
    </div>
  );
};

export default ErrorPage;