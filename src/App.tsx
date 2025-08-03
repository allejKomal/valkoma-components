import './App.css'
import 'valkoma-package/dist/style.css';
import { ThemeProvider } from 'valkoma-package/hooks'
import { ModeToggle } from 'valkoma-package/design-system'

function App() {

  return (
    <ThemeProvider showLoader={true}>
      <div className="fixed bottom-4 left-4 z-50">
        <ModeToggle />
      </div>
      Home işhere
    </ThemeProvider>
  )
}

export default App
