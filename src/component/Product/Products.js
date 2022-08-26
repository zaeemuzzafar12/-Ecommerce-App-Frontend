import React,{useState, useEffect} from 'react';
import { GetApi } from '../../Api/function'
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({filterproduct}) => {
  const [popularProducts , SetpopularProducts] = useState([]);
  const FetchProductData = async () => {
    const data = await GetApi('product/getallproducts');
    SetpopularProducts(data?.data)
  }

  useEffect(()=>{
    FetchProductData()
  },[])


  return (
    <Container>
       <Product filterproduct={filterproduct} popularProducts={popularProducts} />
    </Container>
  );
};

export default Products;