import React from "react";

const Head = () => {
	return (
		<>
			{/* Top header section for contact info and language options */}
			<section className="head">
				<div className="container d_flex">

					{/* Left side: Phone and email contact info */}
					<div className="left row">
						<div>
							<i className="fa fa-phone" aria-hidden="true"></i>
							<label> +46 123 456 7896 789</label>
						</div>
						<div>
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<label> support@mail.com</label>
						</div>
					</div>

					{/* Right side: FAQs, Help, Language, and Country info */}
					<div className="right row RText">
						<label> FAQ"s</label>
						<label>Need Help</label>

						{/* World icon for language settings */}
						<span style={{marginTop: '-2px', marginRight: '3px'}}>🌍</span>
						<label>EN</label>

						{/* Flag image representing country */}
						<span><img style={{width: '15px', marginRight: '7px'}} src="./images/top/egypt.png" alt="" /></span>
						<label>Egypt</label>
					</div>
				</div>
			</section>
		</>
	);
};

export default Head;
