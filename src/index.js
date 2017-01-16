//lots of really good notes in search_bar.js. Check that out when you are writing your own React app.
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA90uOps8KPvpeAHRSSdb5PBvpIiGcO8g8';

// Create a new component. This component should produce some HTML. This is considered a functional component.
const App = () => {
  return (
    <div><SearchBar /></div>
  );
}

//Take this component's generated HTML and put it on the page (in the DOM)
//<App /> instantiates (Calls) the variable in JSX format.
//.render requires a second argument to say where in the HTML document we are putting the function.
ReactDOM.render(<App />, document.querySelector('.container'));
