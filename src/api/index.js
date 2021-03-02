import React from "react";
import fetch from "unfetch";

const API_KEY = "4012952d9cd170745d3874e956ea74da";

const filterResults = results => {
	return results.filter(item => {
		if (!item.poster_path || !item.backdrop_path) return false;

		if (!["movie", "tv"].includes(item.media_type)) return false;

		return true;
	});
};

const useTrending = () => {
	const [status, setStatus] = React.useState({
		data: null,
		error: null,
	});

	React.useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
		)
			.then(res => res.json())
			.then(data =>
				setStatus({
					data: filterResults(data.results),
					error: null,
				})
			)
			.catch(error => setStatus({ error, data: null }));
	}, []);

	return status;
};

export { useTrending };
