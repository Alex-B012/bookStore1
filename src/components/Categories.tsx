import React from "react";
import { categories } from "../assets/data";

const Categories: React.FC = () => {
  return (
    <div className="categories-section h-full w-[95%] md:w-[70%] flex flex-row justify-center flex-wrap mt-3">
      {categories.map((category) => (
        <button
          key={category.id}
          className="categories-btns cursor-pointer bg-green-700 hover:bg-green-800 text-white rounded-md text-center w-[120px] h-[30px] md:h-[40px] md:w-[160px] md:text-xl mx-2 md:mx-3 my-2 font-bold"
        >
          {category.categoryName}
        </button>
      ))}
    </div>
  );
};

export default Categories;
