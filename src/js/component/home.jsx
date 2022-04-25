import React, { useState } from "react";

//create your first component
const Home = () => {
	const [SelectedColor, setSelectedColor] = useState("");
	return (
		<div className="buttonNpole">
			<div className="pole"></div>
			<div className="traffic-light">
				<div
					onClick={() => setSelectedColor("red")}
					className={
						"light red" + (SelectedColor === "red" ? "glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("yellow")}
					className={
						"light yellow" +
						(SelectedColor === "yellow" ? "glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("green")}
					className={
						"light green" +
						(SelectedColor === "green" ? "glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
