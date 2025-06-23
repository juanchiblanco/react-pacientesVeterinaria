import "bootstrap/dist/css/bootstrap.min.css";
import FormularioPaciente from "./components/FormularioPaciente";
import ListaPacientes from "./components/ListaPacientes";

function App() {

  return (
    <main className="container my-3">
    <h1 className="text-center">Administrador de pacientes</h1>
    <FormularioPaciente/>
    <ListaPacientes/>
    </main>
  )
}

export default App
