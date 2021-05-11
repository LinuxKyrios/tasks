import React, { Component } from 'react';

//Component created for control visibility of accomplished tasks

export class VisibilityController extends Component {

    render = () =>
        <div className="form-check">
            <input className="form-check-input" type="checkbox"
                checked={this.props.isChecked}
                onChange={(v) => this.props.callback(v.target.checked)} />
            <label className="form-check-label">
                Show {this.props.description}
            </label>
        </div>
}
