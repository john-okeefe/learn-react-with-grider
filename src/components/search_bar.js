//explain Component in Curly Braces: it's like saying pull .component object from the react module and create a variable of it's own name: var Component = React.Component;
import React, { Component } from 'react';

//this creates a class based component used (in this case) when the component needs to share information like user input. Writing this is es6, below is classic. Functional components are considered 'dumb' components. function goes in, jsx comes out. Tend to start with functional component until you need more functionality, than change to class.
class SearchBar extends Component {


  //every class based component will need a render method
    render() {
      return (
        //setting a method to grab the event handler.
        <input onChange={event => console.log(event.target.value)} />
      )
    }
}

//done in old js syntax
//import React from 'react';
//class SearchBar extends React.Component {
//render() {
// return <input />;
//}
//}


export default SearchBar;
