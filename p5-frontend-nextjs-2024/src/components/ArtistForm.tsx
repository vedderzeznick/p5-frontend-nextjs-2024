'use client';

import { actionAddArtist } from '@/actions/artists';
import React, { useRef } from 'react';

export default async function ArtistForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const addArtist = async (formData: FormData) => {
    formRef.current?.reset();
    await actionAddArtist(formData);
  }

  return (
    <form ref={formRef} action={addArtist}>
      <input
        type="text"
        name="name"
        placeholder="Artist Name"
        className='artist-input'
      />
      <button type="submit">Add Artist</button>
    </form>
  );
}
