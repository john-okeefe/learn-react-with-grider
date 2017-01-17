//lots of really good notes in search_bar.js. Check that out when you are writing your own React app.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyA90uOps8KPvpeAHRSSdb5PBvpIiGcO8g8';



// Create a new component. This component should produce some HTML. This is considered a functional component. Changing function based componenet (check previous git builds) to a class based component so it can keep state of the YouTube Search information.
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      //Since it makes sense to call the data coming in videos, it creates an object where the key and value are the same. When that happens you can condense the object down to one mention of the word. This is used a lot in example React apps.
      this.setState({ videos });
      //resolves as this.setState({videos: videos});
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        {
          //To give the child VideoList access to the information from the parent index or "App" we just add a line to the JSX. Passing this information into VideoList is called passing in props. We are passing prop videos to VideoList.
        }
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and put it on the page (in the DOM)
//<App /> instantiates (Calls) the variable in JSX format.
//.render requires a second argument to say where in the HTML document we are putting the function.
ReactDOM.render(<App />, document.querySelector('.container'));
