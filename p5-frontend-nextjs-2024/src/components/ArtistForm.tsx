'use client';
import { actionAddArtist } from '@/actions/artists';
import React, { useRef } from 'react';

export default function ArtistForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const addArtist = (formData: FormData) => {
    formRef.current?.reset();
    actionAddArtist(formData);
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
