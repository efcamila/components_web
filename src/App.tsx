import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import PageButton from "./pages/PageButton";
import PageBadge from "./pages/PageBadge";
import PageCard from "./pages/PageCard";
import PageModal from "./pages/PageModal";
import PageTable from "./pages/PageTable";
import PageNavigation from "./pages/PageNavigation";
import PageToast from "./pages/PageToast";
import Usage from "./examples/navbar/usage";
import UsageSidebar from "./examples/sidebar/usage";
import PageImage from "./pages/PageImage";
import PageTheme from "./pages/PageTheme";
import PageTitle from "./pages/PageTitle";
import PageIntroduction from "./pages/PageIntroduction";
import PageDocumentation from "./pages/PageDocumentation";
import ScrollToTop from "./components/navigation/ScrollToTop";
import PageTooltips from "./pages/PageTooltips";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageIntroduction />} />
        </Route>
        <Route path="/docs" element={<Layout documentation />}>
          <Route index element={<PageDocumentation />} />
          <Route path="badge" element={<PageBadge />} />
          <Route path="button" element={<PageButton />} />
          <Route path="card" element={<PageCard />} />
          <Route path="image" element={<PageImage />} />
          <Route path="modal" element={<PageModal />} />
          <Route path="table" element={<PageTable />} />
          <Route path="navigation" element={<PageNavigation />} />
          <Route path="theme" element={<PageTheme />} />
          <Route path="text" element={<PageTitle />} />
          <Route path="toast" element={<PageToast />} />
          <Route path="tooltips" element={<PageTooltips />} />
        </Route>
        <Route path="/examples/navbar/usage" element={<Usage />} />
        <Route path="/examples/sidebar/usage" element={<UsageSidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
