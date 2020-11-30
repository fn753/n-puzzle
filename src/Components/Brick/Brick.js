import React from 'react';
import './Brick.css';

class Brick extends React.Component {
    render() {
        // find max value for empty brick
        let maxRow = this.props.values.map(function(row){ 
            return Math.max.apply(Math, row); 
        });
        let max = Math.max.apply(null, maxRow);

        return (
            this.props.value === max ? <div className="emptybrick"></div> : <div className="brick" onClick={this.props.handleClick}>{this.props.value}</div>
        )
    }
}

export default Brick;