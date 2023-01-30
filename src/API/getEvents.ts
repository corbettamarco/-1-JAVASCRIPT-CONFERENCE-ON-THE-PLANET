import axios from "axios";
import { apiBaseUrl } from "./conf";

export async function getEvents () {
  try {
    const { data } = await axios.get(apiBaseUrl)
    return data;
  } catch (error: any) {
    throw new Error("Si è verificato un errore" + error.message)

  }
}

