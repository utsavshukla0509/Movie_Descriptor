import React,{Image} from "react";
import { connect } from "react-redux";
import "./style.css";
import img from "./mainpage.jpg"

import { getMovies } from "../../actions/moviesAction";
import { getGenres } from "../../actions/genreAction";

class MainPage extends React.Component{
    state = {
        index : 0,
      };
    componentDidMount() {
        this.props.getMovies();
      }

      onRightClick(movies){
        const ind = this.state.index
        if(ind === movies.length){
            this.setState({index:0})
        }else{
            this.setState({index:ind + 1})
        }
      }
      onLeftClick(movies){
        const ind = this.state.index
        if(ind === 0){
            this.setState({index:movies.length})
        }else{
            this.setState({index : ind - 1})
        }
    }

    

    render(){
        const { movies,loggedIn } = this.props;
        // var movieList = []
        
        // movies.map((movie) => (
        //    movieList.push(movie.image.data)
        // ))
        // console.log(movieList[0]);
        const coverImage = img;
        
            // const encodedImage = new Buffer(toString(movieList[0]), "binary").toString("base64");
            // const coverImage = "data:image/jpeg;base64," + encodedImage;
        
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
                        <div class={"rightArrowBox arrowBoxCommon "} onClick={()=>{this.onRightClick(movies)}}>
                            <div class={"mainRightArrow fa fa-arrow-right"}/>
                        </div>
                        <div class={"leftArrowBox arrowBoxCommon"} onClick={()=>{this.onLeftClick(movies)}}>
                            <div class={"mainLeftArrow fa fa-arrow-left"}/>
                        </div>  
                        <img src={coverImage} alt={"logo"} class={"imgStyle"}/>
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