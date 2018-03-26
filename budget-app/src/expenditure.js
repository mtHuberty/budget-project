import React, { Component } from 'react';
import marked from 'marked';

class Expenditure extends Component {
    render() {
        return (
            <div>
                <span>{ this.props.text }</span><span>{ this.props.cost }</span>
            </div>
        )
    }
}

export default Expenditure;