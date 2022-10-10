import React, {useState} from 'react';
import s from './cell.module.css'

const Cell = (props) => {
    const [hoveredItemValue, setHoveredItemValue] = useState(props.value)

    const onItemClickHandler = (i) => {
        props.onChangeValue(i)
    }

    let selectedItem = props.items.find(i => i.id === props.value?.id)
    let hoveredItem = props.items.find(i => i.id === hoveredItemValue?.id)

    const onKeyHandler = (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].id === hoveredItemValue?.id) {
                    const pretendentElement = e.key === 'ArrowRight'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChangeValue(pretendentElement)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChangeValue(props.items[0])
            }
        }
    }
    return (
        <div style={{display: 'flex', flexDirection: 'row'}} onKeyUp={onKeyHandler}
             // className={props.selected !== null ? s.selected : s.cell}
        >
            {props.items.map(i => <div
                onMouseEnter={() => {
                    setHoveredItemValue(i)
                }}
                onClick={() => onItemClickHandler(i)}
                className={s.cell + ' ' + (hoveredItem === i ? s.selected : '')}
                key={i.id}
            >{i.char}</div>)}
        </div>
    );
};

export default Cell;