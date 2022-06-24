import React, {useState} from "react";
import style from "./MayInput.module.scss"

export const MayInput = ({inputText, type, lable}) => {
    const [changeField, setChangeField] = useState(inputText);

    return (
        <div className={style.mayInput}>
            <label htmlFor="emodji">{lable}</label>
            <input  type={type} value={changeField} onChange={e => setChangeField(e.target.value)}/>
        </div>
    )
};