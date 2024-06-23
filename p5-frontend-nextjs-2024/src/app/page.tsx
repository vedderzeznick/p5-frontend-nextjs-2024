import prisma from '@/lib/db';
import ArtistForm from '../components/ArtistForm';
import ArtistCard from '@/components/ArtistCard';

export const metadata = {
  title: 'Artists',
};

export default async function Home() {
  const artists = await prisma.artist.findMany();

  return (
    <div>
      <h2>Artists</h2>
      <ArtistForm />
      <ul>
        {artists.map((artist) => (
          <li key={artist.id} className="border p-2 mb-2 rounded">
            <ArtistCard artist={artist} />
          </li>
        ))}
      </ul>
    </div>
  );
}
