import React, { Component } from 'react';
import './App.css';
import Botonera from './Botonera';


class App extends Component {
  constructor(state) {
    super(state)
    this.state = {
      newTask:'',
      tasks: [
        {
          id: 1,
          text: 'Pagar la luz',
          done: false
        }
      ]
    }
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this)
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.toggleDone = this.toggleDone.bind(this)
    
  }
  handleOnChangeInput(event) {
    this.setState({
      newTask: event.target.value
    })
  }
// function to add a new to do-----------------------------------

  addTask() {
  const newTask ={
    id:Math.random(),
    text:this.state.newTask,
    done: false
  }
   let loQueYaTeniaEnTask = this.state.tasks;
   loQueYaTeniaEnTask.push(newTask)

  this.setState({
    tasks: loQueYaTeniaEnTask
   })
  }

// function to delete---------------------------------

  deleteTask(id){
      for(var i= 0; i < this.state.tasks.length;i++){
        if(this.state.tasks[i].id === id){
          this.state.tasks.splice(i,1)
        }
      }
  this.setState({
    tasks: this.state.tasks

    })
  }
//function to edit---------------------------------------

  toggleDone(id){
    const myTasks = this.state.tasks;
    for(var i = 0; i< myTasks.length;i++){
      if(myTasks[i].id === id){
        myTasks[i].done = !myTasks[i].done;
      }
    }
    this.setState({
      tasks: myTasks
    })
  }
  
  render() {
 const lis = this.state.tasks.map(t => {
      let colorTareaHecha = '';
      if(t.done){
        colorTareaHecha = 'done';
      }
      return <div> 
        <li key={t.i} ><span className={colorTareaHecha}>{t.text}</span></li>
         <Botonera id={t.id} eliminar={this.deleteTask} marcar={this.toggleDone}></Botonera> 
         </div>
    })
    return (
      <div className="App">
        <p>To do list ! :)</p>
        <div>
          <input type="text" value={this.state.newTask} onChange={this.handleOnChangeInput}></input>
          <button onClick={this.addTask}>Add</button>
        </div>
        <ul >
          {lis}
        </ul>
  
      </div>
    );
  }
}





export default App;
