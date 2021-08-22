import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Nav/NavBar/Navbar";
import { fetchProducts } from "./store/fetchProducts/actions";
import { addCart } from "./store/cart/actions";
import { useDispatch } from "react-redux";
import SideMenu from "./components/Nav/MobileMenu/Menu";
import Main from "./components/Content/Main";
import Shop from "./components/Shop/Shop";
import Detail from "./components/Detail/Detail";
import Box from "./components/Nav/DesktopMenu/Search/SearchBox/Box";
import Dimmer from "./components/UI/Dimmer";
import Cart from "./components/Cart/Cart";
interface Products {
  storeProducts: {
    isLoading: boolean;
  };
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    const local = { ...localStorage };
    Object.keys(local).map((key) => {
      const item = localStorage.getItem(key);
      if (item !== null) {
        const cart = JSON.parse(item);
        dispatch(addCart(cart));
      }
    });
  }, [dispatch]);

  //TODO:
  // const loading = useSelector(
  //   (state: Products) => state.storeProducts.isLoading
  // );
  //Data fetching is slow because of the api
  //while data fetching return loading spinner
  //But while designing i could turn this of
  // if (loading) return <p>Loading...</p>;
  return (
    <div className="App">
      <Router>
        <SideMenu />
        <Box />
        <NavBar />
        <Dimmer>
          <Route path="/" exact component={Main} />
          <Route path="/shop" component={Shop} />
          <Route path="/product/:id" component={Detail} />
          <Route path="/cart" component={Cart} />
        </Dimmer>
      </Router>
    </div>
  );
};

export default App;
