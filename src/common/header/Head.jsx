import React from "react";

const Head = () => {
	return (
		<>
			<section className="head">
				<div className="container d_flex">
					<div className="left row">
						<div>
							<i className="fa fa-phone"></i>
							<label> +46 123 456 7896 789</label>
						</div>
						<div>
							<i className="fa fa-envelope"></i>
							<label> support@mail.com</label>
						</div>
					</div>
					<div className="right row RText">
						<label> FAQ"s</label>
						<label>Need Help</label>
						<span style={{marginTop: '-2px', marginRight: '3px'}}>🌍</span>
						<label>EN</label>
						<span><img style={{width: '15px', marginRight: '7px'}} src="./images/top/egypt.png" alt="" /></span>
						<label>Egypt</label>
					</div>
				</div>
			</section>
		</>
	);
};

export default Head;
