import db from '@/lib/db';
import AlbumForm from '@/components/AlbumForm';

export const metadata = {
  title: 'Albums',
};

export default async function ArtistAlbums({ params }: { params: { id: string } }) {
  const artistId = parseInt(params.id, 10);
  const albums = await db.album.findMany({ where: { artistId } });
  const artist = await db.artist.findUnique({ where: { id: artistId } });

  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div>
      <h2>Albums by {artist.name}</h2>
      <AlbumForm artistId={artistId} />
      <ul>
        {albums.map((album) => (
          <li key={album.id} className="border p-2 mb-2 rounded">
            {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
