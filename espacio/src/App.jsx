import "./App.css";
import Planeta from "./components/Planeta.jsx";
function App() {
  return (
    <main className="flex h-screen bg-slate-200">
      <section>
        <div className="aspect-square w-20">
          <img src="/tierra.png" alt="" />
        </div>
      </section>
      <section className="aspect-square fixed right-0 h-full">
        <Planeta />
      </section>
    </main>
  );
}

export default App;
