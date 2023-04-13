import css from './sidebar.module.css';
import {Navbar} from "../navbar/navbar";
import {Search} from "../search/search";
import {Chats} from "../chats/chats";

export const Sidebar = () => {
    return (
        <div className={css.sidebar}>
            <Navbar/>
            <Search/>
            <Chats/>
        </div>
    );
}
