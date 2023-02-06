import { Spacer } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { AboveTheFold } from "./components/AboveTheFold";
import { EventList } from "./components/EventList";
import { Navbar } from "./components/Navbar";
import { Speakers } from "./components/Speakers";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        < >
          <Navbar />
          <AboveTheFold />
          <EventList />
          <Spacer color={"white"} my="1em" borderWidth="1px"/>
          <Speakers />
        </>
      </QueryClientProvider>
    </>
  );
}

export default App;
