import React from 'react';
import {CardContainer,ProductHeading,CardLeft,CardRight,ProductDetails,SoldBy,Price,Quantity,Stock,Image} from './styles/card';

export default function Card({ children, ...restProps }) {
    return(
       <CardContainer {...restProps.containerProps}>
     <Image src={restProps.link} />
     <CardLeft>
<ProductHeading>
{restProps.name}
</ProductHeading>
<ProductDetails>
{restProps.description}
</ProductDetails>
     </CardLeft>
     <CardRight>
<SoldBy>
    Sold By {restProps.vendor}
</SoldBy>
<Price>
₹ {restProps.price}
</Price>
<div>
  <Quantity for="quantity" >Quantity</Quantity>

<select name={restProps.name} id="quantity" value={restProps.value} onChange={(e)=>restProps.onChange(e)}>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select></div>
<Stock>
Only {restProps.available} left in stock
</Stock>
     </CardRight>
       </CardContainer>
    )
 
};




