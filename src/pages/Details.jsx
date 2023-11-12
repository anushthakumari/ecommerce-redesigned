import React from "react";
import styled from "styled-components";
import "./details.css";

const DescriptionContainer = styled.div`
	margin: 20px 0;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
	background-color: #fff;
`;

const DescriptionTitle = styled.h4`
	font-size: 20px;
	font-weight: bold;
`;

const DescriptionText = styled.p`
	font-size: 16px;
	line-height: 24px;
`;

const QuantitySelect = styled.select`
	width: max-content;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	background-color: #fff;
	margin-bottom: 16px;
`;

const QuantityOption = styled.option`
	font-size: 16px;
`;

const IconTitleList = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const IconTitlePair = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	border: 1px solid green;
	padding: 8px;
	border-radius: 10px;
`;

const Title = styled.span`
	font-size: 14px;
	text-align: center;
`;

const ProductSpecsContainer = styled.div`
	margin: 20px 0;
	background-color: #fff;
`;

const ProductSpecTitle = styled.h4`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 10px;
`;

const ProductSpecList = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;
`;

const ProductSpecItem = styled.li`
	font-size: 16px;
	line-height: 24px;
`;

const iconsAndTitles = [
	{
		id: 1,
		title: "Nationwide Delivery",
		icon: <i class="fa-solid fa-truck-fast"></i>,
	},
	{
		id: 2,
		title: "7 Days Replacement Warranty",
		icon: <i class="fa-solid fa-rotate-left"></i>,
	},
	{
		id: 3,
		title: "Customer Service",
		icon: <i class="fa-solid fa-headset"></i>,
	},
];

const specs = [
	[
		"Display",
		`7" touchscreen, 1024 x 600 resolution at 171 ppi, SD video playback, with IPS (in-plane switching) technology and advanced polarizing filter`,
	],

	["Size", `7.6" x 4.5" x 0.4" (192 x 115 x 9.6 mm)`],
	["Weight", `10.4 ounces (295 grams)`],
	["CPU & RAM", `Quad-Core 1.3 GHz with 1GB of RAM`],
	["Storage", "8GB"],
	[
		"Battery Life",
		`	
Up to 8 hours of reading, surfing the web, watching video, and listening to music. Battery life will vary based on device settings, usage, and other factors such as web browsing and downloading content. Actual results may vary.`,
	],
	[
		"Charge Time",
		`	
Fully charges in under 6 hours using the micro-USB power adapter included in the box, or slightly longer with other micro-USB power adapters that you may already have`,
	],
];

const Details = () => {
	return (
		<div class="container" style={{ marginTop: "30px" }}>
			<div class="single-product">
				<div class="row-f">
					<div class="col-6">
						<div class="product-image">
							<div class="product-image-main">
								<img
									src="/images/product/12.jpg"
									alt=""
									id="product-main-image"
								/>
							</div>
							<div class="product-image-slider">
								<img src="/images/product/12.jpg" alt="" class="image-list" />
								<img src="/images/product/13.webp" alt="" class="image-list" />
								<img src="/images/product/14.jpg" alt="" class="image-list" />
								<img src="/images/product/15.jpg" alt="" class="image-list" />
							</div>
						</div>
					</div>
					<div class="col-6">
						{/* <div class="breadcrumb">
							<span>
								<a href="#">Home</a>
							</span>
							<span>
								<a href="#">Product</a>
							</span>
							<span class="active">T-shirt</span>
						</div> */}

						<div class="product">
							<div class="product-title">
								<h2>
									Amazon Fire 7 1GB, 8GB 7 inches Box Pack Overview and
									Specifications
								</h2>
							</div>
							<div class="product-rating">
								<span>
									<i class="bx bxs-star"></i>
								</span>
								<span>
									<i class="bx bxs-star"></i>
								</span>
								<span>
									<i class="bx bxs-star"></i>
								</span>
								<span>
									<i class="bx bxs-star"></i>
								</span>
								<span>
									<i class="bx bxs-star"></i>
								</span>
								<span class="review">(47 Review)</span>
							</div>
							<span className="discount">{10}% Off</span>
							<div class="product-price">
								<span class="offer-price">RS. 7,499</span>
								<span class="sale-price">RS. 8299</span>
							</div>
							<div class="product-details">
								<h3>Description</h3>
								<p>
									Symbios.pk offers a best Amazon Fire 7 1GB, 8GB 7 inches Box
									Pack price in Pakistan with fast shipping in all the major
									cities of Pakistan. Including Karachi, Lahore, Islamabad,
									Sialkot, Faisalabad, Peshawar, Quetta, Multan, Rawalpindi and
									many more cities at the lowest price. Amazon Fire 7 1GB, 8GB 7
									inches Box Pack Price in Pakistan is Rs.7,698
								</p>
							</div>
							{/* <div class="product-size">
								<h4>Size</h4>
								<div class="size-layout">
									<input
										type="radio"
										name="size"
										value="S"
										id="1"
										class="size-input"
									/>
									<label for="1" class="size">
										S
									</label>

									<input
										type="radio"
										name="size"
										value="M"
										id="2"
										class="size-input"
									/>
									<label for="2" class="size">
										M
									</label>

									<input
										type="radio"
										name="size"
										value="L"
										id="3"
										class="size-input"
									/>
									<label for="3" class="size">
										L
									</label>

									<input
										type="radio"
										name="size"
										value="XL"
										id="4"
										class="size-input"
									/>
									<label for="4" class="size">
										XL
									</label>

									<input
										type="radio"
										name="size"
										value="XXL"
										id="5"
										class="size-input"
									/>
									<label for="5" class="size">
										XXL
									</label>
								</div>
							</div> */}
							<div class="product-color">
								<h4>Color</h4>
								<div class="color-layout">
									<input
										type="radio"
										name="color"
										value="black"
										class="color-input"
									/>
									<label for="black" class="black"></label>
									<input
										type="radio"
										name="color"
										value="red"
										class="color-input"
									/>
									<label for="red" class="red"></label>

									<input
										type="radio"
										name="color"
										value="blue"
										class="color-input"
									/>
									<label for="blue" class="blue"></label>
								</div>
							</div>
							<span class="divider"></span>
							<div>
								<span>Quantity: </span>
								<QuantitySelect>
									<QuantityOption value={1}>{1}</QuantityOption>
									<QuantityOption value={2}>{2}</QuantityOption>
									<QuantityOption value={3}>{3}</QuantityOption>
									<QuantityOption value={4}>{4}</QuantityOption>
								</QuantitySelect>
							</div>
							<div class="product-btn-group">
								<div class="button buy-now">
									<i class="bx bxs-zap"></i> Buy Now
								</div>
								<div class="button add-cart">
									<i class="bx bxs-cart"></i> Add to Cart
								</div>
							</div>
							<IconTitleList>
								{iconsAndTitles.map((iconAndTitle) => (
									<IconTitlePair key={iconAndTitle.id}>
										{iconAndTitle.icon}
										<Title>{iconAndTitle.title}</Title>
									</IconTitlePair>
								))}
							</IconTitleList>
						</div>
					</div>
				</div>
			</div>
			<DescriptionContainer>
				<DescriptionTitle>Product Description</DescriptionTitle>
				<DescriptionText>
					Symbios.pk offers a best Amazon Fire 7 1GB, 8GB 7 inches Box Pack
					price in Pakistan with fast shipping in all the major cities of
					Pakistan. Including Karachi, Lahore, Islamabad, Sialkot, Faisalabad,
					Peshawar, Quetta, Multan, Rawalpindi and many more cities at the
					lowest price. Amazon Fire 7 1GB, 8GB 7 inches Box Pack Price in
					Pakistan is Rs.7,698
				</DescriptionText>

				<ProductSpecsContainer>
					<ProductSpecTitle>Product Specifications</ProductSpecTitle>
					<ProductSpecList>
						{specs.map(([specKey, specValue]) => (
							<ProductSpecItem key={specKey}>
								<b>{specKey}:</b> {specValue}
							</ProductSpecItem>
						))}
					</ProductSpecList>
				</ProductSpecsContainer>
			</DescriptionContainer>
		</div>
	);
};

export default Details;
