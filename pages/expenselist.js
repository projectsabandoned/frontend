import React from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';

class ExpenseList extends React.Component {

    readData() {
        const self = this;
        axios.get('http://localhost:9090/api/expense').then(function(response) {
            console.log(response.data);

            self.setState({expenses: response.data});
        }).catch(function (error){
            console.log(error);
        });
    }

    getExpense() {
        let table = []

        for (let i=0; i < this.state.expenses.length; i++) {

            table.push(
            <tr key={i}>
                <td>{this.state.expenses[i].portfolio}</td>
                <td>{this.state.expenses[i].category}</td>
                <td>{this.state.expenses[i].import}</td>
            </tr>
            );
        }

        return table
    }

    constructor(props) {
        super(props);
        this.readData();
        this.state = {expenses: []};
    
        this.readData = this.readData.bind(this);
    }

    render() {
      return (
        <div className="App">
            <Table>
                <thead>
                    <tr>
                        <th>
                            Portfolio
                        </th>
                        <th>
                            Category
                        </th>
                        <th>
                            Import
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.getExpense()}
                </tbody>
            </Table>
        </div>
      ) 
    }
}

export default ExpenseList;