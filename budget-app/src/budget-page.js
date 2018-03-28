import React, { Component } from 'react';
import axios from 'axios';
import ExpendituresList from './expenditures-list';
import ExpenditureForm from './expenditure-form';
import BudgetList from './budget-list';
import './styles.css';
import { Jumbotron, Row, Col } from 'reactstrap';

class BudgetPage extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadExpenditures = this.loadExpenditures.bind(this);
        this.handleExpenditureAdd = this.handleExpenditureAdd.bind(this);
        this.handleExpenditureDelete = this.handleExpenditureDelete.bind(this);
    }

    loadExpenditures() {
        axios.get(this.props.url)
        .then(res => {
            this.setState({ data: res.data });
        })
    }

    handleExpenditureAdd(expenditure) {
        let expenditures = this.state.data;
        expenditure.id = Date.now();
        let newExpenditures = expenditures.concat([expenditure]);
        this.setState({ data: newExpenditures });
        axios.post(this.props.url, expenditure)
        .then(function(res) {
            if(res instanceof Error) {
                console.error(res);
            }
        })
        .catch(err => {
            console.error(err);
            console.log('Axios.post error!')
            this.setState({ data: expenditures });
        })
    }

    handleExpenditureDelete(id) {
        let expenditures = this.state.data;
        let newExpenditures = expenditures.filter((x) => {
            return x._id !== id;
        });
        this.setState({ data: newExpenditures });
        axios.delete(`${this.props.url}/${id}`)
        .then(res => {
            console.log(res.data.message);
        })
        .catch(err => {
            console.log(err);
            this.setState({ data: expenditures })
        })
    }

    componentDidMount() {
        this.loadExpenditures();
        setInterval(this.loadExpenditures, this.props.pollInterval);
    }

    render() {
        return (
            <div className='jumbotron main row'>
                <div className=''>
                    <BudgetList />
                </div>
                <div className='col-md-4'>
                    <h1>Budget Page</h1>
                    <ExpenditureForm onExpenditureAdd={ this.handleExpenditureAdd } />
                    <ExpendituresList data={ this.state.data } onExpenditureDelete={ this.handleExpenditureDelete } />
                </div>
            </div>
        )
    }
}

export default BudgetPage;