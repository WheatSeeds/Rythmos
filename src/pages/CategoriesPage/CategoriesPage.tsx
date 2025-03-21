import Category from "./Category.tsx";
import List from "../../components/List.tsx";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import { categories } from "../../data/categories.ts";
import { ICategory } from "../../types/types.tsx";

const CategoriesPage = () => {
  return (
    <>
      <Header />
      <main>
        <div id="categories-page-content">
          <List
            className={"category-list"}
            items={categories}
            renderItem={(category: ICategory) => (
              <Category category={category} key={category.uuid} />
            )}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CategoriesPage;
