import { render, screen } from "@testing-library/react";
import { useAll } from "../hooks/useAll";
import { SingleTab } from "../components/SingleTab";
import { DayType } from "../API/models/DayType";
import { Tabs } from "@chakra-ui/react";

// Crea un mock di useAll
jest.mock("../hooks/useAll");

const myMock: DayType = {
  id: 1,
  eventId: 1,
  date: "22-02-2023",
};

describe("Test SingleTab", () => {
  test("titolo e data", () => {
    // Mock di useAll per ritornare dati
    (useAll as jest.Mock).mockReturnValue({
      //indicare il tipo per evitare errori typescript
      requestedQuery: {
        data: [myMock],
      },
    });

    const setSelected = jest.fn();
    render(
      <Tabs>
        <SingleTab
          index={0}
          selected={0}
          setSelected={setSelected}
          singleTab={myMock}
        />
      </Tabs>
    );

    expect(screen.getByText(/DAY 1/i)).toBeInTheDocument();
    expect(screen.getByText(/22-02-2023/i)).toBeInTheDocument();
  });

  test("setSelected con numero corretto al click", () => {

    (useAll as jest.Mock).mockReturnValueOnce({
      requestedQuery: {
        data: [myMock],
      },
    });

    const setSelected = jest.fn();
    render(
      <Tabs>
        <SingleTab
          index={0}
          selected={1}
          setSelected={setSelected}
          singleTab={myMock}
        />
      </Tabs>
    );
    screen.getByRole("tab").click(); //un tag Tab ha il ruolo tab
    expect(setSelected).toHaveBeenCalledWith(0);
  });
});

