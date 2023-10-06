import { NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

function Header(){
    return (
        <>
        <nav className="fixed-top">
            <div className="Navbar">
                <div className="icon-brand">
                    <img className="logo" src="images/logo.png"/>
                </div>
                <div className="list-nav-item">
                    <NavLink to="/" className="nav-item nav-item-first">Điện thoại</NavLink>
                    <NavLink to="" className="nav-item">Máy tính bảng</NavLink>
                    <NavLink to="" className="nav-item">Laptop</NavLink>
                    <NavLink to="" className="nav-item">Tivi</NavLink>
                    <NavLink to="" className="nav-item">Phụ kiện</NavLink>
                </div>

            </div>
            <div class="cart-body">
                <a href="/giohang" class="btn">Giỏ hàng</a>
            </div>
            <div className="account">
                <NavLink to="/login" className="icon-account"> <VscAccount /> </NavLink>
            </div>
        </nav>
        <div className="clear-nav-fixed"></div>
        </>
    );
}

export default Header;