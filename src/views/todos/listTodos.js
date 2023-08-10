import React from "react";
import AddTodo from "./AddTodo";
import './listTodo.scss'
import { toast } from "react-toastify";

class ListTodos extends React.Component {

    state = {
        listTodo: [
            { id: "todo1", title: "Doing homework" },
            { id: 'todo2', title: 'Making video' }
        ],
        editTodo: {}

    }
    addNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
    }
    deleteTodo = (todo) => {
        let currentList = this.state.listTodo;
        currentList = currentList.filter((item) => item.id !== todo.id)
        this.setState({
            listTodo: currentList
        })
        toast.success('delete success')
    }
    handelEditTodo = (todo) => {
        let { editTodo, listTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;


        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = listTodo
            let objIndex = listTodoCopy.findIndex((obj => obj.id === todo.id));
            //Update object's name property.
            listTodoCopy[objIndex].title = editTodo.title
            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            return
        }
        //Edit
        this.setState({
            editTodo: todo
        })

    }
    handleOnchangeEditTodo = (event) => {

        let currentEditTodo = this.state.editTodo
        currentEditTodo.title = event.target.value
        this.setState({
            editTodo: currentEditTodo
        })
    }

    render() {
        let { listTodo, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <>
                <p>
                    Hello world reactjs hung
                </p>
                <div className="list-todo-container">
                    <AddTodo addNewTodo={this.addNewTodo} />
                    <div className="list-todo-content">
                        {listTodo.length > 0 && listTodo && listTodo.map((item, index) => {
                            return (
                                <div key={index} className="todo-child" >
                                    {(isEmptyObj !== true && editTodo.id === item.id) ?
                                        <span>{index + 1}<input
                                            onChange={(event) => this.handleOnchangeEditTodo(event)}
                                            value={editTodo.title} /></span> :

                                        <span  >{index + 1}-{item.title}</span>

                                    }

                                    <button
                                        onClick={() => this.handelEditTodo(item)}
                                        className="Edit">
                                        {(isEmptyObj === false && editTodo.id) === item.id ?
                                            "close" : "Edit"}</button>
                                    <button
                                        onClick={() => this.deleteTodo(item)}
                                        className="Delete">Delete</button>
                                </div>
                            )
                        })}
                    </div>

                </div >
            </>

        )
    }
}
export default ListTodos;