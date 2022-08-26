
import './App.css';
import Categories from './component/Category/Category';
import Footer from './component/Footer/Footer';

import Header from './component/Header/Header';
import Newsletter from './component/NewsLetter/NewsLetter';
import Products from './component/Product/Products';
import Slider from './component/Slider/Slider';


function App() {

  return (
    <div className="App">
      <Header />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
