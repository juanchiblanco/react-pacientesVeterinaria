import "bootstrap/dist/css/bootstrap.min.css";
import FormularioPaciente from "./components/FormularioPaciente";

function App() {

  return (
    <main className="container my-3">
    <h1 className="text-center">Administrador de pacientes</h1>
    <FormularioPaciente/>
    </main>
  )
}

export default App
