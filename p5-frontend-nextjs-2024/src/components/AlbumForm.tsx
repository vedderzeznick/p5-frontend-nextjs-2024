'use client';

import { actionAddAlbum } from '@/actions/albums';
import React, { useRef } from 'react';

export default function AlbumForm({ artistId }: { artistId: number }) {
  const formRef = useRef<HTMLFormElement>(null);

  const addAlbum = async (formData: FormData) => {
    formRef.current?.reset();
    formData.append('artistId', artistId.toString());
    await actionAddAlbum(formData);
  }

  return (
    <form ref={formRef} action={addAlbum}>
      <input
        type="text"
        name="title"
        placeholder="Album Title"
        className="album-input"
      />
      <button type="submit">Add Album</button>
    </form>
  );
}
