import React, { Component } from 'react';
import Button from './Button';
import './Timer.css';



class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sec: 0,
            min: 0,
            milliSec: 0,
            startButtonState: '',
            stopButtonState: 'disabled',
            resetButtonState: 'disabled'
        }

    }
    startButtonHandler = () => {
        this.timerId = setInterval(() => {
            if (this.state.milliSec === 1000) {
                this.setState({
                    milliSec: 0,
                    sec: this.state.sec + 1
                })
            }
            if (this.state.sec === 60) {
                this.setState({
                    min: this.state.min + 1,
                    sec: 0
                })
            }

            this.setState({
                milliSec: (this.state.milliSec + 1),
                startButtonState: 'disabled',
                stopButtonState: '',
                resetButtonState: ''
            })
        }, 1);

    }
    stopButtonHandler = () => {
        clearInterval(this.timerId);
        this.setState({
            startButtonState: '',
            stopButtonState: 'disabled',
            resetButtonState: ''
        })

    }
    resetButtonHandler = () => {
        this.setState({
            milliSec: 0, sec: 0, min: 0,
            resetButtonState: ''
        });

    }
    render() {
        return (

            <div className='container'>
                <div className='heading'>
                    <h1>Stop Watch using React</h1>
                </div>
                <div className="i-am-centered">
                    <div className='timer-div'>
                        
                        <h2> {(this.state.min) <= 9 ? `0${this.state.min}` : (this.state.min)}: {(this.state.sec) <= 9 ? `0${(this.state.sec)}` : (this.state.sec)}: {(this.state.milliSec <= 9) ? `00${this.state.milliSec}` : ((this.state.milliSec) <= 99 ? `0${this.state.milliSec}` : this.state.milliSec)}</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className=' col'>
                        <Button btn={'btn'} btnStyle={'btn-success'} name='start' ev={this.startButtonHandler} disable={this.state.startButtonState} />
                    </div>
                    <div className=' col'>
                        <Button btn={'btn'} btnStyle={'btn-danger'} name='stop' ev={this.stopButtonHandler} disable={this.state.stopButtonState} />
                    </div>
                    <div className=' col'>
                        <Button btn={'btn'} btnStyle={'btn-primary'} name='reset' ev={this.resetButtonHandler} disable={this.state.resetButtonState} />
                    </div>
                </div>
            </div>

        );
    }
}
export default Timer;