import Axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reduser";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/12999`, {
      withCredentials: true,
      headers: {
        "API-KEY": "e727ac2e-86d0-4184-87d3-84b605c89df9",
      },
    }).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }
  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({ profile: state.profilePage });
export default connect(mapStateToProps, {
  setUserProfile,
})(ProfileContainer);
