import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCitas from './componentes/AgregarCitas';
import ListaCitas from './componentes/ListaCitas';


class App extends Component {

  state = {
    citas: []
  }

  crearCita = (nuevaCita) => {
    const citas = [...this.state.citas, nuevaCita];
    console.log(citas);

    this.setState({
      citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header 
          titulo={'Administrador de Pacientes de Veterinaria'}
        />

        <div className="row">
          <div className="col-md-7">
            <AgregarCitas 
              crearCita={this.crearCita} 
            />
          </div>
          <div className="col-md-5">
            <ListaCitas 
              citas={this.state.citas}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
