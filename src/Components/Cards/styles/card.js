import styled from "styled-components/macro";
export const CardContainer = styled.div`
background-color: #fff;
display: flex;
flex-direction: row;
height: max-content;
padding: 0px 20px;
margin-bottom: 50px;
border: solid 2px #e0e0e0;
`;
export const ProductHeading = styled.div`
font-weight: 500;
    font-size: 20px;
    text-align: left;
    margin-bottom: 10px;
`;
export const CardLeft=styled.div`
border-right: solid 2px #f0f0f0;
  width: 85%;
  padding: 10px 10px 10px 0px;
  margin-left: 15px;
`;
export const CardRight=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
 
  width: 25%;
  align-items: flex-end;
  min-width: 200px;
  padding: 10px 0px;
`;
 export const ProductDetails=styled.div`
 display:flex;
 flex-direction:row;
 justify-content:space-between;
 text-align:left;
 fontSize: 15px;
 line-height:20px;
 `;
 export const SoldBy=styled.div`
 font-size: 14px;
    color: #c3c3c3;
 `;
 export const Price=styled.div`
 color: #3368EB;
 font-weight: 500;
 font-size: 35px;
 margin: 20px 0px;
 `;
 export const Quantity=styled.label`
 margin-right:5px;
 `;
 export const Stock=styled.div`
 margin-left:auto;
 color:red;
 font-size: 12px;
marginTop: auto;
 `;
 export const Image=styled.img`
 width:135px;
 height:135px;
 margin-top:auto;
 margin-bottom:auto;
 `;
 
