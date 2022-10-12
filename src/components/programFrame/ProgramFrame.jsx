import React from 'react';
import s from './ProgramFrame.module.css'
import selfStyle from "../exampleField/ExampleField.module.css";

const ProgramFrame = ({value, setValue, setCommand, engineGo, example, setError}) => {


    const onChange = (e) => {
        let val = e.currentTarget.value
        setValue(val)
        if(example.length === 0) {
            setCommand('')
        }
        setCommand(val)
    }
    const onSubmitHandler = () => {
        if(!example) {
            setError('Enter example at first')
            setValue('')
        }
        setValue('')
        engineGo()
    }
    const onEnterPressed = (e) => {
        e.key === 'Enter' && onSubmitHandler()
    }

    return (
        <div className={s.programContainer}>
            <span className={s.text}>Your code, Neo: </span>
            <div>
                <input
                    onKeyUp={onEnterPressed}
                    className={s.codeFrame}
                    value={value}
                    onChange={onChange}/>
                <button onClick={onSubmitHandler} className={selfStyle.set}>set</button>
            </div>

        </div>
    );
};

export default ProgramFrame;