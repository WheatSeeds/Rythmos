import {ICategory} from "../../types/types.tsx";
import {Link} from "react-router";
import "../../styles/CategoriesPageStyles/Category.css"

type CategoryProps = {
    category: ICategory;
}

const Category = ({category} : CategoryProps) => {
    return (
        <>
            <Link to={`/products/${category.uuid}`}>
                <div className="category-item">
                    <img className="category-item-image" src={category._links.photo.href} alt=""/>
                    <span className="category-item-title">{category.name}</span>
                </div>
            </Link>
        </>
    );
};

export default Category;