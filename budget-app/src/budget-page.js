import React, { Component } from 'react';
import ExpendituresList from './expenditures-list';
import ExpenditureForm from './expenditure-form';
import DATA from './data';
import './styles.css';
import { Jumbotron, Row } from 'reactstrap';

class BudgetPage extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {
        return (
            <div className='jumbotron main row'>
                <div className='col-md-4'>
                    <h1>Budget Page</h1>
                    <ExpenditureForm />
                    <ExpendituresList data={ DATA } />
                </div>
            </div>
        )
    }
}

export default BudgetPage;