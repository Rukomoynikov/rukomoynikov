import type { PageServerLoadEvent } from './$types';
import { buildPostsList } from '$lib/server/build_posts_list';

export async function load(_event: PageServerLoadEvent) {
	buildPostsList();

	return {
		data: 'hello world'
	};
}
