import React from "react";
import css from './login-page.module.css';
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";
import {Link, useNavigate} from "react-router-dom";

const inputName: Record<'email' | 'pass', string> = {
    email: 'email',
    pass: 'password',
};

export const LoginPage = () => {
    const navigate = useNavigate();

    const handleFormSubmit = async (form: FormData) => {
        const email = form.get(inputName.email)?.toString() ?? '';
        const password = form.get(inputName.pass)?.toString() ?? '';
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
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
                        handleFormSubmit(new FormData(evt.currentTarget)).then();
                    }}>
                    <input name={inputName.email} type="email" placeholder='email' autoComplete='username'/>
                    <input name={inputName.pass} type="password" placeholder='password' autoComplete='current-password'/>
                    <button type='submit'>Sing in</button>
                </form>
                <p className={css.link}>You don`t have an account? <Link to={'/register'}>Register</Link></p>
            </div>
        </section>
    );
}
