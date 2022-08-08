import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
	const [SelectedColor, setSelectedColor] = useState("");
	return (
		<div className="entireTrafficLight">
			<div className="buttonNpole">
				<div className="traffic-light">
					<div
						onClick={() => setSelectedColor("red")}
						className={
							"light red" +
							(SelectedColor === "red" ? "glow" : "")
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
		</div>
	);
};

export default TrafficLight;
