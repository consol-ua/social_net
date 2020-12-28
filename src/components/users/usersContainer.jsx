import { connect } from "react-redux";
import {
  followOnClick,
  setUsers,
  unFollowOnClick,
  setTotalUsersCount,
  setCurrentPage,
  loaded,
} from "../../redux/users-reduser";
import * as axios from "axios";
import React from "react";
import Users from "./users";

class usersContainer extends React.Component {
  userArr = [
    {
      name: "Shubert",
      id: 6,
      photos: {
        small:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Desert_Electric.jpg/1200px-Desert_Electric.jpg",
        large: null,
      },
      status: null,
      followed: false,
    },
    {
      name: "Hacker",
      id: 7,
      photos: {
        small:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Desert_Electric.jpg/1200px-Desert_Electric.jpg",
        large: null,
      },
      status: null,
      followed: false,
    },
    {
      name: "Dima",
      id: 8,
      photos: {
        small: "https://ktonanovenkogo.ru/image/priroda-gora.jpg",
        large: null,
      },
      status: null,
      followed: false,
    },
    {
      name: "Anna",
      id: 9,
      photos: {
        small: "https://ktonanovenkogo.ru/image/priroda-gora.jpg",
        large: null,
      },
      status: null,
      followed: false,
    },
    {
      name: "Katia",
      id: 10,
      photos: {
        small: null,
        large: null,
      },
      status: null,
      followed: false,
    },
  ];
  setUsers = () => {
    // axios
    //   .get(
    //     "https://social-network.samuraijs.com/api/1.0/users?count=5&page=1",
    //     {
    //       withCredentials: true,
    //       headers: {
    //         "API-KEY": "e727ac2e-86d0-4184-87d3-84b605c89df9",
    //       },
    //     }
    //   )
    //   .then((response) => this.props.setUsers(response.data.items));
    this.props.setUsers(this.userArr);
  };
  onPageChanged = (pageNumber) => {
    this.props.loaded(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`,
        {
          withCredentials: true,
          headers: {
            "API-KEY": "e727ac2e-86d0-4184-87d3-84b605c89df9",
          },
        }
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setCurrentPage(pageNumber);
        this.props.loaded(false);
      });
  };

  componentDidMount() {
    this.props.loaded(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,
        {
          withCredentials: true,
          headers: {
            "API-KEY": "e727ac2e-86d0-4184-87d3-84b605c89df9",
          },
        }
      )
      .then((response) => {
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.setUsers(response.data.items);
        this.props.loaded(false);
      });
  }

  render() {
    return (
      <Users
        usersPage={this.props.usersPage}
        unFollowOnClick={this.props.unFollowOnClick}
        followOnClick={this.props.followOnClick}
        setUsers={this.setUsers}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        isLoaded={this.props.isLoaded}
      />
    );
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
