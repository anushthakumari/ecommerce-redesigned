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

const Details = () => {
	return (
		<div class="container" style={{ marginTop: "30px" }}>
			<div class="single-product">
				<div class="row-f">
					<div class="col-6">
						<div class="product-image">
							<div class="product-image-main">
								<img src="img/tshirt-1.png" alt="" id="product-main-image" />
							</div>
							<div class="product-image-slider">
								<img src="img/tshirt-1.png" alt="" class="image-list" />
								<img src="img/tshirt-2.png" alt="" class="image-list" />
								<img src="img/tshirt-3.png" alt="" class="image-list" />
								<img src="img/tshirt-group.png" alt="" class="image-list" />
							</div>
						</div>
					</div>
					<div class="col-6">
						<div class="breadcrumb">
							<span>
								<a href="#">Home</a>
							</span>
							<span>
								<a href="#">Product</a>
							</span>
							<span class="active">T-shirt</span>
						</div>

						<div class="product">
							<div class="product-title">
								<h2>Half Sleve T-shirt for Men</h2>
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
							<div class="product-price">
								<span class="offer-price">$99.00</span>
								<span class="sale-price">$129.00</span>
							</div>

							<div class="product-details">
								<h3>Description</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
									est magnam quibusdam maiores sit perferendis minima cupiditate
									iusto earum repudiandae maxime vitae nostrum, ea cumque iste
									ipsa hic commodi tempore.
								</p>
							</div>
							<div class="product-size">
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
							</div>
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
						</div>
					</div>
				</div>
			</div>
			<DescriptionContainer>
				<DescriptionTitle>Product Description</DescriptionTitle>
				<DescriptionText>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
					pariatur harum? Dolorum ea corporis inventore dolore accusantium
					pariatur eius expedita consectetur! Cumque eaque dolores vitae ullam.
					Libero corrupti debitis totam!
				</DescriptionText>
			</DescriptionContainer>
		</div>
	);
};

export default Details;
