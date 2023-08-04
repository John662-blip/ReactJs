import React from "react";
import './listTodo.scss'

class ListTodos extends React.Component {

    state = {
        listTodo: [
            { id: "todo1", title: "Doing homework" },
            { id: 'todo2', title: 'Making video' }
        ]

    }


    render() {
        let { listTodo } = this.state
        return (
            <div className="list-todo-container">
                <div className="add-todo">
                    <input type="text" />
                    <button type="button" className="Add">Add</button>
                </div>
                <div className="list-todo-content">
                    {listTodo.length > 0 && listTodo && listTodo.map((item, index) => {
                        return (
                            <>
                                <div key={item.id} className="todo-child" >
                                    <span>{item.title}</span>
                                    <button className="Edit">Edit</button>
                                    <button className="Delete">Delete</button>
                                </div>

                            </>
                        )
                    })}
                </div>

            </div>

        )
    }
}
export default ListTodos;