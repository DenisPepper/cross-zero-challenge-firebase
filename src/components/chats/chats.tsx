import css from './chats.module.css';

export const Chats = () => {
    return (
        <div className={css.chats} >

            <div className={css.chat}>
                <img className={css.image} src='https://avatars.mds.yandex.net/i?id=2ff71be50e6bc00378d273e3db4fa67d_sr-3604956-images-thumbs&n=13' alt=''/>
                <div className={css.info}>
                    <span className={css.user}>Jane</span>
                    <p className={css.message}>Hello, how are you</p>
                </div>
            </div>

            <div className={css.chat}>
                <img className={css.image} src='https://avatars.mds.yandex.net/i?id=4e435c9d633a24dc4ca07524a6d5fc7e_sr-7664017-images-thumbs&n=13' alt=''/>
                <div className={css.info}>
                    <span className={css.user}>Helen</span>
                    <p className={css.message}>Well, see you soon, boy...</p>
                </div>
            </div>

            <div className={css.chat}>
                <img className={css.image} src='https://avatars.mds.yandex.net/i?id=92724d2ad6cc5d560eaccb3383a70a5f_sr-4568591-images-thumbs&n=13' alt=''/>
                <div className={css.info}>
                    <span className={css.user}>Rasty</span>
                    <p className={css.message}>Wazuuup, brooooo ???</p>
                </div>
            </div>
        </div>
    );
}
