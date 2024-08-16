import TestToast from "./components/toast/TestToast";
import Theme from "./components/theme/Theme";
import TestTableAction from "./components/tables/TestTableAction";
import TestModal from "./components/modals/TestModal";
import TestButton from "./components/buttons/clasic/TestButton";

function App() {
  return (
    <div className="dark:bg-black-900 bg-slate-50 w-full min-h-screen flex flex-col">
      {/* <TestToast /> */}

      <section className="flex justify-around pt-5">
        <h1 className="bg-transparent dark:text-white text-3xl font-bold underline">
          Hello world!
        </h1>
        <Theme colorSwitch="bg-blue-600" />
      </section>

      <section className="w-full flex justify-center mt-4">
        <TestTableAction/>
      </section>

      <section>
        <TestModal/>
      </section>

      <section className="w-full m-4 flex gap-5 mb-7">
        <TestButton/>
      </section>

    </div>
  );
}

export default App;
