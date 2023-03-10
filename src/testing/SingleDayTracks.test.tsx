import { TabPanels, Tabs } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { DayType } from "../API/models/DayType";
import { TrackType } from "../API/models/TrackType";
import { SingleDayTracks } from "../components/SingleDayTracks";

// Dati mock da passare come props
const dayMock: DayType = {
  id: 1,
  eventId: 1,
  date: "2022-02-22",
};

const trackMock1: TrackType = {
  id: 1,
  eventId: 1,
  dayId: 1,
  startHour: "09:04",
  endHour: "10:30",
  title: "test 1 title",
  description: "test 1",
  image:
    "https://images.jsworldconference.com/Zz_Ym_Cfi_Z_400x400_2_Joe_Hart_e1f62002a8.jpg?width=100",
};

const trackMock2: TrackType = {
  id: 2,
  eventId: 1,
  dayId: 1,
  startHour: "10:04",
  endHour: "11:30",
  title: "test 2 title",
  description: "test 2",
  image:
    "https://images.jsworldconference.com/Zz_Ym_Cfi_Z_400x400_2_Joe_Hart_e1f62002a8.jpg?width=100",
};

// Mock di useAll
jest.mock("../hooks/useAll", () => ({
  useAll: () => ({
    requestedQuery: {
      data: [trackMock1, trackMock2],
    },
  }),
}));


describe("Test SingleDay", () => {
  test("controllo lista tracks", () => {
    render(
      <Tabs>
        <TabPanels>
          <SingleDayTracks day={dayMock} />
        </TabPanels>
      </Tabs>
    ,{wrapper: BrowserRouter});

    expect(screen.getByText(/test 1 title/i)).toBeInTheDocument();
    expect(screen.getByText(/test 2 title/i)).toBeInTheDocument();
  });
});
