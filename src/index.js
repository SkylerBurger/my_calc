import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Screen(props) {
    return (
        <div className='screen'>
            <p>{ props.result ? props.result : props.function }</p>
        </div>
    );
}

function Key(props) {
    return (
        <div className='key' value={props.value} onClick={ props.onClick }>
            <p>{ props.value }</p>
        </div>
    )
}

class Keyboard extends React.Component {
    renderKey(v) {
        return (
            <Key
                value={v}
                onClick={() => this.props.onClick(v)}
            />
        );
    }
    
    render() {
        return (
            <>
                {/* TODO: DRY this up */}
                <div className='row'>
                    { this.renderKey(1) }
                    { this.renderKey(2) }
                    { this.renderKey(3) }
                    { this.renderKey("-") }
                </div>
                <div className='row'>
                    { this.renderKey(4) }
                    { this.renderKey(5) }
                    { this.renderKey(6) }
                    { this.renderKey("+") }
                </div>
                <div className='row'>
                    { this.renderKey(7) }
                    { this.renderKey(8) }
                    { this.renderKey(9) }
                    { this.renderKey("x") }
                </div>
                <div className='row'>
                    { this.renderKey("C") }
                    { this.renderKey(0) }
                    { this.renderKey("=") }
                    { this.renderKey("/") }
                </div>
            </>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            function: null,
            operand_1: 0,
            operand_2: 0,
            result: 0,
        };
    }

    handleClick(e) {
        console.log(e)
        if (e === "-" || e === "+" || e === "x" || e === "/") {
            this.setState({
                function: e,
                operand_1: this.state.result,
                result: 0,
            });
        } else if (e === "=") {
            let product;
            const second_value = this.state.operand_2 ? this.state.operand_2 : this.state.result;
            if (this.state.function === "+") {
                product = this.state.operand_1 + second_value;
            } else if (this.state.function === "-") {
                product = this.state.operand_1 - second_value;
            } else if (this.state.function === "x") {
                product = this.state.operand_1 * second_value;
            } else if (this.state.function === "/") {
                product = this.state.operand_1 / second_value;
            }
            this.setState({
                result: product,
                operand_1: product,
                operand_2: this.state.result,
            });
        } else if (e === "C") {
            this.setState({
                function: null,
                operand_1: 0,
                operand_2: 0,
                result: 0,
            });
        } else {
            this.setState({
                result: this.state.result * 10 + e,
            });
        }
    }

    render() {
        return (
            <div className='calculator'>
                { Screen(this.state) }
                <Keyboard onClick={(i) => this.handleClick(i)} />
            </div>
        )
    }
}


ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);