import React, { Component } from 'react';

//Component created for displaying every single row of todo app

export class TodoRow extends Component {

    render = () =>
        <tr>
            <td>{ this.props.item.action}</td>
            <td>
                <input type="checkbox" checked={ this.props.item.done }
                    onChange={ () => this.props.callback(this.props.item) }
                />
            </td>
        </tr>
}
