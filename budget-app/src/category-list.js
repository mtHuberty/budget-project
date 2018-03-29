import React, { Component } from 'react';
import Category from './category';
import data from './data';
import './styles.css';

class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentWillMount() {
        this.state.data = data;
    }

    render() {
        let categoryNodes = this.state.data.map(category => {
            return (
                <Category
                    name={ category.name }
                    budget={ category.budget }
                    key={ category.id }
                />
            )
        });

        return (
            <table className='center'>
                { categoryNodes }
            </table>
        )
    }
}

export default CategoryList;