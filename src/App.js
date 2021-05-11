import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

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
    updateNewTextvalue = (event) => {
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

    //Render function returns upper tab with title and button to add new task
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
                </div>
            </div>
    };
