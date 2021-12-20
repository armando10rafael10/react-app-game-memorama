import React from 'react';

import './Card.css';

const card = props => {
    const clicked = (value) => {
        props.click(value);
    };

    return (
        <div className={"card" + (!props.close ? ' opened' : '') + (props.complete ? ' matched' : '')} onClick={() => clicked(props.val)}>
            <div className="front">#</div>
            <div className="back">
                {props.val}
            </div>
        </div>
    )
};

export default card;
