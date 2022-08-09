// React
import { Route, Routes } from "react-router-dom";
// Page
import MainPage from "./page/MainPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
