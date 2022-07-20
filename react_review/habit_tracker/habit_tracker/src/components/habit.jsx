import React, {Component} from 'react';

class Habit extends Component {
    handleIncremet = () => {
        // state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 해야 함.
        this.props.onIncrement(this.props.habit);
    };

    handleDecrease = () => {
        // state 오브젝트 안에 있는 count를 감소 한뒤 state를 업데이트 해야 함.
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        const {name, count} = this.props.habit;
        return (
            <>
                <li className="habit">
                    <span className="habit-name">{name}</span>
                    <span className="habit-count">{count}</span>
                    <button className="habit-button habit-increase" onClick={this.handleIncremet}>
                        <i className="fa-solid fa-square-plus"></i>
                    </button>
                    <button className="habit-button habit-decrease" onClick={this.handleDecrease}>
                        <i className="fa-solid fa-square-minus"></i>
                    </button>
                    <button className="habit-button habit-delete" onClick={this.handleDelete}>
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </li>
            </>
        );
    }
}

export default Habit;
