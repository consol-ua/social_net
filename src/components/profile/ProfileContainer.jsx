import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { userAPI } from "../../API/API";
import { setUserProfile } from "../../redux/profile-reduser";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      if (this.props.auth) {
        userId = this.props.authUser;
      } else {
        userId = 12999;
      }
    }
    userAPI.getUserProfile(userId).then((response) => {
      this.props.setUserProfile(response);
    });
  }
  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage,
  auth: state.auth.isAuth,
  authUser: state.auth.id,
});

let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile,
})(WithUrlDataContainer);
