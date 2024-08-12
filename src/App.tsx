import TestToast from "./components/toast/TestToast"
import Theme from "./components/theme/Theme"

function App() {
 
  return (
    <div className="dark:bg-gray-950 h-screen flex flex-row justify-around pt-5">
      <TestToast/>
      <h1 className="dark:bg-gray-950 dark:text-white text-3xl font-bold underline">Hello world!</h1>
      <Theme colorSwitch="bg-blue-600"/>
    </div>
  )
}

export default App
