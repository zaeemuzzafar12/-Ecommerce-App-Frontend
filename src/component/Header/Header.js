import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { GetApi } from "../../Api/function";
import { BaseUrl } from "../../Api/BaseUrl";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  margin-bottom: 37px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Header = () => {
  const [searchproduct, Setsearchproduct] = useState([]);
  const [card, Setcard] = useState([]);
  const BaseUrl = `http://localhost:5000`

  const SearchByKeyword = async (e) => {
    e.preventDefault();
    const searchproducts = await GetApi(`product/search/${searchproduct}`);
    const items = searchproducts?.data?.filter((data) =>
      data.title
        .toLowerCase()
        .startsWith(
          searchproduct
            ? searchproduct.toLowerCase()
            : searchproduct.toUpperCase()
        )
    );
    Setcard(items);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input
              type="text"
              onChange={(e) => Setsearchproduct(e.target.value)}
              placeholder="Search"
              value={searchproduct}
            />
            <Search
              onClick={(e) => SearchByKeyword(e, searchproduct)}
              style={{ color: "gray", fontSize: 16 }}
            />
          </SearchContainer>
          {console.log(card)}

          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >{
            card.length ? 
            card.map((data) => {
              return(
                <>
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  {console.log(`${BaseUrl}${data?.image}`)}
                  <Avatar alt="Remy Sharp" src={`${BaseUrl}${data?.image}`} />
                </ListItemAvatar>
                <ListItemText
                  primary= {data.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                       { data?.price}
                      </Typography>
                      
                    </React.Fragment>
                  }
                />
                </ListItem>
                <Divider variant="inset" component="li" />
                </>
              )
            }) : (
              <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        No Data Found
                      </Typography>
            )
           

          }
          </List>
        </Left>
        <Center>
          <Logo>TECHNADO.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
