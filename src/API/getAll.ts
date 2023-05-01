import axios from "axios";
import { ParamsEnum } from "./models/ParamsEnum";

export const getAll = async (path: ParamsEnum) => {
  const apiBaseUrl: any = process.env.REACT_APP_API_URL
  try {
    const { data } = await axios.get(apiBaseUrl+path)
    return data;
  } catch (error: any) {
    throw new Error("Si è verificato un errore " + error.message)

  }
}
