import React from "react";
import "./style.css";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="container grid2">
					<div className="box">
						<img src="/logo.png" alt="rem" height={50} />
						<p>
							Symbios.pk is one of Pakistan’s first and most experienced
							e-commerce stores. Since 2006 we have helped around a ‘Million
							Customers’ happily get what they wanted all across Pakistan.
						</p>
						<div className="icon d_flex">
							<div className="img d_flex">
								<i class="fa-brands fa-google-play"></i>
								<span>Google Play</span>
							</div>
							<div className="img d_flex">
								<i class="fa-brands fa-app-store-ios"></i>
								<span>App Store</span>
							</div>
						</div>
					</div>

					<div className="box">
						<h2>Brands</h2>
						<ul>
							<li>Apple</li>
							<li>Samsung</li>
							<li>Nokia</li>
							<li>Casio</li>
							<li>Black + Decker</li>
							<li>Lego</li>
							<li>Nikon</li>
						</ul>
					</div>
					<div className="box">
						<h2>About Us</h2>
						<ul>
							<li>Careers</li>
							<li>Our Stores</li>
							<li>Our Cares</li>
							<li>Terms & Conditions</li>
							<li>Privacy Policy</li>
							<li>Exchange Policy</li>
							<li>Warranty Policy</li>
						</ul>
					</div>
					<div className="box">
						<h2>Customer Care</h2>
						<ul>
							<li>Help Center </li>
							<li>How to Buy </li>
							<li>Track Your Order </li>
							<li>Corporate & Bulk Purchasing </li>
							<li>Returns & Refunds </li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
