import { connect } from "react-redux";
import {
  followOnClick,
  setUsers,
  unFollowOnClick,
  setTotalUsersCount,
  setCurrentPage,
  loaded,
} from "../../redux/users-reduser";
import React from "react";
import Users from "./users";
import { userAPI } from "../../API/API";

class usersContainer extends React.Component {
  componentDidMount() {
    this.props.loaded(true);
    this.props.setCurrentPage(1);
    userAPI
      .getUsers(this.props.pageSize, this.props.currentPage)
      .then((response) => {
        this.props.setTotalUsersCount(response.totalCount);
        this.props.setUsers(response.items);
        this.props.loaded(false);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.loaded(true);
    userAPI.getUsers(this.props.pageSize, pageNumber).then((response) => {
      this.props.setUsers(response.items);
      this.props.setCurrentPage(pageNumber);
      this.props.loaded(false);
    });
  };

  render() {
    return <Users {...this.props} onPageChanged={this.onPageChanged} />;
  }
}

function mapStateToProps(state) {
  return {
    usersPage: state.usersPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isLoaded: state.usersPage.isLoaded,
  };
}
// function mapDispatchToProps(dispatch) {
//   return {
//     followOnClick: (idUser) => dispatch(followedCreator(idUser)),
//     unFollowOnClick: (idUser) => dispatch(unFollowedCreator(idUser)),
//     setUsers: (arr) => dispatch(setUsersCreator(arr))
//   };
// }

export default connect(mapStateToProps, {
  followOnClick,
  setUsers,
  unFollowOnClick,
  setTotalUsersCount,
  setCurrentPage,
  loaded,
})(usersContainer);
