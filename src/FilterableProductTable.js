import React from 'react';
import { ProductTable } from './ProductTable';

 export const FilterableProductTable = (props) => {
    console.log(props);
    return <table
       border="1" 
       cellSpacing="1" 
       cellPadding="4"
       >
        <tbody>
            <tr>
                <td>
                   {<ProductTable products={props.products}/>}
               </td>
               </tr>
        </tbody>
   </table> ;
 }
 
