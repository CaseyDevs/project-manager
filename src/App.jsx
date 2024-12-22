import Sidebar from './components/Sidebar';
import NewProject from "./components/NewProject.jsx";

function App() {
  return (
    <>
        <main className="h-screen my-8 flex gap-8">
            <Sidebar />
            <NewProject />
        </main>
    </>
  );
}

export default App;
