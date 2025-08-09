import "./App.css";
import "valkoma-package/dist/style.css";
import { ThemeProvider } from "valkoma-package/hooks";
import { ModeToggle } from "valkoma-package/design-system";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <ThemeProvider showLoader={false}>
      <div className="fixed bottom-4 right-4 z-50">
        <ModeToggle />
      </div>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
