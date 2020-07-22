import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';


class App extends React.Component {
  state = {
    isLoading: true, 
    movies: [],
  };
  getMovies = async () => {
    const {
      data:{
        data:{movies},
      },
    
    }= await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
   this.getMovies();
  }

  //async는 자바스크립트에게 getMovies가 비동기라고 말해주는 것. 그니까 기다리셈 ! 이라고 말해주는 것이다. 
  //await은 자바스크립트에게 getMovies 함수 내부의 axious.get가 실행 완료되기 까지 기다렸다가 끝나면 계속 해! 라고 말해주는 것
  //==> API에서 받아오는 axious.get을 실행하려면 시간이 필요하고, 그걸 자바스크립트한테 알려줘야 하니까 async랑 await을 넣은 것이다. 

  render() {
    const { isLoading, movies } = this.state;
    return (<section className = "container">
      {isLoading ? (
        <div className = "loader">
          <span className = "loader__text">Loading...</span>
        </div>
        ) : (
          <div className = "movies">
            {movies.map((movie) => (
              <Movie
                key = {movie.id}
                id = {movie.id}
                year ={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres} 
              />
        ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;