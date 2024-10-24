import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return {
    description: 'Today I learned how to setup docker containers with Traefik labels to expose them to the internet.',
    title: 'Setup Traefik endpoints'
  };
};
