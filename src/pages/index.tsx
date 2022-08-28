import Head from "next/head";
import { AppShell, Container } from "@mantine/core";

import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Reddit Streamer</title>
				<meta name="description" content="A reddit live thread client." />
			</Head>
			<AppShell>
				<Container sx={{ display: "grid", placeItems: "center" }}>
					<h1>Reddit Streamer</h1>
				</Container>
			</AppShell>
		</>
	);
};

export default Home;
