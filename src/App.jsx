import Footer from "./components/Footer";
import ListadoTarea from "./components/ListadoTarea";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Aplicación de React</h1>
      </header>
      <ListadoTarea></ListadoTarea>
      <Footer />
    </div>
  );
}

export default App;
