import React, { Fragment } from 'react';
import './EndGameMaxAttemps.css'

export default function EndGameMaxAttemps(props) {
        if(!props.show) {
            return null;
        }
        return (
            <div class="end-attemps">
                <div>
                    <h5 className="end-attemps-text">¡¡ :( Your {props.game.maximoIntentosFallidos} lives are over !!</h5>
                    <h5 className="end-attemps-text-second">Total hits : {props.game.countCardsCorrect}</h5>
                    <h5 className="end-attemps-text-second">total attempts : {props.game.countCardsTotally}</h5>
                </div>
                <button className="button-play-again" onClick={props.handleRestart}>Play again</button>
                <button className="button-exit-play" onClick={props.ExitGame}>Exit to main</button>
            </div>
          );
}