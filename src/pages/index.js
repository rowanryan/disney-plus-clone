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

	console.log(trending);

	return (
		<Layout>
			{trending && (
				<Carousel
					autoPlay
					infiniteLoop
					centerMode
					stopOnHover
					interval={6000}
					transitionTime={500}
					centerSlidePercentage={90}
					showStatus={false}
				>
					{trending.map(item => (
						<div
							className="relative bg-gray-800 rounded-lg shadow-2xl"
							style={{
								paddingTop: "30%",
								marginLeft: 10,
								marginRight: 10,
								backgroundImage: `url(https://image.tmdb.org/t/p/w780${item.backdrop_path})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							<div className="absolute top-0 left-0 w-full h-full">
								<h3 className="absolute bottom-10 left-12 text-white text-3xl font-semibold">
									{item.title || item.name}
								</h3>
							</div>
						</div>
					))}
				</Carousel>
			)}
		</Layout>
	);
}

export default Index;
