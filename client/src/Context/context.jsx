import { useCallback, useState, useContext, createContext } from "react";

export const AuthContext = createContext();
const data = {
	admin: { role: "admin", id: 1, email: "admin@test.com" },
	seller: { role: "seller", id: 2, email: "seller@test.com" },
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [token, setToken] = useState();

	const isAdmin = user?.role === "admin";
	const isSeller = user?.role === "seller";

	const login = useCallback(async (email, password) => {
		if (!email && !password) return;

		let loggedInUser;
		if (email === data.admin.email) {
			loggedInUser = data.admin;
		} else if (email == data.seller.email) {
			loggedInUser = data.seller;
		} else {
			throw new Error("invalid");
		}

		setUser(loggedInUser);
		setToken("afterhours");
	}, []);

	const logout = () => {
		setUser(null);
		setToken(null);
	};

	const value = {
		isAuthenticated: !!token,
		user,
		logout,
		login,
		isAdmin,
		isSeller,
	};
	return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error("no context");
	return context;
};
