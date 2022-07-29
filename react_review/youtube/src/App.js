import {useEffect, useState} from 'react';
import './App.css';
import VideoList from './components/video_list/video_list';

function App() {
    const [videos, setVideos] = useState([]);

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };

    useEffect(() => {
        fetch(
            'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBFrq_zKa-9dJg9qbTU8lsFKF36cwTZ63g',
            requestOptions,
        )
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }, []);

    return (
        <div className="App">
            <VideoList videos={videos} />
        </div>
    );
}

export default App;
