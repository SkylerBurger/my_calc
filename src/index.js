import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Screen(props) {
    return (
        <div className='screen'>
            <p>{ props.result ? props.result : props.function }</p>
        </div>
    )
}

function Key(props) {
    return (
        <div className='key' onClick={ props.onClick }>
            <p>{ props.value }</p>
        </div>
    )
}

class Keyboard extends React.Component {
    render() {
        return (
            <div className='row'></div>
            <div className='row'></div>
            <div className='row'></div>
            <div className='row'></div>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.keys = {

        }
        this.state = {
            function: null,
            result: null,
        };
    }

    render() {
        return (
            <div className='calculator'>
                { Screen(this.state) }
            </div>
        )
    }
}


ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);