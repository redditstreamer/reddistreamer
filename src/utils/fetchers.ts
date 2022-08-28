import { redditListing } from "./types";

const redditPostFetcher = (id: string): Promise<redditListing[]> =>
	fetch(`https://api.reddit.com/comments/${id}`).then((res) => res.json());

export { redditPostFetcher };
