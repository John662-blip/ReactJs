import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleTitle = (Event) => {
        this.setState({
            title: Event.target.value
        })
    }
    handleOnClickBtn = () => {
        if (this.state.title) {
            let todo = {
                id: Math.floor(Math.random() * 1000),
                title: this.state.title
            }
            toast.success('wow so easy')
            this.setState({
                title: ''
            })
            this.props.addNewTodo(todo);
        }
        else toast.error('missing title')
    }
    render() {
        return (
            <div className="add-todo">
                <input value={this.state.title}
                    onChange={(Event) => this.handleTitle(Event)}
                    type="text" />

                <button
                    onClick={() => this.handleOnClickBtn()}
                    type="button" className="Add">Add</button>
            </div>
        )
    }
}
export default AddTodo