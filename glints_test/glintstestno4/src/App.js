import React, { Component } from 'react';
import './App.css';
import Cards from './components/card.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: 'apple', price: 1.2 },
        { name: 'banana', price: 2.2 },
        { name: 'watermelon', price: 3.2 },
        { name: 'pen', price: 0 },
        { name: 'tennis', price: 1.0 },
        { name: 'desk', price: 1.21 }
      ]
    };
  }

  iterate() {
    return this.state.data.map(list => {
      return (
        <div key={list.name}>
          <Cards key={list.name} name={list.name} price={list.price} />
        </div>
      );
    });
  }

  totalPrice() {
    var price = [];
    this.state.data.map(prices => {
      var listprice = prices.price;
      return price.push(listprice);
    });

    return price.reduce((a, b) => {
      var total = a + b;
      return Number.parseFloat(total);
    });
  }

  render() {
    return (
      <div>
        <div>
          <p style={{ marginLeft: '5%' }}> Glints Test Number 3: List</p>
          {this.iterate()}
        </div>

        <div className="card">
          <p>TOTAL : {this.totalPrice()}</p>
        </div>
      </div>
    );
  }
}

export default App;
