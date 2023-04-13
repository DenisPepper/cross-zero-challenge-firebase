import css from './chat.module.css';
import {Messages} from "../messages/messages";
import {Input} from "../input/input";

export const Chat = () => {
    return(
        <div className={css.chat}>
            <div className={css.header}>
                <span className={css.companion}>Jane</span>
                <div className={css.user}>
                    <img className={css.avatar} src={'https://avatars.mds.yandex.net/i?id=ea668d40a1b5f4cef64b1acbeff36791_sr-5834815-images-thumbs&n=13'} alt='user avatar'/>
                    <span className={css.name}>User</span>
                    <button className={css.logout} type='button'>Logout</button>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    );
}
