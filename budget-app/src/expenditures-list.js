import React, { Component } from 'react';
import Expenditure from './expenditure.js';
import './styles.css';

class ExpendituresList extends Component {
    render() {
        let expenditureNodes = this.props.data.map(expenditure => {
            return (
                <Expenditure cost={ expenditure.cost } cost={ expenditure.text } key={ expenditure.id } />
            )
        });

        return (
            <div>
                { expenditureNodes }
            </div>
        )
    }
}

export default ExpendituresList;