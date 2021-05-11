import React, { Component } from 'react';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "Linux Kyrios",
            todoStuff: [{action: "Check out the arrival of Macs with the new M2 processors", done: false},
                        {action: "Start looking for a new car", done: false},
                        {action: "Buy the biggest delicous Buenos Nachos Pizza", done: true},
                        {action: "Remove ex number from my telephone", done: false}],
            newItemText: ""
        }
    }

    //Method for update new text value
    updateNewTextValue = (event) => {
        this.setState({ newItemText: event.target.value });
    }

    //Method for creating new to do task and add it to array
    createNewTodo = () => {
        if (!this.state.todoStuff
            .find(item => item.action === this.state.newItemText)) {
                this.setState({
                todoStuff: [...this.state.todoStuff,
                    { action: this.state.newItemText, done: false}],
                newItemText: ""
            });
        }
    }

    //methods for retrieving and displaying tasks in table
    toggleTodo = (todo) => this.setState({
        todoStuff:
            this.state.todoStuff.map(item => item.action === todo.action
                ? { ...item, done: !item.done } : item)
    });

    todoTableRows = () => this.state.todoStuff.map(item =>
        <tr key={ item.action }>
            <td>{ item.action }</td>
            <td>
                <input type="checkbox" checked={item.done}
                    onChange={() => this.toggleTodo(item)} />
            </td>
        </tr>);

    //Render function returns upper tab with title and button to add new task
    //Added displaing table with tasks
    render = () =>
            <div>
                <h4 className="bg-primary text-white text-center p-2">
                    Tasks List of user { this.state.userName }
                    (Task List: {this.state.todoStuff.filter(t => !t.done).length})
                </h4>
                <div className="container-fluid">
                    <div className="my-1">
                        <input classname="form-control"
                            value={this.state.newItemText}
                            onChange={this.updateNewTextValue} />
                            <p>
                                <button className="btn btn-primary mt-1"
                                onClick={this.createNewTodo}>Add new</button>
                            </p>
                    </div>
                    <table className="table table-stripped table-bordered">
                        <thead>
                            <tr><th>Description</th><th>Accomplished?</th></tr>
                        </thead>
                        <tbody>{this.todoTableRows()}</tbody>
                    </table>
                </div>
            </div>
    };
