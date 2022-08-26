import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { GetApi } from '../../Api/function'
import img1 from '../../images/all.jpg'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:black;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item ,Setfilterproduct }) => {

  const [All , SetAll] = useState([]);

  const BaseUrl = `http://localhost:5000`

  const  FilterProductByCategories = async (e,item) => {
    e.preventDefault();
    const data = await GetApi('product/getallproducts')
    const combine = data?.data
    const cat = combine.filter((datas) => datas.categories._id === item._id)
    Setfilterproduct(cat)
  }

 

  return (
          <>
            <Container>
            <Image src={`${BaseUrl}/${item.image}`} />
            <Info>
              <Title>{item.name}</Title>
              <Button onClick={(e) => FilterProductByCategories(e,item)}>SHOP NOW</Button>
            </Info>
          </Container>
          </>
  
    
     
  );
};

export default CategoryItem;