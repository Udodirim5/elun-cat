import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import MouseTracker from "./MouseTracker ";

const App = () => {
  const isProduction = import.meta.env.PROD;
  const basename = isProduction ? "/eluncat" : "/";

  return (
    <>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

      <MouseTracker />
    </>
  );
};

export default App;
