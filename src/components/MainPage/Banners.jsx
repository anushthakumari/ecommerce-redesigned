import React from "react";

const Banners = ({ imagePaths }) => {
	return (
		<div
			style={{
				background: "#f6f9fc",
				paddingTop: "2rem",
			}}>
			<div className="container banner-container">
				{imagePaths.map((imagePath) => (
					<div className="banner">
						<img key={imagePath} src={imagePath} alt={imagePath} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Banners;

export const imagePaths = [
	"/images/banners/jadoo-deals-012.jpg",
	"/images/banners/slig-use-02.jpg",
	"/images/banners/clear-sale.jpg",
];

export const imagePaths2 = [
	"/images/banners/hom-appl-01.jpeg",
	"/images/banners/sm-watch.jpg",
	"/images/banners/cam-ba.jpg",
];
