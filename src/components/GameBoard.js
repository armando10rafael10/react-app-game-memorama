import React from 'react';
import CardElement from './CardElement';
import GameOver from './GameOver';
import './GameBoard.css';

export default function GameBoard(props) {
    const panel = <div className="panel-card">
                    <div className="info-of-game">
                        <div className="correctas">
                            <h5>correctas:{props.game.countCardsCorrect} </h5>
                        </div>
                        <div className="errores">
                           <h5>errores:{props.game.countCardsWrong}</h5>
                        </div>
                        <div className="total-intentos">
                            <h5>total intentos: {props.game.countCardsTotally}</h5>
                        </div>
                        <div className="boton">
                            <button className="boton-change-cards" onClick={props.reiniciar}>Cambiar Tarjetas</button>
                        </div>
                        <div className="lifes-form">
                            <h5>Vidas :</h5>
                        </div>
                        <div className="content-circles-form">
                            {props.game.arregloCaracteres.map( (i,j)=>{
                                return <div key={j} className="circle-form">
                                    <div className="circle-form-text">{j+1}</div>
                                </div>;
                            })}
                        </div>
                    </div>
                    <br/>
                    <div id="gameBoard">
                        {props.cards.map((card, index) => 
                             <CardElement handleFlip={props.handleFlip} key={index} card={card}></CardElement>
                        )}
                </div>;
    </div>;

    return (
        <div>
             { props.gameOver? <GameOver show={props.gameOver} handleRestart={props.reiniciar} game={props.game} ExitGame={props.ExitGame}/> : panel }
        </div>
    )
}