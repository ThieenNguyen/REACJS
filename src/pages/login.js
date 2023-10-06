export default function Login(){
    return (
<>
<section class=" text-center text-lg-start">
  <div class="card mb-3">
    <div class="row g-0 d-flex align-items-center">
      <div class="col-lg-4 d-none d-lg-flex">
        <img src="./images/Anh-dai-dien.jpg" alt="Trendy Pants and Shoes"
          class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
      </div>
      <div class="col-lg-8">
        <div class="card-body py-5 px-md-5">

          <form>

            <div class="form-outline mb-4">
              <input type="email" id="form2Example1" class="form-control" />
              <label class="form-label" for="form2Example1">Tài khoản đăng nhập</label>
            </div>


            <div class="form-outline mb-4">
              <input type="password" id="form2Example2" class="form-control" />
              <label class="form-label" for="form2Example2">Mật khẩu</label>
            </div>

  
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label class="form-check-label" for="form2Example31"> Remember me </label>
                </div>
              </div>

              <div class="col">

                <a href="/signup" >Signup ?</a>
              </div>
            </div>


            <a href="/" class="btn btn-primary">Đăng Nhập</a>

          </form>

        </div>
      </div>
    </div>
  </div>
</section>
</>
    );
}