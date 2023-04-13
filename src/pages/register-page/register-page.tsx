import React from "react";
import css from './register-page.module.css';
import avatar from '../../assets/img/add-avatar.png';

export const RegisterPage = () => {

    const handleFormSubmit = (form: FormData) => {
        console.log('submit')
    };

    return (
        <section className={css.container}>
            <h2 className={css.title}>Register</h2>
            <div className={css.wrapper}>
                <form
                    className={css.form}
                    autoComplete='off'
                    onSubmit={(evt) => {
                        evt.preventDefault();
                        handleFormSubmit(new FormData(evt.currentTarget));
                    }}>
                    <input name='nickname' type="text" placeholder='nickname'/>
                    <input name='email-input' type="email" placeholder='email' autoComplete='username'/>
                    <input name='password' type="password" placeholder='password' autoComplete='new-password'/>
                    <label className={css.file}>
                        <input name='file' type="file"/>
                        <img src={avatar} alt="add your avatar" width={40} height={40}/>
                        <span>Add an avatar</span>
                    </label>
                    <button type='submit'>Sing up</button>
                </form>
                <p className={css.link}>You have an account? <a href={'/login'}>Login</a></p>
            </div>
        </section>
    );
}
