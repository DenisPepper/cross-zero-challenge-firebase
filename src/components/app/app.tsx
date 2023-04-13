import css from './app.module.css';
import {HomePage} from "../../pages/home-page/home-page";

export const App = () => {

    return (
        <main className={css.app}>
            <h1 className='visually-hidden'>Chat</h1>
            <HomePage/>
        </main>
    );
}
