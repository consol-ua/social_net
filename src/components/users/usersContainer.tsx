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
import { WithAuthRedirect } from "../../Hoc/WithAuthRedirect";

type MapStateToPropsType = {
  usersPageItems: any
  totalUsersCount: number
  pageSize: number
  currentPage: number
  isLoaded: boolean
  followingInProgress: number[]
}
type MapDispatchToPropsType = {
  getUsersThunkCreator: (pageSize: number, currentPage: number) => void
  followSuccess: (userId: number) => void
  unFollowSuccess: (userId: number) => void
}


type ProprsType = MapStateToPropsType & MapDispatchToPropsType

class usersContainer extends React.Component<ProprsType> {
  componentDidMount() {
    // this.props.loaded(true);
    // this.props.setCurrentPage(1);
    // userAPI
    //   .getUsers(this.props.pageSize, this.props.currentPage)
    //   .then((response) => {
    //     this.props.setTotalUsersCount(response.totalCount);
    //     this.props.setUsers(response.items);
    //     this.props.loaded(false);
    //   });
    this.props.getUsersThunkCreator(
      this.props.pageSize,
      this.props.currentPage
    );
  }

  onPageChanged = (pageNumber: number) => {
    // debugger;
    this.props.getUsersThunkCreator(this.props.pageSize, pageNumber);
    // this.props.loaded(true);
    // userAPI.getUsers(this.props.pageSize, pageNumber).then((response) => {
    //   this.props.setUsers(response.items);
    //   this.props.setCurrentPage(pageNumber);
    //   this.props.loaded(false);
    // });
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
  };
}
// function mapDispatchToProps(dispatch) {
//   return {
//     followOnClick: (idUser) => dispatch(followedCreator(idUser)),
//     unFollowOnClick: (idUser) => dispatch(unFollowedCreator(idUser)),
//     setUsers: (arr) => dispatch(setUsersCreator(arr))
//   };
//
export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, GlobalStateType>(mapStateToProps, {
    getUsersThunkCreator,
    followSuccess,
    unFollowSuccess,
  }), WithAuthRedirect)(usersContainer);
