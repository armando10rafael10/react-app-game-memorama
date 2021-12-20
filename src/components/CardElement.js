import React from 'react';

export default function CardElement(props) {
    return (
        <div onClick={() => props.handleFlip(props.card)} id={props.card.id} className={`card ${props.card.flipped ? "flip" : ""}`}>
            <div className="card-front">
                <img 
                    src={`assets/images/${props.card.icon}.jpg`} 
                    alt={props.card.icon} 
                    className="icon"
                />
            </div>
            <div className="card-back">
                <img className="iconImg" src={`assets/images/jogo.png`} alt=""/>
                {/* <h5>{props.card.icon} </h5> */}
            </div>
        </div>
    )
}