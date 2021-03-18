import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import ReactDOM from 'react-dom'; 

class App extends React.Component {


  state = {
    clients : [
      {id: 1, nom: "ahmed"},
      {id: 2, nom: "omar"},
      {id: 3, nom: "joseph"}
    ],
    compteur: 0,
    nouveauClient : ''
  }

  handleClick = () => {
    this.setState({compteur: this.state.compteur + 1});
    console.log(this.state);

    const clients = this.state.clients.slice()
    clients.push({id: 4, nom:"marwa"})
    this.setState({clients:clients})
  }

  handleDelete = id => {
    const clients = this.state.clients.slice()
    const index = clients.findIndex(client => client.id === id)
    clients.splice(index, 1)
    this.setState({clients: clients})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const id = new Date().getTime()
    const nom = this.state.nouveauClient
    const clients = [...this.state.clients]
    clients.push({id, nom})
    this.setState({clients: clients, nouveauClient: ''})
  }

  handleChange = (event) => {
    const value = event.currentTarget.value
    this.setState({nouveauClient: value})
  }

  render(){
    const title = "Liste des clients"; 

    return (
      <div>
        <h1> {title} </h1>
        {this.state.compteur}
        <button onClick={this.handleClick}> Click me lol !</button>
        <ul>
          {
            this.state.clients.map((client) => 
            <li>{client.nom}<button onClick={() => this.handleDelete(client.id)}>X</button></li>
         )
          }
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.nouveauClient} onChange={this.handleChange} type="text" placeholder="Ajouter un client"/>
          <button>Confirmer</button>
        </form>
      </div>
    )
  }
}

export default App;
