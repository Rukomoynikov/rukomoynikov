import { readdir } from 'node:fs/promises';
import path from 'path';

export async function buildPostsList() {
	// console.log(process.cwd());
	const postsPath = path.resolve('./src/routes/posts/');
	const directoriesOfPosts = await readdir(postsPath);
	const posts = directoriesOfPosts.map(async (directory) => {
		const postPath = path.resolve(postsPath, directory);
		const files = await readdir(postPath);
		const postFile = files.filter((f) => f.endsWith('.svelte'))[0];
		console.log(postFile);
	});
}
