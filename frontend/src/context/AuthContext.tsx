import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_USER_ROUTE } from "../api-routes";



interface User {
	email: string;
	id: number;
	name: string;
}

interface AuthContextType {
	currentUser: User | null;
	handleGetUserData: () => void;
	removeCurrentUser: () => void;
}

const AuthContext = createContext<AuthContextType>({
	currentUser: {
		email: "",
		id: -1,
		name: "",
	},
	handleGetUserData: () => {},
	removeCurrentUser: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);

	const handleGetUserData = () => {
		axios.get(API_USER_ROUTE, { withCredentials: true })
		.then(({data}) => setCurrentUser({ ...data.user }))
		.then(() => localStorage.setItem("is_auth", "true"))
		.catch(() => setCurrentUser(null));
	}

	const removeCurrentUser = () => {
		localStorage.removeItem("is_auth");
		setCurrentUser(null);
	}

	useEffect(() => {
		if (localStorage.getItem("is_auth")) {
			handleGetUserData();
		}
	}, [])


	const value: AuthContextType = {
		currentUser,
		handleGetUserData,
		removeCurrentUser,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);