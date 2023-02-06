import { Spacer } from "@chakra-ui/react";
import "./App.css";
import { AboveTheFold } from "./components/AboveTheFold";
import { EventList } from "./components/EventList";
import { Navbar } from "./components/Navbar";
import { Speakers } from "./components/Speakers";

function App() {
  return (
    <>
      <Navbar />
      <AboveTheFold />
      <EventList />
      <Spacer color={"white"} my="1em" borderWidth="1px" />
      <Speakers />
    </>
  );
}

export default App;
