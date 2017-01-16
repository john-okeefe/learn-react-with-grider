//explain Component in Curly Braces: it's like saying pull .component object from the react module and create a variable of it's own name: var Component = React.Component;
import React, { Component } from 'react';

//this creates a class based component used (in this case) when the component needs to share information like user input. Writing this is es6, below is classic. Functional components are considered 'dumb' components. function goes in, jsx comes out. Tend to start with functional component until you need more functionality, than change to class.
class SearchBar extends Component {
  //constructor is used to initialize variables and state before render is run.
  constructor(props){
    super(props);
    //this.state = Object (the constructor function is the only place we use this formatting. Everywhere else we change state with this.setState(Object))
    this.state = { term: '' };
  }


  //every class based component will need a render method
    render() {
      return (
        //setting a method to grab the event handler.
        //setting state with this.setState(Object) Running it as a function like this informs React that the state is dynamically changing.
        // Applies to the line "Value of the input" whenever you reference a javascript variable in JSX, you use curly braces.
        <div>
          <input onChange={event => this.setState({ term: event.target.value })} />
          Value of the input: {this.state.term}
        </div>
      );
    }
}

export default SearchBar;
