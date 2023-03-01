import axios from "axios";
import { apiBaseUrl } from "./conf";
import { ParamsEnum } from "./models/ParamsEnum";

export const getAll = async (path: ParamsEnum) => {
  try {
    const { data } = await axios.get(apiBaseUrl+path)
    return data;
  } catch (error: any) {
    throw new Error("Si è verificato un errore" + error.message)

  }
}
