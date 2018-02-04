import React, { Component } from 'react';
import './Timer.css';
class Button extends Component {
    state = {}
    render() {
        return(
            <button className={ this.props.btn + ' ' +this.props.btnStyle} onClick={this.props.ev} disabled={this.props.disable}>{this.props.name}</button>
        )
    }
}

export default Button;
