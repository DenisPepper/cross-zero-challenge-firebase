import css from './chat.module.css';
import {Messages} from "../messages/messages";
import {Input} from "../input/input";
import {signOut} from 'firebase/auth'
import {auth} from "../../firebase";
import {useContext} from "react";
import {AuthContext} from "../auth-provider/auth-provider";
import defaultAvatar from '../../assets/img/default-avatar.jpg';

export const Chat = () => {
    const {user} = useContext(AuthContext);

    const handleLogoutClick = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.log(err)
        }
    };

    return(
        <div className={css.chat}>
            <div className={css.header}>
                <span className={css.companion}>Jane</span>
                <div className={css.user}>
                    <img className={css.avatar} src={user?.photoURL ?? defaultAvatar} alt='user avatar'/>
                    <span className={css.name}>{user?.displayName}</span>
                    <button className={css.logout} type='button' onClick={handleLogoutClick}>Logout</button>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    );
}
