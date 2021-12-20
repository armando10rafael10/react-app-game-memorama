import React, { Fragment } from 'react';
import './GameOver.css';

export default function GameOver(props) {
    return (
        <div>
            {
                props.show? <div className="game-over">
                                <div class="img"></div>
                                <div>
                                    <h5 className="game-over-text">¡¡ :) Congratulation, You Win !!</h5>
                                    <h5 className="game-over-text-second">Total errors : {props.game.countCardsWrong}</h5>
                                    <h5 className="game-over-text-second">total attempts : {props.game.countCardsTotally}</h5>
                                </div>
                                <button className="button-play-again" onClick={props.handleRestart}>play again</button>
                                <button className="button-exit-play" onClick={props.ExitGame}>exit</button>
                            </div> :  <Fragment/>
            }
        </div>
    );
}