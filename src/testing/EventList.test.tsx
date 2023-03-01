import { render, screen } from "@testing-library/react";
import { DayType } from "../API/models/DayType";
import { EventList } from "../components/EventList";
import { useAll } from "../hooks/useAll";

jest.mock("../hooks/useAll");

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

    render(<EventList />);

    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")).toHaveLength(2);
    expect(screen.getByText("2022-01-01")).toBeInTheDocument();
  });

  test("rendering dello spinner durante il caricamento", () => {
    mockedUseAll.mockReturnValue({ requestedQuery: { isLoading: true } });

    render(<EventList />);

    expect(screen.getByText(/Loading.../s)).toBeInTheDocument();
  });

  test("rendering del messaggio di errore", () => {
    const error = new Error("Errore nel caricamento");

    mockedUseAll.mockReturnValue({
      requestedQuery: { isLoading: false, error },
    });

    render(<EventList />);

    expect(
      screen.getByRole("heading", { name: /Si è verificato un Errore/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/si è verificato un errore/i)).toBeInTheDocument();
  });
});
