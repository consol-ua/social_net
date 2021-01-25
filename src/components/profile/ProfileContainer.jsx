import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserProfile } from "../../redux/profile-reduser";
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
    this.props.getUserProfile(userId);
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
  getUserProfile,
})(WithUrlDataContainer);
