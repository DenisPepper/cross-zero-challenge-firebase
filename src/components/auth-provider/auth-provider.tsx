import {createContext, ReactNode, useEffect, useState} from "react";
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from "../../firebase";
import {User} from "@firebase/auth";

interface IAuthContext {
    user: User | null;
}

export const AuthContext = createContext<IAuthContext>({user: null});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = (props: AuthProviderProps) => {
    const {children} = props;
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return () => {
            unsub();
        }
    }, []);

    return (
        <AuthContext.Provider value={{user: currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};
