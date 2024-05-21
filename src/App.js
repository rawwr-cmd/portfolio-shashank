import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./components/Pages/ErrorPage";
import CreativePortfolioHome from "./components/Pages/CreativePortfolioHome";
import VideoShowcaseHome from "./components/Pages/VideoShowcaseHome";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout headerVariant="cs-site_header_full_width" />}
        >
          <Route index element={<CreativePortfolioHome />} />
          <Route path="reels" element={<VideoShowcaseHome />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
