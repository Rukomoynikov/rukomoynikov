import { compute_codes } from '$lib/code_highlighter';

export const load = async () => {
  const codes = await compute_codes();
  return { codes };
};

export const prerender = true;
export const trailingSlash = 'always';
