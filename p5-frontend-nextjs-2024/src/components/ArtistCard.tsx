"use client";
import Link from "next/link";
import { actionDeleteArtist } from "@/actions/artists";

export default function ArtistList({
  artist,
}: {
  artist: { id: number; name: string };
}) {
  const handleDelete = (id: number) => {
    actionDeleteArtist(id);
  };

  return (
    <li key={artist.id} className="border p-2 mb-2 rounded">
      <div className="flex justify-between items-center">
        <span>{artist.name}</span>
        <Link href={`/artists/${artist.id}/albums`} className="text-blue-500">
          View Albums
        </Link>
        <button
          onClick={() => handleDelete(artist.id)}
          className="text-red-500"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
