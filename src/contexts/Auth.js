import { h } from 'preact';
import { createContext } from "preact";
import { useState, useContext } from "preact/hooks";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [isAuthed, setIsAuthed] = useState(false);

	const verify_user = () => {
		// do logic here
		// set user isAuthed accordingly
		setIsAuthed(false);
	};


	return (
        <AuthContext.Provider value={{
			// constants from env
			login_redirect:"http://localhost:8080/auth/redirect",
			refresh_token:"http://localhost:8080/auth/refresh",
			isAuthed
		}}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuthProvider = () => useContext(AuthContext);
