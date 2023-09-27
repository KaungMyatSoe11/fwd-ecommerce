const getProductsByCategory = async (category_) => {
  const res = await fetch(
    "https://dummyjson.com/products/category/" + category_
  );
  const data = await res.json();
  return data;
};
const Category = async ({ params }) => {
  console.log(params);
  const category_product = await getProductsByCategory(params.slug);
  console.log(category_product);

  return (
    <div>
      <h1>{params.slug}</h1>
      {category_product.products.map((cp) => (
        <p key={cp.id}>{cp.title}</p>
      ))}
    </div>
  );
};

export default Category;
