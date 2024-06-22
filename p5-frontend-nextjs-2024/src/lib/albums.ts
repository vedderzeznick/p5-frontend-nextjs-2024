import db from './db';

export const getAlbums = async () => {
  return await db.album.findMany();
};

export const addAlbum = async (title: string, artistId: number) => {
  return await db.album.create({
    data: { title, artistId },
  });
};

export const updateAlbum = async (id: number, title: string, artistId: number) => {
  return await db.album.update({
    where: { id },
    data: { title, artistId },
  });
};

export const deleteAlbum = async (id: number) => {
  return await db.album.delete({
    where: { id },
  });
};
