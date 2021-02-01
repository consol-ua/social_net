import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { getUserProfile } from "../../redux/profile-reduser";
import { GlobalStateType } from "../../redux/redux-store";
import Profile from "./Profile";

type MapStateToPropsType = {
  profile: any
  auth: boolean
  authUser: number | null
}
type MapDispatchToPropsType = {
  getUserProfile: (userId: number) => void
}
type OwnPropsType = {
  userId?: string | undefined,
}

type PropsType = MapDispatchToPropsType & MapStateToPropsType & RouteComponentProps<OwnPropsType>

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId: any = this.props.match.params.userId;
    if (!userId) {
      if (this.props.auth) {
        userId = this.props.authUser;
      } else {
        userId = 12999;
      }
    }
    this.props.getUserProfile(Number(userId));
  }
  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state: GlobalStateType): MapStateToPropsType => ({
  profile: state.profilePage,
  auth: state.auth.isAuth,
  authUser: state.auth.id,
});

let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  getUserProfile,
})(WithUrlDataContainer);
