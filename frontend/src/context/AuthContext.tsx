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
}

const AuthContext = createContext<AuthContextType>({
	handleGetUserData: () => {},
	currentUser: {
		email: "",
		id: -1,
		name: "",
	},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);

	const handleGetUserData = () => {
		axios.get(API_USER_ROUTE, { withCredentials: true })
		.then(({data}) => setCurrentUser({ ...data.user }))
		.catch(() => setCurrentUser(null));
	}

	useEffect(() => {
		handleGetUserData()
	}, [])


	const value: AuthContextType = {
		handleGetUserData,
		currentUser,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);