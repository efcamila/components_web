import TestToast from "./components/toast/TestToast";
import Theme from "./components/theme/Theme";
import TestTableAction from "./components/tables/TestTableAction";
import TestModal from "./components/modals/TestModal";
import TestCard from "./components/cards/TestCard";
import TestButton from "./components/buttons/clasic/TestButton";
import "./index.css";
import TestBadge from "./components/bagde/TestBadge";
import TestNavbar from "./components/navigation/navbar/TestNavbar";
import TestSidebar from "./components/navigation/sidebar/TestSidebar";
import FooterTest from "./components/navigation/footer/FooterTest";

function App() {
  return (
    <div className="dark:bg-black-600 bg-gray-100 w-full min-h-screen flex flex-col relative">
      
      <TestNavbar/>
      <TestSidebar/>
      {/* <TestToast /> */}
<main className="flex-1 flex gap-8">

</main>
      {/* <section className="flex justify-around pt-5">
        <h1 className="bg-transparent dark:text-white text-3xl font-bold underline">
          Hello world!
        </h1>
      </section>*/}

      <section className="w-full flex justify-center mt-4">
        <TestTableAction />
      </section>

      <section className="w-full flex justify-center mt-4">
        <TestTableAction />
      </section>

      <section className="w-full flex justify-center mt-4">
        <TestModal />
      </section>  

        <section className="w-full flex justify-center mt-4">
        <TestButton/>
        </section>
        
        <section className="w-full flex justify-center mt-4 gap-10">
        <TestBadge/>
        </section> 
        
         <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 content-center place-items-center gap-4 p-8">
        <TestCard/>
        </section>  

        
        <FooterTest/>
    </div>
  );
}

export default App;
