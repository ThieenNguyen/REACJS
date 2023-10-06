import './bootstrap/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/homepage';
import Cart from './pages/cart';
import ProductInfoPage from './pages/product_info_page';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Singup from './pages/signup';

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/sanpham-info" element={<ProductInfoPage/>}/>
            <Route path="/giohang" element={<Cart/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Singup/>}/>
        </Routes>
        </>
    );
}

export default App;
