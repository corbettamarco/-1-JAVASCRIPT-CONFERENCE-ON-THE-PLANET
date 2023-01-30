import axios from "axios";
import { apiBaseUrl } from "./conf";

export const getAll = async (path: string) => {
  try {
    const { data } = await axios.get(apiBaseUrl+path)
    return data;
  } catch (error: any) {
    throw new Error("Si è verificato un errore" + error.message)

  }
}
