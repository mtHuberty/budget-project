import React from 'react';
import ReactDOM from 'react-dom';
import BudgetPage from './budget-page';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<BudgetPage
                expUrl='http://localhost:3001/api/expenditures'
                catUrl='http://localhost:3001/api/categories'
                pollInterval={2000}
                />, document.getElementById('root'));