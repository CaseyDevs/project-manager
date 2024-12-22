import Sidebar from './components/Sidebar';
import NewProject from "./components/NewProject.jsx";
import NoProject from "./components/NoProject.jsx";

function App() {
  return (



    <>
        <main className="h-screen my-8 flex gap-8">
            <Sidebar />
            <NoProject />
        </main>
    </>
  );
}

export default App;
