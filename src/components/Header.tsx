import React from "react";
import Search from "./Search";
import Categories from "./Categories";
import { images } from "../assets/data";

const Header: React.FC = () => {
  const imageUrl = images[0]?.imgUrl;
  const backgroundImage = imageUrl
    ? `url(${imageUrl})`
    : "url('../assets/images/headerbg.jpg')";

  return (
    <header
      className={`header-section flex flex-col items-center w-full h-fit py-8 md:py-20 bg-fixed bg-cover bg-green-900`}
      style={{ backgroundImage }}
    >
      <div className="header-container flex flex-col w-full h-fit items-center">
        <h2 className="w-[250px] text-center text-white text-4xl font-bold uppercase text-shadow-light mb-4">
          Book Store
        </h2>
        <Search />
        <Categories />
      </div>
    </header>
  );
};

export default Header;
