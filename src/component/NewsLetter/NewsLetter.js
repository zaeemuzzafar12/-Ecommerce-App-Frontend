import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";
import React,{ useState } from 'react'
import { toast } from 'react-toastify'
import { BaseUrl } from "../../Api/BaseUrl";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  const [ emailTo , SetemailTo ] = useState([]);

  const EmailPosted = async (e) => {
    e.preventDefault();
    
    const data = {
      emailTo: emailTo
    }
    const url = `${BaseUrl}/newsletter/subscribed`
    const options = {
      method:"POST",
      headers:{
          "Content-type": "application/json"
      },
      body: JSON.stringify(data)
  }
  const datas = await fetch(url,options);
  const res = await datas.json()
  if(res?.status === 200){
    toast.success(res?.message)
  }
    
    
  }

 
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input 
          type="text"
          onChange={(e) =>  SetemailTo(e.target.value)}
          placeholder="Your email"
          value={emailTo}
           />
        <Button>
          <Send  onClick={(e) => EmailPosted(e) }/>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;