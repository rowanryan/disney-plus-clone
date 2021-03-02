import React from "react";
import Layout from "../components/Layout";

import { Carousel } from "react-responsive-carousel";

import { useTrending } from "../api/index";

function Index(props) {
	const { data, error } = useTrending();

	const trending = React.useMemo(() => {
		if (!data) return null;

		return data.slice(0, 8);
	}, [data]);

	return (
		<Layout>
			{trending && (
				<Carousel
					autoPlay
					infiniteLoop
					centerMode
					interval={6000}
					transitionTime={500}
					centerSlidePercentage={90}
					showStatus={false}
				>
					{trending.map(item => (
						<div
							className="bg-gray-800 rounded-lg shadow-2xl"
							style={{
								paddingTop: "30%",
								marginLeft: 10,
								marginRight: 10,
								backgroundImage: `url(https://image.tmdb.org/t/p/w780${item.backdrop_path})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						/>
					))}
				</Carousel>
			)}
		</Layout>
	);
}

export default Index;
