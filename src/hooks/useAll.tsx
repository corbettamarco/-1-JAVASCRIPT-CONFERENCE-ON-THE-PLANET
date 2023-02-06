import { useQuery } from "react-query";
import { getAll } from "../API/getAll";

export const useAll = (query: string, params: string) => {
  const requestedQuery = useQuery(query, () =>
    getAll(params)
  );
  return { requestedQuery };
};

