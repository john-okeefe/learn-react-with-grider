import React from 'react';
import VideoListItem from './video_list_item';

//because this has no real interaction we'll make it a functional component. It's just return a list so we'll setup the ul's. Using Bootstrap v4 for styling.
const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem video={video} />
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
