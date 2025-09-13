import React from "react";
import ShoeCard from "../utils/ShoeCard";

// ✅ Import Marvel images
import ironMan from "../assets/Marvel/iron man DID3.jpg";
import captainHydra from "../assets/Marvel/Captain Hydra.jpg";
import thor from "../assets/Marvel/THOR.jpg";
import hulk from "../assets/Marvel/hulk.jpg";
import blackWidow from "../assets/Marvel/Black widow stl.jpg";
import hawkeye from "../assets/Marvel/Hawkeye model.jpg";
import blackPanther from "../assets/Marvel/black-panther-civil-war-armor-helmet-3d-printable-model-print-file-stl-do3d-printed-06.jpg";
import doctorStrange from "../assets/Marvel/Doctor Strange.jpg";

import batman from "../assets/DC/batman-kit.jpg";
import superman from "../assets/DC/superman.jpg";
import wonderwoman from "../assets/DC/wonderwoman.jpg";
import flash from "../assets/DC/flash.jpg";
import aquaman from "../assets/DC/aquaman.jpg";
import cyborg from "../assets/DC/cyborg.jpg";
import greenlantern from "../assets/DC/greenlantern.jpg";
import shazam from "../assets/DC/shazam.jpg";



const categories = [
	{
		title: "Marvel Model",
		items: [
			{ id: 1, title: "Iron Man", img: ironMan },
			{ id: 2, title: "Captain Hydra", img: captainHydra },
			{ id: 3, title: "Thor", img: thor },
			{ id: 4, title: "Hulk", img: hulk },
			{ id: 5, title: "Black Widow", img: blackWidow },
			{ id: 6, title: "Hawkeye", img: hawkeye },
			{ id: 7, title: "Black Panther", img: blackPanther },
			{ id: 8, title: "Doctor Strange", img: doctorStrange },
		],
	},
	{
		 title: "DC Characters",
  items: [
    { id: 1, title: "Batman", img: batman },
    { id: 2, title: "Superman", img: superman },
    { id: 3, title: "Wonder Woman", img: wonderwoman },
    { id: 4, title: "Flash", img: flash },
    { id: 5, title: "Aquaman", img: aquaman },
    { id: 6, title: "Cyborg", img: cyborg },
    { id: 7, title: "Green Lantern", img: greenlantern },
    { id: 8, title: "Shazam", img: shazam },
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
								btn="Buy Now"
								price="50"
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
