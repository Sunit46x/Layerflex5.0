import React from "react";
import ShoeCard from "../utils/ShoeCard";

const categories = [
  {
    title: "Marvel Models",
    items: [
      { id: 1, title: "Iron Man", img: "https://example.com/ironman.jpg" },
      { id: 2, title: "Captain America", img: "https://example.com/captainamerica.jpg" },
      { id: 3, title: "Thor", img: "https://example.com/thor.jpg" },
      { id: 4, title: "Hulk", img: "https://example.com/hulk.jpg" },
      { id: 5, title: "Black Widow", img: "https://example.com/blackwidow.jpg" },
      { id: 6, title: "Hawkeye", img: "https://example.com/hawkeye.jpg" },
      { id: 7, title: "Black Panther", img: "https://example.com/blackpanther.jpg" },
      { id: 8, title: "Doctor Strange", img: "https://example.com/doctorstrange.jpg" },
    ],
  },
  {
    title: "DC Characters",
    items: [
      { id: 1, title: "Batman", img: "https://example.com/batman.jpg" },
      { id: 2, title: "Superman", img: "https://example.com/superman.jpg" },
      { id: 3, title: "Wonder Woman", img: "https://example.com/wonderwoman.jpg" },
      { id: 4, title: "Flash", img: "https://example.com/flash.jpg" },
      { id: 5, title: "Aquaman", img: "https://example.com/aquaman.jpg" },
      { id: 6, title: "Cyborg", img: "https://example.com/cyborg.jpg" },
      { id: 7, title: "Green Lantern", img: "https://example.com/greenlantern.jpg" },
      { id: 8, title: "Shazam", img: "https://example.com/shazam.jpg" },
    ],
  },
  {
    title: "Cartoon & Anime",
    items: [
      { id: 1, title: "Naruto", img: "https://example.com/naruto.jpg" },
      { id: 2, title: "Sasuke", img: "https://example.com/sasuke.jpg" },
      { id: 3, title: "Goku", img: "https://example.com/goku.jpg" },
      { id: 4, title: "Vegeta", img: "https://example.com/vegeta.jpg" },
      { id: 5, title: "Luffy", img: "https://example.com/luffy.jpg" },
      { id: 6, title: "Zoro", img: "https://example.com/zoro.jpg" },
      { id: 7, title: "Ichigo", img: "https://example.com/ichigo.jpg" },
      { id: 8, title: "Kakashi", img: "https://example.com/kakashi.jpg" },
    ],
  },
  {
    title: "Gaming Assets",
    items: [
      { id: 1, title: "Mario", img: "https://example.com/mario.jpg" },
      { id: 2, title: "Luigi", img: "https://example.com/luigi.jpg" },
      { id: 3, title: "Zelda", img: "https://example.com/zelda.jpg" },
      { id: 4, title: "Link", img: "https://example.com/link.jpg" },
      { id: 5, title: "Pikachu", img: "https://example.com/pikachu.jpg" },
      { id: 6, title: "Charizard", img: "https://example.com/charizard.jpg" },
      { id: 7, title: "Master Chief", img: "https://example.com/masterchief.jpg" },
      { id: 8, title: "Kratos", img: "https://example.com/kratos.jpg" },
    ],
  },
];

const CategoryPage = () => {
  return (
    <div className="nike-container">
      {categories.map((category) => (
        <div key={category.title} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-black filter drop-shadow">
            {category.title}
          </h2>
          <div className="grid items-center justify-items-center gap-7 lg:gap-5 mt-7 grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {category.items.map((item) => (
              <ShoeCard
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.img}
                color="from-blue-500 to-indigo-500"
                shadow="shadow-lg shadow-blue-500"
                btn="View More"
                price="-"
                rating="-"
                text=""
                ifSalesExist={false}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
