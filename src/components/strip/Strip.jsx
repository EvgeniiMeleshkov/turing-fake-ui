import React from 'react';
import s from './Strip.module.css'
import Cell from "../cell/cell";

const Strip = ({val, example}) => {
    const strip = example.split('')
    const prettyStrip = strip.map((el, i) => {
        return {id: i, char: el === ' ' ? '_' : el}
    })

    return (
        <div className={s.strip}>
            <Cell value={val} items={prettyStrip}/>
        </div>
    );
};

export default Strip;