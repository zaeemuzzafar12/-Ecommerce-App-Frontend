import React,{useState} from 'react'
import Categories from '../Category/Category'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Newsletter from '../NewsLetter/NewsLetter'
import Products from '../Product/Products'
import Slider from '../Slider/Slider'

const Home = () => {
  const [ categories , Setcategories  ] = useState([]);
  const [ filterproduct , Setfilterproduct] = useState([]);
  return (
    <>
      <Header />
      <Slider />
      <Categories  categories={categories} Setcategories={Setcategories} Setfilterproduct={Setfilterproduct} />
      <Products filterproduct={filterproduct} />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home