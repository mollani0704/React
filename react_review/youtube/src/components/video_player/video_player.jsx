import React from 'react';

const VideoPlayer = ({id}) => {
    return (
        <div>
            <iframe
                id="ytplayer"
                type="text/html"
                width="720"
                height="405"
                src={`https://www.youtube.com/embed/${id}`}
            ></iframe>
        </div>
    );
};

export default VideoPlayer;
