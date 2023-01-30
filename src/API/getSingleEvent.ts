import axios from "axios";
import { apiBaseUrl } from "./conf";

export async function getSingleEvent (id: number) {
  try {
    const { data } = await axios.get(apiBaseUrl +"/" + {id})
    return data;
  } catch (error: any) {
    throw new Error("Si è verificato un errore" + error.message)

  }
}

