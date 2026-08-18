import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import ProjectPage from "./pages/projectPage";
import AllProjectsPage from "./pages/AllProjectsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/projects" element={<AllProjectsPage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;