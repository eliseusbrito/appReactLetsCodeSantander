import React from 'react'

class App3 extends React.Component {
  constructor (props){
    super(props);
    this.state = {nome: ''};
    this.changeName = this.changeName.bind(this); //ao inves de bind poderia usar flexa na funtion
  }

  changeName = function(event){  //se não usar bind ficaria changeName = (event)=>{
    this.setState({nome: event.target.value})
  }
  render() {
    return (
      <> 
      Nome: <input type text="text" value={this.state.nome} onChange={this.changeName}></input>
      <p>
        Olá {this.state.nome}
      </p>
      </>
    );
  }
}

export default App3;
