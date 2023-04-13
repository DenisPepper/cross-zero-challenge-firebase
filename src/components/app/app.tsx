import React, {useLayoutEffect, useState} from "react";
import {initializeApp} from 'firebase/app';
import {getAuth, signInWithPopup, signOut, GoogleAuthProvider, signInWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, onValue, set} from 'firebase/database';

const firebaseConfig = {
    databaseURL: 'https://cross-zero-challenge-default-rtdb.europe-west1.firebasedatabase.app/',
    apiKey: "AIzaSyCgSl8P7AasP-Bh4PEVNzCx_q3shAxFBYU",
    authDomain: "cross-zero-challenge.firebaseapp.com",
    projectId: "cross-zero-challenge",
    storageBucket: "cross-zero-challenge.appspot.com",
    messagingSenderId: "778912674558",
    appId: "1:778912674558:web:435c3ecd83c4dea2a46baf",
    measurementId: "G-S0G7N0ZJ1G"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
auth.useDeviceLanguage();
const provider = new GoogleAuthProvider();

const db = getDatabase(firebaseApp);
const PLAYERS: Players = {cross: '', zero: ''};

type Player = 'cross' | 'zero';

type User = 'one@gamer.win' | 'two@gamer.win';

interface Players {
    cross: string;
    zero: string;
}

const User: Record<Player, User> = {
    cross: "one@gamer.win",
    zero: "two@gamer.win",
} as const;

export const App = () => {
    const [players, setPlayers] = useState<Players>(PLAYERS);
    const [stateToggler, setStateToggler] = useState(false);

    const handleAuthButtonClick = async () => {
        try {
            const {user} = await signInWithPopup(auth, provider);
            console.log(user);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSignOutButtonClick = async () => {
        try {
            await signOut(auth);
            console.log('sig out')
        } catch (err) {
            console.log(err);
        }
    };

    const handleFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const formData = new FormData(evt.currentTarget);
        const pass = formData.get('pass')?.toString() ?? '';
        const player: Player = formData.get('player')?.toString() === 'cross' ? "cross" : "zero";
        try {
            const {user} = await signInWithEmailAndPassword(auth, User[player], pass);
            const updatedPlayers = {...players, [player]: user.email};
            await set(ref(db, `players`), updatedPlayers);
            setStateToggler((prevState) => !prevState);
        } catch (err) {
            console.log(err);
        }
    };

    useLayoutEffect(() => {
        onValue(ref(db, 'players'), (snapshot) => {
            setPlayers(snapshot.val());
            console.log(snapshot.val());
        });
    }, [stateToggler]);

    return (
        <div>
            <button onClick={handleAuthButtonClick}>
                авторизоваться с помощью google
            </button>
            <button onClick={handleSignOutButtonClick}>
                sign out
            </button>
            <form method={'post'} onSubmit={handleFormSubmit} autoComplete={'off'}>
                <label htmlFor="player-select">Choose:</label>
                <select name="player" id="player-select">
                    <option value=""></option>
                    <option value="one@gamer.win">cross</option>
                    <option value="zero">zero</option>
                </select>
                <label>
                    Password
                    <input name={'pass'} type={"password"} autoComplete={'off'}/>
                </label>
                <button type={'submit'}>Login</button>
            </form>

            <ul>
                <li>cross player: {players.cross}</li>
                <li>zero player: {players.zero}</li>
            </ul>

        </div>
    );
}
