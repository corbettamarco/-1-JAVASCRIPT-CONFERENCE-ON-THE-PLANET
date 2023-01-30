import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { AboveTheFold } from "./components/AboveTheFold";
import { EventList } from "./components/EventList";
import { Navbar } from "./components/Navbar";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <AboveTheFold/>
        <EventList />
      </QueryClientProvider>
    </>
  );
}

export default App;
