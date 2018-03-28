// this library knows how to work with react components
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const API_KEY = 'AIzaSyCEweBLOrzRGkkcvT14wZpSwEbF1w9ekg8';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');

    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term }, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });
            // ES6 sintax = this.setState( {videos: videos } )
            // only when key = value
        });
    }

    render() {
        const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetails video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

// Take this components genereted HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

// <App/> - React.createElement(App)
// document.querySelector('.container') - container where to put a component