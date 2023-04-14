import css from './message.module.css';

interface MessageProps {
    isOwner: boolean;
    text: string;
}

export const Message = (props: MessageProps) => {
    const {isOwner, text} = props;

    return (
        <div className={`${css.message} ${isOwner && css.owner}`}>
            <div className={css.info}>

                <img className={css.user_image}
                     src='https://avatars.mds.yandex.net/i?id=2a00000179fc5a1c48815b62f752de84bdd0-3560974-images-thumbs&n=13&exp=1'
                     alt='user image'/>

                <span className={css.time}>11:05:00</span>
            </div>

            <div className={css.content}>
                <p className={css.text}>
                    {text}
                </p>
                <img
                    src='https://avatars.mds.yandex.net/i?id=f171dd00b106ceb2cce8cc6192d52418_sr-5297754-images-thumbs&n=13'
                    alt='message content image'
                />
            </div>
        </div>
    );
}

