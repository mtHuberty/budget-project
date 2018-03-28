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
            <div className='expenditureItem'>
                <span>{ this.props.text }</span><span>{ this.props.cost }</span>
                <a className='delete' href='#' onClick={ this.handleExpenditureDelete }>Delete</a>                    
            </div>
        )
    }
}

export default Expenditure;