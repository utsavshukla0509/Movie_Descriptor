import React,{Image} from "react";
import "./style.css";
import img from "./mainpage.jpg"

class MainPage extends React.Component{
    

    render(){
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
                <img src={img} alt={"logo"} class={"imgStyle"}/>
                </div>
                    
            </div>
        )
    }
}
export default MainPage;