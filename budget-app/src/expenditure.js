import React, { Component } from 'react';
import marked from 'marked';

class Expenditure extends Component {
    constructor(props) {
        super(props);
        this.handleExpenditureDelete = this.handleExpenditureDelete.bind(this);
    }

    handleExpenditureDelete(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        this.props.onExpenditureDelete(id);
    }

    render() {
        return (
            <div>
                <div>
                    <span>{ this.props.text }</span><span>{ this.props.cost }</span>
                </div>
                <div>
                    <a href='#' onClick={ this.handleExpenditureDelete }>Delete</a>
                </div>
            </div>
        )
    }
}

export default Expenditure;