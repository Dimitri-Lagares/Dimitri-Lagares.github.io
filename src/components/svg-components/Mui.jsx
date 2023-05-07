import * as React from "react"
export const Mui = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#00B0FF"
        d="M0 10.928V.536l9 5.196v3.464L3 5.732v6.928l-3-1.732Z"
      />
      <path
        fill="#0081CB"
        d="m9 5.732 9-5.196v10.392l-6 3.464-3-1.732 6-3.464V5.732L9 9.196V5.732Z"
      />
      <path fill="#00B0FF" d="M9 12.66v3.464l6 3.464v-3.464L9 12.66Z" />
      <path
        fill="#0081CB"
        d="m15 19.588 9-5.196V7.464l-3 1.732v3.464l-6 3.464v3.464Zm6-13.856V2.268l3-1.732V4l-3 1.732Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .536h24V19.6H0z" />
      </clipPath>
    </defs>
  </svg>
)