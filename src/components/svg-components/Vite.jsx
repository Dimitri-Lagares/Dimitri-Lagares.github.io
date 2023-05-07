import * as React from "react"
export const Vite = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="url(#b)"
        d="m23.393 3.836-10.77 19.26a.585.585 0 0 1-1.02.004L.62 3.838a.585.585 0 0 1 .612-.867L12.013 4.9c.069.012.14.012.208 0l10.557-1.925a.585.585 0 0 1 .616.862Z"
      />
      <path
        fill="url(#c)"
        d="M17.15.443 9.178 2.005a.293.293 0 0 0-.236.27l-.49 8.28a.293.293 0 0 0 .357.303l2.22-.512a.293.293 0 0 1 .352.344l-.66 3.229a.293.293 0 0 0 .373.338l1.37-.416a.293.293 0 0 1 .372.339l-1.048 5.071c-.065.317.357.49.533.218l.117-.181 6.495-12.962a.293.293 0 0 0-.317-.418l-2.284.44a.293.293 0 0 1-.337-.368l1.49-5.168a.293.293 0 0 0-.337-.369Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={0.351}
        x2={13.756}
        y1={2.283}
        y2={20.488}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#41D1FF" />
        <stop offset={1} stopColor="#BD34FE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={11.394}
        x2={13.819}
        y1={0.867}
        y2={17.502}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEA83" />
        <stop offset={0.083} stopColor="#FFDD35" />
        <stop offset={1} stopColor="#FFA800" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 .351h24v23.65H0z" />
      </clipPath>
    </defs>
  </svg>
)