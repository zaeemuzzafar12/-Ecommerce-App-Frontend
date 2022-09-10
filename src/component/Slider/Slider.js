import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState , useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { GetApi } from '../../Api/function'
import img1 from '../../images/all.jpg'
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slider, Setslider] = useState([]);
  const BaseUrl =  `http://localhost:5000` || `https://ecommback32.herokuapp.com`
  const handleDataApi = async () => {
    try{
      const data = await GetApi(`slider/displayslider`)
      Setslider(data?.data)
    }
    catch(err){
      <img src={img1} />
    }
  }

  console.log(slideIndex)

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slider > slider?.length ? slider - 1 : slider?.length);
    } else {
      setSlideIndex(slider < slider?.length - 1 ? slider + 1 : 0);
    }
  };

  useEffect(() => {
    handleDataApi()
},[])


  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slider.map((item) => (
          <Slide  key={item?._id}>
            <ImgContainer>
              <Image src={`${BaseUrl}/${item?.image}`} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item?.name}</Title>
              <Desc>{item?.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;