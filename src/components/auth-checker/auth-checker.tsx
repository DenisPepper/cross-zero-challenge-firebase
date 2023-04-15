import {useContext} from "react";
import {AuthContext} from "../auth-provider/auth-provider";
import {Navigate} from "react-router-dom";

interface AuthCheckerProps {
    children: JSX.Element;
}

export const AuthChecker =(props: AuthCheckerProps) => {
    const {children} = props;
    const {user} = useContext(AuthContext);
    return user ? children : <Navigate to={'/login'}/>
}
