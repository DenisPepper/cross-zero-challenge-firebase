import css from './home-page.module.css';
import {Sidebar} from "../../components/sidebar/sidebar";
import {Chat} from "../../components/chat/chat";

export const HomePage = () => {
    return (
        <section className={css.main}>
            <div className={css.container}>
                <Sidebar />
                <Chat/>
            </div>
        </section>
    );
}
