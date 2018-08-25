import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDumg-UTxi7auZd6uQWdzFxVYcjosqC6vM';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch = (term) => {
    YTSearch({key:API_KEY, term:term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  };

  onVideoSelectCallback = (video) => {
    this.setState ({selectedVideo: video})
  };

  render () {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelectCallback}/>
      </div>
    )
  };
}

//take the component's generated html and inject into dom
ReactDOM.render(<App/>, document.querySelector('.container'));
