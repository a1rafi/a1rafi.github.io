import { useEffect, useState } from "react";
import Home from "./pages/home.jsx";
import ProjectsPage from "./pages/projects.jsx";

const getRoute = () => {
  const hash = window.location.hash.replace(/^#/, "");
  return hash || "/";
};

export default function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const handleHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (route === "/projects") return <ProjectsPage />;
  return <Home />;
}
