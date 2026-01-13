import { useDispatch } from "react-redux"
import './App.css'
import Header from "./Header"
import Product from "./Product"
import { clearAllItems } from "./redux/slice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartList } from "./CartList";


function App() {
 const dispatch=useDispatch();
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/cart" element={<CartList/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
