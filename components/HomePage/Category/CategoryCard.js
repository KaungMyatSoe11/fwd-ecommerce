import Link from "next/link";

const CategoryCard = ({ category }) => {
  return (
    <Link href={"/products/category/"+category} className=" py-2 px-3 bg-violet-50 text-violet-900 basis-[12.5%] cursor-pointer">
      {category}
    </Link>
  );
};

export default CategoryCard;
