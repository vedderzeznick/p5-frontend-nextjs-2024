import db from './db';

export const getArtists = async () => {
  return await db.artist.findMany();
};

export const addArtist = async (name: string) => {
  return await db.artist.create({
    data: { name },
  });
};

export const updateArtist = async (id: number, name: string) => {
  return await db.artist.update({
    where: { id },
    data: { name },
  });
};

export const deleteArtist = async (id: number) => {
  return await db.artist.delete({
    where: { id },
  });
};
