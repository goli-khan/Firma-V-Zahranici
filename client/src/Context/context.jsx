import { useCallback, useState, useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const login = () => {};
	const logout = () => {};

	const value = { login, logout };
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error("fuck you");
	return context;
};
