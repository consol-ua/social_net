import React from "react";
import s from "./news.module.css";

export default function News() {
  return (
    <div className={s.profile}>
      <div>News!</div>
      <div>
        <div>
          <img
            className={s.logo}
            src="https://iat.kpi.ua/wp-content/uploads/2019/10/news-3.jpg"
            alt="alt"
          />
        </div>
        <div>name and last name</div>
      </div>
    </div>
  );
}
