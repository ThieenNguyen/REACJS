import Banner from "../components/banner";
import Header from "../components/header";
import SectionCategories from "../components/section_categories";

//du lieu mau
const data = [
    {
        "categories": "Sản Phẩm Hot Nhất",
        "list_comics": [
            {
                "src": "samsung-s23-ultra.jpg",
                "name": "Samsung S23 Ultra",
                "price": 3450000
            },
            {
                "src": "iphone-11-xanh.jpg",
                "name": "Iphone 11 Xanh",
                "price": 7850000
            },
            {
                "src": "iphone-12-vang.jpg",
                "name": "Iphone 12 Vang",
                "price": 7850000
            },
            {
                "src": "realme-gt-neo-5-se-5g-xanh.jpg",
                "name": "Realme GT Neo 5 SE 5G Xanh",
                "price": 7850000
            },
            {
                "src": "samsung-galaxy-s21-cu-tim.jpg",
                "name": "Samsung Galaxy S21 Tim",
                "price": 12350000
            },
            {
                "src": "samsung-s21-trang.jpg",
                "name": "Samsung S21 Trang",
                "price": 11500000
            },
            {
                "src": "samsung-s23-xam.jpg",
                "name": "Samsung S23 Xam",
                "price": 6850000
            },
            {
                "src": "realme-11-pro-xanh.jpg",
                "name": "Realme11 Pro Xanh",
                "price": 7850000
            },
            {
                "src": "xiaomi-redmi-k60-den.jpg",
                "name": "Xiaomi Redmi K60 Den",
                "price": 9850000
            },
            {
                "src": "xiaomi-redmi-k60-pro-trang.jpg",
                "name": "Xiaomi Redmi K60 Pro Trang",
                "price": 10850000
            }
        ]
    },
    {
        "categories": "Phụ kiện",
        "list_comics": [
            {
                "src": "Xiaomi-In-Ear-headphones-Basic-2016.jpg",
                "name": "Xiaomi In Ear headphones",
                "price": 1320
            },
            {
                "src": "pin-du-phong-pisen-20000-650-2.jpg",
                "name": "Pin",
                "price": 1000
            },
            {
                "src": "airpods-2-rep1-1-ho-van.jpg",
                "name": "Airpods 2 Rep1 1 Ho Van",
                "price": 1570
            },
            {
                "src": "op-lung-iphone-11-pro.jpg",
                "name": "Op Lung Iphone 11 Pro",
                "price": 1401
            },
            {
                "src": "cu-sac-20w-iphone.png",
                "name": "Cu Sac 20W Iphone",
                "price": 1401
            }
        ]
    }
]

function HomePage(){

    const list_categories = data.map(function(item){
        return (
            <>
            <SectionCategories categories={item.categories} list_comics={item.list_comics}/> 
            </>
        );
    });

    return (
        <>
        <Header />
        <Banner />
        {list_categories}
        </>
    );
}

export default HomePage;