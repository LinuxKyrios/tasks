import React, { Component } from 'react';
import { TodoBanner } from "./TodoBanner";
import { TodoCreator } from "./TodoCreator";
import { TodoRow } from "./TodoRow";
import { VisibilityController } from "./VisibilityController";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "Linux Kyrios",
            todoStuff: [{action: "Check out the arrival of Macs with the new M2 processors", done: false},
                        {action: "Start looking for a new car", done: false},
                        {action: "Buy the biggest delicous Buenos Nachos Pizza", done: true},
                        {action: "Remove ex number from my telephone", done: false}],
            showCompleted: true
        }
    }

    //Method for update new text value
    updateNewTextValue = (event) => {
        this.setState({ newItemText: event.target.value });
    }

    //Method for creating new to do task and add it to array
    createNewTodo = (task) => {
        if (!this.state.todoStuff.find(item => item.action === task)) {
                this.setState({
                todoStuff: [...this.state.todoStuff, { action: task, done: false}],
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

    todoTableRows = (doneValue) => this.state.todoStuff
        .filter(item => item.done === doneValue).map(item =>
            <TodoRow key={item.action} item={item} callback={this.toggleTodo} />)

    //Render function returns upper tab with title and button to add new task
    //Added displaing table with tasks
    render = () =>
            <div>
                <TodoBanner name={this.state.userName} tasks={this.state.todoStuff} />
                <div className="container-fluid">
                    <TodoCreator callback={this.createNewTodo} />
                    <table className="table table-stripped table-bordered">
                        <thead>
                            <tr><th>Description</th><th>Accomplished?</th></tr>
                        </thead>
                        <tbody>{ this.todoTableRows(false) }</tbody>
                    </table>
                    <div className="bg-secondary text-white text-center p-2">
                        <VisibilityController description="completed tasks"
                            isChecked={this.state.showCompleted}
                            callback={(checked) =>
                            this.setState({ showCompleted: checked})} />
                    </div>

                    {this.state.showCompleted &&
                        <table className="table table-stripped table-bordered">
                            <thead>
                                <tr><th>Description</th><th>Is completed?</th></tr>
                            </thead>
                            <tbody>{this.todoTableRows(true)}</tbody>
                        </table>
                    }
                </div>
            </div>
    };
