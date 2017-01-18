import React from 'react';

/* Declaring video in the function the way I did is the eqivalent of saying
grab a video and make it a variable equivalent to the commented variable
underneath */
const VideoListItem = ({ video }) => {
  const imageURL = video.snippet.thumbnails.default.url;

  return (
// const video = props.video;
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={imageURL} alt="placeholder" className="media-object" />
        </div>

        <div className="media-body">
          <div className="media-heading">{ video.snippet.title }</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
