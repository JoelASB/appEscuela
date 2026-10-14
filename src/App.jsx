import Navbar from './components/Navbar/Navbar';
import AlumnoCard from './components/AlumnoCard/AlumnoCard';
import Contador from "./components/Contador";
function App() {
  return (
    <>
      {/* 1. Insertamos el Navbar en la parte superior */}
      <Navbar />
      {/* 2. Contenedor principal de la página */}
      <div className="container">
        <h2 className="mb-4">Directorio de Alumnos</h2>

        INSTRUCTOR: GIANCARLOS BARBOZA N. ESCUELA DE TECNOLOGÍAS
        DE LA INFORMACIÓN

        DISEÑO Y DESARROLLO DE SOLUCIONES IOT - SEMINARIO

        <div className="row">
          {/* 3. Reutilizamos el componente AlumnoCard pasándole Props diferentes */}
          <AlumnoCard
            nombre="Daniel Puccio"
            carrera="Desarrollo de Software"
            estado="Matriculado"
          />
          <AlumnoCard
            nombre="Maria Perez"
            carrera="Diseño Gráfico"
            estado="Inactivo"
          />
          <AlumnoCard
            nombre="Carlos Mendoza"
            carrera="Administración Industrial"
            estado="Matriculado"
          />

          <Contador/>
        </div>
      </div>
    </>
  );
}
export default App;