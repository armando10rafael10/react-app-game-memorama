import React, {Component} from 'react';

import Card from  '../../components/Card/Card';
import './Game.css';

let array, i, tmp, current, length;
for (array = [], i = 0; i < 99; ++i) {
    array[i] = i+1;
}
length = array.length;
if (length) {
    while (--length) {
        current = Math.floor(Math.random() * (length + 1));
        tmp = array[current];
        array[current] = array[length];
        array[length] = tmp;
    }
}
array.sort(() => {
    return Math.random() - 0.5;
});
let finalArray = array.slice(0, 8);

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: finalArray,
            duplicatedValues: [],
            randomizedValues: [],
            finalizedValues: [],
            openedValues: []
        };
        this.start();
    }

    handleClick = (val, index) => {
        console.log("handle-click metodo")
        if(this.state.openedValues.length === 2){
            setTimeout(() => {
                this.check()
            },750)
        } else {
            let value = {
                val,
                index
            };
            let finalizedValues = this.state.finalizedValues;
            let values = this.state.openedValues;
            finalizedValues[index].close = false;
            values.push(value);
            this.setState({
                openedValues: values,
                finalizedValues: finalizedValues
            });
            if(this.state.openedValues.length === 2){
                setTimeout(() => {
                    this.check()
                },750)
            }
        }
    };

    check = () => {
        console.log("check metodo")
        let finalizedValues = this.state.finalizedValues;
        if ((this.state.openedValues[0].val === this.state.openedValues[1].val) && (this.state.openedValues[0].index !== this.state.openedValues[1].index)){
            console.log("check -if -metodo")
            finalizedValues[this.state.openedValues[0].index].complete = true;
            finalizedValues[this.state.openedValues[1].index].complete = true;
        } else {
            finalizedValues[this.state.openedValues[0].index].close = true;
            finalizedValues[this.state.openedValues[1].index].close = true;
        }
        this.setState({
            finalizedValues,
            openedValues: []
        });
    };

    start = () => {
        let finalizedValues = [];
        console.log("start metodo")
        this.state.duplicatedValues = this.state.values.concat(this.state.values);
        this.state.randomizedValues = this.shuffle(this.state.duplicatedValues);
        this.state.randomizedValues.map(value => {
            finalizedValues.push({
                value,
                close: true,
                complete: false,
                fail: false
            })
        });
        this.state.finalizedValues = finalizedValues;
    };

    shuffle = array => {
        console.log("shuffle metodo")
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    render() {

        return (
            <div className="game">
                {
                    this.state.finalizedValues.map((val, index) => {
                        return <Card
                            val={val.value}
                            click={() => {this.handleClick(val.value, index)}}
                            close={val.close}
                            key={index}
                            complete={val.complete} />
                    })
                }
            </div>
        )
    }
}

export default Game;
