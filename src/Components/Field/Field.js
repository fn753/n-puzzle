import React from 'react';
import './Field.css';
import Brick from '../Brick/Brick.js';
import Game from '../../util/game.js';

class Field extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const move = Game.moveBrick(e.target.firstChild.data, this.props.values, this.props.col);
        this.props.move(move);
    }
    
    render() {
        return (
        <div id="field">
         
        {this.props.values.map(rows => { return <div class="field-row">{rows.map(value => {
                return <Brick value={value} values={this.props.values} handleClick={this.handleClick}/>})}</div>
        })}
        </div>
        )
    }
}

export default Field;