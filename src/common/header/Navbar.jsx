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
									<DropDown options={["home", "me"]}>{v.cateName}</DropDown>
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
		cateName: "Fashion",
	},
	{
		cateImg: "./images/category/cat2.png",
		cateName: "Electronic",
	},
	{
		cateImg: "./images/category/cat3.png",
		cateName: "Cars",
	},
	{
		cateImg: "./images/category/cat4.png",
		cateName: "Home & Garden",
	},
	{
		cateImg: "./images/category/cat5.png",
		cateName: "Gifts",
	},
	{
		cateImg: "./images/category/cat6.png",
		cateName: "Music",
	},
	{
		cateImg: "./images/category/cat7.png",
		cateName: "Health & Beauty",
	},
	{
		cateImg: "./images/category/cat8.png",
		cateName: "Pets",
	},
	{
		cateImg: "./images/category/cat9.png",
		cateName: "Baby Toys",
	},
	{
		cateImg: "./images/category/cat10.png",
		cateName: "Groceries",
	},
	{
		cateImg: "./images/category/cat11.png",
		cateName: "Books",
	},
];
