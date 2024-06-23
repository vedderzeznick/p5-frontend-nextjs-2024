import db from './db';

export const getArtists = async () => {
  return await db.artist.findMany();
};

export const dbAddArtist = async (name: string) => {
  return await db.artist.create({
    data: { name },
  });
};

export const dbUpdateArtist = async (id: number, name: string) => {
  return await db.artist.update({
    where: { id },
    data: { name },
  });
};

export const dbDeleteArtist = async (id: number) => {
  return await db.artist.delete({
    where: { id },
  });
};
