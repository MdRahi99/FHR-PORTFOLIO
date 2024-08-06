"use server";

const { default: axios } = require("axios");
import { revalidatePath } from 'next/cache';

export async function getAbout() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await axios.get(`${baseUrl}/api/about`);

  const data = await res.data;
  revalidatePath("/about");
  return data;
}