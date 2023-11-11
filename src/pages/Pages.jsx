import React from "react";
import Home from "../components/MainPage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shops/Shop";
import Annocument from "../components/annocument/Annocument";
import Wrapper from "../components/wrapper/Wrapper";
import Banners, {
	imagePaths,
	imagePaths2,
} from "../components/MainPage/Banners";
import FullWidthBanner from "../components/FullWidthBanner";

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
	return (
		<>
			<Home CartItem={CartItem} />
			<Banners imagePaths={imagePaths} />
			<NewArrivals />
			<div className="gray-bg">
				<FullWidthBanner
					heading={"Mibro Color Smart Watch"}
					desc={"COLOR YOUR MOOD FOR A HEALTHY LIFE"}
					image={"/images/banners/smwatches.png"}
					realPriceString={"Rs. 7,199"}
					buyingPricestring={"Rs. 6,599"}
				/>
			</div>
			<Banners imagePaths={imagePaths2} />
			<FlashDeals productItems={productItems} addToCart={addToCart} />
			<div className="gray-bg">
				<div className="container">
					<div className="banner">
						<img
							key={"/images/banners/mibro-lite.png"}
							src={"/images/banners/mibro-lite.png"}
							alt={"/images/banners/mibro-lite.png"}
						/>
					</div>
				</div>
			</div>
			<TopCate />
			<Discount />
			{/* <Shop shopItems={shopItems} addToCart={addToCart} /> */}
			<Annocument />
			<Wrapper />
		</>
	);
};

export default Pages;
