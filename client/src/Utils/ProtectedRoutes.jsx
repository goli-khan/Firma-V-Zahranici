import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/context.jsx";

const ProtectedRoutes = ({ allowedRoles }) => {
	const { user, isAuthenticated } = useAuth();
	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	if (allowedRoles && !allowedRoles.includes(user?.role)) {
		return <Navigate to="/unauthorized" replace />;
	}

	return <Outlet />;
};

export default ProtectedRoutes;
