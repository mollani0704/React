import React from 'react';
//import Movie from './movies'
import './App.css';
import axios from 'axios';
import Imgcom from './imgcom';


// axios 모듈
// GET, PUT, POST, DELETE등의 메소드로 API 요청을 합니다.
// yarn add axios


class App extends React.Component{
  //로딩된 데이터파일의 상태
  state = {
    isLoading:true,
    movies:[],
  };
  
  getMovies = async() =>{
    const { 
      data:{
        data:{movies}
      }
    }= await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    //console.log(movies);
    //console.log(movies.data.data.movies);
    this.setState({movies,isLoading:false})
  }

  componentDidMount(){
     this.getMovies()
  }    

  render(){
    const {isLoading,movies} = this.state;
    return(
      <div>
        <Imgcom/>
      </div>

      // <div className='container'>
      //   <div className='movies'>
      //       {/*isLoading ? '로딩':'대기'*/}
      //       {isLoading 
      //       ?('로딩')
      //       :(movies.map((movie)=>(
      //             <Movie id={movie.id}
      //             year={movie.year}
      //             title={movie.title}
      //             summary={movie.summary}
      //             poster={movie.medium_cover_image} />
      //       ))
      //       )}
         
      //   </div>
      // </div>
    )
  }
}

export default App;
// - application은 render를 한다.
// - 처음에는 isLoading : true이므로 '로딩'을 보여준다.
// - application이 mount 된 후(componentDidMount), getMovies() 을 호출한다.
// - getMovies()는 axios.get을 사용한다. 하지만 axios.get은 
//   완료되기까지 시간이 조금 필요해서 await를 넣었다.
// - 하지만 await를 쓰기 위해선 이 함수가 비동기 함수여야 한다. 고로 async를 붙인것이다.
// - 이제 axios 접근이 끝날때까지 기다리게 될 것이다.
























// function App() {
//   return (
//     <div>
  
//     </div>
//   );
// }

// export default App;
