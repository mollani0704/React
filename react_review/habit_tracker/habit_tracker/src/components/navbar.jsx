import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        let count = this.props.habits.filter(habit => habit.count > 0).length;
        return (
            <div className="navbar">
                <div className="nav-icon">
                    <i className="fa-solid fa-leaf"></i>
                </div>
                <span className="nav-title">Habit Tracker</span>
                <div className="nav-count">{count}</div>
            </div>
        );
    }
}

export default Navbar;
