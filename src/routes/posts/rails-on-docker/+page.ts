import ShareImage from './assets/rails-on-docker-facebook-share.jpg?h=630&w=1200&url';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		image: ShareImage,
		description: 'Setup docker for Rails and use it for running Rails application.',
		title: 'Rails on Docker'
	};
};
