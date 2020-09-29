import React from "react";
import { connect } from "react-redux";
import "./style.css";
import img1 from "../../assets/aquaman.jpg";
import img2 from "../../assets/ironman.jpg";
import img3 from "../../assets/marvels.jpg";
import img4 from "../../assets/wolverine.jpg";

import { getMovies } from "../../actions/moviesAction";
import { getGenres } from "../../actions/genreAction";

class MainPage extends React.Component{ 


    render(){
        // const { movies,loggedIn } = this.props;
        
        return(
            <div className="background-container main-page">                
                <div class = {"imgBoxStyle"}>
                        <div class="card">
                            
                                <div class="card_part card_part-one">
                                    <img src={img1} alt={"logo"} class={"imgStyle"}/> 
                                </div>
                                
                                <div class="card_part card_part-two">
                                    <img src={img2} alt={"logo"} class={"imgStyle"}/>
                                </div>

                                <div class="card_part card_part-three">
                                    <img src={img3} alt={"logo"} class={"imgStyle"}/>
                                </div>

                                <div class="card_part card_part-four">
                                    <img src={img4} alt={"logo"} class={"imgStyle"}/>
                                </div>
                             


                            </div>
                            <div className={"image-slider"}>
                                <div class="slider-image-style slide_part slide_part-one">
                                    <img src={img1} alt={"logo"} class={"imgStyle2"}/> 
                                    <a href = {"https://www.youtube.com/watch?v=WDkg3h8PCVU"} class = {"slider-image-highlight"}>
                                        <div class = {"arrow-time"}>
                                            <div><i class='far fa-arrow-alt-circle-right slider-arrow'/></div>
                                            <span class = {"time"}>2:26</span>
                                        </div>
                                        <div><span class = {"movie-title"}>Aquaman</span></div>
                                    </a>
                                    <div class = {"movie-description-style"}>
                                        <span class = {"genre-title"}>Genres: <span style = {{color : "rgba(255, 255, 255, 0.7)",fontSize : "14px"}}>Action, Adventure</span></span>
                                        <span class = {"rating-title"}>Ratings: <span style = {{color : "rgba(255, 255, 255, 0.7)",fontSize : "14px"}}>6.9/10</span></span>
                                        <span class = {"description-title"}>Description</span>
                                        <span class = {"movie-description"}>Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures. 
                                        He goes on a quest to retrieve the legendary Trident of Atlan and protect the water world.</span></div>
                                </div>
                                

                                <div class="slider-image-style slide_part slide_part-two">
                                    <img src={img2} alt={"logo"} class={"imgStyle2"}/> 
                                    <a href = {"https://www.youtube.com/watch?v=2CzoSeClcw0&ab_channel=JoBloMovieTrailers"} class = {"slider-image-highlight"}>
                                        <div class = {"arrow-time"}>
                                            <div><i class='far fa-arrow-alt-circle-right slider-arrow'></i></div>
                                            <span class = {"time"}>2:06</span>
                                        </div>
                                        <div><span class = {"movie-title"}>Iron Man 3</span></div>
                                    </a>
                                    <div class = {"movie-description-style"}>
                                    <span class = {"genre-title"}>Genres: <span style = {{color : "rgba(255, 255, 255, 0.7)",fontSize : "14px"}}>Action, Adventure, Superhero</span></span>
                                        <span class = {"rating-title"}>Ratings: <span style = {{color : "rgba(255, 255, 255, 0.7)",fontSize : "14px"}}>7.2/10</span></span>
                                        <span class = {"description-title"}>Description</span>
                                        <span class = {"movie-description"}>Tony Stark encounters a formidable foe called the Mandarin. 
                                        After failing to defeat his enemy, Tony embarks on a journey of self-discovery as he fights against the powerful Mandarin.</span></div>
                                
                                </div>

                                <div class="slider-image-style slide_part slide_part-three">
                                    <img src={img3} alt={"logo"} class={"imgStyle2"}/> 
                                    <a href = {"https://www.youtube.com/watch?v=eOrNdBpGMv8&ab_channel=MarvelEntertainment"} class = {"slider-image-highlight"}>
                                        <div class = {"arrow-time"}>
                                            <div><i class='far fa-arrow-alt-circle-right slider-arrow'></i></div>
                                            <span class = {"time"}>2:05</span>
                                        </div>
                                        <div><span class = {"movie-title"}>Avengers</span></div>
                                    </a>
                                    <div class = {"movie-description-style"}>
                                    <span class = {"genre-title"}>Genres: <span style = {{color : "rgba(255, 255, 255, 0.7)",fontSize : "14px"}}>Action, Adventure, Superhero</span></span>
                                        <span class = {"rating-title"}>Ratings: <span style = {{color : "rgba(255, 255, 255, 0.7)",fontSize : "14px"}}>7.3/10</span></span>
                                        <span class = {"description-title"}>Description</span>
                                        <span class = {"movie-description"}>Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply 
                                        The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.</span></div>
                                
                                </div>

                                <div class="slider-image-style slide_part slide_part-four">
                                <img src={img4} alt={"logo"} class={"imgStyle2"}/> 
                                    <a href = {"https://www.youtube.com/watch?v=u1VCP3O8wG0&ab_channel=20thCenturyStudios"} class = {"slider-image-highlight"}>
                                        <div class = {"arrow-time"}>
                                            <div><i class='far fa-arrow-alt-circle-right slider-arrow'></i></div>
                                            <span class = {"time"}>1:57</span>
                                        </div>
                                        <div><span class = {"movie-title"}>Wolverine</span></div>
                                    </a>
                                    <div class = {"movie-description-style"}>
                                    <span class = {"genre-title"}>Genres: <span style = {{color : "rgba(255, 255, 255, 0.7)",fontSize : "14px"}}>Action, Thriller, Adventure</span></span>
                                        <span class = {"rating-title"}>Ratings: <span style = {{color : "rgba(255, 255, 255, 0.7)",fontSize : "14px"}}>6.7/10</span></span>
                                        <span class = {"description-title"}>Description</span>
                                        <span class = {"movie-description"}>Logan travels to Tokyo to meet Yashida, an old acquaintance who is dying. 
                                        The situation regresses when Yashida offers to take away his healing abilities, but Logan refuses.</span></div>
                                
                                </div>
                            </div>

                
                </div> 

                <div className = {"your-watchlist-frame"}>
                    <div className = {"your-watchlist"}>
                        <h3 class={"watchlist-style"}>Your Watchlist
                        <i class='far fa-arrow-alt-circle-right watchlist-arrow'></i>
                        </h3>
                        <p class = {"para"}>
                        Sign in to access your Watchlist
                        </p>
                        <p class={"para"}>
                                Join with us and start building your own Movies List
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      movies: state.movie.movies,
      loggedIn: state.auth.loggedIn,
    };
  };
const mapDispatchToProps = (dispatch) => {
    return {
      getMovies: () => dispatch(getMovies()),
      getGenres: () => dispatch(getGenres()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);