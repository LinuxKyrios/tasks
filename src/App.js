import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "Linux Kyrios"
        }
    }

    //For dynamically change data of current user
    changeStateData = () => {
        this.setState({
            userName: this.state.userName === "Linux Kyrios" ? "Linux Atrocius" : "Linux Kyrios"
        })
    }

    render() {
        return (
            <div>
                <h4 className="bg-primary text-white text-center p2">
                    Tasks List of user { this.state.userName }
                </h4>
                <button className="btn btn-primary m-2"
                        onClick={this.changeStateData}>
                    Change user
                </button>
            </div>
        )
    };
}
