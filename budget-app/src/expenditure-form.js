import React, { Component } from 'react';
import './styles.css';

class ExpenditureForm extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '', cost: '' };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCostChange = this.handleCostChange.bind(this);        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(e) {
        this.setState({ text: e.target.value });
    }

    handleCostChange(e) {
        this.setState({ cost: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let text = this.state.text.trim();
        let cost = this.state.cost.trim();
        if (!text || !cost) {
            return;
        }
        this.props.onExpenditureAdd({ text: text, cost: cost });
        this.setState({ text: '' });
        this.setState({ cost: '' });
        this.firstField.focus();
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input
                    ref={(input) => { this.firstField = input; }}
                    id='expenditureText'
                    type='text'
                    placeholder='Type something'
                    value={ this.state.text }
                    onChange={ this.handleTextChange}
                />
                <input 
                    id='expenditureCost'
                    type='text'
                    placeholder='0'
                    value={ this.state.cost }
                    onChange={ this.handleCostChange}
                />
                <input 
                    className='button'
                    type='submit'
                    value='Add'
                />
        </form>
        )
    }
}

export default ExpenditureForm;