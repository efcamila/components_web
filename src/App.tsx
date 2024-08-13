import TestToast from "./components/toast/TestToast";
import Theme from "./components/theme/Theme";
import TestTableAction from "./components/tables/TestTableAction";

function App() {
  return (
    <div className="dark:bg-gray-950 w-full h-screen flex flex-col">
      <TestToast />

      <section className="flex justify-around pt-5">
        <h1 className="dark:bg-gray-950 dark:text-white text-3xl font-bold underline">
          Hello world!
        </h1>
        <Theme colorSwitch="bg-blue-600" />
      </section>

      <section className="w-full flex justify-center mt-4">
        <TestTableAction/>
      </section>
    </div>
  );
}

export default App;
