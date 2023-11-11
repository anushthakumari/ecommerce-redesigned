import styled from "styled-components";
import React from "react";

const Banner = styled.div`
	width: 100%;
	border-radius: 30px;
	background-color: #f9b331;
	color: black;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
`;

const BannerHeading = styled.h1`
	text-align: left;
	margin: 0;
`;

const BannerSubHeading = styled.h4`
	text-align: left;
	margin: 5px 0;
`;
const Pricing = styled.h2`
	text-align: left;
	margin: 5px 0;
`;
const BannerImage = styled.img`
	height: 200px;
`;

const BuyNowButton = styled.button`
	background-color: black;
	color: white;
	padding: 10px;
	border-radius: 50px;
	font-size: 1rem;
`;

const SPricing = styled.span`
	font-size: 14px;
`;

const FullWidthBanner = ({
	heading,
	desc,
	realPriceString,
	buyingPricestring,
	image,
}) => {
	return (
		<div className="container">
			<Banner>
				<div>
					<BannerHeading>{heading}</BannerHeading>
					<BannerSubHeading>{desc}</BannerSubHeading>
					<Pricing>
						<SPricing>
							<s>{realPriceString}</s>
						</SPricing>
						<span>{buyingPricestring}</span>
					</Pricing>
					<BuyNowButton>Buy Now</BuyNowButton>
				</div>
				<BannerImage src={image} alt={image} />
			</Banner>
		</div>
	);
};

export default FullWidthBanner;
