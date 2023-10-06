import Header from "../components/header";
import ListNewChapters from "../components/list_comics";
import ProductInfo from "../components/product_info";

function ProductInfoPage(){
    return (
        <>
        <Header />
        <div class="container mt-5 mb-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="row">
                    <div class="col-md-6">
                        <div class="images p-3">
                            <div class="text-center p-4"> <img id="main-image" src="./images/iphone-12-vang.jpg" width="250" /> </div>
                            <div class="thumbnail text-center"> <img onclick="change_image(this)" src="./images/iphone-12-vang.jpg" width="70"/> <img onclick="change_image(this)" src="./images/iphone-12-vang.jpg" width="70"/> </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product p-4">
                            <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">Apple</span>
                                <h5 class="text-uppercase">IPhone 12 PROMAX</h5>
                                <div class="price d-flex flex-row align-items-center"> <span class="act-price"></span>
                                    <div class="ml-2"> <small class="dis-price"></small> <span>7.850.000 Đồng</span> </div>
                                </div>
                            </div>
                            <ProductInfo/>
                            <div class="cart mt-4 align-items-center"> <button class="btn btn-danger text-uppercase mr-2 px-4">Bỏ vào giỏ hàng</button> <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    );
}

export default ProductInfoPage;