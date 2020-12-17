import { connect } from "react-redux";
import {
  followedCreator,
  setUsersCreator,
  unFollowedCreator
} from "../../redux/users-reduser";
import Users from "./users";
import UsersClass from "./usersClass";

function mapStateToProps(state) {
  return {
    usersPage: state.usersPage
  };
}
function mapDispatchToProps(dispatch) {
  return {
    followOnClick: (idUser) => dispatch(followedCreator(idUser)),
    unFollowOnClick: (idUser) => dispatch(unFollowedCreator(idUser)),
    setUsers: (arr) => dispatch(setUsersCreator(arr))
  };
}

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);
export default usersContainer;
