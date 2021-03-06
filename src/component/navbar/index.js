import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import { acLogoutRq } from "../../redux/action";

Navbar.propTypes = {};

function Navbar(props) {
  const showLogout = () => {
    if (props.isLogin.isLogin === true) {
      return (
        <>
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          <p className="navbar__logout-title">Logout</p>
        </>
      );
    }
  };

  const logoutUser = () => {
    props.acLogout();
  };

  return (
    <div className="navbar">
      <h2 className="navbar__title">MIAGI</h2>
      <div className="navbar__logo">
        <img
          alt="logo_nav"
          src="data:image/png;base64,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"
          className="navbar__img"
        ></img>
        <div className="navbar__logout" onClick={logoutUser}>
          {showLogout()}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    acLogout: () => {
      return dispatch(acLogoutRq());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
