"use server";

import { dbAddArtist, dbDeleteArtist, dbUpdateArtist } from "@/lib/artists";
import { revalidatePath } from "next/cache";

export async function actionAddArtist(formData: FormData) {
  const nameField = formData.get("name");
  if (nameField === null) {
    throw new Error(`Missing "name" field`);
  }
  const name = nameField.toString();
  await dbAddArtist(name);
  revalidatePath("/artists");
}

export async function actionDeleteArtist(id: number) {
  await dbDeleteArtist(id);
  revalidatePath("/artists");
}

export async function actionUpdateArtist(id: number, formData: FormData) {
  const nameField = formData.get("name");
  if (nameField === null) {
    throw new Error(`Missing "name" field`);
  }
  const name = nameField.toString();
  await dbUpdateArtist(id, name);
  revalidatePath(`/artists/${id}`);
}
