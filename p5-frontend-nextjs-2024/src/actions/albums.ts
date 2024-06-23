"use server";

import { dbAddAlbum, dbDeleteAlbum, dbUpdateAlbum } from "@/lib/albums";
import { revalidatePath } from "next/cache";

export async function actionAddAlbum(formData: FormData) {
  const titleField = formData.get("title");
  const cover = formData.get("cover");
  const artistIdField = formData.get("artistId");

  if (titleField === null || artistIdField === null) {
    throw new Error(`Missing "title" or "artistId" field`);
  }

  const title = titleField.toString();
  const artistId = parseInt(artistIdField.toString(), 10);

  await dbAddAlbum(title, artistId);
  revalidatePath(`/artists/${artistId}`);
}

export async function actionDeleteAlbum(id: number) {
  await dbDeleteAlbum(id);
  revalidatePath("/albums");
}

export async function actionUpdateAlbum(id: number, formData: FormData) {
  const titleField = formData.get("title");
  const artistIdField = formData.get("artistId");

  if (titleField === null || artistIdField === null) {
    throw new Error(`Missing "title" or "artistId" field`);
  }

  const title = titleField.toString();
  const artistId = parseInt(artistIdField.toString(), 10);

  await dbUpdateAlbum(id, title, artistId);
  revalidatePath(`/albums/${id}`);
}
