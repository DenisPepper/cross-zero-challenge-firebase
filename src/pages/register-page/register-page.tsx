import React, {useRef} from "react";
import css from './register-page.module.css';
import avatar from '../../assets/img/add-avatar.png';
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {doc, setDoc} from 'firebase/firestore';
import {auth, storage, db} from "../../firebase";

const EXTENSIONS = ['jpg', 'jpeg', 'png'];

const inputName: Record<'nickname' | 'email' | 'pass' | 'file', string> = {
    nickname: 'nickname',
    email: 'email',
    pass: 'password',
    file: 'file',
};

export const RegisterPage = () => {
    const avatarRef = useRef<HTMLImageElement | null>(null);

    const handleFormSubmit = async (form: FormData) => {
        const displayName = form.get(inputName.email)?.toString();
        const email = form.get(inputName.email)?.toString() ?? '';
        const password = form.get(inputName.pass)?.toString() ?? '';
        const file = form.get(inputName.file) as File;
        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            if (file) {
                const storageRef = ref(storage, displayName);
                const uploadTask = uploadBytesResumable(storageRef, file);
                uploadTask.on('state_changed',
                    undefined,
                    (err) => console.log(err),
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref)
                            .then(async (photoURL) => {
                                await updateProfile(user, {displayName, photoURL});
                                await setDoc(doc(db, 'users', user.uid), {
                                        displayName, email, photoURL, uid: user.uid
                                    }
                                );
                            })
                    }
                );
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleFileInput = (target: HTMLInputElement) => {
        const file = target.files?.item(0);
        if (!file) {
            return;
        }
        const fileName = file.name.toLowerCase();
        if (EXTENSIONS.some((ext) => fileName.endsWith(ext))) {
            !!avatarRef.current && (avatarRef.current.src = URL.createObjectURL(file));
        }
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
                        handleFormSubmit(new FormData(evt.currentTarget)).then();
                    }}>
                    <input name={inputName.nickname} type="text" placeholder='user name'/>
                    <input name={inputName.email} type="email" placeholder='email' autoComplete='off'/>
                    <input name={inputName.pass} type="password" placeholder='password' autoComplete='new-password'
                    />
                    <label className={css.file}>
                        <input
                            onInput={(evt) => handleFileInput(evt.currentTarget)}
                            className='visually-hidden'
                            name={inputName.file}
                            type="file"
                            accept='image/png, image/jpeg'
                        />
                        <img src={avatar} ref={avatarRef} alt="add your avatar" width={40} height={40}/>
                        <span>Add an avatar</span>
                    </label>
                    <button type='submit'>Sing up</button>
                </form>
                <p className={css.link}>You have an account? <a href={'/login'}>Login</a></p>
            </div>
        </section>
    );
}
