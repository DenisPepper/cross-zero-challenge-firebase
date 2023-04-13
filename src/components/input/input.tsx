import css from './input.module.css';
import paperClip from '../../assets/img/paper-clip.png';
import image from '../../assets/img/add-avatar.png';

export const Input = () => {

    const handleFormSubmit = (data: FormData) => {
        console.log('submit message')
    };

    return (
        <form className={css.form} onSubmit={(evt) => {
            evt.preventDefault();
            handleFormSubmit(new FormData(evt.currentTarget));
        }}>
            <textarea className={css.text} placeholder='message...'/>
            <fieldset className={css.send}>
                <img className={css.image} src={paperClip} alt={'image picker'}/>
                <label className={css.file}>
                    <img src={image} alt='file picker'/>
                    <input type='file'/>
                </label>
                <button type='submit' className={css.submit}>
                    Send
                </button>
            </fieldset>
        </form>
    );
}
