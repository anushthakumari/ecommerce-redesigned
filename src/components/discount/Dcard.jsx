import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "./Ddata";
import "../newarrivals/style.css";

const Dcard = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
	};

	const handleView = (title) => (window.location.href = "/" + title);

	return (
		<>
			<Slider {...settings}>
				{Ddata.map((value, index) => {
					return (
						<>
							<div
								className="box product"
								style={{
									width: "250px",
								}}
								key={index}>
								<div className="img">
									<img
										src={value.cover}
										alt=""
										width="100%"
										style={{
											height: "150px",
											objectFit: "cover",
											objectPosition: "center",
										}}
									/>
								</div>
								<h4>{value.name}</h4>
								<span>{value.price}</span>
								<button
									className="button"
									onClick={handleView.bind(value.name)}>
									Buy Now
								</button>
							</div>
						</>
					);
				})}
			</Slider>
		</>
	);
};

export default Dcard;
