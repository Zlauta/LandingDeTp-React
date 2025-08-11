import Footer from "./components/Footer";
import ListadoDeColores from "./components/ListadoColores";
import ListadoTareas from "./components/ListadoTarea";

const App = () => {
  return (
    <>
      <Headers></Headers>
      <ListadoTareas></ListadoTareas>
      <ListadoDeColores></ListadoDeColores>
      <Footer></Footer>
    </>
  );
};

export default App;
