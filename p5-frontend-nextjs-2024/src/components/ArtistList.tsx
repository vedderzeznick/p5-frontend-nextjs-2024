'use client';
import prisma from '@/lib/db';
import Link from "next/link";
import {actionDeleteArtist} from "@/actions/artists";

export const metadata = {
  title: 'Artists',
};

export default async function Home() {
  const artists = await prisma.artist.findMany();
  const handleDelete = async (id: number) => {
    await actionDeleteArtist(id);
  };

  return (
      <ul>
        {artists.map((artist) => (
          <li key={artist.id} className="border p-2 mb-2 rounded">
            <div className="flex justify-between items-center">
      <span>{artist.name}</span>
      <Link href={`/artists/${artist.id}/albums`} className="text-blue-500">
        View Albums
      </Link>
      <button onClick={() => handleDelete(artist.id)} className="text-red-500">
        Delete
      </button>
    </div>
          </li>
        ))}
      </ul>
  );
}
