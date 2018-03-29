import React, { Component } from 'react';
import './styles.css';

class Category extends Component {
    render() {
        return (
            <tr className='categoryNode'>
                <td className='align-left cell-pad'>{ this.props.name }</td>
                <td className='align-right cell-pad'>{ this.props.budget }</td>
            </tr>
        )
    }
}

export default Category;