import { connect } from "react-redux";
import {
  getUsersThunkCreator,
  followSuccess,
  unFollowSuccess,
} from "../../redux/users-reduser";
import React from "react";
import Users from "./users";
import { GlobalStateType } from "../../redux/redux-store";
import { compose } from "redux";

type MapStateToPropsType = {
  usersPageItems: any
  totalUsersCount: number
  pageSize: number
  currentPage: number
  isLoaded: boolean
  followingInProgress: number[]
  auth: boolean
}
type MapDispatchToPropsType = {
  getUsersThunkCreator: (pageSize: number, currentPage: number) => void
  followSuccess: (userId: number) => void
  unFollowSuccess: (userId: number) => void
}

type ProprsType = MapStateToPropsType & MapDispatchToPropsType

class usersContainer extends React.Component<ProprsType> {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.pageSize,
      this.props.currentPage
    );
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsersThunkCreator(this.props.pageSize, pageNumber);
  };

  render() {
    return <Users {...this.props} onPageChanged={this.onPageChanged} />;
  }
}

function mapStateToProps(state: GlobalStateType): MapStateToPropsType {
  return {
    usersPageItems: state.usersPage.items,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isLoaded: state.usersPage.isLoaded,
    followingInProgress: state.usersPage.followingInProgress,
    auth: state.auth.isAuth
  };
}
export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, GlobalStateType>(mapStateToProps, {
    getUsersThunkCreator,
    followSuccess,
    unFollowSuccess,
  }))(usersContainer);
