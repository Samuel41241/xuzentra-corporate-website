import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ session, children }) {
  const location = useLocation();

  if (!session) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;