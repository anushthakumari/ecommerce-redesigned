import React, { useState } from "react";

import DropDown from "./DropDown";

const Navbar = () => {
	// Toogle Menu
	const [MobileMenu, setMobileMenu] = useState(false);
	return (
		<>
			<header className="header">
				<div className="container d_flex">
					{/* <div className="catgrories d_flex">
						<span class="fa-solid fa-border-all"></span>
						<h4>
							Categories <i className="fa fa-chevron-down"></i>
						</h4>
					</div> */}

					<div className="navlink">
						<ul
							className={
								MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
							}
							onClick={() => setMobileMenu(false)}>
							{/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}

							{data.map((v) => (
								<li key={v.cateName}>
									<DropDown options={v.options}>{v.cateName}</DropDown>
								</li>
							))}
						</ul>

						<button
							className="toggle"
							onClick={() => setMobileMenu(!MobileMenu)}>
							{MobileMenu ? (
								<i className="fas fa-times close home-btn"></i>
							) : (
								<i className="fas fa-bars open"></i>
							)}
						</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;

var data = [
	{
		cateImg: "./images/category/cat1.png",
		cateName: "Mobile & Tablets",
		options: [
			"smart phone",
			"Land Line Phones",
			"Feature Phones",
			"Tablet PC's",
			"Mobile Accessories",
		],
	},
	{
		cateImg: "./images/category/cat2.png",
		cateName: "Laptops & Computing",
		options: [
			"Laptops",
			"Printer & Scanners",
			"Desktops & Monitors",
			"Networking Products",
			"Computer Peripherals",
			"Storage Devices",
			"Computer & Laptop Accessories",
			"Projectors & Multimedia",
		],
	},
	{
		cateImg: "./images/category/cat3.png",
		cateName: "Smart Gadgets",
		options: [
			"E-Smoke",
			"Gadgets",
			"Smart Watches",
			"Smart TV & Accessories",
			"Sports & Fitness Gadget",
		],
	},
	{
		cateImg: "./images/category/cat4.png",
		cateName: "Home & Living",
		options: [
			"Home Appliances",
			"Kitchen Appliancess",
			"Outdoor Essentials",
			"Office Living",
		],
	},
	{
		cateImg: "./images/category/cat5.png",
		cateName: "Watche",
		options: [
			"Smart Watches",
			"Clocks",
			"Men's Watches",
			"Women's Watches",
			"Islamic Watches",
		],
	},
	{
		cateImg: "./images/category/cat6.png",
		cateName: "Cameras",
		options: [
			"Digital Cameras",
			"Action Cameras",
			"Camera Accessories",
			"Surveillance Cameras",
			"DSLR Cameras",
			"Binoculars & Binocam",
			"Camcorders",
		],
	},
	{
		cateImg: "./images/category/cat7.png",
		cateName: "EON",
		options: [
			"TV, LCD's & LED's",
			"Media Players",
			"Gaming Consoles & Accessories",
			"Audio Devices",
		],
	},
	{
		cateImg: "./images/category/cat8.png",
		cateName: "Health & Beauty",
		options: ["Health Care", "Men's Grooming", "Women's Grooming"],
	},
	{
		cateImg: "./images/category/cat9.png",
		cateName: "Sports & Fitness",
		options: ["Trekking & Outdoor", "Fitness Gadgets", "Exercise & Fitness"],
	},
	{
		cateImg: "./images/category/cat10.png",
		cateName: "Toys & Games",
		options: ["Gaming Consoles", "Ride On Cars", "Toys"],
	},
	{
		cateImg: "./images/category/cat11.png",
		cateName: "E-Quran",
	},
];
