import React from 'react';

const sportingGoods = (products) => products.map((product, index) =>
            <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
);

const SportingGoodsRow = ({products}) => <>
{sportingGoods(products)}
</>;

export default SportingGoodsRow;