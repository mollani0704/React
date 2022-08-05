import {useEffect, useState} from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoPlayer from './components/video_player/video_player';

function App({youtube}) {
    const [videos, setVideos] = useState([]);
    const [id, setId] = useState('');
    const search = query => {
        youtube
            .search(query) //
            .then(videos => setVideos(videos));
    };

    useEffect(() => {
        youtube
            .mostPopular() //
            .then(videos => setVideos(videos));
    }, []);

    const getId = id => {
        setId(id);
    };

    return (
        <div className={styles.app}>
            <SearchHeader onSearch={search} />
            <VideoPlayer id={id} />
            <VideoList videos={videos} getId={getId} />
        </div>
    );
}

export default App;
