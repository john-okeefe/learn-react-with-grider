import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML
const App = () => {
  return <div>Hi!</div>;
}

//Take this component's generated HTML and put it on the page (in the DOM)
//<App /> instantiates (Calls) the variable in JSX format.
//.render requires a second argument to say where in the HTML document we are putting the function.
ReactDOM.render(<App />, document.querySelector('.container'));
