import Header from "../components/header";
import ListNewChapters from "../components/list_comics";
function Cart(){
    return (
        <>
        <Header />
        <div class="container mt-4">
            <div id="thongbao" class="alert alert-danger d-none face" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">x</span>
                </button>
            </div>

            <h1 class="text-center">Giỏ hàng</h1>
            <div class="row">
                <div class="col col-md-12">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Ảnh đại diện</th>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody id="datarow">
                            <tr>
                                <td>1</td>
                                <td>
                                    <img src="./images/iphone-12-vang.jpg" class="hinhdaidien"/>
                                </td>
                                <td>Iphone12 PROMAX Vang</td>
                                <td class="text-right">2</td>
                                <td class="text-right">7,850,000.00</td>
                                <td class="text-right">15,700,000</td>
                                <td>
                                    <a id="delete_3" data-sp-ma="4" class="btn btn-danger btn-delete-sanpham">
                                        <i class="fa fa-trash" aria-hidden="true"></i> Remove
                                    </a>
                                    <a id="delete_3" data-sp-ma="4" class="btn btn-warning btn-delete-sanpham">
                                        <i class="fa fa-trash" aria-hidden="true"></i> Update
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <img src="./images/samsung-s23-ultra.jpg" class="hinhdaidien"/>
                                </td>
                                <td>Samsung S23 Ultra</td>
                                <td class="text-right">3</td>
                                <td class="text-right">3,450,000đ.00</td>
                                <td class="text-right">10,350,000</td>
                                <td>
                                    <a id="delete_3" data-sp-ma="4" class="btn btn-danger btn-delete-sanpham">
                                        <i class="fa fa-trash" aria-hidden="true"></i> Remove
                                    </a>
                                    <a id="delete_3" data-sp-ma="4" class="btn btn-warning btn-delete-sanpham">
                                        <i class="fa fa-trash" aria-hidden="true"></i> Update
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <img src="./images/xiaomi-redmi-k60-den.jpg" class="hinhdaidien"/>
                                </td>
                                <td>Xiaomi Redmi K60 Den</td>
                                <td class="text-right">2</td>
                                <td class="text-right">9,850,000đ.00</td>
                                <td class="text-right">19,700,000</td>
                                <td>
                                    <a id="delete_3" data-sp-ma="4" class="btn btn-danger btn-delete-sanpham">
                                        <i class="fa fa-trash" aria-hidden="true"></i> Remove
                                    </a>
                                    <a id="delete_3" data-sp-ma="4" class="btn btn-warning btn-delete-sanpham">
                                        <i class="fa fa-trash" aria-hidden="true"></i> Update
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="pay-content">
                        <div class="payment">                        
                        <h3 class="m-2">Hình thức Thanh toán</h3>
                        <input type="radio" checked class="m-2"/> COD <br/>
                        <input type="radio" class="m-2"/> Chuyển tiền ngân hàng <br/>
                        <input type="radio" class="m-2"/> Chuyển ví MOMO <br/>
                        </div>
                    </div>
                        <h4 class="text-pay">Total:45,750,000</h4>
                </div>
                <div class="d-flex justify-content-between">
                        <a href="/" class="btn btn-warning btn-md"><i class="fa fa-arrow-left"
                            aria-hidden="true"></i>&nbsp;Quay về trang chủ</a>
                        <a href="#" class="btn btn-primary btn-md"><i
                            class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Thanh toán</a>
                    </div>
            </div>
        </div>
        </>
    );
}

export default Cart;