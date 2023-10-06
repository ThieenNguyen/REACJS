import { NavLink } from "react-router-dom";

function ProductCard(props){
    const url_root ="images/";
    return (
        <>
        
        <div className="content m-2 text-center">
            <img className="image-product" src={url_root + props.src} alt=""/>

            <div className="main-content p-0 mt-1">
                <strong className="my-1 d-block ">{props.name}</strong>
                <h4 className="my-1 d-block text-danger">{props.price}đ</h4>
                <NavLink to="/sanpham-info" className="btn btn-primary w-75 py-1 mb-1">Mua</NavLink>
            </div>
        </div>          
        
        </>
    );
}

export default ProductCard;