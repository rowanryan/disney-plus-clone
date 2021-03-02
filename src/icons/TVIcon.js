import React from "react";

function TVIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			{...props}
		>
			<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
			<polyline points="17 2 12 7 7 2"></polyline>
		</svg>
	);
}

export default TVIcon;
