import css from './search.module.css';

export const Search = () => {
    return (
        <div className={css.search}>
            <form className={css.form}>
                <input type="text" placeholder='search...'/>
            </form>
            <div className={css.chat}>
                <img className={css.image} src='https://avatars.mds.yandex.net/i?id=2ff71be50e6bc00378d273e3db4fa67d_sr-3604956-images-thumbs&n=13' alt=''/>
                <div className={css.info}>
                    <span className={css.user}>Jane</span>
                </div>
            </div>
        </div>
    );
}
