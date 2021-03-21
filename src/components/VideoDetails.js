/* import React from 'react';
import { Paper, Typography } from '@material-ui/core';


const VideoDetails = ({ video }) => {
    if (!video) return <div>Loading...</div>;

    console.log(video.id.videoId);

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <React.Fragment>
                <iframe frameBorder="0" height="35%" width="110%" title="video player" src={videoSrc} />

            <Paper elevation={6} style={{ padding: "15px", width: "106%" }}>
                <Typography variant="h4">
                    {video.snippet.title} - {video.snippet.channelTitle}
                </Typography>

                <Typography variant="subtitle1">
                    {video.snippet.channelTitle}
                </Typography>

                <Typography variant="subtitle2">
                    {video.snippet.description}
                </Typography>
            </Paper>
        </React.Fragment>

    )

}

export default VideoDetails; */

import React from "react";

import { Paper, Typography } from "@material-ui/core";

export default ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <iframe
        frameBorder="0"
        height="35%"
        width="110%"
        title="Video Player"
        src={videoSrc}
      />
      <Paper elevation={6} style={{ padding: "15px", width: "106%" }} >
        <Typography variant="h5">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
}