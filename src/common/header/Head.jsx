import React from "react";

const Head = () => {
	return (
		<>
			<section className="head">
				<div className="container d_flex">
					<div className="left row">
						<i className="fa fa-phone"></i>
						<label> +88012 3456 7894</label>
						<i className="fa fa-envelope"></i>
						<label> support@ui-lib.com</label>
					</div>
					<div className="right row RText">
						<label>My Orders</label>
						<label>My Accounts</label>
						<span>🏳️‍⚧️</span>
						<label>EN</label>
						<span>🏳️‍⚧️</span>
						<label>PK</label>
					</div>
				</div>
			</section>
		</>
	);
};

export default Head;
