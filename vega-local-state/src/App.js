import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const numberList = [2,5,3];
// const newNumber = 7;
// numberList.push(newNumber);    //this is MUTATION, NOT FOR REACT

// const newNumberList = [numberList[0], numberList[1], numberList[2], newNumber];
// // this is the ugly way 

// const listOfNumbers = [ ...numberList, newNumber];
// //this is the fancy REACT WAY
// // [ ...[2, 5, 3], 7]
// // [2, 5, 3, 7]


// const bowler = {
//   name: 'Dane',
//   lastBowlingScore: 105,
//   isRightHanded: true
// }

// bowler.lastBowlingScore = 150; //this is MUTATION, NOT FOR REACT

// const updatedBowler = { name : bowler.name, lastBowlingScore : 150};
// //this is also ugly

// const superNewBowler = { ...bowler, lastBowlingScore: 150}
// //this is the REACT way
// // {...{name: 'Dane', lastBowlingScore: 105, isRightHanded: true} 
// //     lastBowlingScore: 150}
// //
// //MOST RECENT lastBowlingScore wins out.



class App extends Component {

  constructor(props) {
    super(props);    //ensures REACT works
    //local state - MUST be called state
    this.state = { user: 
                    {name: 'Ryan', 
                     job: 'dev', 
                     workLifeBalance: 'phenom',
                    salary: '253k'}
                  }  //prob empty on load, but with a user input
    // works like let user = 'Ryan'

    //  state = {}    //this is experimental shorthand for above constructor
  }

  handleChange1 = (event) => {   //Arrow ANON fucntions bind 'THIS' correctly
    console.log('you typed a thing, good for you.', event.target.value);
    //this.state.user = event.target.value //does NOT work, can't mutate STATE
    this.setState( 
      { user: {
        ...this.state.user,
        name: event.target.value} }
      )
  }

  handleChange2 = (event) => {   //Arrow ANON fucntions bind 'THIS' correctly
    console.log('you typed a thing, good for you.', event.target.value);
    //this.state.user = event.target.value //does NOT work, can't mutate STATE
    this.setState(
      { user: {
        ...this.state.user,
        job: event.target.value} }
    )
  }

  handleChange3 = (event) => {   //Arrow ANON fucntions bind 'THIS' correctly
    console.log('you typed a thing, good for you.', event.target.value);
    //this.state.user = event.target.value //does NOT work, can't mutate STATE
    this.setState(
      {
        user: {
          ...this.state.user,
          workLifeBalance: event.target.value
        }
      }
    )
  }

  handleChange4 = (event) => {   //Arrow ANON fucntions bind 'THIS' correctly
    console.log('you typed a thing, good for you.', event.target.value);
    //this.state.user = event.target.value //does NOT work, can't mutate STATE
    this.setState(
      {
        user: {
          ...this.state.user,
          salary: event.target.value
        }
      }
    )
  }

  handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState(
        {
          user: {
            ...this.state.user,
            [propertyName]: event.target.value
          }
        }
      )
    }
  }

  handleClick = () =>{
    console.log( this.state);
    
  }

  render() {
    return (
      <div>
        <h1>Local State</h1>
        <input placeholder="USER" type='text' onChange={this.handleChangeFor('name')}></input>
        <input placeholder="JOB" type='text' onChange={this.handleChangeFor('job')}></input>
        <input placeholder="WORK LIFE BALANCE" type='text' onChange={this.handleChangeFor('workLifeBalance')}></input>
        <input placeholder="SALARY" type='text' onChange={this.handleChangeFor('salary')}></input>
        <button onClick={this.handleClick}>LOG</button>
        <p>The user is: {this.state.user.name} and his job is {this.state.user.job} and he has {this.state.user.workLifeBalance} work life balance at {this.state.user.salary} annually.</p>
      </div>
    );
  }

}

export default App;
