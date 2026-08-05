import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col">
      <Header />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
