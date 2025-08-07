import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Pages/HomePage/HomePage";
import TarefaPage from "./components/Pages/TarefaPage/TarefaPage";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomePage />
        <TarefaPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
