import ArtistForm from '../components/ArtistForm';
import prisma from '@/lib/db';
import ArtistCard from '../components/ArtistCard';

export default async function Home() {
  const artists = await prisma.artist.findMany();
  return (
    <div>
      <h2>Artists</h2>
      <ArtistForm />
      <ul>
        {artists.map((artist) => <ArtistCard artist={artist} />)}
      </ul>
    </div>
  );
}
