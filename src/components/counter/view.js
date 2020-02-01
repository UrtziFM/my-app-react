import React, {Component} from 'react';

export class CounterCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    changecounter(n) {
        this.setState({counter: n})
    }

    restart() {
        this.changecounter(this.state.counter - 1)
    }

    add() {
        this.changecounter(this.state.counter + 1)
    }

    render() {
        return (
            <div>
                <a
                    href="#"
                    onClick={(event) => {
                    this.restart()
                }}>-</a>
                &nbsp;
                {this.state.counter}
                &nbsp;
                <a
                    href="#"
                    onClick={(event) => {
                    this.add()
                }}>+</a>
            </div>
        )
    }
}

export default CounterCard
