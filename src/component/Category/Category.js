import React,{ useState, useEffect} from 'react';
import { GetApi } from '../../Api/function'
import styled from "styled-components";
import { categories } from "../../data";
import { mobile } from "../../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories = () => {
  const [ categories , Setcategories  ] =useState([]);

  const FetchCategories = async () => {
    const data = await GetApi('category/allcategory');
    Setcategories(data?.data)
  }

  useEffect(() => {
    FetchCategories()
  },[])
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Categories;