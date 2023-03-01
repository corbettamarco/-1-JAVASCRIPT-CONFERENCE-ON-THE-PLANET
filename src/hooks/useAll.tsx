import { useQuery } from "react-query";
import { getAll } from "../API/getAll";
import { ParamsEnum } from "../API/models/ParamsEnum";

export const useAll = (query: string, params: ParamsEnum) => {
  const requestedQuery = useQuery(query, () =>
    getAll(params)
  );
  return { requestedQuery };
};

