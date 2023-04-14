import css from './messages.module.css';
import {Message} from "../message/message";

export const Messages = () => {
    return (
        <div className={css.messages}>
            <Message
                isOwner={false}
                text={'Hello!'}
            />
            <Message
                text={'Hello, this is very long long text'}
                isOwner
            />
            <Message
                text={'Hello, this is very long long text, but it is more longer, then ather messages and a little bit more'}
                isOwner={false}
            />
            <Message
                text={'Hello, this is very long long text'}
                isOwner
            />
        </div>
    );
}
