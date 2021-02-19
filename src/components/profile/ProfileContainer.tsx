import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { WithAuthRedirect } from "../../Hoc/WithAuthRedirect";
import { getUserProfile, editMode } from "../../redux/profile-reduser";
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
    if (userId) {
      this.props.getUserProfile(Number(userId));
    } else if (this.props.auth) {
      userId = this.props.authUser;
      this.props.getUserProfile(Number(userId));
    } else {
      alert('ERROR PROFILE')
    }
  }

  render() {

    return <Profile {...this.props} />
  }
}

let mapStateToProps = (state: GlobalStateType): MapStateToPropsType => ({
  profile: state.profilePage,
  auth: state.auth.isAuth,
  authUser: state.auth.id
});

export default compose(
  connect(mapStateToProps, { getUserProfile, editMode }),
  withRouter,
  WithAuthRedirect)(ProfileContainer)
// let WithUrlDataContainer = withRouter(ProfileContainer);

// export default connect(mapStateToProps, {
//   getUserProfile,
// })(WithUrlDataContainer);
