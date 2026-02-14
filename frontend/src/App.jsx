import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {Home} from "./pages/home";
import {About} from "./pages/about";
import {Dashboard} from "./pages/dashboard";
import {Features} from "./pages/features";
import {HowItWorks} from "./pages/how-it-works";
import {Onboarding} from "./pages/onboarding";
import {Vision} from "./pages/vision";
import {WhyAaharya} from "./pages/why-aaharya";
import {NotFound} from "./pages/not-found";

import { PageLayout } from "./components/layout/pageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { index: true, element: <Home /> },

      { path: "dashboard", element: <Dashboard /> },

      { path: "about", element: <About /> },

      { path: "features", element: <Features /> },

      { path: "how-it-works", element: <HowItWorks /> },

      { path: "onboarding", element: <Onboarding /> },

      { path: "vision", element: <Vision /> },

      { path: "why-aaharya", element: <WhyAaharya /> },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
