import React from "react";
import css from './login-page.module.css';

export const LoginPage = () => {

    const handleFormSubmit = (form: FormData) => {
        console.log('submit')
    };

    return (
        <section className={css.container}>
            <h2 className={css.title}>Login</h2>
            <div className={css.wrapper}>
                <form
                    className={css.form}
                    autoComplete='off'
                    onSubmit={(evt) => {
                        evt.preventDefault();
                        handleFormSubmit(new FormData(evt.currentTarget));
                    }}>
                    <input name='email-input' type="email" placeholder='email' autoComplete='username'/>
                    <input name='password' type="password" placeholder='password' autoComplete='new-password'/>
                    <button type='submit'>Sing in</button>
                </form>
                <p className={css.link}>You don`t have an account? <a href={'/login'}>Register</a></p>
            </div>
        </section>
    );
}
