import { createBrowserRouter } from "react-router-dom";
import { NavigationProvider } from "./context/navigation-context";
import Layout from "./components/layout";
import Home from "./pages/home";
import AlertHome from "./pages/alert-home";
import AccordionHome from "./pages/accordion-home";
import MultiSelectHome from "./pages/multi-select-home";
import ButtonGroupHome from "./pages/button-group-home";
import CheckboxHome from "./pages/checkbox-home";
import CheckboxGroupHome from "./pages/checkbox-group-home";
import CheckboxHierarchicalHome from "./pages/checkbox-hierarchical-home";

// Wrapper component to provide navigation context inside router
// eslint-disable-next-line react-refresh/only-export-components
function AppWithNavigation() {
  return (
    <NavigationProvider>
      <Layout />
    </NavigationProvider>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWithNavigation />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "alert",
        element: <AlertHome />,
      },
      {
        path: "accordion",
        element: <AccordionHome />,
      },
      {
        path: "multi-select",
        element: <MultiSelectHome />,
      },
      {
        path: "button-group",
        element: <ButtonGroupHome />,
      },
      {
        path: "checkbox",
        element: <CheckboxHome />,
      },
      {
        path: "checkbox-group",
        element: <CheckboxGroupHome />,
      },
      {
        path: "checkbox-hierarchical",
        element: <CheckboxHierarchicalHome />,
      },
      {
        path: "button",
        element: <div>Button coming soon</div>,
      },
      {
        path: "card",
        element: <div>Card coming soon</div>,
      },
    ],
  },
]);
