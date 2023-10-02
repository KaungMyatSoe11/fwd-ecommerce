import Link from "next/link";

const CategoryCard = ({ category }) => {
  return (
    <div className=" basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/10 cursor-pointer p-2">
      <Link href={"/products/category/" + category} className="inline-block py-2 px-3 bg-violet-50 text-violet-900 w-full text-sm ">
        {category}
      </Link>
    </div>
  );
};

export default CategoryCard;
