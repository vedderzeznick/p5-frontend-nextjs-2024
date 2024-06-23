import db from './db';

export const getAlbums = async () => {
  return await db.album.findMany();
};

export const dbAddAlbum = async (title: string, artistId: number, coverUrl?: string) => {
  return await db.album.create({
    data: { title, artistId, coverUrl },
  });
};

export const dbUpdateAlbum = async (id: number, title: string, artistId: number, coverUrl?: string) => {
  return await db.album.update({
    where: { id },
    data: { title, artistId, coverUrl },
  });
};

export const dbDeleteAlbum = async (id: number) => {
  return await db.album.delete({
    where: { id },
  });
};
