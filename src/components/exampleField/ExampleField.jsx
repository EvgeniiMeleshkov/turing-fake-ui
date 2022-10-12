import React, {useState} from 'react';
import s from "../programFrame/ProgramFrame.module.css";
import selfStyle from './ExampleField.module.css'

const ExampleField = ({setExample}) => {
    const [value, setValue] = useState('')
    const onChange = (e) => {
        let val = e.currentTarget.value
        setValue(val)
    }
    const onClickHandler = () => {
        setExample(value)
        setValue('')
    }
    const onEnterPressed = (e) => {
        if(e.key === 'Enter') {
            setExample(value)
            setValue('')
        }
    }
    return (
        <div className={s.programContainer}>
            <span className={s.text}>Enter example string: </span>
            <div>
                <input onKeyUp={onEnterPressed} className={s.codeFrame} value={value} onChange={onChange}/>
                <button onClick={onClickHandler} className={selfStyle.set}>set</button>
            </div>
        </div>
    );
};

export default ExampleField;