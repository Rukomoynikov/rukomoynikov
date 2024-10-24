// @ts-expect-error url is correct but considered as wrong by TypeScript
import ShareImage from './assets/elixir-telegram-bot-facebook-share.jpg?h=630&w=1200&url';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		image: ShareImage,
		description:
			'This is the first part of three in the series. There you will find creating foundation and answering to users.',
		title: 'How to create Telegram bot with Elixir - Part 1'
	};
};
