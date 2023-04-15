import css from './app.module.css';
import {RegisterPage} from "../../pages/register-page/register-page";
import {Routes, Route} from "react-router-dom";
import {HomePage} from "../../pages/home-page/home-page";
import {LoginPage} from "../../pages/login-page/login-page";
import {AuthChecker} from "../auth-checker/auth-checker";

export const App = () => {

    return (
        <main className={css.app}>
            <h1 className='visually-hidden'>Chat</h1>
            <Routes>
                <Route path={'/'}>
                    <Route index element={
                        <AuthChecker>
                            <HomePage/>
                        </AuthChecker>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'register'} element={<RegisterPage/>}/>
                </Route>
            </Routes>
        </main>
    );
}
