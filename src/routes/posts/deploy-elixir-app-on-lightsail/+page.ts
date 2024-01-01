import type { PageLoad } from './$types';

const pictures = import.meta.glob('./assets/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
	eager: true,
	query: {
		enhanced: true
	}
});

export const load: PageLoad = () => {
	return {
		description: 'Setup docker for Rails and use it for running Rails application.',
		title: 'Rails on Docker',
		pictures
	};
};
