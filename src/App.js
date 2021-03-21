/* import React from "react";
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, VideoList, VideoDetails } from './components';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    this.handleSubmit('pdf generation with react and node')
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCbHxRXlQrPyVqZoPsfSJVTq-xsLRHPDxk',
        q: searchTerm,
      }
    });
    this.setState({ videos: response.data.item, selectedVideo: response.data.item })
  }

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>

              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>

              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>

              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App; */

import React, { useState } from "react";
import { AppBar, Grid } from "@material-ui/core";

import { SearchBar, VideoList, VideoDetail } from "./components";

import youtube from "./api/youtube";

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <AppBar>
              <SearchBar onSubmit={handleSubmit} />
            </AppBar>r
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: 'AIzaSyCbHxRXlQrPyVqZoPsfSJVTq-xsLRHPDxk',
        q: searchTerm
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}