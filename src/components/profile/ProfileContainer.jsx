import Axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUserProfile } from "../../redux/profile-reduser";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger;
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 12999;
    }
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
      {
        withCredentials: true,
        headers: {
          "API-KEY": "e727ac2e-86d0-4184-87d3-84b605c89df9",
        },
      }
    ).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }
  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({ profile: state.profilePage });

let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile,
})(WithUrlDataContainer);
