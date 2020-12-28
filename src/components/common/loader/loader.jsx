import React from "react";
import s from "./loader.module.css";

function Loader(props) {
  return (
    <div className={s.loader}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width="64px"
        height="64px"
        viewBox="0 0 128 128"
      >
        <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF00" />
        <g>
          <path
            d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z"
            fill="#000000"
            fill-opacity="1"
          />
          <path
            d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z"
            fill="#c0c0c0"
            fill-opacity="0.25"
            transform="rotate(45 64 64)"
          />
          <path
            d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z"
            fill="#c0c0c0"
            fill-opacity="0.25"
            transform="rotate(90 64 64)"
          />
          <path
            d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z"
            fill="#c0c0c0"
            fill-opacity="0.25"
            transform="rotate(135 64 64)"
          />
          <path
            d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z"
            fill="#c0c0c0"
            fill-opacity="0.25"
            transform="rotate(180 64 64)"
          />
          <path
            d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z"
            fill="#c0c0c0"
            fill-opacity="0.25"
            transform="rotate(225 64 64)"
          />
          <path
            d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z"
            fill="#c0c0c0"
            fill-opacity="0.25"
            transform="rotate(270 64 64)"
          />
          <path
            d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z"
            fill="#c0c0c0"
            fill-opacity="0.25"
            transform="rotate(315 64 64)"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 64 64;45 64 64;90 64 64;135 64 64;180 64 64;225 64 64;270 64 64;315 64 64"
            calcMode="discrete"
            dur="720ms"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
      </svg>
    </div>
  );
}

export default Loader;
