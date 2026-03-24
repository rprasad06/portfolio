import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";

import App from "./App";
import { Layout } from "./components/Layout";
import { PROJECT_IDS_WITH_PAGES } from "./components/Sidebar";
import { SectionNavProvider } from "./contexts/SectionNavContext";
import { ProjectPage } from "./pages/ProjectPage";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <BrowserRouter>
        <SectionNavProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<App />} />
              {PROJECT_IDS_WITH_PAGES.map((id) => (
                <Route key={id} path={`projects/${id}`} element={<ProjectPage />} />
              ))}
            </Route>
          </Routes>
        </SectionNavProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
