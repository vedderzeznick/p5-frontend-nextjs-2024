'use client';

import { actionAddAlbum } from '@/actions/albums';
import React, { useRef, useEffect } from 'react';

export default function AlbumForm({ artistId }: { artistId: number }) {
  const formRef = useRef<HTMLFormElement>(null);

  const addAlbum = async (formData: FormData) => {
    formRef.current?.reset();
    formData.append('artistId', artistId.toString());
    const response = await fetch('/api/albums/upload', {
        method: 'POST',
        body: formData,
      })
      console.log('response',response);
  }

  return (
    <form ref={formRef} action={addAlbum}>
      <input
        type="text"
        name="title"
        placeholder="Album Title"
        className="album-input"
      />
      <input
        type="file"
        name="cover"
        className="border border-black p-1 mr-2 rounded"
        accept="image/*"
      />
      <button type="submit">Add Album</button>
    </form>
  );
}
