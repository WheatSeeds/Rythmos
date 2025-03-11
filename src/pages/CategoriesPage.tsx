import Category from "../components/Category.tsx";
import {ICategory} from "../types/types.tsx";
import List from "../components/List.tsx";
import Header from "../components/Header.tsx";

import {categories} from "../data/categories.ts";

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
        </>
    );
};

export default CategoriesPage;