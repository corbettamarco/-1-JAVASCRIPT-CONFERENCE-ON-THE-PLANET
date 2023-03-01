import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage";
import { EventList } from "../components/EventList";
import { Navbar } from "../components/Navbar";
import { Speakers } from "../components/Speakers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <EventList /> },
      { path: "/:tabId", element: <EventList /> },
      {
        path: "/speakers",
        element: <Speakers />,
      },
    ],
  },
]);
