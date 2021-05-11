import React, { Component } from 'react';

//Component created for displaying top header of todo app

export class TodoBanner extends Component {
    render = () =>
        <h4 className="bg-primary text-white text-center -p2">
            Tasks List of user { this.props.name }
            (Task List: {this.props.tasks.filter(t => !t.done).length})
        </h4>
}
