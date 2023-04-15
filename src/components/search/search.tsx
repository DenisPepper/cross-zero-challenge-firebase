import css from './search.module.css';
import {useState} from "react";
import {collection, query, where, getDocs} from 'firebase/firestore';
import {db} from '../../firebase';
import {DocumentData} from "@firebase/firestore";

export const Search = () => {
    const [partnerName, setPartnerName] = useState('');
    const [partner, setPartner] = useState<DocumentData | null>(null);

    const handleSearch = async () => {
        const q = query(
            collection(db, 'users'),
            where('displayName', '==', partnerName)
        );
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setPartner(doc.data());
                console.log(doc.data());
            });
        } catch (err) {
            console.log(err)
        }
    };

    const handleSelect = async () => {
        console.log('handleSelect');
    };

    return (
        <div className={css.search}>
            <form
                className={css.form}
                onSubmit={(evt) => {
                    evt.preventDefault();
                    handleSearch().then();
                }}
            >
                <input
                    type="text"
                    placeholder='search...'
                    onChange={(evt) => setPartnerName(evt.currentTarget.value)}
                />
            </form>
            {partner &&
                <div className={css.chat}>
                    <img className={css.image}
                         src={partner?.photoURL}
                         alt=''/>
                    <div className={css.info}>
                        <span className={css.user}>{partner?.displayName}</span>
                    </div>
                </div>
            }

        </div>
    );
}
