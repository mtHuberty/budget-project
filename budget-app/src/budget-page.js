import React, { Component } from 'react';
import axios from 'axios';
import ExpendituresList from './expenditures-list';
import ExpenditureForm from './expenditure-form';
import CategoryList from './category-list';
import CategoryForm from './category-form';
import './styles.css';
import { Jumbotron, Row, Col } from 'reactstrap';

class BudgetPage extends Component {
    constructor(props) {
        super(props);
        this.state = { expenditureData: [], categoryData: [] };
        this.loadExpenditures = this.loadExpenditures.bind(this);
        this.handleExpenditureAdd = this.handleExpenditureAdd.bind(this);
        this.handleExpenditureDelete = this.handleExpenditureDelete.bind(this);
        this.handleCategoryAdd = this.handleCategoryAdd.bind(this);
    }

    loadExpenditures() {
        axios.get(this.props.expUrl)
        .then(res => {
            this.setState({ expenditureData: res.data });
        })
    }

    loadCategories() {
        axios.get(this.props.catUrl)
        .then(res => {
            this.setState({ categoryData: res.data });
        })
    }

    handleExpenditureAdd(expenditure) {
        let expenditures = this.state.expenditureData;
        expenditure.id = Date.now();
        let newExpenditures = [expenditure].concat(expenditures);
        this.setState({ expenditureData: newExpenditures });
        axios.post(this.props.expUrl, expenditure)
        .then(function(res) {
            if(res instanceof Error) {
                console.error(res);
            }
        })
        .catch(err => {
            console.error(err);
            console.log('Axios.post error!')
            this.setState({ expenditureData: expenditures });
        })
    }

    handleExpenditureDelete(id) {
        let expenditures = this.state.expenditureData;
        let newExpenditures = expenditures.filter((x) => {
            return x._id !== id;
        });
        this.setState({ expenditureData: newExpenditures });
        axios.delete(`${this.props.expUrl}/${id}`)
        .then(res => {
            console.log(res.data.message);
        })
        .catch(err => {
            console.log(err);
            this.setState({ expenditureData: expenditures })
        })
    }

    handleCategoryAdd(category) {
        let categories = this.state.categoryData;
        // category.id = Date.now();
        let newCategories = categories.concat([category]);
        this.setState({ categoryData: newCategories });
        axios.post(this.props.catUrl, category)
        .then(res => {
            if(res instanceof Error) {
                console.log(`Error: ${res}`)
            } else {
                console.log(`Added!\n${JSON.stringify(res.data, null, "\t")}`)
            }
        })
        .catch(err => {
            console.log(`Error: ${err}`);
            this.setState({ categoryData: categories});
        })
    }

    componentDidMount() {
        this.loadExpenditures();
        setInterval(this.loadExpenditures, this.props.pollInterval);
    }

    render() {
        return (
            <div className='jumbotron row'>
                <div className='col-md-4 center'>
                    <CategoryList />
                    <CategoryForm onCategoryAdd={ this.handleCategoryAdd } />
                </div>
                <div className='col-md-4 center'>
                    <h1>Budget Page</h1>
                    <ExpenditureForm onExpenditureAdd={ this.handleExpenditureAdd } />
                    <ExpendituresList data={ this.state.expenditureData } onExpenditureDelete={ this.handleExpenditureDelete } />
                </div>
                <div className='col-md-4 center'>
                    Test
                </div>
            </div>
        )
    }
}

export default BudgetPage;