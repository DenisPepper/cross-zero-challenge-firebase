import css from './app.module.css';
import {RegisterPage} from "../../pages/register-page/register-page";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "../../pages/home-page/home-page";
import {LoginPage} from "../../pages/login-page/login-page";
import {AuthChecker} from "../auth-checker/auth-checker";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";

export const App = () => {
    const [user, loading] = useAuthState(auth);

    return (
        <BrowserRouter>
            <main className={css.app}>
                <h1 className='visually-hidden'>Chat</h1>
                <Routes>
                    <Route path={'/'}>
                        <Route index element={
                            <AuthChecker user={user} loading={loading}>
                                <HomePage/>
                            </AuthChecker>}
                        />
                        <Route path={'login'} element={<LoginPage/>}/>
                        <Route path={'register'} element={<RegisterPage/>}/>
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
}
