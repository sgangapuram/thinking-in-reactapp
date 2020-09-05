import React from 'react';
import './App.css';
import { FilterableProductTable } from './FilterableProductTable';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      products : [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ]
    }

  }
  
  render() {
    console.log(this.state.products);
    return (
      <>
        {<FilterableProductTable products={this.state.products}/>}
       </>
    );
  }
}

// export default App;
