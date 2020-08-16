import React,{Image} from "react";
import { connect } from "react-redux";
import "./style.css";
import img from "./mainpage.jpg"

import { getMovies } from "../../actions/moviesAction";
import { getGenres } from "../../actions/genreAction";

class MainPage extends React.Component{
  
    componentDidMount() {
        this.props.getMovies();
      }

      onRightClick(movies){
          console.log("right");
      }
      onLeftClick(movies){
        console.log("left");
    }

    render(){
        const { movies,loggedIn } = this.props;
        // console.log(movies[1]);
        return(
            <div className="background-container">
                
                <div className={"blk-maintitle-para"}>
                        <div class={"mainTitle"}>
                            <h3 style={{color:"white"}}>Welcome to Movie</h3>
                            <h3 style={{color:"white"}}>Descriptor</h3>
                        </div>
                        <p class={"para"}>
                                Join our community <br/>
                                and <br/>
                                start building your<br/>
                                  own Movies List
                        </p>
                </div>
                
                <div class = {"imgBoxStyle"}>
                        <div class={"rightArrowBox arrowBoxCommon "} onClick = {this.onRightClick}>
                            <div class={"mainRightArrow fa fa-arrow-right"}/>
                        </div>
                        <div class={"leftArrowBox arrowBoxCommon"} onClick = {this.onLeftClick}>
                            <div class={"mainLeftArrow fa fa-arrow-left"}/>
                        </div>
                    <img src={img} alt={"logo"} class={"imgStyle"}/>
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