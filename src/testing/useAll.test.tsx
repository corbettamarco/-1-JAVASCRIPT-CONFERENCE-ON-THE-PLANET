import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { DayType } from "../API/models/DayType";
import { ParamsEnum } from "../API/models/ParamsEnum";
import { useAll } from "../hooks/useAll";

jest.mock("axios");

test("useAll test", async () => {
  const eventList: DayType[] = [
    {
      id: 1,
      eventId: 1,
      date: "1 February 2023",
    },
  ];

  (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
    data: eventList,
  });
  const queryClient = new QueryClient();

  const wrapper = ({ children }: { children: any }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const { result } = renderHook(() => useAll("days", ParamsEnum.eventList), {
    wrapper,
  });
  await waitFor(() => {
    expect(result.current.requestedQuery.data).toEqual(eventList);
  });
});
