import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StartPage from "./pages/StartPage";
import ClientDetailPage from "./pages/ClientDetailPage";
import { GlobalContainer } from "./components/styles/GlobalUtilities";
import ClientUpdateDetailPage from "./pages/ClientUpdateDetailPage";


function App() {
  return (
    <GlobalContainer>     
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/:id" element={<ClientDetailPage />} />
        <Route path="home/update/:id" element={<ClientUpdateDetailPage />} />
      </Routes>
    </GlobalContainer>
  );
}

export default App;
