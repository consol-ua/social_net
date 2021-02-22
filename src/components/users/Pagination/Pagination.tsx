import React from "react";
import s from "../users.module.css";

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
};

let Pagination: React.FC<PropsType> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let firstPage = currentPage === pages[0];
  let lastPages = currentPage === pages[pages.length - 1];
  return (
    <div className={s.pages_count}>
      <span
        className={[s.previous, firstPage && s.unActive].join(" ")}
        onClick={(e) => {
          if (currentPage > 1) {
            onPageChanged(1);
          }
        }}
      >
        -- FIRST PAGE --
      </span>
      <span
        className={[s.previous, firstPage && s.unActive].join(" ")}
        onClick={(e) => {
          if (currentPage > 1) {
            onPageChanged(currentPage - 1);
          }
        }}
      >
        Previous page
      </span>
      <span>{currentPage + ` (${pages.length})`}</span>
      <span
        className={[s.next, lastPages && s.unActive].join(" ")}
        onClick={(e) => {
          if (currentPage < pages.length) {
            onPageChanged(currentPage + 1);
          }
        }}
      >
        Next Page
      </span>
      <span
        className={[s.next, lastPages && s.unActive].join(" ")}
        onClick={(e) => {
          if (currentPage < pages.length) {
            onPageChanged(pagesCount);
          }
        }}
      >
        -- LAST PAGE --
      </span>
    </div>
  );
};

export default Pagination;
