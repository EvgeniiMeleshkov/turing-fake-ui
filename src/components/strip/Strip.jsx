import React, {useState} from 'react';
import Cell from "../cell/cell";

const Strip = () => {
    const example = 'hello world'

    const [strip, setStrip] = useState(example.split(''))
    const prettyStrip = strip.map((el, i) => {
        return {id: i, char: el === ' ' ? '_' : el}
    })

    const [val, setVal] = useState(0)


    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <Cell value={val} onChangeValue={setVal} items={prettyStrip}/>
        </div>
    );
};

export default Strip;