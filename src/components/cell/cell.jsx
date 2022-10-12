import React from 'react';
import s from './cell.module.css'

const Cell = (props) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}
              //className={props.selected !== null ? s.selected : s.cell}
        >
            {props.items.map(i => <div
                className={s.cell + ' ' + (props.value === i.id ? s.selected : '')}
                key={i.id}
            >{i.char}</div>)}
        </div>
    );
};

export default Cell;