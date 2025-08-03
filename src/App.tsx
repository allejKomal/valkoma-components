import "./App.css";
import "valkoma-package/dist/style.css";
import { ThemeProvider } from "valkoma-package/hooks";
import { ModeToggle } from "valkoma-package/design-system";
import Layout from "./components/layout";

function App() {
  return (
    <ThemeProvider showLoader={false}>
      <div className="fixed bottom-4 left-4 z-50">
        <ModeToggle />
      </div>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
