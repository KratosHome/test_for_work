import React from 'react';
import style from "./AddContact.module.scss"

const AddContact = ({hendelSubmit, emodjiText, setEmodji, name1, setName, telephone1, setTelephone}) => {
    return (
        <>
            <form onSubmit={hendelSubmit} className={style.containerAddContact}>
                <div className={style.containerInputAddContact}>
                    <label htmlFor="emodji">emodji</label>
                    <input id="emodji" type="text" value={emodjiText} onChange={e => setEmodji(e.target.value)}/>
                </div>
                <div className={style.containerInputAddContact}>
                    <label htmlFor="name">name</label>
                    <input id="name" type="text" value={name1} onChange={e => setName(e.target.value)}/>
                </div>
                <div className={style.containerInputAddContact}>
                    <label htmlFor="telephone">telephone</label>
                    <input id="telephone" type="number" value={telephone1}
                           onChange={e => setTelephone(e.target.value)}/>
                </div>
                <button>add contact</button>
            </form>
        </>
    );
};

export default AddContact;