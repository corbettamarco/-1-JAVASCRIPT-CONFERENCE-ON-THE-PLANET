import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { DayType } from "../API/models/DayType";
import { EventList } from "../components/EventList";
import { useAll } from "../hooks/useAll";
import { router } from "../routing/router";

jest.mock("../hooks/useAll");

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: any }) => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

describe("Test Componente EventList", () => {
  const mockedUseAll = useAll as jest.MockedFunction<any>;

  test("rendering delle tabs alla fine del caricamento", () => {
    const days: DayType[] = [
      { id: 1, date: "2022-01-01", eventId: 1 },
      { id: 2, date: "2022-12-25", eventId: 1 },
    ];

    mockedUseAll.mockReturnValue({
      requestedQuery: { isLoading: false, data: days },
    });

    render(<EventList />, { wrapper });

    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")).toHaveLength(2);
    expect(screen.getByText("2022-01-01")).toBeInTheDocument();
  });

  test("rendering dello spinner durante il caricamento", () => {
    mockedUseAll.mockReturnValue({ requestedQuery: { isLoading: true } });

    render(<EventList />, { wrapper });

    expect(screen.getByText(/Loading.../s)).toBeInTheDocument();
  });

  test("rendering del messaggio di errore", () => {
    const error = new Error("Errore nel caricamento");

    mockedUseAll.mockReturnValue({
      requestedQuery: { isLoading: false, error },
    });

    render(<EventList />, { wrapper });

    expect(
      screen.getByRole("heading", { name: /Si è verificato un Errore/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/si è verificato un errore/i)).toBeInTheDocument();
  });
});
