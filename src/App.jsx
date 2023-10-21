import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductView from "./components/ProductView";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="*" element={<h1>⚠️404! Not Found!</h1>} />
      </Routes>
    </>
  );
}

export default App;
