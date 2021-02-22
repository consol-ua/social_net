import React from "react";
import Preloader from "../common/Preloader/Preloader";
import s from "./users.module.css";
import User from "./user/User";
import { UsersType } from "../../API/ApiType";
import Pagination from "./Pagination/Pagination";

type PropsType = {
  usersPageItems: Array<UsersType>
  totalUsersCount: number
  pageSize: number
  currentPage: number
  isLoaded: boolean
  followingInProgress: number[]
  followSuccess: (userId: number) => void
  unFollowSuccess: (userId: number) => void
  onPageChanged: (pageNumber: number) => void
  auth: boolean
}

let Users: React.FC<PropsType> = (props) => {

  return (
    <div className={s.container}>
      {props.isLoaded ? <Preloader /> : null}
      <Pagination totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
        currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
      <div className={s.users}>{
        props.usersPageItems.map((el) => (
          <User user={el} followingInProgress={props.followingInProgress}
            followSuccess={props.followSuccess} unFollowSuccess={props.unFollowSuccess}
            auth={props.auth} key={el.id}
          />
        ))
      }</div>
    </div>
  );
}


export default Users