import client from './client';

export const getCoverPhotos = () => client.get('/coverphotos');
export const getCoverPhoto = (id) => client.get(`/coverphotos/${id}`);