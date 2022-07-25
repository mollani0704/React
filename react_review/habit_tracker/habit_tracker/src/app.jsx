import React, {Component} from 'react';
import './app.css';
import AddForm from './components/addForm';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
    state = {
        habits: [
            {id: 1, name: 'Reading', count: 0},
            {id: 2, name: 'Running', count: 0},
            {id: 3, name: 'Coding', count: 0},
        ],
    };

    handleIncrement = habit => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits});
    };

    handleDecrease = habit => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({habits});
    };

    handleDelete = habit => {
        const habits = this.state.habits.filter(item => item.id != habit.id);
        this.setState({habits});
    };

    handleAdd = name => {
        const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
        this.setState({habits});
    };

    resetBtn = () => {
        const habits = [...this.state.habits];
        habits.forEach(habit => (habit.count = 0));
        this.setState({habits});
    };

    render() {
        return (
            <div id="container">
                <Navbar habits={this.state.habits} />
                <AddForm onAdd={this.handleAdd} />
                <Habits
                    habits={this.state.habits}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrease}
                    onDelete={this.handleDelete}
                />
                <button className="habit-resetBtn" onClick={this.resetBtn}>
                    Reset All
                </button>
            </div>
        );
    }
}

export default App;
