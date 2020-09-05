import React from 'react';

const electronics = (products) => products.map((product, index) =>
            <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
);


export const ElectronicsRow = ({products}) => <>
{electronics(products)}
</>