import React from 'react';
import SportingGoodsRow from './SportingGoodsRow';
import { ElectronicsRow } from './ElectronicsRow';
import {SPORTING_GOODS, ELECTRONICS} from './literals';

const sportingGoods = (products, name, isInStockChecked) => { 
    console.log('--in sporting function--'+name+'--'+isInStockChecked);
    var filteredProducts = isInStockChecked ? 
    products.filter((product) => ((product.category===SPORTING_GOODS) && product.stocked===isInStockChecked 
    && product.name.indexOf(name)!=-1)) 
    : products.filter((product) => ((product.category===SPORTING_GOODS) && product.name.indexOf(name)!=-1))
    return filteredProducts;
}

const electronics = (products, name, isInStockChecked) => {
    console.log('--in electronics function--'+name+'--'+isInStockChecked);
    var filteredProducts = isInStockChecked ? 
    products.filter((product) => ((product.category===ELECTRONICS) && product.stocked===isInStockChecked 
    && product.name.indexOf(name)!=-1)) 
    : products.filter((product) => ((product.category===ELECTRONICS) && product.name.indexOf(name)!=-1))
    return filteredProducts;
}

export class ProductTable extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            filterText: '',
            isInStockChecked: false
        };
    }

    updateFilterText = function(inputText) {
        console.log('---inputText--'+inputText);
        this.setState({filterText: inputText});
    }

    updateInstockCheckBoxStatus = function(isChecked){
        console.log('---isChecked--'+isChecked);
        this.setState({isInStockChecked: isChecked});
    }

    render(){
        console.log('Render');
        return ( <table 
            border="1" 
            cellSpacing="1" 
            cellPadding="1"
          >
            <thead>
                <tr>
                    <td colSpan="2">
                        <input 
                        value={this.state.filterText} 
                        onChange ={
                            (event)=>
                            {   console.log('target here---'+event.target);
                                this.updateFilterText(event.target.value);
                            }
                        }
                        id="SearchBar" 
                        type="text" 
                        placeholder="Search"></input>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <input 
                        type="checkbox" 
                        onChange={
                            (event)=>{
                                console.log('inside checkbox onchange');
                                this.updateInstockCheckBoxStatus(event.target.checked);
                            }
                            
                        }></input> Only show products in stock
                    </td>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tr>
                <th colSpan="2">Sporting Goods</th>
                </tr>
            </thead>
            <tbody>
            <SportingGoodsRow products= {sportingGoods(this.props.products, this.state.filterText, this.state.isInStockChecked)}/>
            
            <tr>
                <th colSpan="2">Electronics</th>
            </tr>
            <ElectronicsRow products= {electronics(this.props.products, this.state.filterText, this.state.isInStockChecked)}/>
            </tbody>
        </table>
        );
        
    }
} 



