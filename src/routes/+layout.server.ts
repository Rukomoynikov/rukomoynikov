// import { createScreenshotOfThePage } from '$lib/server/build_social_media_cover';

export const prerender = true;

import { compute_codes } from '$lib/server/codes';

export const load = async () => {
	const codes = await compute_codes();
	// await createScreenshotOfThePage();

	return { codes };
};
