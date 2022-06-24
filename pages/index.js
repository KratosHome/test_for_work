import React, {useState, useEffect} from 'react';
import AddContact from "../components/AddContact/AddContact";
import {MayInput} from "../components/MayInput/MayInput";
import dynamic from "next/dynamic";
import {directory} from "../API/directory";



export default function Home() {



    const [localStoregContact, setlocalStoregContact] = useState(directory)
    const [emodjiText, setEmodji] = useState("")
    const [name1, setName] = useState("")
    const [telephone1, setTelephone] = useState("")

    useEffect(() => {
        window.localStorage.setItem('contact', JSON.stringify(localStoregContact));
    }, [localStoregContact]);


    const hendelSubmit = (e) => {
        e.preventDefault();
        setlocalStoregContact([...localStoregContact, {
            id: Math.random(),
            emoji: emodjiText,
            name: name1,
            telephone: telephone1
        }])
        setTelephone("")
        setName("")
        setEmodji("")
    }

    const deleteContact = (contact) => {
        setlocalStoregContact(localStoregContact.filter(p => p !== contact));
    }

    return (
        <div className="appContainer">
            <h1>contact list</h1>
            <AddContact
                hendelSubmit={hendelSubmit}
                emodjiText={emodjiText}
                setEmodji={setEmodji}
                name1={name1}
                setName={setName}
                telephone1={telephone1}
                setTelephone={setTelephone}
            />
            {localStoregContact.length > 0 ? localStoregContact.map(item =>
                    <div key={item.id} className="container">
                        <MayInput inputText={item.emoji} typ={"text"} lable={"emoji"}/>
                        <MayInput inputText={item.name} type={"text" } lable={"name"}/>
                        <MayInput inputText={item.telephone} type={"number"} lable={"telephone"}/>
                        <button onClick={() => deleteContact(item)}>delete</button>
                    </div>
                )
                :
                <h2>Now contact</h2>
            }
        </div>
    )
}
