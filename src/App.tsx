import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AboutPage } from "./pages/AboutPage";
import { ExploreRoadmapsPage } from "./pages/ExploreRoadmapsPage";
import { LandingPage } from "./pages/LandingPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { RoadmapPage } from "./pages/RoadmapPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "roadmaps", element: <ExploreRoadmapsPage /> },
      { path: "roadmaps/:slug", element: <RoadmapPage /> },
      { path: "resources", element: <ResourcesPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "404", element: <NotFoundPage /> },
      { path: "*", element: <Navigate to="/404" replace /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
