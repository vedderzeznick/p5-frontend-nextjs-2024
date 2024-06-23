"use client";
import { actionDeleteAlbum } from "@/actions/albums";

export default function AlbumCard({
  album,
}: {
  album: { id: number; title: string, coverUrl?: string | null };
}) {
  if (!album) {
    return <div>Album not found</div>;
  }

  const handleDelete = (id: number) => {
    actionDeleteAlbum(id);
  };

  return (
    <li key={album.id} className="border p-2 mb-2 rounded">
      <div>
        <span>{album.title}</span>
        {album.coverUrl && <img src={album.coverUrl} alt={album.title} className="w-16 h-16 mt-2" />}
      </div>
      <div>
        <button onClick={() => handleDelete(album.id)} className="text-red-500">
          Delete
        </button>
      </div>
    </li>
  );
}
