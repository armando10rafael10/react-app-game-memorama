import React, { Fragment, useEffect, useState } from 'react';
import EndGameMaxAttemps from './components/EndGameMaxAttemps';
import GameBoard from './components/GameBoard';
import game from './game/game';
import './App.css';

export default function App() {
    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState([]);
    const [hiddenButtonInit,HideButtonInit] = useState(false);

    useEffect( () => {
        setCards(game.createCardsFromTechs());
    },[] )

    function restart() {
        game.clearCards();
        setCards(game.createCardsFromTechs());
        setGameOver(false);
        game.reiniciaValues();
        alert("¿continue?")
    }

    function handleFlip(card) {
        game.flipCard(card.id, () => {
            setGameOver(true);// GameOverCallBack();
        }, () => {
            setCards([...game.cards]);// noMatchCallBack();
        })
        setCards([...game.cards]);
    }

    function InitGameMain(){
        HideButtonInit(true);
    }

    function ExitGame(){
        restart();
        HideButtonInit(false); 
    }

    const endOfGameAttemps = game.endGame;
    return (
        <div>
            <div className="title-Main">
                  <h1>VERBS IRREGULARS</h1>
            </div>
            { 
            hiddenButtonInit? 
                <GameBoard handleFlip={handleFlip} 
                           cards={cards} 
                           game={game} 
                           reiniciar={restart} 
                           gameOver={gameOver} 
                           ExitGame={ExitGame}>
                </GameBoard> : <button id="restart" 
                                       onClick={InitGameMain}>Start Game</button> 
            }
            { endOfGameAttemps? 
                <EndGameMaxAttemps show={game.endGame} 
                                   game={game} 
                                   handleRestart={restart} 
                                   ExitGame={ExitGame}/> : <Fragment/>} 
        </div>
    )
}