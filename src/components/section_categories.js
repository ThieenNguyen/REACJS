import { NavLink } from "react-router-dom";
import ListComics from "./list_comics";

function SectionCategories(props){
    return (
        <>
        <div class="title-content p-3 y-2">
            <strong className="h2 m-0">{props.categories}</strong>
        </div>
        <div className="content-test wrapper border p-2 d-flex flex-wrap col-12 justify-content-center">
            <ListComics list_comics={props.list_comics}/>
        </div>
        <div class="btn-xemthem">
        <NavLink to="#" className="btn btn-test btn-warning">Xem thêm</NavLink>
        </div>
        </>
    );
}

export default SectionCategories;