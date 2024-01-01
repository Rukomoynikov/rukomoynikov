// @ts-expect-error url is correct but considered as wrong by TypeScript
import ShareImage from './assets/rails-on-docker-facebook-share.jpg?h=630&w=1200&url';
import type { PageLoad } from './$types';

const pictures = import.meta.glob(
  './assets/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}',
  {
    eager: true,
    query: {
      enhanced: true
    }
  }
);

export const load: PageLoad = () => {
	return {
		image: ShareImage,
		description: 'Setup docker for Rails and use it for running Rails application.',
		title: 'Rails on Docker',
    pictures
	};
};
