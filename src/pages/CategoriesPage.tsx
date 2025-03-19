import Category from "../components/CategoriesPageComponents/Category.tsx";
import List from "../components/List.tsx";
import Header from "../components/UI/Header.tsx";
import Footer from "../components/UI/Footer.tsx";
import {categories} from "../data/categories.ts";
import {ICategory} from "../types/types.tsx";
import "../styles/CategoriesPageStyles/CategoryList.css"

const CategoriesPage = () => {
    return (
        <>
            <Header/>
            <main>
                <List
                    className={"category-list"}
                    items={categories}
                    renderItem={
                        (category: ICategory) => <Category category={category} key={category.uuid}/>
                    }
                />
            </main>
            <Footer/>
        </>
    );
};

export default CategoriesPage;