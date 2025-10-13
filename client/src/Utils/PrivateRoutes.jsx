import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
	let isAuthenticated = true;
	return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
