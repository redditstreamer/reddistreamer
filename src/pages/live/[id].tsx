import useSWR from "swr";
import Head from "next/head";
import { useRouter } from "next/router";

import { redditPostFetcher } from "../../utils/fetchers";

import type { NextPage } from "next";
import type { redditListing } from "../../utils/types";

const Home: NextPage = () => {
	const router = useRouter();
	const { data, error } = useSWR(router.query.id, redditPostFetcher);

	if (!error && !data) {
		return (
			<Head>
				<title>Loading...</title>
			</Head>
		);
	} else if (error) {
		return (
			<Head>
				<title>Error fetching data</title>
			</Head>
		);
	} else {
		data?.forEach((redditListing: redditListing) => {
			console.log(redditListing);
		});
		return (
			<Head>
				<title>Reddit Streamer</title>
				<meta name="description" content="A reddit live thread client." />
			</Head>
		);
	}
};

export default Home;
