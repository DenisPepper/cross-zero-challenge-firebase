import css from './app.module.css';
import {RegisterPage} from "../../pages/register-page/register-page";

export const App = () => {

    return (
        <main className={css.app}>
            <h1 className='visually-hidden'>Chat</h1>
            <RegisterPage/>
        </main>
    );
}
