import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		description: 'Today I learned how to run integration tests on Phoenix controllers',
		title: 'Test Phoenix controllers'
	};
};
