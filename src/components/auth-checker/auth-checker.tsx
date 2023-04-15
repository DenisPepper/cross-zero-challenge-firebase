import {Navigate} from "react-router-dom";
import {User} from "@firebase/auth";
import AppSpinner from "../app-spinner/app-spinner";

interface AuthCheckerProps {
    children: JSX.Element;
    user: User | null | undefined;
    loading: boolean;
}

export const AuthChecker =(props: AuthCheckerProps) => {
    const {children, user, loading} = props;
    if (loading) {
        return <AppSpinner/>;
    }
    return user ? children : <Navigate to={'/login'}/>
}
