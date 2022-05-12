import {Routes,Route} from "react-router-dom";
import {Hero, Footer} from './components';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Recipe from './pages/Recipe/Recipe';
import Order from './pages/Order/Order';
import GlobalStyles from './Globalstyles';
function App() {
  return (
    <div>
      <GlobalStyles/>
      <Hero/>
      <Routes>
        <Route exact path="/" element={<Home></Home>}/>
        <Route exact path="/about" element={<About></About>}/>
        <Route exact path="/recipe" element={<Recipe></Recipe>}/>
        <Route exact path="/order-now" element={<Order></Order>}/>
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;
