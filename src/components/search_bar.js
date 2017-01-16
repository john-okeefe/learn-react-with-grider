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
        //Applies to the "value=" statement: setting value to the state means that the user is triggering an event and seeing the state, instead of seeing text with potentially nothing happening. For an example of this delete the onChange part the input and see what happens. This also allows us to set an initial state that is not blank if we so desire. This is called a controlled component.
        <div>
          <input
            value={this.state.term}
            onChange={event => this.setState({ term: event.target.value })} />
        </div>
      );
    }
}

export default SearchBar;
