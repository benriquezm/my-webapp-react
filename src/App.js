import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <div className="my-3 p-2">
            <div className="card text-center">
              <div className="card-header">Destacados</div>
              <div className="card-body">
                <h5 className="card-title">Tratamiento especial del título</h5>
                <p className="card-text">
                  Con el texto de respaldo a continuación como introducción
                  natural al contenido adicional.
                </p>
                <a href="#" className="btn btn-primary">
                  Ve a algún lado
                </a>
              </div>
              <div className="card-footer text-body-secondary">Hace 2 días</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
