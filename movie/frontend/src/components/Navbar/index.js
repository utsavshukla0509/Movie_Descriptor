import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/authAction";
import "./style.css";

function Navbar(props) {
  function toggleNav() {
    animateSlider();
    const burgerButton = document.getElementById("burger");
    burgerButton.classList.toggle("is-active");
  }

  function animateSlider() {
    const slider = document.getElementsByClassName("slider")[0];
    // document.getElementById("root").style.overflow = "hidden";
    slider.classList.toggle("active");

    const list = document.getElementsByClassName("list")[0];
    list.childNodes.forEach((e, index) => {
      if (e.style.animation) e.style.animation = "";
      else
        e.style.animation = `listItemFade 0.5s ease forwards ${
          index / 5 + 0.3
        }s`;
    });
  }

  function checkLogout(loggedIn) {
    if(loggedIn){
      localStorage.setItem('loggedIn', false);
      localStorage.setItem('email', '');
      localStorage.setItem('name', '');
    }
  }


  return (
    <nav className="nav-wrapper">
      <div id="burger" class="ico-btn" onClick={toggleNav}>
        <span class="ico-btn__burger"></span>
        
      </div>

      {/* <Link className="nav-brand" to="/">iCinema</Link> */}
      {props.loggedIn?(<h5 className = "display-name">Hi,{
        (props.userData.name !== undefined ? props.userData.name : localStorage.getItem('name'))
      }</h5>):("")}
      
      <div class={"mainTitle"}>
          <h3 style={{color:"#0e76bc"}}>Welcome to Movie Descriptor</h3>
      </div>

      <div id="slider" className="slider">
        <ul className="list">
          <Link onClick={toggleNav} to="/">
            Home
          </Link>
          {!props.loggedIn ? (
            <>
              <Link onClick={toggleNav} to="/login">
                Login
              </Link>

              <Link onClick={toggleNav} to="/resigter">
                Register
              </Link>
            </>
          ) : (
            <Link
              onClick={() => {
                toggleNav();
                props.signOut();
                checkLogout(props.loggedIn);
              }}
              to="/#"
            >
              Log out
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
    userData: state.auth.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
