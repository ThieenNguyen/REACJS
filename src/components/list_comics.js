import ProductCard from "./product_card";


function ListComics(props){
    
    const list_comics = props.list_comics.map(function (item){
        return (
            <>
            <ProductCard name={item.name} price={item.price} src={item.src} />
            </>            
        );
    });


    return (
        <>
        {list_comics}
        </>
    );
}

export default ListComics;