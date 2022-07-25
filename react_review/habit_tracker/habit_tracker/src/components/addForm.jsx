import React, {Component} from 'react';

class AddForm extends Component {
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        let name = this.inputRef.current.value;
        name && this.props.onAdd(this.inputRef.current.value);
        this.inputRef.current.value = '';
    };

    render() {
        return (
            <form className="habit-addForm" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} className="habit-input" placeholder="Habit"></input>
                <button className="habit-addBtn">Add</button>
            </form>
        );
    }
}

export default AddForm;
