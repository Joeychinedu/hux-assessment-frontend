import { useUser } from "../contexts/UserContext";
import Spinner from "./Spinner";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
  // 1) Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();
  const location = useLocation();

  // While loading, prevent redirection by rendering nothing or a loading spinner
  if (isLoading) return <Spinner />;

  // Redirect to contacts list if authenticated and trying to access login, signup, or homepage
  if (
    isAuthenticated &&
    (location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/signup")
  ) {
    return <Navigate to="/contacts" replace />;
  }

  // If not authenticated and on a protected page, redirect to login
  if (!isAuthenticated && location.pathname.startsWith("/contacts")) {
    return <Navigate to="/login" replace />;
  }

  return children || <Outlet />; // Render children if no redirection
}

export default ProtectedRoute;
