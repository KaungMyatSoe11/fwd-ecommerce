import CategoryCard from "./CategoryCard";

const getCategory = async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  const data = await res.json();
  return data;
};

const Category = async () => {
  const category = await getCategory();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-5">Categories</h3>

      <div className="flex gap-3 flex-wrap ">
        {category.map((ct, index) => (
          <CategoryCard key={ct + index} category={ct} />
        ))}
      </div>
    </div>
  );
};

export default Category;
